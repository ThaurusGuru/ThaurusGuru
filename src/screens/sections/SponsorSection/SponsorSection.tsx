import { Button } from "../../../components/ui/button";

export const SponsorSection = () => {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[860px] py-8 md:py-16 overflow-hidden">
      {/* Main background image - full width */}
      <img
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto object-contain"
        alt="Background gradient"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group.png"
      />
      
      {/* Left decorative element */}
      <img
        className="absolute top-[120px] md:top-[250px] left-0 w-[200px] md:w-[397px] h-auto object-cover opacity-80"
        alt="Decorative element"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group-1.png"
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
            src="https://c.animaapp.com/mishf4erVkDEuN/img/image-4.png"
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
      
      {/* Fighter images - scaled proportionally for mobile */}
      <img
        className="absolute top-[90px] md:top-[180px] left-[50%] md:left-[807px] w-[183px] md:w-[366px] h-auto object-cover opacity-90"
        alt="Fighter 1"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group-2.png"
      />
      
      <img
        className="absolute top-[95px] md:top-[190px] left-[15%] md:left-[390px] w-[256px] md:w-[513px] h-auto object-cover opacity-90"
        alt="Fighter 2"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group-3.png"
      />
      
      <img
        className="absolute top-[220px] md:top-[440px] left-[50%] md:left-[882px] w-[274px] md:w-[548px] h-auto object-cover opacity-90"
        alt="Fighter 3"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group-4.png"
      />
      
      <img
        className="absolute top-[120px] md:top-[240px] left-[60%] md:left-[1070px] w-[187px] md:w-[375px] h-auto object-contain opacity-100"
        alt="Fighter 4"
        src="/sponsor/img-1.png"
      />
    </section>
  );
};
