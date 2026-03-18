import { useState, useMemo } from "react";
import { OrderSidebar } from "../OrderSidebar/OrderSidebar";
import { useCheckout } from "../CheckoutContext";
import type { Merchant } from "../../../services/api";

const panelBg =
  "radial-gradient(ellipse at 50% -40%, rgba(112,0,255,0.2) 0%, rgba(30,9,51,0.2) 100%)";

const Checkbox = ({
  checked,
  onClick,
}: {
  checked: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={onClick}
    className="shrink-0 flex items-center justify-center cursor-pointer"
    style={{
      width: "30px",
      height: "30px",
      borderRadius: "5px",
      border: "1px solid #b982fb",
      background: checked ? "#a770e1" : "transparent",
    }}
  >
    {checked && (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path
          d="M5 12l5 5L20 7"
          stroke="#fff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )}
  </div>
);

interface PaymentTab {
  id: string;
  label: string;
  merchants: Merchant[];
}

function buildPaymentTabs(merchants: Merchant[]): PaymentTab[] {
  const tabs: PaymentTab[] = [];

  // Online Payments / Cryptocurrency — merchants with usd or eur
  const cardMerchants = merchants.filter((m) =>
    m.currency.some((c) => ["usd", "eur"].includes(c.toLowerCase()))
  );
  if (cardMerchants.length > 0) {
    tabs.push({
      id: "debit-credit",
      label: "Online Payments/ Cryptocurrency",
      merchants: cardMerchants,
    });
  }

  // UPI — merchants with inr
  const upiMerchants = merchants.filter((m) =>
    m.currency.some((c) => c.toLowerCase() === "inr")
  );
  if (upiMerchants.length > 0) {
    tabs.push({
      id: "upi",
      label: "UPI",
      merchants: upiMerchants,
    });
  }

  // KoraPay / TransactPay — by slug
  const koraMerchants = merchants.filter((m) =>
    ["korapay", "transactpay"].some((s) => m.slug.toLowerCase().includes(s))
  );
  if (koraMerchants.length > 0) {
    tabs.push({
      id: "korapay",
      label: "KoraPay, and TransactPay",
      merchants: koraMerchants,
    });
  }

  return tabs;
}

interface PaymentMethodProps {
  onContinue: () => void;
}

export const PaymentMethod = ({ onContinue: _onContinue }: PaymentMethodProps) => {
  const {
    merchants,
    selectedMerchant,
    selectMerchant,
    submitPayment,
    paymentLoading,
    paymentError,
    setPaymentError,
  } = useCheckout();

  const tabs = useMemo(() => buildPaymentTabs(merchants), [merchants]);

  const [selectedTabId, setSelectedTabId] = useState(() =>
    tabs.length > 0 ? tabs[0].id : ""
  );
  const [localError, setLocalError] = useState("");

  const handleTabChange = (tab: PaymentTab) => {
    setSelectedTabId(tab.id);
    setLocalError("");
    // Auto-select first merchant in this tab
    if (tab.merchants.length === 1) {
      selectMerchant(tab.merchants[0]);
    } else if (tab.merchants.length > 1) {
      // If multiple merchants, pick the first but let user change
      selectMerchant(tab.merchants[0]);
    }
  };

  const handlePay = async () => {
    setLocalError("");
    setPaymentError(null);

    if (!selectedMerchant) {
      setLocalError("Please select a payment provider");
      return;
    }

    await submitPayment();
  };

  return (
    <div
      className="w-full relative z-10"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div
        className="max-w-[1440px] mx-auto px-[16px] lg:px-[100px] flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] relative"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        {/* LEFT COLUMN */}
        <div
          className="flex-1 rounded-[20px] relative"
          style={{
            border: "1px solid #4e159d",
            background: panelBg,
          }}
        >
          <div className="w-full h-full p-[24px] lg:p-[45px]">
            {/* Title */}
            <h2
              className="text-[24px] lg:text-[30px]"
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontWeight: 700,
                lineHeight: "33px",
                color: "#fff",
              }}
            >
              Choose Payment Method
            </h2>

            {/* Divider */}
            <div
              className="w-full"
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, #4e159d 0%, transparent 100%)",
                marginTop: "25px",
                marginBottom: "35px",
              }}
            />

            {/* Payment tabs */}
            <div className="flex flex-col gap-[26px]">
              {tabs.map((tab) => {
                const isSelected = selectedTabId === tab.id;
                return (
                  <div key={tab.id} className="flex flex-col gap-[16px]">
                    <div
                      className="flex items-center gap-[13px] cursor-pointer"
                      onClick={() => handleTabChange(tab)}
                    >
                      <Checkbox
                        checked={isSelected}
                        onClick={() => handleTabChange(tab)}
                      />
                      <div className="flex items-center gap-[8px]">
                        <span
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#fff",
                            textTransform: "capitalize",
                          }}
                        >
                          {tab.label}
                        </span>
                        {tab.id === "upi" && (
                          <img
                            src="/images/payment/upi.png"
                            alt="UPI"
                            style={{ height: "18px", objectFit: "contain" }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Sub-content for selected tab */}
                    {isSelected && tab.id === "debit-credit" && (
                      <div
                        className="flex items-center px-[20px] w-full lg:w-[475px]"
                        style={{
                          height: "54px",
                          borderRadius: "10px",
                          border: "0.5px solid #b982fb",
                          background:
                            "linear-gradient(159deg, rgba(96,40,158,0.4) 17%, rgba(51,9,97,0.4) 61%)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "16px",
                            fontWeight: 400,
                            color: "#b982fb",
                          }}
                        >
                          Pay with Credit Card
                        </span>
                      </div>
                    )}

                    {/* Show merchant selection if tab has multiple merchants */}
                    {isSelected && tab.merchants.length > 1 && (
                      <div className="flex flex-wrap gap-[12px]" style={{ marginLeft: "43px" }}>
                        {tab.merchants.map((merchant) => (
                          <div
                            key={merchant.id}
                            onClick={() => selectMerchant(merchant)}
                            className="flex items-center gap-[8px] cursor-pointer px-[16px] py-[10px] rounded-[10px]"
                            style={{
                              border:
                                selectedMerchant?.id === merchant.id
                                  ? "1px solid #a770e1"
                                  : "1px solid #4e159d",
                              background:
                                selectedMerchant?.id === merchant.id
                                  ? "linear-gradient(138deg, rgb(96, 40, 158) 17%, rgb(38, 5, 72) 64%)"
                                  : "transparent",
                            }}
                          >
                            {merchant.imagePath && (
                              <img
                                src={`https://my.thaurusguru.com${merchant.imagePath}`}
                                alt={merchant.name}
                                style={{ height: "20px", objectFit: "contain" }}
                              />
                            )}
                            <span
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "14px",
                                color: "#fff",
                              }}
                            >
                              {merchant.name}
                            </span>
                            <span
                              style={{
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: "11px",
                                color: "#b982fb",
                              }}
                            >
                              ({merchant.currency.join(", ").toUpperCase()})
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

            </div>

            {/* Error messages */}
            {(localError || paymentError) && (
              <div
                className="w-full rounded-[10px] p-[16px]"
                style={{
                  marginTop: "20px",
                  background: "rgba(255, 107, 107, 0.1)",
                  border: "1px solid rgba(255, 107, 107, 0.3)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "14px",
                    color: "#ff6b6b",
                  }}
                >
                  {localError || paymentError}
                </p>
              </div>
            )}

            {/* Payment Provider Logos */}
            <div
              className="rounded-[20px] flex flex-col items-center justify-center gap-[15px] lg:gap-[20px] w-full lg:w-[638px]"
              style={{
                marginTop: "50px",
                background: "#fff",
                border: "1px solid #7a27ef",
                padding: "16px 12px",
              }}
            >
              {/* Row 1: Apple Pay, Google Pay, Confirmo, Visa */}
              <div className="flex items-center justify-center gap-[16px] lg:gap-[35px]">
                {/* Apple Pay */}
                <div className="flex items-center gap-[4px]" style={{ height: "26px" }}>
                  <svg width="18" height="22" viewBox="0 0 814 1000" fill="#000">
                    <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 425.3 43 399.5 43 382.9 43 284.1 81.2 217.7 147.3 174 174.5 155.5 218.9 142 263.3 142c48.5 0 87.2 14.5 126.7 14.5 38.7 0 100.3-18.4 151.6-18.4 24.5 0 106.6 1.9 160.3 67.3zm-234-181.5c21.1-25.5 36.1-61.6 36.1-97.7 0-4.5-.3-9-1-13.5-34.4 1.3-75.5 22.7-99.6 51.7-19.6 22.7-36.8 58.1-36.8 94.8 0 4.8.6 9.7 1 11.3 2.2.4 5.8 1 9.4 1 31.1 0 70.4-20.2 90.9-47.6z"/>
                  </svg>
                  <span style={{ fontFamily: "system-ui", fontSize: "16px", fontWeight: 600, color: "#000", letterSpacing: "-0.3px" }}>Pay</span>
                </div>
                {/* Google Pay */}
                <div className="flex items-center gap-[2px]" style={{ height: "26px" }}>
                  <svg width="20" height="20" viewBox="0 0 48 48">
                    <path fill="#4285F4" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                    <path fill="#34A853" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                    <path fill="#EA4335" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                  </svg>
                  <span style={{ fontFamily: "system-ui", fontSize: "16px", fontWeight: 500, color: "#000" }}>Pay</span>
                </div>
                <img
                  src="/images/payment/confirmo.png"
                  alt="Confirmo"
                  className="h-[20px] lg:h-[27px]"
                  style={{ objectFit: "contain" }}
                />
                <img
                  src="/images/payment/visa.png"
                  alt="Visa"
                  className="h-[20px] lg:h-[26px]"
                  style={{ objectFit: "contain" }}
                />
              </div>
              {/* Row 2: Mastercard, Amex, UPI */}
              <div className="flex items-center justify-center gap-[16px] lg:gap-[45px]">
                <img
                  src="/images/payment/mastercard.png"
                  alt="Mastercard"
                  className="h-[26px] lg:h-[34px]"
                  style={{ objectFit: "contain" }}
                />
                <img
                  src="/images/payment/amex.png"
                  alt="American Express"
                  className="h-[24px] lg:h-[32px]"
                  style={{ objectFit: "contain" }}
                />
                <img
                  src="/images/payment/upi.png"
                  alt="UPI"
                  className="h-[22px] lg:h-[29px]"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <OrderSidebar
          onCtaClick={handlePay}
          ctaText={
            <span className="text-[18px] lg:text-[22px]">
              {paymentLoading ? "Processing..." : "Continue"}
            </span>
          }
        />
      </div>
    </div>
  );
};
