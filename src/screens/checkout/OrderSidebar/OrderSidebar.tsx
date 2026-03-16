import { useCheckout } from "../CheckoutContext";

const panelBg =
  "radial-gradient(ellipse at 50% -40%, rgba(112,0,255,0.2) 0%, rgba(30,9,51,0.2) 100%)";

interface OrderSidebarProps {
  ctaText: React.ReactNode;
  onCtaClick?: () => void;
  showPromoCode?: boolean;
}

export const OrderSidebar = ({ ctaText, onCtaClick, showPromoCode = false }: OrderSidebarProps) => {
  const {
    selectedChallenge,
    basePrice,
    subtotal,
    discountAmount,
    total,
    promoCode,
    setPromoCode,
    applyPromoCode,
    promoLoading,
    promoError,
  } = useCheckout();

  const challengeLabel = selectedChallenge
    ? `$${selectedChallenge.initialBalance / 1000}K ${selectedChallenge.accountType?.platformInfo?.type ?? "MT5"} Instant`
    : "Challenge";

  const receiptItems = [
    { label: `$${basePrice} ${challengeLabel}`, value: `$${basePrice.toFixed(2)}` },
    { label: "Subtotal", value: `$${subtotal.toFixed(2)}` },
    ...(discountAmount > 0
      ? [{ label: `Coupon : ${promoCode}`, value: `-$${discountAmount.toFixed(2)}` }]
      : []),
    { label: "VAT", value: "$0.00" },
    { label: "Total", value: `$${total.toFixed(2)}`, isLast: true },
  ];

  return (
    <div
      className="flex flex-col gap-[35px] w-full lg:w-[525px] shrink-0"
    >
      {/* Promo Code Box - only on Step 1 */}
      {showPromoCode && (
        <div
          className="w-full rounded-[20px] flex flex-col gap-[22px] p-[24px]"
          style={{
            border: "1px solid #4e159d",
            background: panelBg,
          }}
        >
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Type Promo Code here"
            className="w-full px-[20px] placeholder-[#b982fb]"
            style={{
              height: "54px",
              borderRadius: "10px",
              border: "0.5px solid #b982fb",
              background:
                "linear-gradient(159deg, rgba(96,40,158,0.4) 17%, rgba(51,9,97,0.4) 61%)",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "16px",
              fontWeight: 400,
              color: "#fff",
              outline: "none",
            }}
          />
          {promoError && (
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "#ff6b6b" }}>
              {promoError}
            </p>
          )}
          <button
            onClick={applyPromoCode}
            disabled={promoLoading}
            className="w-full flex items-center justify-center"
            style={{
              height: "54px",
              borderRadius: "10px",
              border: "1px solid #e9b1ff",
              background:
                "linear-gradient(90deg, #b05bff 0%, #7626ef 100%)",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "22px",
              fontWeight: 600,
              color: "#fff",
              opacity: promoLoading ? 0.7 : 1,
            }}
          >
            {promoLoading ? "Checking..." : "Apply"}
          </button>
        </div>
      )}

      {/* Receipt Summary Box */}
      <div
        className="w-full rounded-[20px] p-[24px]"
        style={{
          border: "1px solid #4e159d",
          background: panelBg,
        }}
      >
        <div className="flex flex-col gap-[20px] lg:gap-[30px] items-center w-full">
          {receiptItems.map((item, i) => (
            <div key={i} className="w-full flex flex-col gap-[20px] lg:gap-[30px] items-center">
              <div
                className="flex justify-between items-center w-full px-[16px] lg:px-[26px]"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#fff",
                  textTransform: "capitalize",
                }}
              >
                <span>{item.label}</span>
                <span style={{ fontSize: "18px" }}>{item.value}</span>
              </div>
              {!item.isLast && (
                <div
                  className="w-full h-[1px]"
                  style={{
                    background:
                      "linear-gradient(90deg, #4e159d 0%, transparent 100%)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final Price Box */}
      <div
        className="w-full rounded-[20px] flex flex-col items-center p-[30px] lg:p-[40px] gap-[24px]"
        style={{
          border: "1px solid #4e159d",
          background: panelBg,
        }}
      >
        <div className="text-center">
          <p
            className="text-[66px] lg:text-[76px]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              lineHeight: 1,
              background:
                "linear-gradient(104deg, #f6e6ff 26%, #d692ff 43%, #8148ed 112%, #4829c3 181%, #090422 250%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            ${total}
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              color: "#b982fb",
              textTransform: "capitalize",
              marginTop: "8px",
            }}
          >
            Amount to be paid
          </p>
        </div>

        <div
          className="w-full h-[1px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #4e159d 50%, transparent 100%)",
          }}
        />

        <button
          onClick={onCtaClick}
          className="w-full flex flex-row items-center justify-center gap-[8px] lg:gap-[16px]"
          style={{
            padding: "13px 20px",
            borderRadius: "10px",
            border: "1px solid #e9b1ff",
            background:
              "linear-gradient(90deg, #b05bff 0%, #7626ef 100%)",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            color: "#fff",
          }}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
};
