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
    top: "top-[230px]",
    left: "left-[10px]",
    rotation: "rotate-[-15deg]",
  },
  {
    top: "top-[180px]",
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
      className="relative w-full pt-12 pb-4 md:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: 'url(/payouts/payouts-bg.png)' }}
    >
      {/* Top Gradient Blend */}
      <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#1b082e] to-transparent pointer-events-none z-10" />
      
      {/* Bottom Gradient Blend */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-[#1b082e] to-transparent pointer-events-none z-10" />
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
              className={`absolute ${card.top} ${card.left} flex w-[220px] h-[64px] justify-center items-start gap-[14.868px] rounded-[14px] ${card.rotation}`}
              style={{
                padding: '12.145px 16.639px 11.855px 16.494px',
                background: 'rgba(27, 9, 46, 0.6)',
                boxShadow: '10px 10px 16px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.40), inset 1px 0 0 rgba(255, 255, 255, 0.32), inset 0 -1px 1px rgba(0, 0, 0, 0.13), inset -1px 0 1px rgba(0, 0, 0, 0.11)',
                backdropFilter: 'blur(2.0px) brightness(110%)',
                WebkitBackdropFilter: 'blur(2.0px) brightness(110%)'
              }}
            >
              <img
                className="w-[46.3px] h-[46.3px] rounded-md object-cover flex-shrink-0"
                alt="Rectangle"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/rectangle-145-3.png"
              />

              <div className="flex-1 relative">
                <div className="flex items-center gap-1">
                  <span className="[font-family:'Blinker',Helvetica] font-normal text-[#b982fb] text-sm tracking-[0] leading-[normal]">
                    Tunde Okafor
                  </span>
                  <span className="[font-family:'Amiri_Quran_Colored-Regular',Helvetica] font-normal text-[#b982fb] text-[8px] tracking-[0] leading-[normal]">
                    IN
                  </span>
                </div>

                <div className="absolute top-[18px] left-0 [font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                  Just got paid $345
                </div>

                <div className="absolute top-0 right-0 [font-family:'Blinker',Helvetica] font-normal text-[#8b8b8b] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                  now
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="absolute top-[86px] left-[1068px] flex w-[220px] h-[64px] justify-center items-start gap-[14.868px] rounded-[14px] rotate-[15deg]"
          style={{
            padding: '12.145px 16.639px 11.855px 16.494px',
            background: 'rgba(27, 9, 46, 0.6)',
            boxShadow: '10px 10px 16px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.40), inset 1px 0 0 rgba(255, 255, 255, 0.32), inset 0 -1px 1px rgba(0, 0, 0, 0.13), inset -1px 0 1px rgba(0, 0, 0, 0.11)',
            backdropFilter: 'blur(2.0px) brightness(110%)',
            WebkitBackdropFilter: 'blur(2.0px) brightness(110%)'
          }}
        >
          <img
            className="w-[46.3px] h-[46.3px] rounded-md object-cover flex-shrink-0"
            alt="Rectangle"
            src="https://c.animaapp.com/mishf4erVkDEuN/img/rectangle-145-3.png"
          />

          <div className="flex-1 relative">
            <div className="flex items-center gap-1">
              <span className="[font-family:'Blinker',Helvetica] font-normal text-[#b982fb] text-sm tracking-[0] leading-[normal]">
                Tunde Okafor
              </span>
              <span className="[font-family:'Amiri_Quran_Colored-Regular',Helvetica] font-normal text-[#b982fb] text-[8px] tracking-[0] leading-[normal]">
                IN
              </span>
            </div>

            <div className="absolute top-[18px] left-0 [font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
              Just got paid $345
            </div>

            <div className="absolute top-0 right-0 [font-family:'Blinker',Helvetica] text-[#8b8b8b] text-[10px] whitespace-nowrap font-normal tracking-[0] leading-[normal]">
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
        <h2 className="text-center mb-20 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-3xl tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Payouts and Certificates
        </h2>

        <div className="relative w-full">
          {/* Grid Lines Background - Same as Desktop */}
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            {/* Horizontal lines - Using same SVG as desktop */}
            {[...Array(25)].map((_, index) => {
              // Skip first and last lines on mobile
              if (index === 0 || index === 24) return null;
              return (
                <img
                  key={`h-line-${index}`}
                  className="absolute left-0 w-full h-px object-cover opacity-40"
                  style={{ top: `${index * 60}px` }}
                  alt="Line"
                  src="https://c.animaapp.com/mishf4erVkDEuN/img/line-41.svg"
                />
              );
            })}
            {/* Vertical lines - Using same SVG as desktop */}
            {[...Array(8)].map((_, index) => (
              <img
                key={`v-line-${index}`}
                className="absolute top-0 w-1px h-[1200px] object-cover opacity-40"
                style={{ 
                  left: `${(index * 100) / 7}%`,
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
                }}
                alt="Line"
                src={
                  index < 4
                    ? "https://c.animaapp.com/mishf4erVkDEuN/img/line-50.svg"
                    : "https://c.animaapp.com/mishf4erVkDEuN/img/line-43.svg"
                }
              />
            ))}
          </div>

          {/* Certificates - Stacked Vertically with reduced spacing */}
          <div className="relative space-y-1 mt-8">
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
              className={`absolute ${card.top} ${card.isRight ? card.left : card.left} flex w-[160px] h-[50px] justify-center items-start gap-2.5 rounded-[14px] ${card.rotation} z-20`}
              style={{
                padding: '8px 12px',
                background: 'rgba(27, 9, 46, 0.6)',
                boxShadow: '10px 10px 16px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.40), inset 1px 0 0 rgba(255, 255, 255, 0.32), inset 0 -1px 1px rgba(0, 0, 0, 0.13), inset -1px 0 1px rgba(0, 0, 0, 0.11)',
                backdropFilter: 'blur(2.0px) brightness(110%)',
                WebkitBackdropFilter: 'blur(2.0px) brightness(110%)'
              }}
            >
              <img
                className="w-9 h-9 rounded-md object-cover flex-shrink-0"
                alt="Profile"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/rectangle-145-3.png"
              />

              <div className="flex-1 relative">
                <div className="flex items-center gap-1">
                  <span className="[font-family:'Blinker',Helvetica] font-normal text-[#b982fb] text-[11px] tracking-[0] leading-[normal]">
                    Tunde Okafor
                  </span>
                  <span className="[font-family:'Amiri_Quran_Colored-Regular',Helvetica] font-normal text-[#b982fb] text-[8px] tracking-[0] leading-[normal]">
                    IN
                  </span>
                </div>

                <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-[11px] tracking-[0] leading-[normal] mt-0.5 whitespace-nowrap">
                  Just got paid $345
                </div>

                <div className="absolute top-0 right-1 [font-family:'Blinker',Helvetica] font-normal text-[#8b8b8b] text-[9px] tracking-[0] leading-[normal] whitespace-nowrap">
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