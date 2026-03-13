import { useState } from "react";
import { OrderSidebar } from "../OrderSidebar/OrderSidebar";

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

interface PaymentMethodProps {
  onContinue: () => void;
}

export const PaymentMethod = ({ onContinue }: PaymentMethodProps) => {
  const [selectedMethod, setSelectedMethod] = useState("debit-credit");
  const [agreedTerms, setAgreedTerms] = useState(false);

  const paymentOptions = [
    { id: "debit-credit", label: "Debit/Credit and Cryptocurrency (GLOBAL)" },
    { id: "upi", label: "UPI" },
    { id: "korapay", label: "KoraPay, and TransactPay" },
  ];

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
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontSize: "30px",
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

            {/* Payment options */}
            <div className="flex flex-col gap-[26px]">
              {paymentOptions.map((option) => {
                const isSelected = selectedMethod === option.id;
                return (
                  <div key={option.id} className="flex flex-col gap-[16px]">
                    <div
                      className="flex items-center gap-[13px] cursor-pointer"
                      onClick={() => setSelectedMethod(option.id)}
                    >
                      <Checkbox
                        checked={isSelected}
                        onClick={() => setSelectedMethod(option.id)}
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
                        {option.label}
                      </span>
                    </div>

                    {/* Credit card input shown under debit-credit */}
                    {option.id === "debit-credit" && isSelected && (
                      <div
                        className="flex items-center px-[20px] w-full lg:w-[475px]"
                        style={{
                          height: "54px",
                          borderRadius: "10px",
                          border: "0.5px solid #b982fb",
                          background:
                            "linear-gradient(159deg, rgba(96,40,158,0.4) 17%, rgba(51,9,97,0.4) 61%)",
                          marginLeft: "0",
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
                  </div>
                );
              })}

              {/* Terms confirmation */}
              <div className="flex items-start gap-[13px]" style={{ marginTop: "10px" }}>
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

            {/* Payment Provider Logos */}
            <div
              className="rounded-[20px] flex flex-col items-center justify-center gap-[20px] w-full lg:w-[638px]"
              style={{
                marginTop: "50px",
                background: "#fff",
                border: "1px solid #7a27ef",
                padding: "20px 16px",
              }}
            >
              {/* Row 1 */}
              <div className="flex items-center justify-center gap-[20px] lg:gap-[45px] flex-wrap">
                <img
                  src="/images/payment/confirmo.png"
                  alt="Confirmo"
                  style={{ height: "27px", objectFit: "contain" }}
                />
                <img
                  src="/images/payment/flutterwave.png"
                  alt="Flutterwave"
                  style={{ height: "34px", objectFit: "contain" }}
                />
                <img
                  src="/images/payment/upi.png"
                  alt="UPI"
                  style={{ height: "29px", objectFit: "contain" }}
                />
              </div>
              {/* Row 2 */}
              <div className="flex items-center justify-center gap-[20px] lg:gap-[45px] flex-wrap">
                <img
                  src="/images/payment/visa.png"
                  alt="Visa"
                  style={{ height: "26px", objectFit: "contain" }}
                />
                <img
                  src="/images/payment/mastercard.png"
                  alt="Mastercard"
                  style={{ height: "34px", objectFit: "contain" }}
                />
                <img
                  src="/images/payment/amex.png"
                  alt="American Express"
                  style={{ height: "32px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <OrderSidebar
          onCtaClick={onContinue}
          ctaText={<span className="text-[18px] lg:text-[22px]">Continue</span>}
        />
      </div>
    </div>
  );
};
