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

  // Debit/Credit & Crypto — merchants with usd or eur
  const cardMerchants = merchants.filter((m) =>
    m.currency.some((c) => ["usd", "eur"].includes(c.toLowerCase()))
  );
  if (cardMerchants.length > 0) {
    tabs.push({
      id: "debit-credit",
      label: "Debit/Credit and Cryptocurrency (GLOBAL)",
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

export const PaymentMethod = ({ onContinue }: PaymentMethodProps) => {
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
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [localError, setLocalError] = useState("");

  const selectedTab = tabs.find((t) => t.id === selectedTabId);

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

    if (!agreedTerms) {
      setLocalError("You must agree to the Terms & Conditions to proceed");
      return;
    }
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

              {/* Terms confirmation */}
              <div
                className="flex items-start gap-[13px]"
                style={{ marginTop: "10px" }}
              >
                <Checkbox
                  checked={agreedTerms}
                  onClick={() => setAgreedTerms(!agreedTerms)}
                />
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#fff",
                    textTransform: "capitalize",
                    lineHeight: "24px",
                    maxWidth: "582px",
                  }}
                >
                  I confirm that I have read and agree to the Thaurus Guru
                  Terms & Conditions, Privacy Policy, Outline of Evaluation and
                  Fees, and The Thaurus Guru Markets Client Agreement, Product
                  Disclosure Statement, and Privacy Policy available at Legal
                  Document. *
                </p>
              </div>
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
              {/* Row 1 */}
              <div className="flex items-center justify-center gap-[16px] lg:gap-[45px]">
                <img
                  src="/images/payment/confirmo.png"
                  alt="Confirmo"
                  className="h-[20px] lg:h-[27px]"
                  style={{ objectFit: "contain" }}
                />
                <img
                  src="/images/payment/flutterwave.png"
                  alt="Flutterwave"
                  className="h-[26px] lg:h-[34px]"
                  style={{ objectFit: "contain" }}
                />
                <img
                  src="/images/payment/upi.png"
                  alt="UPI"
                  className="h-[22px] lg:h-[29px]"
                  style={{ objectFit: "contain" }}
                />
              </div>
              {/* Row 2 */}
              <div className="flex items-center justify-center gap-[16px] lg:gap-[45px]">
                <img
                  src="/images/payment/visa.png"
                  alt="Visa"
                  className="h-[20px] lg:h-[26px]"
                  style={{ objectFit: "contain" }}
                />
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
