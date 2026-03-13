const ArrowSeparator = () => (
  <div
    className="hidden lg:flex items-center justify-center shrink-0"
    style={{
      width: "62px",
      height: "30px",
      padding: "10px 16px",
      borderRadius: "16px",
      border: "0.5px solid #6125a9",
      backgroundColor: "#1b092e",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 9"
      fill="none"
      style={{ width: "24.348px", height: "8.087px", flexShrink: 0 }}
    >
      <path
        d="M19.3698 5.72353C19.7649 5.72353 20.1439 5.54653 20.4233 5.23146C20.7028 4.9164 20.8597 4.48909 20.8597 4.04353C20.8597 3.59796 20.7028 3.17065 20.4233 2.85558C20.1439 2.54052 19.7649 2.36353 19.3698 2.36353L19.3698 5.72353ZM1.49007 2.36352C1.0949 2.36352 0.715921 2.54052 0.436497 2.85558C0.157074 3.17064 9.53757e-05 3.59796 9.53787e-05 4.04352C9.53816e-05 4.48909 0.157074 4.9164 0.436497 5.23146C0.715921 5.54652 1.0949 5.72352 1.49007 5.72352L1.49007 2.36352ZM19.3698 2.36353L1.49007 2.36352L1.49007 5.72352L19.3698 5.72353L19.3698 2.36353Z"
        fill="#6125A9"
      />
      <path
        d="M19.7782 7.33935L19.7782 0.748199C19.7782 0.0829241 20.5824 -0.250138 21.0526 0.220142L23.975 3.14293C24.2139 3.38193 24.3481 3.70604 24.3481 4.04398C24.3481 4.38193 24.2139 4.70604 23.975 4.94504L21.0526 7.86698C20.5824 8.33726 19.7782 8.00462 19.7782 7.33935Z"
        fill="#6125A9"
      />
    </svg>
  </div>
);

const VerticalArrowSeparator = () => (
  <div
    className="flex lg:hidden items-center justify-center shrink-0"
    style={{
      width: "30px",
      height: "52px",
      padding: "10px 14px",
      borderRadius: "16px",
      border: "0.5px solid #6125a9",
      backgroundColor: "#1b092e",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 9"
      fill="none"
      style={{
        width: "24.348px",
        height: "8.087px",
        flexShrink: 0,
        transform: "rotate(90deg)",
      }}
    >
      <path
        d="M19.3698 5.72353C19.7649 5.72353 20.1439 5.54653 20.4233 5.23146C20.7028 4.9164 20.8597 4.48909 20.8597 4.04353C20.8597 3.59796 20.7028 3.17065 20.4233 2.85558C20.1439 2.54052 19.7649 2.36353 19.3698 2.36353L19.3698 5.72353ZM1.49007 2.36352C1.0949 2.36352 0.715921 2.54052 0.436497 2.85558C0.157074 3.17064 9.53757e-05 3.59796 9.53787e-05 4.04352C9.53816e-05 4.48909 0.157074 4.9164 0.436497 5.23146C0.715921 5.54652 1.0949 5.72352 1.49007 5.72352L1.49007 2.36352ZM19.3698 2.36353L1.49007 2.36352L1.49007 5.72352L19.3698 5.72353L19.3698 2.36353Z"
        fill="#6125A9"
      />
      <path
        d="M19.7782 7.33935L19.7782 0.748199C19.7782 0.0829241 20.5824 -0.250138 21.0526 0.220142L23.975 3.14293C24.2139 3.38193 24.3481 3.70604 24.3481 4.04398C24.3481 4.38193 24.2139 4.70604 23.975 4.94504L21.0526 7.86698C20.5824 8.33726 19.7782 8.00462 19.7782 7.33935Z"
        fill="#6125A9"
      />
    </svg>
  </div>
);

interface CheckoutHeroProps {
  activeStep: number;
  onStepClick: (step: number) => void;
}

const steps = [
  { number: 1, label: "Select Account" },
  { number: 2, label: "Billing Details" },
  { number: 3, label: "Payment Method" },
];

export const CheckoutHero = ({ activeStep, onStepClick }: CheckoutHeroProps) => {
  return (
    <div className="relative w-full">
      <div
        className="w-full flex flex-col items-center pt-[80px] lg:pt-[136px]"
      >
        {/* Heading */}
        <h1
          className="text-center font-normal"
          style={{
            fontFamily: "'M PLUS 2', sans-serif",
            fontSize: "clamp(24px, 5vw, 42px)",
            lineHeight: "clamp(30px, 6vw, 60px)",
            background: "linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pick a Challenge
        </h1>

        {/* Subtitle */}
        <p
          className="text-center font-normal"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(16px, 3vw, 26px)",
            lineHeight: "clamp(20px, 4vw, 60px)",
            marginTop: "13px",
            color: "#FFF",
          }}
        >
          Select a program and start trading today
        </p>

        {/* Stepper - horizontal on desktop, vertical on mobile */}
        {/* Desktop */}
        <div className="hidden lg:flex items-center" style={{ marginTop: "67px" }}>
          {steps.map((step, index) => {
            const isActive = activeStep === step.number;
            return (
              <div key={step.number} className="flex items-center">
                <div
                  onClick={() => onStepClick(step.number)}
                  className="flex items-center cursor-pointer"
                  style={{
                    width: "360px",
                    height: "100px",
                    padding: "20px 24px",
                    gap: "18px",
                    borderRadius: "52px",
                    background: isActive
                      ? "radial-gradient(53.02% 149% at 50% 100%, rgba(112, 0, 255, 0.40) 0%, rgba(30, 9, 51, 0.40) 100%)"
                      : "radial-gradient(53.02% 149% at 50% 100%, rgba(112, 0, 255, 0.20) 0%, rgba(30, 9, 51, 0.20) 100%)",
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "30px",
                      background: isActive ? "#7c27e8" : "rgba(0,0,0,0.2)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "30px",
                      fontWeight: isActive ? 500 : 300,
                      color: "#FFF",
                    }}
                  >
                    {step.number}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "26px",
                      fontWeight: 300,
                      color: "#FFF",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && <ArrowSeparator />}
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="flex lg:hidden flex-col items-center" style={{ marginTop: "40px" }}>
          {steps.map((step, index) => {
            const isActive = activeStep === step.number;
            return (
              <div key={step.number} className="flex flex-col items-center">
                <div
                  onClick={() => onStepClick(step.number)}
                  className="flex items-center cursor-pointer"
                  style={{
                    width: "311px",
                    height: "86px",
                    padding: "18px 20px",
                    gap: "18px",
                    borderRadius: "52px",
                    background: isActive
                      ? "radial-gradient(53.02% 149% at 50% 100%, rgba(112, 0, 255, 0.40) 0%, rgba(30, 9, 51, 0.40) 100%)"
                      : "radial-gradient(53.02% 149% at 50% 100%, rgba(112, 0, 255, 0.20) 0%, rgba(30, 9, 51, 0.20) 100%)",
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "25px",
                      background: isActive ? "#7c27e8" : "rgba(0,0,0,0.2)",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "22px",
                      fontWeight: isActive ? 500 : 300,
                      color: "#FFF",
                    }}
                  >
                    {step.number}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "20px",
                      fontWeight: 300,
                      color: "#FFF",
                    }}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && <VerticalArrowSeparator />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
