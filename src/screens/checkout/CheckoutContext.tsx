import { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  api,
  isApiError,
  type ChallengeChain,
  type ChallengeStep,
  type Upsale,
  type Merchant,
} from "../../services/api";

// ─── Types ───────────────────────────────────────────────────────────

export interface Plan {
  id: string;
  label: string;
  subtitle: string;
  popular?: boolean;
  chainIndices: number[];
}

export interface Size {
  id: string;
  label: string;
  initialBalance: number;
  price: number;
  leverage: number;
  chainIndex: number;
}

export interface BillingData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  language: string;
  password: string;
  confirmPassword: string;
}

export interface FieldErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  country?: string;
  language?: string;
  password?: string;
  confirmPassword?: string;
  terms?: string;
}

interface CheckoutState {
  loading: boolean;
  error: string | null;
  chains: ChallengeChain[];
  merchants: Merchant[];
  plans: Plan[];
  selectedPlanId: string;
  sizes: Size[];
  selectedSizeId: string;
  addons: Upsale[];
  selectedAddonTitles: string[];
  promoCode: string;
  promoDiscount: number | null;
  promoLoading: boolean;
  promoError: string | null;
  selectedChallenge: ChallengeStep | null;
  basePrice: number;
  addonsTotal: number;
  subtotal: number;
  discountAmount: number;
  total: number;
  billingData: BillingData;
  fieldErrors: FieldErrors;
  agreedTerms: boolean;
  selectedMerchant: Merchant | null;
  paymentLoading: boolean;
  paymentError: string | null;
}

interface CheckoutActions {
  selectPlan: (planId: string) => void;
  selectSize: (sizeId: string) => void;
  toggleAddon: (title: string) => void;
  setPromoCode: (code: string) => void;
  applyPromoCode: () => Promise<void>;
  setBillingData: (data: Partial<BillingData>) => void;
  setAgreedTerms: (agreed: boolean) => void;
  validateBillingStep: () => Promise<boolean>;
  selectMerchant: (merchant: Merchant) => void;
  submitPayment: () => Promise<string | null>;
  clearFieldError: (field: keyof FieldErrors) => void;
  setPaymentError: (error: string | null) => void;
}

type CheckoutContextType = CheckoutState & CheckoutActions;

const CheckoutContext = createContext<CheckoutContextType | null>(null);

// ─── Validation helpers ──────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9]{7,15}$/;
const NAME_REGEX = /^[\p{L}\s'-]{2,128}$/u;
// At least 8 chars, 1 uppercase, 1 lowercase, 1 digit, 1 special char
const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+{}":\?><\[\];'\/\.\\\-]).{8,}$/;

function validateBillingFields(data: BillingData, agreedTerms: boolean): FieldErrors {
  const errors: FieldErrors = {};

  // Email
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  // First name
  if (!data.firstName.trim()) {
    errors.firstName = "First name is required";
  } else if (!NAME_REGEX.test(data.firstName.trim())) {
    errors.firstName = "Please enter a valid first name (letters only, 2-128 characters)";
  }

  // Last name
  if (!data.lastName.trim()) {
    errors.lastName = "Last name is required";
  } else if (!NAME_REGEX.test(data.lastName.trim())) {
    errors.lastName = "Please enter a valid last name (letters only, 2-128 characters)";
  }

  // Phone
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!PHONE_REGEX.test(data.phone.replace(/[\s\-()]/g, ""))) {
    errors.phone = "Please enter a valid phone number (e.g. +1234567890)";
  }

  // Country
  if (!data.country.trim()) {
    errors.country = "Country is required";
  }

  // Language
  if (!data.language) {
    errors.language = "Please select a language";
  }

  // Password
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!PASSWORD_REGEX.test(data.password)) {
    errors.password = "Password must include uppercase, lowercase, number, and special character";
  }

  // Confirm password
  if (!data.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  // Terms
  if (!agreedTerms) {
    errors.terms = "You must agree to the Terms & Conditions";
  }

  return errors;
}

// ─── Helpers ─────────────────────────────────────────────────────────

type PlanType = "2step" | "3step" | "payg";

function classifyChain(chain: ChallengeChain): PlanType {
  const title = (chain.chain.find((s) => s.isPublic)?.title ?? "").trim();
  if (title.includes("2 Step")) return "2step";
  if (title.includes("3 Step")) return "3step";
  return "payg";
}

function derivePlans(chains: ChallengeChain[]): Plan[] {
  const groups: Record<PlanType, number[]> = { "2step": [], "3step": [], payg: [] };
  chains.forEach((chain, index) => {
    groups[classifyChain(chain)].push(index);
  });

  const plans: Plan[] = [];
  if (groups["2step"].length > 0) {
    plans.push({ id: "plan-2step", label: "Classic", subtitle: "2-step", chainIndices: groups["2step"] });
  }
  if (groups["3step"].length > 0) {
    plans.push({ id: "plan-3step", label: "Classic", subtitle: "3-step", chainIndices: groups["3step"] });
  }
  if (groups["payg"].length > 0) {
    plans.push({ id: "plan-payg", label: "Pay As You Go", subtitle: "", popular: true, chainIndices: groups["payg"] });
  }
  return plans;
}

function deriveSizes(chains: ChallengeChain[], chainIndices: number[]): Size[] {
  return chainIndices
    .map((ci) => {
      const step = chains[ci].chain.find((s) => s.isPublic);
      if (!step) return null;
      return {
        id: step.id,
        label: step.initialBalance >= 1000
          ? `$${step.initialBalance / 1000}K`
          : `$${step.initialBalance}`,
        initialBalance: step.initialBalance,
        price: step.price,
        leverage: step.accountType?.leverages?.[0] ?? 100,
        chainIndex: ci,
      };
    })
    .filter((s): s is Size => s !== null)
    .sort((a, b) => a.initialBalance - b.initialBalance);
}

function deriveAddons(chains: ChallengeChain[], chainIndex: number): Upsale[] {
  return (chains[chainIndex]?.upsales ?? []).map((u) => ({
    ...u,
    title: u.title.trim(),
  }));
}

// ─── Provider ────────────────────────────────────────────────────────

export const CheckoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [chains, setChains] = useState<ChallengeChain[]>([]);
  const [merchants, setMerchants] = useState<Merchant[]>([]);

  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState("");
  const [sizes, setSizes] = useState<Size[]>([]);
  const [selectedSizeId, setSelectedSizeId] = useState("");
  const [addons, setAddons] = useState<Upsale[]>([]);
  const [selectedAddonTitles, setSelectedAddonTitles] = useState<string[]>([]);

  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState<number | null>(null);
  const [promoLoading, setPromoLoading] = useState(false);
  const [promoError, setPromoError] = useState<string | null>(null);

  const [billingData, setBillingDataState] = useState<BillingData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    language: "EN",
    password: "",
    confirmPassword: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [agreedTerms, setAgreedTerms] = useState(false);

  const [selectedMerchant, setSelectedMerchant] = useState<Merchant | null>(null);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  // ─── Fetch initial data ─────────────────────────────────────────
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [challengesRes, merchantsRes] = await Promise.all([
          api.getChallenges(),
          api.getMerchants(),
        ]);

        const chainsData = challengesRes.data;
        setChains(chainsData);
        setMerchants(merchantsRes.data.merchants.filter((m) => m.isPublic));

        const derivedPlans = derivePlans(chainsData);
        setPlans(derivedPlans);

        if (derivedPlans.length > 0) {
          const firstPlan = derivedPlans[0];
          setSelectedPlanId(firstPlan.id);

          const derivedSizes = deriveSizes(chainsData, firstPlan.chainIndices);
          setSizes(derivedSizes);

          if (derivedSizes.length > 0) {
            setSelectedSizeId(derivedSizes[0].id);
            setAddons(deriveAddons(chainsData, derivedSizes[0].chainIndex));
          }
        }
      } catch (err) {
        const msg = isApiError(err)
          ? err.errorMessage
          : err instanceof Error
            ? err.message
            : "Failed to load challenges. Please refresh the page.";
        setError(msg);
        console.error("Failed to fetch checkout data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // ─── Actions ─────────────────────────────────────────────────────

  const selectPlan = useCallback(
    (planId: string) => {
      setSelectedPlanId(planId);
      setPromoDiscount(null);
      setPromoError(null);

      const plan = plans.find((p) => p.id === planId);
      if (plan) {
        const newSizes = deriveSizes(chains, plan.chainIndices);
        setSizes(newSizes);
        setSelectedAddonTitles([]);

        if (newSizes.length > 0) {
          setSelectedSizeId(newSizes[0].id);
          setAddons(deriveAddons(chains, newSizes[0].chainIndex));
        } else {
          setAddons([]);
        }
      }
    },
    [plans, chains]
  );

  const selectSize = useCallback((sizeId: string) => {
    setSelectedSizeId(sizeId);
    setPromoDiscount(null);
    setPromoError(null);
    setSelectedAddonTitles([]);

    const sizeObj = sizes.find((s) => s.id === sizeId);
    if (sizeObj) {
      setAddons(deriveAddons(chains, sizeObj.chainIndex));
    }
  }, [sizes, chains]);

  const toggleAddon = useCallback((title: string) => {
    setSelectedAddonTitles((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  }, []);

  const applyPromoCode = useCallback(async () => {
    if (!promoCode.trim()) {
      setPromoError("Please enter a promo code");
      return;
    }
    if (!selectedSizeId) return;

    // Production API uses step.id as challengeTypeId for promo validation
    const challengeTypeId = selectedSizeId;

    setPromoLoading(true);
    setPromoError(null);
    try {
      const res = await api.validatePromoCode(challengeTypeId, promoCode);
      setPromoDiscount(res.data.price);
    } catch (err: unknown) {
      if (isApiError(err)) {
        // API returns raw translation keys — map them to human-readable messages
        const code = err.errorCode ?? "";
        if (code.includes("notFound") || err.status === 404) {
          setPromoError("The promo code you entered is invalid or has expired.");
        } else if (err.status === 400) {
          setPromoError("This promo code cannot be applied to the selected challenge.");
        } else {
          setPromoError("Unable to apply promo code. Please try again.");
        }
      } else {
        setPromoError("Unable to apply promo code. Please try again.");
      }
      setPromoDiscount(null);
    } finally {
      setPromoLoading(false);
    }
  }, [promoCode, selectedSizeId]);

  const setBillingData = useCallback((data: Partial<BillingData>) => {
    setBillingDataState((prev) => ({ ...prev, ...data }));
  }, []);

  const clearFieldError = useCallback((field: keyof FieldErrors) => {
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const setPaymentErrorFn = useCallback((error: string | null) => {
    setPaymentError(error);
  }, []);

  const validateBillingStep = useCallback(async (): Promise<boolean> => {
    // Client-side validation first
    const errors = validateBillingFields(billingData, agreedTerms);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return false;
    }

    // Server-side email validation
    try {
      await api.validateEmail(billingData.email);
      return true;
    } catch (err) {
      if (isApiError(err)) {
        // API returned 400 = email already registered
        setFieldErrors((prev) => ({
          ...prev,
          email: "This email is already registered. Please use a different email or log in.",
        }));
        return false;
      }
      // Network/CORS error — don't block the user
      console.warn("Email validation network error:", err);
      return true;
    }
  }, [billingData, agreedTerms]);

  const selectMerchant = useCallback((merchant: Merchant) => {
    setSelectedMerchant(merchant);
    setPaymentError(null);
  }, []);

  // ─── Computed values ─────────────────────────────────────────────

  const selectedSize = sizes.find((s) => s.id === selectedSizeId);
  const basePrice = selectedSize?.price ?? 0;

  const addonsTotal = selectedAddonTitles.reduce((sum, title) => {
    const addon = addons.find((a) => a.title === title);
    return sum + (addon?.price ?? 0);
  }, 0);

  const subtotal = basePrice + addonsTotal;
  // promoDiscount is the discounted base price returned by the API (e.g. $36 for a $45 challenge)
  // Discount only applies to the base challenge price, not addons
  const discountAmount = promoDiscount !== null ? basePrice - promoDiscount : 0;
  const total = (promoDiscount !== null ? promoDiscount : basePrice) + addonsTotal;

  const submitPayment = useCallback(async (): Promise<string | null> => {
    setPaymentError(null);

    if (!selectedMerchant) {
      setPaymentError("Please select a payment provider");
      return null;
    }
    if (!selectedSizeId) {
      setPaymentError("No challenge selected");
      return null;
    }

    const sizeObj = sizes.find((s) => s.id === selectedSizeId);
    if (!sizeObj) return null;

    setPaymentLoading(true);
    try {
      // Clean phone: remove spaces, keep digits only
      const cleanPhone = billingData.phone.replace(/[^0-9]/g, "");
      // Get regionId from the selected chain's accountType
      const chainData = chains[sizeObj.chainIndex];
      const publicStep = chainData?.chain.find((s) => s.isPublic);
      const regionId = publicStep?.accountType?.regionId || "";
      // Default birthDate (API requires valid ISO date)
      const defaultBirthDate = "2000-01-01T00:00:00.000Z";
      const payload = {
        traderData: {
          firstName: billingData.firstName,
          lastName: billingData.lastName,
          email: billingData.email,
          phone: cleanPhone,
          language: billingData.language.toLowerCase(),
          password: billingData.password,
          confirmPassword: billingData.confirmPassword,
          affiliate: null,
          promoCode: promoCode || null,
          country: billingData.country,
          state: billingData.country || "",
          address: "-",
          city: "-",
          agree: true,
          birthDate: defaultBirthDate,
        },
        merchant: selectedMerchant.slug,
        merchantId: selectedMerchant.merchantId,
        integrationId: selectedMerchant.integrationId,
        challengeTypeId: selectedSizeId,
        currency: selectedMerchant.currency[0]?.toUpperCase() || "USD",
        originalCurrency: selectedMerchant.currency[0] || "usd",
        amount: total,
        leverage: sizeObj.leverage,
        regionId,
        promoCode: promoCode || null,
      };
      console.log("Payment payload:", JSON.stringify(payload, null, 2));
      const res = await api.openChallenge(payload);
      console.log("Payment response:", JSON.stringify(res, null, 2));

      // API may return redirectUrl at different levels depending on merchant
      const redirectUrl =
        res.data?.redirectUrl ||
        res.data?.response?.outputData?.redirectUrl ||
        null;
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
      return redirectUrl;
    } catch (err) {
      if (isApiError(err)) {
        // Handle field-level errors from the server
        if (err.additionalData?.wrongFields) {
          console.log("Wrong fields:", err.additionalData.wrongFields);
          const serverErrors: FieldErrors = {};
          const fieldMessages: string[] = [];
          err.additionalData.wrongFields.forEach((f) => {
            if (f.name in billingData) {
              serverErrors[f.name as keyof FieldErrors] = f.errorMessage;
            }
            fieldMessages.push(`${f.name}: ${f.errorMessage}`);
          });
          if (Object.keys(serverErrors).length > 0) {
            setFieldErrors((prev) => ({ ...prev, ...serverErrors }));
          }
          // Show specific field errors in the payment error
          setPaymentError(fieldMessages.length > 0
            ? `Please review the following fields: ${fieldMessages.map(f => f.split(":")[0]).join(", ")}.`
            : "Some of your details are invalid. Please go back and review your billing information.");
        } else if (err.errorCode === "internal_server_error") {
          setPaymentError("We encountered an issue processing your payment. Please try again or contact support.");
        } else {
          setPaymentError(err.errorMessage ?? "Payment could not be processed. Please try again.");
        }
      } else {
        setPaymentError("Payment could not be processed. Please try again or contact our support team.");
      }
      console.error("Payment failed:", err);
      return null;
    } finally {
      setPaymentLoading(false);
    }
  }, [selectedMerchant, selectedSizeId, sizes, chains, billingData, promoCode, total]);

  const selectedSizeObj = sizes.find((s) => s.id === selectedSizeId);
  const selectedChallenge =
    selectedSizeObj
      ? chains[selectedSizeObj.chainIndex]?.chain.find((s) => s.id === selectedSizeId) ?? null
      : null;

  const value: CheckoutContextType = {
    loading,
    error,
    chains,
    merchants,
    plans,
    selectedPlanId,
    sizes,
    selectedSizeId,
    addons,
    selectedAddonTitles,
    promoCode,
    promoDiscount,
    promoLoading,
    promoError,
    selectedChallenge,
    basePrice,
    addonsTotal,
    subtotal,
    discountAmount,
    total,
    billingData,
    fieldErrors,
    agreedTerms,
    selectedMerchant,
    paymentLoading,
    paymentError,
    selectPlan,
    selectSize,
    toggleAddon,
    setPromoCode,
    applyPromoCode,
    setBillingData,
    setAgreedTerms,
    validateBillingStep,
    selectMerchant,
    submitPayment,
    clearFieldError,
    setPaymentError: setPaymentErrorFn,
  };

  return (
    <CheckoutContext.Provider value={value}>{children}</CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const ctx = useContext(CheckoutContext);
  if (!ctx) throw new Error("useCheckout must be used within CheckoutProvider");
  return ctx;
};
