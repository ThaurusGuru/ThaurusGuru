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
    subtitle: "Try it now!",
  },
  {
    title: (
      <>
        Zero
        <br />
        Commisions
      </>
    ),
    subtitle: "Learn More",
  },
];

const reviewImages = [
  "/hero/Trustpilot.svg",
  "/hero/TTP.svg",
];

export const HeroSection = () => {
  return (
    <section className="relative w-full px-[105px] pt-[220px] pb-[100px] overflow-hidden">
      {/* Hero Background Image with line effects - POSITIONED LOWER */}
      <div className="absolute inset-0  right-0 bottom-[-100px] w-full h-full pointer-events-none">
        <img
          src="/hero/hero-bg.png"
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover object-top mix-blend-screen"
          style={{ opacity: 1 }}
        />
        {/* Minimal gradient - only at bottom for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b082e]/60" />
      </div>

      <div className="relative z-10 grid grid-cols-2 gap-16">
        {/* Left Column - Content */}
        <div className="flex flex-col">
          {/* Badge with violet gradient and white border */}
          <Badge className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] 
            inline-flex items-center justify-center self-start gap-2.5 px-5 py-2 h-auto 
            rounded-full border-2 border-white/60
            bg-gradient-to-r from-[#2c115c] via-[#47107b] to-[#4d0d8d]
            shadow-lg shadow-purple-500/30">
            <span className="[font-family:'Blinker',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              Get funded today!
            </span>
          </Badge>

          {/* Main Heading - Bigger and more spacious */}
          <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] 
            mt-10 [font-family:'M_PLUS_2',Helvetica] font-normal text-white text-[62px] 
            tracking-[-0.02em] leading-[1.15]">
            Master the Markets
            <br />
            with Thaurus Guru
          </h1>

          {/* Feature Cards Row */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] 
  flex gap-6 mt-10">
  {featureCards.map((card, index) => (
    <div
      key={index}
      className="relative h-[90px] w-[140px] rounded-xl overflow-hidden
      shadow-[0_8px_32px_0_rgba(96,32,163,0.35)]
      hover:scale-105 transition-all duration-300"
    >
      {/* Background Image */}
      <img
        src="/hero/card.png"
        alt="Card Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Text Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center gap-2 p-3 h-full">
        <div className="[font-family:'Cambay',Helvetica] font-normal text-white text-[16px] leading-[18px]">
          {card.title}
        </div>
        <div className="[font-family:'Cambay',Helvetica] text-[#9D63D9] font-normal text-[8px] leading-normal">
          {card.subtitle}
        </div>
      </div>
    </div>
  ))}
</div>

          {/* Description */}
          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] 
            mt-8 [font-family:'Cambay',Helvetica] font-normal text-[#c193f1] text-[15px] 
            tracking-[0] leading-relaxed">
            Unlock your trading potential with powerful AI tools and funded challenges.
            <br />
            Learn, trade, and grow with expert support at every step.
          </p>

          {/* CTA Buttons */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] 
            flex flex-wrap items-center gap-4 mt-10">
            <Button className="h-12 px-7 rounded-lg 
              bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#7c3aed]
              border-none
              shadow-[0_4px_24px_0_rgba(168,85,247,0.5)] 
              hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.7)] 
              hover:scale-105 transition-all duration-300
              group">
              <span className="[font-family:'Cambay',Helvetica] font-semibold text-white text-[15px] tracking-[0] leading-[normal]">
                Start your Challenge
              </span>
              <img 
                src="/hero/btn-arrow.svg" 
                alt="Arrow" 
                className=" w-10 h-6 group-hover:translate-x-1 transition-transform"
              />
            </Button>

            <Button
              variant="outline"
              className="h-12 px-7 rounded-lg 
              bg-transparent backdrop-blur-sm
              border border-[#7a27ef]/50 
              hover:bg-white/5 hover:border-[#7a27ef] 
              hover:shadow-[0_4px_24px_0_rgba(122,39,239,0.3)]
              transition-all duration-300">
              <span className="[font-family:'Cambay',Helvetica] font-bold text-white text-[15px] tracking-[0] leading-[normal]">
                Try pay as you go challenge
              </span>
            </Button>
          </div>

          {/* Review Images */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] 
            flex gap-4 mt-14">
            {reviewImages.map((imageSrc, index) => (
              <img
                key={index}
                src={imageSrc}
                alt={`Review ${index + 1}`}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        {/* Right Column - Video/Dashboard with Pure Glass - shifted right and down */}
<div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] 
  flex items-center justify-end mb-28 mr-8">
  <div className="relative w-[600px] h-[340px] rounded-2xl overflow-hidden">
    {/* Pure Glass effect container - NO colored background */}
    <div className="absolute inset-0 
      bg-white/[0.03] backdrop-blur-2xl 
      border border-white/20 
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37),inset_0_1px_1px_rgba(255,255,255,0.1)]">
    </div>
    
    {/* Content - Video placeholder with minimal styling */}
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Video play button */}
      <div className="w-16 h-16 rounded-full 
        bg-white/10 backdrop-blur-md 
        border border-white/30
        flex items-center justify-center
        hover:bg-white/20 hover:scale-110 transition-all duration-300
        cursor-pointer
        shadow-[0_4px_24px_0_rgba(255,255,255,0.1)]">
        <div className="w-0 h-0 
          border-t-[10px] border-t-transparent 
          border-l-[16px] border-l-white 
          border-b-[10px] border-b-transparent 
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
    </section>
  );
};