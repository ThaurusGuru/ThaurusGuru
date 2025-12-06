import { ChevronDownIcon, GlobeIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { BuildSection } from "./sections/BuildSection";
import { CalculatorSection } from "./sections/CalculatorSection";
import { ComparisonTableSection } from "./sections/ComparisonTableSection";
import { DiscordSection } from "./sections/DiscordSection";
import { FAQsSection } from "./sections/FAQsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { MainContentSection } from "./sections/MainContentSection";
import { MediaSection } from "./sections/MediaSection";
import { PayoutsSection } from "./sections/PayoutsSection";
import { PricingSection } from "./sections/PricingSection";
import { SponsorSection } from "./sections/SponsorSection";
import "../index.css"

const navItems = [
  { label: "Home", href: "#" },
  { label: "Trading", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Courses", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Blogs", href: "#" },
];

export const Homepage = () => {
  return (
    <div
      className="bg-[#1b082e] w-full min-w-[1440px] relative overflow-hidden"
      data-model-id="264:7829"
    >
      {/* Background decorative images */}
      <img
        className="absolute top-[10516px] left-[calc(50.00%_-_720px)] w-[1440px] h-[1113px] pointer-events-none"
        alt="Frame"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-180.svg"
      />

      <img
        className="absolute top-[1057px] left-0 w-[812px] h-[1839px] pointer-events-none"
        alt="Frame"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-179.svg"
      />

      <img
        className="absolute top-[7914px] left-0 w-[822px] h-[1839px] pointer-events-none"
        alt="Frame"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-183.svg"
      />

      <img
        className="absolute top-[3709px] left-[31px] w-[1409px] h-[2537px] pointer-events-none"
        alt="Frame"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-184.svg"
      />

      <img
        className="absolute top-0 left-0 w-[1440px] h-[1931px] pointer-events-none"
        alt="Frame"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-169.svg"
      />

      <img
        className="absolute top-[2703px] left-0 w-[1440px] h-[2018px] pointer-events-none"
        alt="Frame"
        src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-182.svg"
      />

      {/* Liquid Glass Header - STRONG BLUR WITH INLINE STYLES */}
      <header className="fixed top-[41px] left-[calc(50.00%_-_667px)] z-50 w-[1335px] h-16 translate-y-[-1rem] animate-fade-in opacity-0">
        <nav 
          className="relative flex items-center justify-center gap-24 h-full 
          bg-[rgba(255,255,255,0.1)]
          rounded-[10px] 
          border border-[rgba(255,255,255,0.3)]
          shadow-[0_8px_32px_0_rgba(31,38,135,0.4)]
          before:content-[''] before:absolute before:inset-0 before:rounded-[10px] 
          before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-white/10
          before:pointer-events-none
          after:content-[''] after:absolute after:inset-0 after:rounded-[10px]
          after:shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-2px_4px_rgba(0,0,0,0.2)]
          after:pointer-events-none
          hover:bg-[rgba(255,255,255,0.15)]
          hover:border-[rgba(255,255,255,0.4)]
          hover:shadow-[0_12px_40px_0_rgba(168,85,247,0.5)]
          transition-all duration-500"
          style={{
            backdropFilter: 'blur(60px) saturate(200%) brightness(1.2)',
            WebkitBackdropFilter: 'blur(60px) saturate(200%) brightness(1.2)',
            willChange: 'backdrop-filter',
          }}
        >
          
          {/* Logo */}
          <img
            className="relative z-10 w-[157px] h-12 object-cover drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
            alt="Logo"
            src="https://c.animaapp.com/mishf4erVkDEuN/img/image-1-2.png"
          />

          {/* Navigation Items */}
          <ul className="relative z-10 inline-flex items-center justify-center gap-11">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="[font-family:'Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] 
                  drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]
                  transition-all duration-300 hover:text-purple-300 
                  hover:drop-shadow-[0_0_12px_rgba(168,85,247,1)]
                  hover:scale-110"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side actions */}
          <div className="relative z-10 inline-flex items-center gap-4">
            {/* Language selector */}
            <button className="inline-flex items-center gap-1.5 
              transition-all duration-300 hover:text-purple-300 
              hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]
              px-2 py-1 rounded-md hover:bg-white/15">
              <GlobeIcon className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
              <span className="[font-family:'Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                EN
              </span>
              <ChevronDownIcon className="w-3.5 h-3.5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
            </button>

            <div className="inline-flex items-center gap-4">
              {/* Web App Button with gradient */}
              <Button className="relative h-9 px-7 py-1 rounded-[5px] border-none overflow-hidden
                bg-gradient-to-r from-white via-[#dab6ff] to-white
                shadow-[0_4px_16px_0_rgba(218,182,255,0.5)]
                before:content-[''] before:absolute before:inset-[-2px] before:rounded-[5px] 
                before:p-[1px] before:bg-gradient-to-r before:from-[#ae98c5] before:to-[#4e00a0]
                before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] 
                before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]
                hover:scale-110 hover:shadow-[0_6px_24px_0_rgba(218,182,255,0.7)]
                transition-all duration-300">
                <span className="relative z-10 [font-family:'Cambay',Helvetica] font-normal text-[#1b092e] text-sm tracking-[0] leading-[normal]">
                  Web App
                </span>
              </Button>

              {/* Client Login Button with glassmorphism */}
              <Button 
                className="h-9 px-5 py-1 rounded-[5px] 
                bg-gradient-to-br from-[#431674]/80 via-[#331158]/60 to-[#1b092e]/80
                border border-[#5d1da0]/50
                shadow-[inset_0px_2px_8px_rgba(93,29,160,0.3),0_2px_8px_rgba(93,29,160,0.2)]
                hover:bg-gradient-to-br hover:from-[#431674] hover:via-[#331158] hover:to-[#1b092e]
                hover:border-[#7a27ef]
                hover:shadow-[0_4px_16px_0_rgba(93,29,160,0.5)]
                hover:scale-110 
                transition-all duration-300"
                style={{
                  backdropFilter: 'blur(16px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(150%)',
                }}
              >
                <span className="[font-family:'Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                  Client Login
                </span>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="relative w-full">
        <section className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <HeroSection />
        </section>

        <section className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <MainContentSection />
        </section>

        <section className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          <HowItWorksSection />
        </section>

        <section className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <PricingSection />
        </section>

        <section className="relative w-full">
          <PayoutsSection />
        </section>

        <section className="relative w-full">
          <BuildSection />
        </section>

        <section className="relative w-full">
          <CalculatorSection />
        </section>

        <section className="relative w-full">
          <ComparisonTableSection />
        </section>

        <section className="relative w-full">
          <SponsorSection />
        </section>

        <section className="relative w-full">
          <DiscordSection />
        </section>

        <section className="relative w-full">
          <MediaSection />
        </section>

        <section className="relative w-full">
          <FAQsSection />
        </section>

        <footer className="relative w-full">
          <FooterSection />
        </footer>
      </main>
    </div>
  );
};