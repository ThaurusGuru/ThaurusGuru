import { Button } from "../../../components/ui/button";

export const SponsorSection = () => {
  return (
    <section className="relative w-full min-h-[250px] md:min-h-[892px] py-8 md:py-16 overflow-visible md:overflow-hidden">
      {/* Main background image - bg-pml.png - covers entire section */}
      <img
        className="absolute inset-0 top-[-140px] md:top-0 w-full h-[200%] md:h-full object-contain z-0 filter-[blur(12px)] md:filter-[blur(25px)]"
        style={{
          borderRadius: '9.404px'
        }}
        alt="Background"
        src="/sponsor/bg-pml.png"
      />
      
      {/* Front image - frontpml.png - layered on top, covers full width */}
      <img
        className="absolute top-0 md:top-[100px] left-0 w-[487.562px] h-[200px] md:w-full md:h-auto object-cover md:object-contain z-10"
        alt="PML Front"
        src="/sponsor/frontpml.png"
      />
      
      {/* Content container */}
      <div className="relative max-w-[1440px] mx-auto px-0 md:px-[140px] pt-0 md:pt-32 z-20 flex flex-col items-center md:items-start md:block">
        {/* Header with logo */}
        <div className="flex items-center gap-2 md:gap-4 mb-2 md:mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] -ml-10 md:ml-0 -mt-4 md:mt-0">
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
        <p className="w-[240px] md:max-w-[400px] [font-family:'Cambay',Helvetica] font-normal text-white text-[10px] md:text-xl tracking-[0] leading-[14px] md:leading-7 mb-6 md:mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] text-left -ml-16 md:ml-0">
          Top performers trust PML. With Thaurus Guru&apos;s support,
          you&apos;re part of a winning league.
        </p>
        
        {/* CTA Button */}
        <div className="relative right-[112px] md:left-0">
          <Button className="flex w-[90px] md:w-[146px] h-[32px] md:h-[50px] px-[14px] md:px-[28px] py-[4px] justify-center items-center gap-[10px] rounded-[10px] border border-solid border-[#7A27EF] bg-[linear-gradient(104deg,#F6E6FF_-33.17%,#D692FF_16.49%,#8148ED_66.15%,#4829C3_115.81%,#090422_165.47%)] shadow-[inset_0_4px_14px_0_rgba(0,0,0,0.25)] hover:scale-105 transition-transform translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <span className="[text-shadow:0px_2px_4px_#00000040] text-[11px] md:text-base leading-[normal] [font-family:'Cambay',Helvetica] font-bold text-white tracking-[0]">
              Get Started
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
