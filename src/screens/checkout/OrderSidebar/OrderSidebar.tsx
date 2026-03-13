const panelBg =
  "radial-gradient(ellipse at 50% -40%, rgba(112,0,255,0.2) 0%, rgba(30,9,51,0.2) 100%)";

interface OrderSidebarProps {
  ctaText: React.ReactNode;
  onCtaClick?: () => void;
}

export const OrderSidebar = ({ ctaText, onCtaClick }: OrderSidebarProps) => {
  return (
    <div
      className="flex flex-col gap-[35px] w-full lg:w-[525px] shrink-0"
    >
      {/* Promo Code Box */}
      <div
        className="w-full rounded-[20px] flex flex-col gap-[22px] p-[24px]"
        style={{
          border: "1px solid #4e159d",
          background: panelBg,
        }}
      >
        <div
          className="w-full flex items-center px-[20px]"
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
            Type Promo Code here
          </span>
        </div>
        <button
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
          }}
        >
          Apply
        </button>
      </div>

      {/* Receipt Summary Box */}
      <div
        className="w-full rounded-[20px] p-[24px]"
        style={{
          border: "1px solid #4e159d",
          background: panelBg,
        }}
      >
        <div className="flex flex-col gap-[20px] lg:gap-[30px] items-center w-full">
          {[
            { label: "$40 2 step - MT5 Instant", value: "$45.00" },
            { label: "Subtotal", value: "$45.00" },
            { label: "Coupon : TG20", value: "-$6.00" },
            { label: "VAT", value: "$0.00" },
            { label: "Total", value: "$45.00", isLast: true },
          ].map((item, i) => (
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
            $45
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
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-[6px] lg:gap-[16px]"
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
