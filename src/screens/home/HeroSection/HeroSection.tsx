import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";

const featureCards = [
  {
    title: (
      <>
        Meta
        <br />
        Trader 5
      </>
    ),
    subtitle: "Now available",
  },
  {
    title: (
      <>
        24/7
        <br />
        Support
      </>
    ),
    subtitle: "Learn More",
  },
  {
    title: (
      <>
        Zero
        <br />
        Commisions
      </>
    ),
    subtitle: "Start Trading today!",
  },
];

const reviewImages = [
  "/hero/Trustpilot.svg",
  "/hero/TTP.svg",
];

export const HeroSection = () => {
  return (
    <section className="relative w-full px-4 md:px-8 lg:px-[105px] pt-[130px] md:pt-[180px] lg:pt-[220px] pb-[40px] md:pb-[80px] lg:pb-[100px] overflow-hidden">
      {/* Hero Background Image with line effects */}
      <div className="absolute inset-0 right-0 bottom-[-100px] w-full h-full pointer-events-none">
        <img
          src="/hero/hero-bg.avif" 
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover object-top mix-blend-screen"
          style={{ opacity: 1 }}
        />
        {/* Minimal gradient - only at bottom for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b082e]" />
      </div>

      <div className="relative z-10 lg:max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center lg:items-start order-1 lg:order-1">
            {/* Badge with violet gradient and white border */}
            <Badge className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] 
              inline-flex items-center justify-center self-center lg:self-start gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 h-auto 
              rounded-full border border-white/60 sm:border-2
              bg-gradient-to-r from-[#2c115c] via-[#47107b] to-[#4d0d8d]
              shadow-lg shadow-purple-500/30">
              <span className="[font-family:'Blinker',Helvetica] font-medium text-white text-[10px] sm:text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                Get funded today!
              </span>
            </Badge>

            {/* Main Heading - Mobile centered, Desktop left-aligned */}
            <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] 
              mt-4 sm:mt-6 md:mt-8 lg:mt-10 [font-family:'M_PLUS_2',Helvetica] font-normal text-white 
              text-[24px] sm:text-[40px] md:text-[52px] lg:text-[62px] 
              tracking-[-0.02em] leading-[1.4] sm:leading-[1.15]
              text-center lg:text-left w-full max-w-[235px] sm:max-w-none">
              Master the Markets
              <br />
              with Thaurus Guru
            </h1>

            {/* Description - Centered block with justified text on mobile, left on desktop */}
            <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms] 
              mt-3 sm:mt-5 md:mt-7 lg:mt-8 [font-family:'Cambay',Helvetica] font-normal text-[#c193f1] 
              text-[12px] sm:text-[14px] md:text-[15px] tracking-[0] leading-[1.5] sm:leading-relaxed 
              w-full max-w-[249px] sm:max-w-[400px] lg:max-w-[540px]
              text-justify mx-auto lg:text-left lg:mx-0">
              Unlock your trading potential with powerful AI tools and funded challenges. Learn, trade, and grow with expert support at every step.
            </p>

            {/* Feature Cards Row - Centered on mobile, left on desktop */}
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] 
              grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-4 sm:mt-6 md:mt-8 lg:mt-10 
              w-full max-w-[280px] sm:max-w-[360px] md:max-w-[460px]
              mx-auto lg:mx-0 lg:-ml-2">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="relative h-[65px] sm:h-[80px] md:h-[85px] lg:h-[90px] 
                  hover:scale-105 transition-all duration-300"
                >
                  {/* Background Image */}
                  <img
                    src="/hero/card.svg"
                    alt="Card Background"
                    className="absolute inset-0 w-full h-full object-fill"
                  />
                  
                  {/* Text Overlay */}
                  <div className="relative z-10 flex flex-col items-start justify-center gap-0.5 sm:gap-1 md:gap-2 p-1.5 sm:p-2 md:p-3 h-full ml-3">
                    <div className="[font-family:'Cambay',Helvetica] font-normal text-white text-[11px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[13px] sm:leading-[16px] md:leading-[17px] lg:leading-[18px]">
                      {card.title}
                    </div>
                    <div className="[font-family:'Cambay',Helvetica] text-[#9D63D9] font-normal text-[5px] sm:text-[7px] md:text-[8px] leading-normal">
                      {card.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Centered on mobile, left on desktop */}
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] 
              flex flex-col sm:flex-row flex-wrap items-center lg:items-start gap-3 md:gap-4 mt-5 sm:mt-6 md:mt-8 lg:mt-10 w-full">
              <Button className="flex w-[196px] lg:w-[228px] h-[40px] lg:h-[50px] px-[30px] justify-center items-center gap-[-18px] lg:gap-[10px] rounded-[6px] lg:rounded-[10px]
                border border-[#7A27EF]
                bg-[linear-gradient(104deg,#F6E6FF_-33.17%,#D692FF_16.49%,#8148ED_66.15%,#4829C3_115.81%,#090422_165.47%)]
                shadow-[0_4px_14px_0_rgba(0,0,0,0.25)_inset] 
                hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.7)] 
                hover:scale-105 transition-all duration-300
                group">
                <span className="w-[152px] h-[18px] lg:h-[20px] shrink-0 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.25)] [font-family:'Cambay',Helvetica] font-bold text-[13px] lg:text-[16px] leading-[normal]">
                  Start your Challenge
                </span>
                <div className="flex w-[28px] lg:w-[34px] h-[20px] lg:h-[23px] px-[7px] py-px items-center gap-[10px] shrink-0 rounded-[30px] bg-white group-hover:scale-110 transition-transform">
                  <img 
                    src="/solar_arrow-up-linear.svg" 
                    alt="Arrow" 
                    className="w-auto h-auto"
                  />
                </div>
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto max-w-[196px] sm:max-w-none h-10 sm:h-11 md:h-12 px-5 md:px-7 rounded-md sm:rounded-lg 
                bg-gradient-to-r from-[rgba(0,0,0,0.20)] to-[rgba(122,39,239,0.20)] backdrop-blur-sm
                border border-[#5D1DA0] 
                shadow-[0_4px_12.3px_0_#2D0953_inset]
                hover:bg-white/5 hover:border-[#7a27ef] 
                hover:shadow-[0_4px_24px_0_rgba(122,39,239,0.3)]
                transition-all duration-300">
                <span className="[font-family:'Cambay',Helvetica] font-bold text-white text-[12px] sm:text-[13px] md:text-[15px] tracking-[0] leading-[normal]">
                  Try pay as you go challenge
                </span>
              </Button>
            </div>

            {/* Review Images - Centered on mobile, left on desktop */}
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] 
              flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10 lg:mt-14 w-full">
              {reviewImages.map((imageSrc, index) => (
                <img
                  key={index}
                  src={imageSrc}
                  alt={`Review ${index + 1}`}
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                />
              ))}
            </div>
          </div>

          {/* Right Column - Video/Dashboard */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] 
            flex items-center justify-center lg:justify-end order-2 lg:order-2 mt-6 lg:mt-0">
            <div className="relative w-full max-w-[270px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] 
              h-[162px] sm:h-[240px] md:h-[320px] lg:h-[340px] rounded-xl sm:rounded-2xl overflow-hidden">
              {/* Pure Glass effect container */}
              <div className="absolute inset-0 
                bg-white/[0.03] backdrop-blur-2xl 
                border border-white/20 
                shadow-[0_8px_32px_0_rgba(31,38,135,0.37),inset_0_1px_1px_rgba(255,255,255,0.1)]">
              </div>
              
              {/* Content - Video placeholder */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Video play button */}
                <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full 
                  bg-white/10 backdrop-blur-md 
                  border border-white/30
                  flex items-center justify-center
                  hover:bg-white/20 hover:scale-110 transition-all duration-300
                  cursor-pointer
                  shadow-[0_4px_24px_0_rgba(255,255,255,0.1)]">
                  <div className="w-0 h-0 
                    border-t-[8px] sm:border-t-[9px] md:border-t-[10px] border-t-transparent 
                    border-l-[12px] sm:border-l-[14px] md:border-l-[16px] border-l-white 
                    border-b-[8px] sm:border-b-[9px] md:border-b-[10px] border-b-transparent 
                    ml-1" />
                </div>
              </div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 
                bg-gradient-to-r from-transparent via-white/5 to-transparent 
                -skew-x-12 animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};