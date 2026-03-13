import { useState } from "react";
import { OrderSidebar } from "../OrderSidebar/OrderSidebar";

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
      fill="#fff"
    />
  </svg>
);

const CheckCircle = ({ checked, size = 26 }: { checked: boolean; size?: number }) => (
  <div
    className="flex items-center justify-center shrink-0"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: `${size / 2}px`,
      background: checked ? "#a770e1" : "#1b092e",
      border: checked ? "1px solid #c89cf7" : "1px solid #6d2fad",
      padding: checked ? "2px" : 0,
    }}
  >
    {checked && <CheckIcon />}
  </div>
);

interface CheckoutContentProps {
  onContinue: () => void;
}

export const CheckoutContent = ({ onContinue }: CheckoutContentProps) => {
  const [selectedPlan, setSelectedPlan] = useState("2-step Classic");
  const [selectedSize, setSelectedSize] = useState("$5,000");
  const [selectedAddons, setSelectedAddons] = useState(["News Trading"]);

  const toggleAddon = (addon: string) => {
    setSelectedAddons((prev) =>
      prev.includes(addon) ? prev.filter((a) => a !== addon) : [...prev, addon]
    );
  };

  const selectedCardBg =
    "linear-gradient(138deg, rgb(96, 40, 158) 17%, rgb(38, 5, 72) 64%)";
  const unselectedCardBg =
    "radial-gradient(ellipse at center, rgba(96,40,158,0.3) 0%, rgba(51,9,97,0.3) 100%)";
  const panelBg =
    "radial-gradient(ellipse at 50% -40%, rgba(112,0,255,0.2) 0%, rgba(30,9,51,0.2) 100%)";

  const plans = [
    { id: "2-step Classic", subtitle: "2-step", label: "Classic" },
    { id: "3-step Classic", subtitle: "3-step", label: "Classic" },
    {
      id: "Pay As You Go",
      subtitle: "",
      label: "Pay As You Go",
      popular: true,
    },
  ];

  const sizes = ["$5,000", "$10,000", "$25,000", "$50,000", "$100,000"];

  const addons = [
    { name: "News Trading" },
    { name: "Weekend Trading" },
    { name: "Weekly Payouts" },
    { name: "EA Bot Allowed" },
  ];

  return (
    <div className="w-full relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div
        className="max-w-[1440px] mx-auto px-[16px] lg:px-[100px] flex flex-col lg:flex-row gap-[30px] lg:gap-[50px] relative"
        style={{ paddingTop: "60px", paddingBottom: "60px" }}
      >
        {/* LEFT COLUMN: Account Information */}
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
              Account Information
            </h2>

            {/* Divider */}
            <div
              className="w-full"
              style={{
                height: "1px",
                background: "linear-gradient(90deg, #4e159d 0%, transparent 100%)",
                marginTop: "25px",
                marginBottom: "30px",
              }}
            />

            {/* Account Plan */}
            <h3
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Account Plan
            </h3>

            {/* Desktop plan cards */}
            <div className="hidden lg:flex gap-[28px] items-center flex-wrap">
              {plans.map((plan) => {
                const isSelected = selectedPlan === plan.id;
                const w = plan.popular ? 210 : 188;
                return (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className="relative cursor-pointer"
                    style={{
                      width: `${w}px`,
                      height: "100px",
                      borderRadius: "10px",
                      background: isSelected ? selectedCardBg : unselectedCardBg,
                      border: isSelected ? "0.5px solid #a770e1" : "none",
                    }}
                  >
                    {plan.popular && (
                      <div
                        className="absolute flex items-center justify-center"
                        style={{
                          top: "17px",
                          right: "16px",
                          padding: "3px 8px",
                          borderRadius: "3px",
                          border: "0.6px solid #fff",
                          background: "linear-gradient(90deg, #b05bff 0%, #7626ef 100%)",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "#fff",
                          textTransform: "capitalize",
                        }}
                      >
                        Popular
                      </div>
                    )}
                    <div style={{ position: "absolute", top: "17px", left: "27px" }}>
                      <CheckCircle checked={isSelected} />
                    </div>
                    {plan.subtitle && (
                      <p
                        style={{
                          position: "absolute",
                          top: "16px",
                          left: "63px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "18px",
                          fontWeight: 400,
                          color: "#b982fb",
                        }}
                      >
                        {plan.subtitle}
                      </p>
                    )}
                    <p
                      style={{
                        position: "absolute",
                        top: "55px",
                        left: plan.subtitle ? "27px" : "26px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#fff",
                        textTransform: "capitalize",
                      }}
                    >
                      {plan.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile plan cards */}
            <div className="flex lg:hidden flex-wrap gap-[20px]">
              {plans.map((plan) => {
                const isSelected = selectedPlan === plan.id;
                const w = plan.popular ? 160 : 150;
                return (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className="relative cursor-pointer"
                    style={{
                      width: `${w}px`,
                      height: plan.popular ? "74px" : "80px",
                      borderRadius: "10px",
                      background: isSelected
                        ? plan.popular
                          ? "linear-gradient(117deg, rgba(246,230,255,0.6), rgba(214,146,255,0.6), rgba(129,72,237,0.6), rgba(72,41,195,0.6), rgba(9,4,34,0.6))"
                          : selectedCardBg
                        : unselectedCardBg,
                      border: isSelected ? "0.5px solid #a770e1" : "none",
                    }}
                  >
                    {plan.popular && (
                      <div
                        className="absolute flex items-center justify-center"
                        style={{
                          top: "12px",
                          right: "12px",
                          padding: "3px 8px",
                          borderRadius: "3px",
                          border: "0.6px solid #fff",
                          background: "linear-gradient(90deg, #b05bff 0%, #7626ef 100%)",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          color: "#fff",
                          textTransform: "capitalize",
                        }}
                      >
                        Popular
                      </div>
                    )}
                    <div style={{ position: "absolute", top: "14px", left: "16px" }}>
                      <CheckCircle checked={isSelected} size={24} />
                    </div>
                    {plan.subtitle && (
                      <p
                        style={{
                          position: "absolute",
                          top: "13px",
                          left: "48px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "12px",
                          fontWeight: 400,
                          color: "#b982fb",
                        }}
                      >
                        {plan.subtitle}
                      </p>
                    )}
                    <p
                      style={{
                        position: "absolute",
                        top: plan.subtitle ? "40px" : "30px",
                        left: plan.subtitle ? "16px" : "16px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#fff",
                        textTransform: "capitalize",
                      }}
                    >
                      {plan.label}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Account Size */}
            <h3
              className="mt-[35px] lg:mt-[55px]"
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Account Size
            </h3>

            {/* Desktop sizes */}
            <div className="hidden lg:flex flex-col gap-[27px]">
              <div className="flex gap-[28px] items-center">
                {sizes.slice(0, 3).map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <div
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="relative cursor-pointer"
                      style={{
                        width: "190px",
                        height: "64px",
                        borderRadius: "10px",
                        background: isSelected ? selectedCardBg : unselectedCardBg,
                        border: isSelected ? "0.5px solid #a770e1" : "none",
                      }}
                    >
                      <div style={{ position: "absolute", top: "19px", left: "23px" }}>
                        <CheckCircle checked={isSelected} />
                      </div>
                      <p
                        style={{
                          position: "absolute",
                          top: "17px",
                          left: "65px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#fff",
                          textTransform: "capitalize",
                        }}
                      >
                        {size}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-[28px] items-center">
                {sizes.slice(3).map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <div
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="relative cursor-pointer"
                      style={{
                        width: "190px",
                        height: "64px",
                        borderRadius: "10px",
                        background: isSelected ? selectedCardBg : unselectedCardBg,
                        border: isSelected ? "0.5px solid #a770e1" : "none",
                      }}
                    >
                      <div style={{ position: "absolute", top: "19px", left: "23px" }}>
                        <CheckCircle checked={isSelected} />
                      </div>
                      <p
                        style={{
                          position: "absolute",
                          top: "17px",
                          left: "65px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#fff",
                          textTransform: "capitalize",
                        }}
                      >
                        {size}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile sizes */}
            <div className="flex lg:hidden flex-col gap-[16px]">
              <div className="flex gap-[10px] items-center">
                {sizes.slice(0, 3).map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <div
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="relative cursor-pointer flex-1"
                      style={{
                        height: "44px",
                        borderRadius: "10px",
                        background: isSelected ? selectedCardBg : unselectedCardBg,
                        border: isSelected ? "0.5px solid #a770e1" : "none",
                      }}
                    >
                      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                        <CheckCircle checked={isSelected} size={24} />
                      </div>
                      <p
                        style={{
                          position: "absolute",
                          top: "11px",
                          left: "40px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#fff",
                          textTransform: "capitalize",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {size}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-[10px] items-center">
                {sizes.slice(3).map((size) => {
                  const isSelected = selectedSize === size;
                  return (
                    <div
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className="relative cursor-pointer"
                      style={{
                        width: "calc(50% - 5px)",
                        height: "44px",
                        borderRadius: "10px",
                        background: isSelected ? selectedCardBg : unselectedCardBg,
                        border: isSelected ? "0.5px solid #a770e1" : "none",
                      }}
                    >
                      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                        <CheckCircle checked={isSelected} size={24} />
                      </div>
                      <p
                        style={{
                          position: "absolute",
                          top: "11px",
                          left: "40px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#fff",
                          textTransform: "capitalize",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {size}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Add ons */}
            <h3
              className="mt-[35px] lg:mt-[55px]"
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "24px",
              }}
            >
              Add ons
            </h3>

            {/* Desktop addons */}
            <div className="hidden lg:flex flex-col gap-[27px]">
              <div className="flex gap-[28px] items-center">
                {addons.slice(0, 2).map((addon) => {
                  const isSelected = selectedAddons.includes(addon.name);
                  return (
                    <div
                      key={addon.name}
                      onClick={() => toggleAddon(addon.name)}
                      className="relative cursor-pointer"
                      style={{
                        width: addon.name === "Weekend Trading" ? "280px" : "246px",
                        height: "64px",
                        borderRadius: "10px",
                        background: isSelected ? selectedCardBg : unselectedCardBg,
                        border: isSelected ? "0.5px solid #a770e1" : "none",
                      }}
                    >
                      <div style={{ position: "absolute", top: "19px", left: "27px" }}>
                        <CheckCircle checked={isSelected} />
                      </div>
                      <p
                        style={{
                          position: "absolute",
                          top: "17px",
                          left: "69px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#fff",
                          textTransform: "capitalize",
                        }}
                      >
                        {addon.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-[28px] items-center">
                {addons.slice(2).map((addon) => {
                  const isSelected = selectedAddons.includes(addon.name);
                  return (
                    <div
                      key={addon.name}
                      onClick={() => toggleAddon(addon.name)}
                      className="relative cursor-pointer"
                      style={{
                        width: addon.name === "Weekly Payouts" ? "262px" : "248px",
                        height: "64px",
                        borderRadius: "10px",
                        background: isSelected ? selectedCardBg : unselectedCardBg,
                        border: isSelected ? "0.5px solid #a770e1" : "none",
                      }}
                    >
                      <div style={{ position: "absolute", top: "19px", left: "27px" }}>
                        <CheckCircle checked={isSelected} />
                      </div>
                      <p
                        style={{
                          position: "absolute",
                          top: "17px",
                          left: "69px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          color: "#fff",
                          textTransform: "capitalize",
                        }}
                      >
                        {addon.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile addons */}
            <div className="flex lg:hidden flex-col gap-[20px]">
              <div className="flex gap-[20px] items-center">
                {addons.slice(0, 2).map((addon) => {
                  const isSelected = selectedAddons.includes(addon.name);
                  return (
                    <div
                      key={addon.name}
                      onClick={() => toggleAddon(addon.name)}
                      className="relative cursor-pointer flex-1"
                      style={{
                        height: "44px",
                        borderRadius: "10px",
                        background: isSelected ? selectedCardBg : unselectedCardBg,
                        border: isSelected ? "0.5px solid #a770e1" : "none",
                      }}
                    >
                      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                        <CheckCircle checked={isSelected} size={24} />
                      </div>
                      <p
                        style={{
                          position: "absolute",
                          top: "11px",
                          left: "40px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#fff",
                          textTransform: "capitalize",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {addon.name}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-[20px] items-center">
                {addons.slice(2).map((addon) => {
                  const isSelected = selectedAddons.includes(addon.name);
                  return (
                    <div
                      key={addon.name}
                      onClick={() => toggleAddon(addon.name)}
                      className="relative cursor-pointer flex-1"
                      style={{
                        height: "44px",
                        borderRadius: "10px",
                        background: isSelected ? selectedCardBg : unselectedCardBg,
                        border: isSelected ? "0.5px solid #a770e1" : "none",
                      }}
                    >
                      <div style={{ position: "absolute", top: "10px", left: "10px" }}>
                        <CheckCircle checked={isSelected} size={24} />
                      </div>
                      <p
                        style={{
                          position: "absolute",
                          top: "11px",
                          left: "40px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "12px",
                          fontWeight: 700,
                          color: "#fff",
                          textTransform: "capitalize",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {addon.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN / BOTTOM ON MOBILE */}
        <OrderSidebar
          onCtaClick={onContinue}
          ctaText={
            <>
              <span className="text-[18px] lg:text-[22px]">START A NEW CHALLENGE FOR</span>
              <span
                className="text-[28px] lg:text-[34px]"
                style={{
                  background: "linear-gradient(121deg, #b783ff 16%, #fff 94%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                $45
              </span>
            </>
          }
        />
      </div>
    </div>
  );
};
