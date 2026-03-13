import { useState } from "react";
import { OrderSidebar } from "../OrderSidebar/OrderSidebar";

const inputStyle: React.CSSProperties = {
  height: "54px",
  borderRadius: "4px",
  border: "0.5px solid #b982fb",
  background:
    "linear-gradient(150deg, rgba(96,40,158,0.4) 17%, rgba(51,9,97,0.4) 61%)",
  padding: "15px 20px",
  fontFamily: "'Poppins', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  color: "#fff",
  outline: "none",
  width: "100%",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  color: "#fff",
  marginBottom: "8px",
  display: "block",
};

const panelBg =
  "radial-gradient(ellipse at 50% -40%, rgba(112,0,255,0.2) 0%, rgba(30,9,51,0.2) 100%)";

const EyeClosedIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"
      stroke="#b982fb"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="#b982fb" strokeWidth="1.5" />
    <path d="M3 21L21 3" stroke="#b982fb" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const DropdownArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="#b982fb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface BillingDetailsProps {
  onContinue: () => void;
}

export const BillingDetails = ({ onContinue }: BillingDetailsProps) => {
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full relative z-10" style={{ fontFamily: "'Poppins', sans-serif" }}>
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
            {/* Customer Information */}
            <h2
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontSize: "30px",
                fontWeight: 700,
                lineHeight: "33px",
                color: "#fff",
              }}
            >
              Customer Information
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

            {/* Email */}
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="Type Email.."
              style={{ ...inputStyle, width: "100%" }}
              className="placeholder-[#b982fb]"
            />

            {/* Billing Details heading */}
            <h2
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontSize: "30px",
                fontWeight: 700,
                lineHeight: "33px",
                color: "#fff",
                marginTop: "50px",
              }}
            >
              Billing Details
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

            {/* First Name + Last Name */}
            <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[28px]">
              <div className="flex-1">
                <label style={labelStyle}>First Name</label>
                <input
                  type="text"
                  placeholder="Type First Name.."
                  style={inputStyle}
                  className="placeholder-[#b982fb]"
                />
              </div>
              <div className="flex-1">
                <label style={labelStyle}>Last Name</label>
                <input
                  type="text"
                  placeholder="Type Last Name.."
                  style={inputStyle}
                  className="placeholder-[#b982fb]"
                />
              </div>
            </div>

            {/* Phone */}
            <div style={{ marginTop: "30px" }}>
              <label style={labelStyle}>Phone</label>
              <div
                className="flex items-center gap-[8px] w-full"
                style={{
                  ...inputStyle,
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "18px" }}>🇮🇳</span>
                <DropdownArrow />
              </div>
            </div>

            {/* Country + Language */}
            <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[28px]" style={{ marginTop: "30px" }}>
              <div className="flex-1">
                <label style={labelStyle}>Country</label>
                <input
                  type="text"
                  placeholder="Type Country.."
                  style={inputStyle}
                  className="placeholder-[#b982fb]"
                />
              </div>
              <div className="flex-1">
                <label style={labelStyle}>Language</label>
                <div
                  className="flex items-center justify-between w-full"
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                  }}
                >
                  <span style={{ color: "#b982fb" }}>Select Language</span>
                  <DropdownArrow />
                </div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "10px",
                    fontWeight: 400,
                    color: "#b982fb",
                    marginTop: "6px",
                  }}
                >
                  Changing the language will change the language of the form
                </p>
              </div>
            </div>

            {/* Password + Confirm Password */}
            <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[28px]" style={{ marginTop: "30px" }}>
              <div className="flex-1">
                <label style={labelStyle}>Password</label>
                <div
                  className="flex items-center justify-between w-full"
                  style={{
                    ...inputStyle,
                    cursor: "text",
                  }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Type Password.."
                    className="placeholder-[#b982fb] bg-transparent outline-none flex-1"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "16px",
                      color: "#fff",
                      border: "none",
                      padding: 0,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="shrink-0 ml-[8px]"
                  >
                    <EyeClosedIcon />
                  </button>
                </div>
              </div>
              <div className="flex-1">
                <label style={labelStyle}>Confirm Password</label>
                <div
                  className="flex items-center justify-between w-full"
                  style={{
                    ...inputStyle,
                    cursor: "text",
                  }}
                >
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Type Confirm Password.."
                    className="placeholder-[#b982fb] bg-transparent outline-none flex-1"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "16px",
                      color: "#fff",
                      border: "none",
                      padding: 0,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="shrink-0 ml-[8px]"
                  >
                    <EyeClosedIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Terms checkbox */}
            <div
              className="flex items-center gap-[13px]"
              style={{ marginTop: "45px" }}
            >
              <div
                onClick={() => setAgreedTerms(!agreedTerms)}
                className="shrink-0 flex items-center justify-center cursor-pointer"
                style={{
                  width: "26px",
                  height: "26px",
                  borderRadius: "5px",
                  border: "1px solid #b982fb",
                  background: agreedTerms ? "#a770e1" : "transparent",
                }}
              >
                {agreedTerms && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
              <p
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#fff",
                  textTransform: "capitalize",
                }}
              >
                I agree to the{" "}
                <span
                  style={{
                    color: "#9451f2",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Terms & Conditions
                </span>
                , and{" "}
                <span
                  style={{
                    color: "#9451f2",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  Refund Policy
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <OrderSidebar
          onCtaClick={onContinue}
          ctaText={
            <span className="text-[18px] lg:text-[22px]">Continue</span>
          }
        />
      </div>
    </div>
  );
};
