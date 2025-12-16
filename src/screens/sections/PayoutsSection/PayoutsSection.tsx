import React from "react";

const horizontalLines = [
  { top: "top-[60px]" },
  { top: "top-[119px]" },
  { top: "top-[178px]" },
  { top: "top-[237px]" },
  { top: "top-[296px]" },
  { top: "top-[355px]" },
];

const verticalLines = [
  { left: "left-0" },
  { left: "left-[60px]" },
  { left: "left-[120px]" },
  { left: "left-[180px]" },
  { left: "left-[240px]" },
  { left: "left-[300px]" },
  { left: "left-[360px]" },
  { left: "left-[420px]" },
  { left: "left-[480px]" },
  { left: "left-[540px]" },
  { left: "left-[600px]" },
  { left: "left-[660px]" },
  { left: "left-[720px]" },
  { left: "left-[780px]" },
  { left: "left-[840px]" },
  { left: "left-[900px]" },
  { left: "left-[960px]" },
  { left: "left-[1020px]" },
  { left: "left-[1080px]" },
  { left: "left-[1140px]" },
];

const notificationCards = [
  {
    top: "top-[379px]",
    left: "left-[578px]",
    rotation: "rotate-[-15deg]",
  },
  {
    top: "top-[363px]",
    left: "-left-11",
    rotation: "rotate-[15deg]",
  },
  {
    top: "top-[62px]",
    left: "left-[5px]",
    rotation: "rotate-[-22deg]",
  },
];

const certificates = [
  {
    left: "left-[calc(50.00%_-_574px)]",
    src: "/payouts/payout-certificate.svg",
  },
  {
    left: "left-[calc(50.00%_-_205px)]",
    src: "/payouts/payout-certificate.svg",
  },
  {
    left: "left-[calc(50.00%_+_164px)]",
    src: "/payouts/payout-certificate.svg",
  },
];

// Mobile notification cards with proper spacing
const mobileNotifications = [
  {
    top: "top-[210px]",
    left: "left-[10px]",
    rotation: "rotate-[-15deg]",
  },
  {
    top: "top-[-30px]",
    left: "right-[10px]",
    rotation: "rotate-[12deg]",
    isRight: true,
  },
  {
    top: "top-[480px]",
    left: "left-[-30px]",
    rotation: "rotate-[-18deg]",
  },
  {
    top: "top-[490px]",
    left: "right-[-20px]",
    rotation: "rotate-[15deg]",
    isRight: true,
  },
];

export const PayoutsSection = () => {
  return (
    <section 
      className="relative w-full py-20 md:py-20 py-12 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: 'url(/payouts/payouts-bg.png)' }}
    >
      {/* Desktop Version */}
      <div className="hidden md:block relative mx-auto max-w-[1316px] h-[592px]">
        <div className="absolute top-[116px] left-[calc(50.00%_-_658px)] w-[1316px] h-[360px] flex flex-col gap-[59px]">
          {horizontalLines.map((line, index) => (
            <img
              key={`horizontal-line-${index}`}
              className={`w-[1316px] h-px object-cover ${line.top}`}
              alt="Line"
              src="https://c.animaapp.com/mishf4erVkDEuN/img/line-41.svg"
            />
          ))}
        </div>

        <div className="absolute top-2.5 left-[calc(50.00%_-_570px)] w-[1140px] h-[582px]">
          {verticalLines.map((line, index) => (
            <img
              key={`vertical-line-${index}`}
              className={`absolute top-0 ${line.left} w-px h-[582px] object-cover`}
              alt="Line"
              src={
                index < 7
                  ? "https://c.animaapp.com/mishf4erVkDEuN/img/line-50.svg"
                  : "https://c.animaapp.com/mishf4erVkDEuN/img/line-43.svg"
              }
            />
          ))}

          {notificationCards.map((card, index) => (
            <div
              key={`notification-card-${index}`}
              className={`absolute ${card.top} ${card.left} w-[220px] h-16 flex gap-[11.7px] bg-[#00000000] rounded-[14px] ${card.rotation} shadow-[10px_10px_16px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]`}
            >
              <img
                className="mt-[9.0px] w-[46.3px] h-[46.3px] ml-[13.3px] rounded-md object-cover"
                alt="Rectangle"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/rectangle-145-3.png"
              />

              <div className="mt-[12.7px] w-[132px] h-[39px] relative">
                <div className="absolute top-px left-0 [font-family:'Blinker',Helvetica] font-normal text-[#b982fb] text-sm tracking-[0] leading-[normal]">
                  Tunde Okafor
                </div>

                <div className="absolute top-[18px] left-px [font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
                  Just got paid $345
                </div>

                <div className="absolute -top-px left-[82px] [font-family:'Amiri_Quran_Colored-Regular',Helvetica] font-normal text-[#b982fb] text-[8px] tracking-[0] leading-[normal]">
                  IN
                </div>

                <div className="absolute top-px left-28 [font-family:'Blinker',Helvetica] font-normal text-[#8b8b8b] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                  now
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute top-[86px] left-[1068px] w-[220px] h-16 flex gap-[11.7px] bg-[#00000000] rounded-[14px] rotate-[15deg] shadow-[10px_10px_16px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]">
          <img
            className="mt-[9.0px] w-[46.3px] h-[46.3px] ml-[13.3px] rounded-md object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/mishf4erVkDEuN/img/rectangle-145-3.png"
          />

          <div className="mt-[12.7px] w-[132px] h-[39px] relative">
            <div className="absolute top-px left-0 [font-family:'Blinker',Helvetica] font-normal text-[#b982fb] text-sm tracking-[0] leading-[normal]">
              Tunde Okafor
            </div>

            <div className="absolute top-[18px] left-px [font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">
              Just got paid $345
            </div>

            <div className="absolute -top-px left-[82px] [font-family:'Amiri_Quran_Colored-Regular',Helvetica] font-normal text-[#b982fb] text-[8px] tracking-[0] leading-[normal]">
              IN
            </div>

            <div className="absolute top-px left-28 [font-family:'Blinker',Helvetica] text-[#8b8b8b] text-[10px] whitespace-nowrap font-normal tracking-[0] leading-[normal]">
              now
            </div>
          </div>
        </div>

        <h2 className="absolute top-[60px] left-[calc(50.00%_-_251px)] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[42px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Payouts and Certificates
        </h2>

        {certificates.map((cert, index) => (
          <img
            key={`certificate-${index}`}
            className={`absolute top-[114px] ${cert.left} w-[421px] h-[310px] translate-y-[-1rem] animate-fade-in opacity-0`}
            style={
              {
                "--animation-delay": `${400 + index * 200}ms`,
              } as React.CSSProperties
            }
            alt="Rectangle"
            src={cert.src}
          />
        ))}
      </div>

      {/* Mobile Version */}
      <div className="md:hidden relative mx-auto px-4 w-full min-h-[900px] pb-20">
        <h2 className="text-center mb-12 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-3xl tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Payouts and Certificates
        </h2>

        <div className="relative w-full">
          {/* Grid Lines Background - More Visible */}
          <div className="absolute inset-0 w-full h-full overflow-hidden opacity-40">
            {/* Horizontal lines - More visible */}
            {[...Array(25)].map((_, index) => (
              <div
                key={`h-line-${index}`}
                className="absolute left-0 w-full h-[1px]"
                style={{ 
                  top: `${index * 55}px`,
                  background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(185,130,251,0.4) 50%, rgba(255,255,255,0.3) 100%)'
                }}
              />
            ))}
            {/* Vertical lines - More visible */}
            {[...Array(8)].map((_, index) => (
              <div
                key={`v-line-${index}`}
                className="absolute top-0 w-[1px] h-full"
                style={{ 
                  left: `${(index * 100) / 7}%`,
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(185,130,251,0.3) 50%, rgba(255,255,255,0.2) 100%)'
                }}
              />
            ))}
          </div>

          {/* Certificates - Stacked Vertically with more spacing */}
          <div className="relative space-y-8">
            {certificates.map((cert, index) => (
              <div
                key={`mobile-cert-${index}`}
                className="relative translate-y-[-1rem] animate-fade-in opacity-0"
                style={
                  {
                    "--animation-delay": `${400 + index * 200}ms`,
                  } as React.CSSProperties
                }
              >
                <img
                  className="w-full max-w-[320px] mx-auto h-auto block"
                  alt="Certificate"
                  src={cert.src}
                />
              </div>
            ))}
          </div>

          {/* Notification Cards - Positioned to avoid overlapping */}
          {mobileNotifications.map((card, index) => (
            <div
              key={`mobile-notification-${index}`}
              className={`absolute ${card.top} ${card.isRight ? card.left : card.left} w-[180px] h-14 flex gap-2.5 bg-[#00000000] rounded-[14px] ${card.rotation} shadow-[10px_10px_16px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] z-20`}
            >
              <img
                className="mt-2 w-10 h-10 ml-3 rounded-md object-cover flex-shrink-0"
                alt="Profile"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/rectangle-145-3.png"
              />

              <div className="mt-2.5 flex-1 relative">
                <div className="[font-family:'Blinker',Helvetica] font-normal text-[#b982fb] text-[11px] tracking-[0] leading-[normal]">
                  Tunde Okafor
                </div>

                <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-[11px] tracking-[0] leading-[normal] mt-0.5">
                  Just got paid $345
                </div>

                <div className="absolute top-0 right-2 [font-family:'Amiri_Quran_Colored-Regular',Helvetica] font-normal text-[#b982fb] text-[8px] tracking-[0] leading-[normal]">
                  IN
                </div>

                <div className="absolute top-0 right-[-14px] [font-family:'Blinker',Helvetica] font-normal text-[#8b8b8b] text-[9px] tracking-[0] leading-[normal] whitespace-nowrap">
                  now
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};