// In development, Vite proxy handles /api-2 → https://my.thaurusguru.com/api-2
// In production, use the full URL
const BASE_URL = import.meta.env.DEV
  ? "/api-2"
  : "https://my.thaurusguru.com/api-2";

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  let data: Record<string, unknown>;
  try {
    data = await res.json();
  } catch {
    if (!res.ok) {
      throw {
        status: res.status,
        success: false,
        errorMessage: `Server error (${res.status})`,
        errorCode: "server_error",
        additionalData: null,
      } as ApiError;
    }
    throw new Error("Invalid response from server");
  }

  if (!res.ok || data.success === false) {
    const error: ApiError = {
      status: res.status,
      success: false,
      errorMessage: (data.errorMessage || data.message || "Something went wrong") as string,
      errorCode: (data.errorCode || "unknown") as string,
      additionalData: (data.additionalData || null) as ApiError["additionalData"],
    };
    throw error;
  }

  return data as T;
}

// ─── Error type ──────────────────────────────────────────────────────

export interface ApiError {
  status: number;
  success: false;
  errorMessage: string;
  errorCode: string;
  additionalData?: {
    wrongFields?: Array<{
      name: string;
      errorCode: string;
      errorMessage: string;
    }>;
  } | null;
}

export function isApiError(err: unknown): err is ApiError {
  return (
    typeof err === "object" &&
    err !== null &&
    "status" in err &&
    "errorMessage" in err
  );
}

// ─── Types ───────────────────────────────────────────────────────────

export interface AccountType {
  name: string;
  currency: string;
  leverages: number[];
  type: string;
  regionId: string;
  platformInfo: {
    type: string;
    name: string;
  };
}

export interface ChallengeStep {
  id: string;
  challengeTypeId?: string;
  title: string;
  description1?: string;
  description2?: string;
  initialBalance: number;
  price: number;
  permittedDailyLoss: number;
  permittedTotalLoss: number;
  profitTarget: number;
  profitTargetCheck: boolean;
  isPublic?: boolean;
  canWithdrawal: boolean;
  percentForWithdrawal?: number;
  accountType?: AccountType;
}

export interface Upsale {
  title: string;
  price: number;
}

export interface ChallengeChain {
  chain: ChallengeStep[];
  upsales: Upsale[];
}

export interface ChallengesResponse {
  success: boolean;
  data: ChallengeChain[];
}

export interface PromoCodeResponse {
  success: boolean;
  data: {
    price: number;
  };
}

export interface Merchant {
  id: number;
  code: string;
  merchantId: number;
  name: string;
  slug: string;
  integrationId: number;
  imagePath: string | null;
  isPublic: boolean;
  currency: string[];
}

export interface MerchantsResponse {
  success: boolean;
  data: {
    cabinetId: string;
    merchants: Merchant[];
  };
}

export interface TraderData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  language: string;
  password: string;
  confirmPassword?: string;
  country: string;
  state: string;
  city: string;
  address: string;
  agree: boolean;
  birthDate: string;
  affiliate?: string | null;
  promoCode?: string | null;
}

export interface ChallengePromoRequest {
  traderData: TraderData;
  merchant: string;
  merchantId: number;
  integrationId: number;
  challengeTypeId: string;
  currency: string;
  originalCurrency: string;
  amount: number;
  leverage: number;
  regionId: string;
  promoCode?: string | null;
}

export interface ChallengePromoResponse {
  success: boolean;
  data: {
    redirectUrl?: string | null;
    transactionId?: string;
    // Some merchants return nested response format
    result?: boolean;
    response?: {
      successUrl: string;
      errorUrl: string;
      currency: string;
      amount: number;
      description: string;
      firstName: string;
      lastName: string;
      email: string;
      cabinetId: string;
      orderId: string;
      outputData: {
        _cl_: string;
        redirectUrl: string;
      };
    };
  };
}

// ─── API functions ───────────────────────────────────────────────────

export const api = {
  /** Step 1: Get all challenge types with chains and upsales */
  getChallenges: () =>
    request<ChallengesResponse>("/v3/challenge-types/chains"),

  /** Step 1: Validate promo code for a challenge type */
  validatePromoCode: (challengeTypeId: string, promoCode: string) =>
    request<PromoCodeResponse>("/challenge-type/promo-code", {
      method: "POST",
      body: JSON.stringify({
        challengeTypeId,
        promoCode,
        conditions: [],
        fingerprint: JSON.stringify({
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          timezoneOffset: new Date().getTimezoneOffset(),
          userAgent: navigator.userAgent,
          language: navigator.language,
        }),
      }),
    }),

  /** Step 2: Check if email is available */
  validateEmail: (email: string) =>
    request<{ success: boolean }>("/validate-email", {
      method: "POST",
      body: JSON.stringify({ email }),
    }),

  /** Step 3: Get available payment merchants */
  getMerchants: () =>
    request<MerchantsResponse>("/ninja-merchants"),

  /** Step 3: Open challenge (submit payment) */
  openChallenge: (data: ChallengePromoRequest) =>
    request<ChallengePromoResponse>("/v3/challenge-promo", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  /** Start free challenge (100% promo discount) */
  startFreeChallenge: (data: {
    challengeTypeId: string;
    leverage: number;
    amount: number;
    traderData: TraderData & { promoCode: string };
  }) =>
    request<{ success: boolean }>("/v3/challenge-promo/start", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  /** Get translations */
  getTranslations: (langCode: string) =>
    request<{ success: boolean; data: Record<string, string> }>(
      `/translations/${langCode}`
    ),

  /** Get public download entities (T&Cs, policies) */
  getDownloadEntities: () =>
    request<{ success: boolean; data: Array<{ id: string; name: string; link: string }> }>(
      "/v3/download-entities-public"
    ),
};
