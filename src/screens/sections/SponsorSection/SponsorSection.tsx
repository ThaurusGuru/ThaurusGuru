import { Button } from "../../../components/ui/button";

export const SponsorSection = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[892px] py-8 md:py-16 overflow-hidden">
      {/* Main background image - bg-pml.png - covers entire section */}
      <img
        className="absolute inset-0 w-full h-full object-contain z-0"
        style={{
          borderRadius: '9.404px',
          filter: 'blur(25px)'
        }}
        alt="Background"
        src="/sponsor/bg-pml.png"
      />
      
      {/* Front image - frontpml.png - layered on top, covers full width */}
      <img
        className="absolute top-[50px] md:top-[100px] left-0 w-full h-auto object-contain z-10"
        alt="PML Front"
        src="/sponsor/frontpml.png"
      />
      
      {/* Content container */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-[140px] pt-16 md:pt-32 z-20">
        {/* Header with logo */}
        <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="[font-family:'M_PLUS_2',Helvetica] font-normal text-white text-xl md:text-5xl tracking-[0] leading-tight">
            Thaurus Guru × PML
          </h2>
          <img
            className="w-[70px] md:w-[140px] h-auto object-contain"
            alt="PML Logo"
            src="/sponsor/pnml-logo.png"
          />
        </div>
        
        {/* Description text */}
        <p className="max-w-[280px] md:max-w-[400px] [font-family:'Cambay',Helvetica] font-normal text-white text-sm md:text-xl tracking-[0] leading-5 md:leading-7 mb-6 md:mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Top performers trust PML. With Thaurus Guru&apos;s support,
          you&apos;re part of a winning league.
        </p>
        
        {/* CTA Button */}
        <Button className="h-[40px] md:h-[50px] w-[120px] md:w-[146px] px-5 md:px-7 py-1 rounded-[10px] border border-solid border-[#7a27ef] shadow-[inset_0px_4px_14px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] bg-[linear-gradient(159deg,rgba(246,230,255,1)_0%,rgba(214,146,255,1)_25%,rgba(129,72,237,1)_50%,rgba(72,41,195,1)_75%,rgba(9,4,34,1)_100%)] hover:scale-105 transition-transform translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <span className="[text-shadow:0px_2px_4px_#00000040] text-sm md:text-base leading-[normal] [font-family:'Cambay',Helvetica] font-bold text-white tracking-[0]">
            Get Started
          </span>
        </Button>
      </div>
    </section>
  );
};
