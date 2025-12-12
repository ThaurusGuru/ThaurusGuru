import { Button } from "../../../components/ui/button";

export const SponsorSection = () => {
  return (
    <section className="relative w-full min-h-[700px] py-16">
      {/* Main background image - full width */}
      <img
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto object-contain"
        alt="Background gradient"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group.png"
      />

      {/* Left decorative element */}
      <img
        className="absolute top-[100px] left-0 w-[397px] h-[526px] object-cover opacity-80"
        alt="Decorative element"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group-1.png"
      />


      {/* Content container */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-[140px] pt-32 z-20">
        {/* Header with logo */}
        <div className="flex items-center gap-4 mb-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h2 className="[font-family:'M_PLUS_2',Helvetica] font-normal text-white text-4xl md:text-5xl tracking-[0] leading-tight">
            Thaurus Guru × PML
          </h2>
          <img
            className="w-[140px] h-auto object-contain"
            alt="PML Logo"
            src="https://c.animaapp.com/mishf4erVkDEuN/img/image-4.png"
          />
        </div>

        {/* Description text with better visibility */}
        <p className="max-w-[400px] [font-family:'Cambay',Helvetica] font-normal text-white text-xl tracking-[0] leading-7 mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          Top performers trust PML. With Thaurus Guru&apos;s support,
          you&apos;re part of a winning league.
        </p>

        {/* CTA Button */}
        <Button className="h-[50px] w-[146px] px-7 py-1 rounded-[10px] border border-solid border-[#7a27ef] shadow-[inset_0px_4px_14px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] bg-[linear-gradient(159deg,rgba(246,230,255,1)_0%,rgba(214,146,255,1)_25%,rgba(129,72,237,1)_50%,rgba(72,41,195,1)_75%,rgba(9,4,34,1)_100%)] hover:scale-105 transition-transform translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <span className="[text-shadow:0px_2px_4px_#00000040] text-base leading-[normal] [font-family:'Cambay',Helvetica] font-bold text-white tracking-[0]">
            Get Started
          </span>
        </Button>
      </div>

      {/* Fighter images - layered */}
      <img
        className="absolute top-[180px] left-[807px] w-[366px] h-[377px] object-cover opacity-90"
        alt="Fighter 1"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group-2.png"
      />

      <img
        className="absolute top-[190px] left-[390px] w-[513px] h-[587px] object-cover opacity-90"
        alt="Fighter 2"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group-3.png"
      />

      <img
        className="absolute top-[440px] left-[772px] w-[538px] h-80 object-cover opacity-90"
        alt="Fighter 3"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group-4.png"
      />

      <img
        className="absolute top-[240px] left-[1104px] w-[314px] h-[307px] object-cover opacity-90"
        alt="Fighter 4"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/mask-group-5.png"
      />
    </section>
  );
};