import { useState } from "react";
import { OrderSidebar } from "../OrderSidebar/OrderSidebar";
import { useCheckout } from "../CheckoutContext";
import type { Merchant } from "../../../services/api";

const panelBg =
  "radial-gradient(ellipse at 50% -40%, rgba(112,0,255,0.2) 0%, rgba(30,9,51,0.2) 100%)";

interface CardDef {
  id: string;
  label: string;
  provider: "paymid" | "payok" | "korapay";
  disabled?: boolean;
}

const CARD_DEFS: CardDef[] = [
  { id: "visa", label: "Visa/ Master Card/ Amex", provider: "paymid" },
  { id: "apple-google", label: "Apple Pay, Google Pay ($)", provider: "paymid" },
  { id: "confirmo", label: "Confirmo", provider: "paymid" },
  { id: "transactpay", label: "TransactPay (NGN)", provider: "paymid" },
  { id: "korapay", label: "KoraPay (NGN)", provider: "korapay", disabled: true },
  { id: "upi", label: "UPI (INR)", provider: "payok" },
];

// Proper Apple Pay logo (white Apple symbol + Pay text)
const ApplePayLogo = () => (
  <div className="flex items-center gap-[5px]">
    <svg width="22" height="26" viewBox="0 0 170 170" fill="#fff">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-.9 2.61-1.85 5.11-2.86 7.51zM119.11 7.24c0 8.102-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375a25.222 25.222 0 0 1-.188-3.07c0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.311 11.45-8.597 4.62-2.252 8.99-3.497 13.1-3.71.12 1.017.17 2.035.17 3.241z"/>
    </svg>
    <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif", fontSize: "17px", fontWeight: 600, color: "#fff", letterSpacing: "-0.3px" }}>Pay</span>
  </div>
);

// Proper Google Pay logo
const GooglePayLogo = () => (
  <div className="flex items-center gap-[3px]">
    <svg width="24" height="24" viewBox="0 0 48 48">
      <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
    <span style={{ fontFamily: "'Product Sans', 'Roboto', sans-serif", fontSize: "17px", fontWeight: 500, color: "#fff" }}>Pay</span>
  </div>
);

// Figma-hosted logos for testing (expire after 7 days — replace with final assets)
const CONFIRMO_LOGO = "https://www.figma.com/api/mcp/asset/25e86310-c076-4315-acb7-87102e0f3bd8";
const TRANSACTPAY_LOGO = "/transactpay.svg";
const KORAPAY_LOGO = "/korapay.svg";
const UPI_LOGO = "https://www.figma.com/api/mcp/asset/e3b3469a-5e8f-4d99-94b0-9cfd5414d067";

function CardLogos({ cardId }: { cardId: string }) {
  const imgBase: React.CSSProperties = { objectFit: "contain", maxWidth: "100%" };

  if (cardId === "visa") {
    return (
      <div className="flex items-center gap-[6px] sm:gap-[10px]" style={{ maxWidth: "100%" }}>
        <img src="/images/payment/visa.png" alt="Visa" className="h-[18px] sm:h-[22px]" style={imgBase} />
        <img src="/images/payment/mastercard.png" alt="Mastercard" className="h-[22px] sm:h-[28px]" style={imgBase} />
        <img src="/images/payment/amex.png" alt="Amex" className="h-[20px] sm:h-[62px]" style={imgBase} />
      </div>
    );
  }
  if (cardId === "apple-google") {
    return (
      <div className="flex items-center gap-[10px] sm:gap-[16px]">
        <ApplePayLogo />
        <GooglePayLogo />
      </div>
    );
  }
  if (cardId === "confirmo") {
    return <img src={CONFIRMO_LOGO} alt="Confirmo" className="h-[20px] sm:h-[26px]" style={{ ...imgBase, maxWidth: "90%" }} />;
  }
  if (cardId === "transactpay") {
    return <img src={TRANSACTPAY_LOGO} alt="TransactPay" className="h-[26px] sm:h-[34px]" style={{ ...imgBase, maxWidth: "90%" }} />;
  }
  if (cardId === "korapay") {
    return <img src={KORAPAY_LOGO} alt="KoraPay" className="h-[24px] sm:h-[32px]" style={{ ...imgBase, maxWidth: "90%" }} />;
  }
  if (cardId === "upi") {
    return <img src={UPI_LOGO} alt="UPI" className="h-[16px] sm:h-[20px]" style={{ ...imgBase, maxWidth: "70px" }} />;
  }
  return null;
}

interface PaymentMethodProps {
  onContinue: () => void;
}

export const PaymentMethod = ({ onContinue: _onContinue }: PaymentMethodProps) => {
  const {
    merchants,
    selectMerchant,
    submitPayment,
    paymentLoading,
    paymentError,
    setPaymentError,
  } = useCheckout();

  const [selectedCardId, setSelectedCardId] = useState<string>("");
  const [localError, setLocalError] = useState("");

  const findMerchant = (card: CardDef): Merchant | null => {
    if (card.disabled) return null;
    // Match merchant by provider slug
    return (
      merchants.find((m) => m.slug.toLowerCase().includes(card.provider)) ??
      merchants[0] ??
      null
    );
  };

  const handleCardSelect = (card: CardDef) => {
    if (card.disabled) return;
    const merchant = findMerchant(card);
    if (!merchant) return;
    setSelectedCardId(card.id);
    selectMerchant(merchant);
    setLocalError("");
    setPaymentError(null);
  };

  const handlePay = async () => {
    setLocalError("");
    setPaymentError(null);
    if (!selectedCardId) {
      setLocalError("Please select a payment method to continue.");
      return;
    }
    await submitPayment();
  };

  const row1 = CARD_DEFS.slice(0, 2);
  const row2 = CARD_DEFS.slice(2, 5);
  const row3 = CARD_DEFS.slice(5);

  const cardStyle = (isSelected: boolean, disabled?: boolean): React.CSSProperties => ({
    borderRadius: "16px",
    border: isSelected ? "1px solid #8546dd" : "1px solid #4e159d",
    background: isSelected ? "#2c1451" : "#1b092e",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "12px 10px",
    transition: "border-color 0.15s, background 0.15s",
  });

  const cardLabelStyle: React.CSSProperties = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    color: "#fff",
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: 1.3,
  };

  return (
    <div className="w-full relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div
        className="max-w-[1440px] mx-auto px-[16px] lg:px-[100px] flex flex-col lg:flex-row gap-[24px] lg:gap-[50px]"
        style={{ paddingTop: "40px", paddingBottom: "40px" }}
      >
        {/* LEFT: Payment method cards */}
        <div
          className="flex-1 rounded-[16px] lg:rounded-[20px]"
          style={{ border: "1px solid #4e159d", background: panelBg }}
        >
          <div className="w-full h-full p-[16px] sm:p-[24px] lg:p-[45px]">
            <h2
              className="text-[22px] sm:text-[26px] lg:text-[30px]"
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#fff",
              }}
            >
              Choose Payment Method
            </h2>

            <div
              style={{
                height: "1px",
                background: "linear-gradient(90deg, #4e159d 0%, transparent 100%)",
                margin: "20px 0 24px",
              }}
            />

            {/* ── Mobile: 2-column grid  |  Desktop: row-based flex ── */}

            {/* Desktop rows (hidden on mobile) */}
            <div className="hidden sm:block">
              {/* Row 1: Visa/MC/Amex + Apple/Google Pay */}
              <div className="flex gap-[16px] mb-[16px]">
                {row1.map((card, i) => (
                  <div
                    key={card.id}
                    onClick={() => handleCardSelect(card)}
                    style={{ ...cardStyle(selectedCardId === card.id, card.disabled), flex: i === 0 ? "1.4 1 0" : "1 1 0", minWidth: 0, height: "128px" }}
                  >
                    <CardLogos cardId={card.id} />
                    <span style={{ ...cardLabelStyle, fontSize: "13px" }}>{card.label}</span>
                  </div>
                ))}
              </div>

              {/* Row 2: Confirmo + TransactPay + KoraPay */}
              <div className="flex gap-[16px] mb-[16px]">
                {row2.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => handleCardSelect(card)}
                    style={{ ...cardStyle(selectedCardId === card.id, card.disabled), flex: "1 1 0", minWidth: 0, height: "128px", position: "relative" }}
                  >
                    <CardLogos cardId={card.id} />
                    <span style={{ ...cardLabelStyle, fontSize: "13px" }}>{card.label}</span>
                    {card.disabled && (
                      <span style={{ position: "absolute", bottom: "6px", fontSize: "10px", color: "#b982fb", fontStyle: "italic" }}>Coming soon</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Row 3: UPI */}
              <div className="flex gap-[16px]">
                <div
                  onClick={() => handleCardSelect(row3[0])}
                  style={{ ...cardStyle(selectedCardId === row3[0].id, row3[0].disabled), width: "200px", height: "128px" }}
                >
                  <CardLogos cardId={row3[0].id} />
                  <span style={{ ...cardLabelStyle, fontSize: "13px" }}>{row3[0].label}</span>
                </div>
              </div>
            </div>

            {/* Mobile grid (hidden on sm+) */}
            <div
              className="grid sm:hidden"
              style={{
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              {CARD_DEFS.map((card) => (
                <div
                  key={card.id}
                  onClick={() => handleCardSelect(card)}
                  style={{ ...cardStyle(selectedCardId === card.id, card.disabled), height: "110px", overflow: "hidden", position: "relative" }}
                >
                  <CardLogos cardId={card.id} />
                  <span style={{ ...cardLabelStyle, fontSize: "11px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%", padding: "0 2px" }}>{card.label}</span>
                  {card.disabled && (
                    <span style={{ position: "absolute", bottom: "4px", fontSize: "9px", color: "#b982fb", fontStyle: "italic" }}>Coming soon</span>
                  )}
                </div>
              ))}
            </div>

            {/* Error */}
            {(localError || paymentError) && (
              <div
                className="w-full rounded-[10px] p-[12px] sm:p-[16px]"
                style={{
                  marginTop: "20px",
                  background: "rgba(255, 107, 107, 0.1)",
                  border: "1px solid rgba(255, 107, 107, 0.3)",
                }}
              >
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#ff6b6b" }}>
                  {localError || paymentError}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT: Sidebar */}
        <OrderSidebar
          onCtaClick={handlePay}
          ctaText={
            <span className="text-[18px] lg:text-[22px]">
              {paymentLoading ? "Processing..." : "Continue"}
            </span>
          }
          showPromoCode={true}
        />
      </div>
    </div>
  );
};
