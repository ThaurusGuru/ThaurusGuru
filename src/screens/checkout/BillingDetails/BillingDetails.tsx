import { useState, useRef, useEffect } from "react";
import { OrderSidebar } from "../OrderSidebar/OrderSidebar";
import { useCheckout } from "../CheckoutContext";

const COUNTRIES = [
  { code: "US", dial: "+1", flag: "\u{1F1FA}\u{1F1F8}", name: "United States" },
  { code: "GB", dial: "+44", flag: "\u{1F1EC}\u{1F1E7}", name: "United Kingdom" },
  { code: "IN", dial: "+91", flag: "\u{1F1EE}\u{1F1F3}", name: "India" },
  { code: "CA", dial: "+1", flag: "\u{1F1E8}\u{1F1E6}", name: "Canada" },
  { code: "AU", dial: "+61", flag: "\u{1F1E6}\u{1F1FA}", name: "Australia" },
  { code: "DE", dial: "+49", flag: "\u{1F1E9}\u{1F1EA}", name: "Germany" },
  { code: "FR", dial: "+33", flag: "\u{1F1EB}\u{1F1F7}", name: "France" },
  { code: "ES", dial: "+34", flag: "\u{1F1EA}\u{1F1F8}", name: "Spain" },
  { code: "IT", dial: "+39", flag: "\u{1F1EE}\u{1F1F9}", name: "Italy" },
  { code: "BR", dial: "+55", flag: "\u{1F1E7}\u{1F1F7}", name: "Brazil" },
  { code: "MX", dial: "+52", flag: "\u{1F1F2}\u{1F1FD}", name: "Mexico" },
  { code: "JP", dial: "+81", flag: "\u{1F1EF}\u{1F1F5}", name: "Japan" },
  { code: "KR", dial: "+82", flag: "\u{1F1F0}\u{1F1F7}", name: "South Korea" },
  { code: "CN", dial: "+86", flag: "\u{1F1E8}\u{1F1F3}", name: "China" },
  { code: "RU", dial: "+7", flag: "\u{1F1F7}\u{1F1FA}", name: "Russia" },
  { code: "ZA", dial: "+27", flag: "\u{1F1FF}\u{1F1E6}", name: "South Africa" },
  { code: "NG", dial: "+234", flag: "\u{1F1F3}\u{1F1EC}", name: "Nigeria" },
  { code: "KE", dial: "+254", flag: "\u{1F1F0}\u{1F1EA}", name: "Kenya" },
  { code: "GH", dial: "+233", flag: "\u{1F1EC}\u{1F1ED}", name: "Ghana" },
  { code: "AE", dial: "+971", flag: "\u{1F1E6}\u{1F1EA}", name: "UAE" },
  { code: "SA", dial: "+966", flag: "\u{1F1F8}\u{1F1E6}", name: "Saudi Arabia" },
  { code: "PK", dial: "+92", flag: "\u{1F1F5}\u{1F1F0}", name: "Pakistan" },
  { code: "BD", dial: "+880", flag: "\u{1F1E7}\u{1F1E9}", name: "Bangladesh" },
  { code: "PH", dial: "+63", flag: "\u{1F1F5}\u{1F1ED}", name: "Philippines" },
  { code: "ID", dial: "+62", flag: "\u{1F1EE}\u{1F1E9}", name: "Indonesia" },
  { code: "TH", dial: "+66", flag: "\u{1F1F9}\u{1F1ED}", name: "Thailand" },
  { code: "VN", dial: "+84", flag: "\u{1F1FB}\u{1F1F3}", name: "Vietnam" },
  { code: "MY", dial: "+60", flag: "\u{1F1F2}\u{1F1FE}", name: "Malaysia" },
  { code: "SG", dial: "+65", flag: "\u{1F1F8}\u{1F1EC}", name: "Singapore" },
  { code: "NL", dial: "+31", flag: "\u{1F1F3}\u{1F1F1}", name: "Netherlands" },
  { code: "SE", dial: "+46", flag: "\u{1F1F8}\u{1F1EA}", name: "Sweden" },
  { code: "NO", dial: "+47", flag: "\u{1F1F3}\u{1F1F4}", name: "Norway" },
  { code: "DK", dial: "+45", flag: "\u{1F1E9}\u{1F1F0}", name: "Denmark" },
  { code: "PL", dial: "+48", flag: "\u{1F1F5}\u{1F1F1}", name: "Poland" },
  { code: "CZ", dial: "+420", flag: "\u{1F1E8}\u{1F1FF}", name: "Czech Republic" },
  { code: "SK", dial: "+421", flag: "\u{1F1F8}\u{1F1F0}", name: "Slovakia" },
  { code: "UA", dial: "+380", flag: "\u{1F1FA}\u{1F1E6}", name: "Ukraine" },
  { code: "TR", dial: "+90", flag: "\u{1F1F9}\u{1F1F7}", name: "Turkey" },
  { code: "EG", dial: "+20", flag: "\u{1F1EA}\u{1F1EC}", name: "Egypt" },
  { code: "PT", dial: "+351", flag: "\u{1F1F5}\u{1F1F9}", name: "Portugal" },
  { code: "AR", dial: "+54", flag: "\u{1F1E6}\u{1F1F7}", name: "Argentina" },
  { code: "CL", dial: "+56", flag: "\u{1F1E8}\u{1F1F1}", name: "Chile" },
  { code: "CO", dial: "+57", flag: "\u{1F1E8}\u{1F1F4}", name: "Colombia" },
  { code: "NZ", dial: "+64", flag: "\u{1F1F3}\u{1F1FF}", name: "New Zealand" },
  { code: "IE", dial: "+353", flag: "\u{1F1EE}\u{1F1EA}", name: "Ireland" },
  { code: "CH", dial: "+41", flag: "\u{1F1E8}\u{1F1ED}", name: "Switzerland" },
  { code: "AT", dial: "+43", flag: "\u{1F1E6}\u{1F1F9}", name: "Austria" },
  { code: "BE", dial: "+32", flag: "\u{1F1E7}\u{1F1EA}", name: "Belgium" },
  { code: "FI", dial: "+358", flag: "\u{1F1EB}\u{1F1EE}", name: "Finland" },
  { code: "RO", dial: "+40", flag: "\u{1F1F7}\u{1F1F4}", name: "Romania" },
];

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

const errorInputStyle: React.CSSProperties = {
  ...inputStyle,
  border: "1px solid #ff6b6b",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  color: "#fff",
  marginBottom: "8px",
  display: "block",
};

const errorTextStyle: React.CSSProperties = {
  fontFamily: "'Poppins', sans-serif",
  fontSize: "12px",
  fontWeight: 400,
  color: "#ff6b6b",
  marginTop: "6px",
};

const panelBg =
  "radial-gradient(ellipse at 50% -40%, rgba(112,0,255,0.2) 0%, rgba(30,9,51,0.2) 100%)";

const EyeIcon = ({ open }: { open: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"
      stroke="#b982fb"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="3" stroke="#b982fb" strokeWidth="1.5" />
    {!open && <path d="M3 21L21 3" stroke="#b982fb" strokeWidth="1.5" strokeLinecap="round" />}
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
  const { billingData, setBillingData, validateBillingStep, fieldErrors, clearFieldError, agreedTerms, setAgreedTerms } = useCheckout();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validating, setValidating] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [phoneDropdownOpen, setPhoneDropdownOpen] = useState(false);
  const phoneDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (phoneDropdownRef.current && !phoneDropdownRef.current.contains(e.target as Node)) {
        setPhoneDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleContinue = async () => {
    setValidating(true);
    const valid = await validateBillingStep();
    setValidating(false);
    if (valid) {
      onContinue();
    }
  };

  const getStyle = (field: string) =>
    fieldErrors[field as keyof typeof fieldErrors] ? errorInputStyle : inputStyle;

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
              className="text-[24px] lg:text-[30px]"
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontWeight: 700,
                lineHeight: "33px",
                color: "#fff",
              }}
            >
              Customer Information
            </h2>

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
              value={billingData.email}
              onChange={(e) => {
                setBillingData({ email: e.target.value });
                clearFieldError("email");
              }}
              placeholder="Type Email.."
              style={getStyle("email")}
              className="placeholder-[#b982fb]"
            />
            {fieldErrors.email && <p style={errorTextStyle}>{fieldErrors.email}</p>}

            {/* Billing Details heading */}
            <h2
              className="text-[24px] lg:text-[30px]"
              style={{
                fontFamily: "'Cambay', sans-serif",
                fontWeight: 700,
                lineHeight: "33px",
                color: "#fff",
                marginTop: "50px",
              }}
            >
              Billing Details
            </h2>

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
                  value={billingData.firstName}
                  onChange={(e) => {
                    setBillingData({ firstName: e.target.value });
                    clearFieldError("firstName");
                  }}
                  placeholder="Type First Name.."
                  style={getStyle("firstName")}
                  className="placeholder-[#b982fb]"
                />
                {fieldErrors.firstName && <p style={errorTextStyle}>{fieldErrors.firstName}</p>}
              </div>
              <div className="flex-1">
                <label style={labelStyle}>Last Name</label>
                <input
                  type="text"
                  value={billingData.lastName}
                  onChange={(e) => {
                    setBillingData({ lastName: e.target.value });
                    clearFieldError("lastName");
                  }}
                  placeholder="Type Last Name.."
                  style={getStyle("lastName")}
                  className="placeholder-[#b982fb]"
                />
                {fieldErrors.lastName && <p style={errorTextStyle}>{fieldErrors.lastName}</p>}
              </div>
            </div>

            {/* Phone */}
            <div style={{ marginTop: "30px" }}>
              <label style={labelStyle}>Phone</label>
              <div
                className="flex items-center w-full"
                style={{ ...getStyle("phone"), padding: 0, position: "relative" }}
                ref={phoneDropdownRef}
              >
                {/* Flag + dial code button */}
                <button
                  type="button"
                  onClick={() => setPhoneDropdownOpen(!phoneDropdownOpen)}
                  className="flex items-center gap-[6px] shrink-0 cursor-pointer"
                  style={{
                    padding: "0 12px",
                    height: "100%",
                    borderRight: "0.5px solid #b982fb",
                    background: "transparent",
                    border: "none",
                    borderRightStyle: "solid",
                    borderRightWidth: "0.5px",
                    borderRightColor: "#b982fb",
                  }}
                >
                  <span style={{ fontSize: "20px", lineHeight: 1 }}>{selectedCountry.flag}</span>
                  <DropdownArrow />
                </button>

                {/* Dropdown list */}
                {phoneDropdownOpen && (
                  <div
                    className="absolute left-0 w-full overflow-y-auto z-50"
                    style={{
                      top: "56px",
                      maxHeight: "240px",
                      borderRadius: "8px",
                      border: "0.5px solid #b982fb",
                      background: "#1b092e",
                    }}
                  >
                    {COUNTRIES.map((c) => (
                      <div
                        key={c.code}
                        onClick={() => {
                          setSelectedCountry(c);
                          setPhoneDropdownOpen(false);
                          // Update phone with new dial code
                          const currentNum = billingData.phone.replace(/^\+\d+\s*/, "");
                          setBillingData({
                            phone: currentNum ? `${c.dial}${currentNum}` : c.dial,
                            country: c.code,
                          });
                          clearFieldError("phone");
                          clearFieldError("country");
                        }}
                        className="flex items-center gap-[10px] cursor-pointer"
                        style={{
                          padding: "10px 14px",
                          fontFamily: "'Poppins', sans-serif",
                          fontSize: "14px",
                          color: "#fff",
                          background: selectedCountry.code === c.code ? "rgba(167,112,225,0.2)" : "transparent",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background = "rgba(167,112,225,0.3)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.background =
                            selectedCountry.code === c.code ? "rgba(167,112,225,0.2)" : "transparent";
                        }}
                      >
                        <span style={{ fontSize: "18px" }}>{c.flag}</span>
                        <span>{c.name}</span>
                        <span style={{ color: "#b982fb", marginLeft: "auto" }}>{c.dial}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Phone number input */}
                <input
                  type="tel"
                  value={billingData.phone}
                  onChange={(e) => {
                    setBillingData({ phone: e.target.value });
                    clearFieldError("phone");
                  }}
                  placeholder={selectedCountry.dial}
                  className="placeholder-[#b982fb] bg-transparent outline-none flex-1"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    color: "#fff",
                    border: "none",
                    padding: "15px 20px",
                    height: "100%",
                  }}
                />
              </div>
              {fieldErrors.phone && <p style={errorTextStyle}>{fieldErrors.phone}</p>}
            </div>

            {/* Country + Language */}
            <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[28px]" style={{ marginTop: "30px" }}>
              <div className="flex-1">
                <label style={labelStyle}>Country</label>
                <div
                  className="flex items-center justify-between w-full"
                  style={getStyle("country")}
                >
                  <select
                    value={billingData.country}
                    onChange={(e) => {
                      setBillingData({ country: e.target.value });
                      clearFieldError("country");
                      // Sync the phone dropdown flag
                      const match = COUNTRIES.find((c) => c.code === e.target.value);
                      if (match) setSelectedCountry(match);
                    }}
                    className="bg-transparent outline-none flex-1 appearance-none cursor-pointer"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "16px",
                      color: billingData.country ? "#fff" : "#b982fb",
                      border: "none",
                      padding: 0,
                    }}
                  >
                    <option value="" style={{ background: "#1b092e" }}>Select Country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c.code} value={c.code} style={{ background: "#1b092e" }}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <DropdownArrow />
                </div>
                {fieldErrors.country && <p style={errorTextStyle}>{fieldErrors.country}</p>}
              </div>
              <div className="flex-1">
                <label style={labelStyle}>Language</label>
                <div
                  className="flex items-center justify-between w-full"
                  style={getStyle("language")}
                >
                  <select
                    value={billingData.language}
                    onChange={(e) => {
                      setBillingData({ language: e.target.value });
                      clearFieldError("language");
                    }}
                    className="bg-transparent outline-none flex-1 appearance-none cursor-pointer"
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "16px",
                      color: billingData.language ? "#fff" : "#b982fb",
                      border: "none",
                      padding: 0,
                    }}
                  >
                    <option value="" style={{ background: "#1b092e" }}>Select Language</option>
                    <option value="EN" style={{ background: "#1b092e" }}>English</option>
                    <option value="ES" style={{ background: "#1b092e" }}>Spanish</option>
                    <option value="SK" style={{ background: "#1b092e" }}>Slovak</option>
                    <option value="UK" style={{ background: "#1b092e" }}>Ukrainian</option>
                  </select>
                  <DropdownArrow />
                </div>
                {fieldErrors.language && <p style={errorTextStyle}>{fieldErrors.language}</p>}
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
                  style={{ ...getStyle("password"), cursor: "text" }}
                >
                  <input
                    type={showPassword ? "text" : "password"}
                    value={billingData.password}
                    onChange={(e) => {
                      setBillingData({ password: e.target.value });
                      clearFieldError("password");
                    }}
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
                    <EyeIcon open={showPassword} />
                  </button>
                </div>
                {fieldErrors.password && <p style={errorTextStyle}>{fieldErrors.password}</p>}
              </div>
              <div className="flex-1">
                <label style={labelStyle}>Confirm Password</label>
                <div
                  className="flex items-center justify-between w-full"
                  style={{ ...getStyle("confirmPassword"), cursor: "text" }}
                >
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={billingData.confirmPassword}
                    onChange={(e) => {
                      setBillingData({ confirmPassword: e.target.value });
                      clearFieldError("confirmPassword");
                    }}
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
                    <EyeIcon open={showConfirmPassword} />
                  </button>
                </div>
                {fieldErrors.confirmPassword && <p style={errorTextStyle}>{fieldErrors.confirmPassword}</p>}
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
                  border: fieldErrors.terms ? "1px solid #ff6b6b" : "1px solid #b982fb",
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
            {fieldErrors.terms && <p style={{ ...errorTextStyle, marginTop: "8px" }}>{fieldErrors.terms}</p>}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <OrderSidebar
          onCtaClick={handleContinue}
          ctaText={
            <span className="text-[18px] lg:text-[22px]">
              {validating ? "Validating..." : "Continue"}
            </span>
          }
        />
      </div>
    </div>
  );
};
