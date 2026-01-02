import { ChevronDownIcon, GlobeIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { BuildSection } from "./sections/BuildSection";
import { CalculatorSection } from "./sections/CalculatorSection";
import { CollaborationSection } from "./sections/CollaborationSection";
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
import "../index.css";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Trading", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Affiliate", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Blogs", href: "#" },
];

export const Homepage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden"
      data-model-id="264:7829"
    >
      {/* Background decorative images */}
      {/* <img
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
      /> */}

      {/* PREMIUM LIQUID GLASS HEADER - ELEGANT & BEAUTIFUL */}
      <header className="fixed top-[20px] sm:top-[41px] left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-32px)] sm:w-[calc(100%-80px)] lg:w-[1440px] h-[46px] sm:h-16">
        <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] opacity-90" />
        
        <nav 
          className="relative flex items-center justify-between h-full px-4 sm:px-6 lg:px-11
          rounded-[10px] 
          border border-white/[0.18]
          shadow-[0_8px_32px_rgba(168,85,247,0.15),0_0_0_1px_rgba(255,255,255,0.1)_inset,0_2px_0_rgba(255,255,255,0.2)_inset]
          hover:border-white/[0.25]
          hover:shadow-[0_12px_48px_rgba(168,85,247,0.25),0_0_0_1px_rgba(255,255,255,0.15)_inset,0_2px_0_rgba(255,255,255,0.3)_inset]
          transition-all duration-700 ease-out
          group"
          style={{
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          }}
        >
          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 rounded-[10px] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          </div>

          {/* Subtle inner glow */}
          <div className="absolute inset-[1px] rounded-[9px] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
          
          {/* Logo */}
          <img
            className="relative z-20 w-[100px] sm:w-[130px] lg:w-[157px] h-8 sm:h-10 lg:h-12 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
            transition-transform duration-300 hover:scale-105"
            alt="Logo"
            src="/thaurus logo.svg"
          />

          {/* Desktop Navigation Items - Hidden on mobile/tablet */}
          <ul className="hidden lg:inline-flex relative z-20 items-center justify-center gap-11">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="relative [font-family:'Cambay',Helvetica] font-normal text-white/90 text-sm tracking-[0] leading-[normal] 
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
                  transition-all duration-300
                  hover:text-white
                  hover:drop-shadow-[0_0_16px_rgba(168,85,247,0.8)]
                  hover:scale-105
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px]
                  after:bg-gradient-to-r after:from-purple-400 after:to-pink-400
                  after:transition-all after:duration-300
                  hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side actions - Desktop */}
          <div className="hidden lg:inline-flex relative z-20 items-center gap-4">
            {/* Language selector */}
            <button className="inline-flex items-center gap-1.5 
              px-3 py-1.5 rounded-lg
              bg-white/[0.05]
              border border-white/[0.1]
              transition-all duration-300 
              hover:bg-white/[0.1]
              hover:border-white/[0.2]
              hover:shadow-[0_4px_16px_rgba(168,85,247,0.3)]
              hover:scale-105
              group/lang">
              <GlobeIcon className="w-5 h-5 text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]
              transition-all duration-300 group-hover/lang:text-white group-hover/lang:rotate-12" />
              <span className="[font-family:'Cambay',Helvetica] font-normal text-white/80 text-sm tracking-[0] leading-[normal]
              transition-all duration-300 group-hover/lang:text-white">
                EN
              </span>
              <ChevronDownIcon className="w-3.5 h-3.5 text-white/80
              transition-all duration-300 group-hover/lang:text-white group-hover/lang:rotate-180" />
            </button>

            <div className="inline-flex items-center gap-4">
              {/* Web App Button - Elegant gradient */}
              <Button className="relative h-9 px-7 py-1 rounded-lg border-none overflow-hidden
                bg-gradient-to-r from-white via-[#e9d5ff] to-white
                shadow-[0_4px_20px_rgba(168,85,247,0.4),0_0_0_1px_rgba(139,92,246,0.3)_inset]
                hover:shadow-[0_8px_32px_rgba(168,85,247,0.6),0_0_0_1px_rgba(139,92,246,0.5)_inset]
                hover:scale-105
                transition-all duration-300
                group/webapp">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/20 to-purple-400/0 
                translate-x-[-100%] group-hover/webapp:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 [font-family:'Cambay',Helvetica] font-semibold text-[#1b092e] text-sm tracking-[0.2px] leading-[normal]">
                  Login
                </span>
              </Button>

              {/* Client Login Button - Premium glass */}
              {/* <Button 
                className="relative h-9 px-6 py-1 rounded-lg overflow-hidden
                bg-gradient-to-br from-purple-600/20 via-purple-700/10 to-purple-900/20
                border border-purple-400/[0.25]
                shadow-[0_4px_20px_rgba(168,85,247,0.2),0_0_0_1px_rgba(168,85,247,0.15)_inset,0_1px_0_rgba(255,255,255,0.1)_inset]
                hover:border-purple-400/[0.4]
                hover:shadow-[0_8px_32px_rgba(168,85,247,0.4),0_0_0_1px_rgba(168,85,247,0.25)_inset,0_1px_0_rgba(255,255,255,0.15)_inset]
                hover:scale-105
                transition-all duration-300
                group/login"
                style={{
                  backdropFilter: 'blur(20px) saturate(150%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                }}
              >
                <div className="absolute inset-[1px] rounded-[7px] bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
                <span className="relative [font-family:'Cambay',Helvetica] font-medium text-white text-sm tracking-[0.2px] leading-[normal]
                transition-all duration-300 group-hover/login:text-purple-100">
                  Client Login
                </span>
              </Button> */}
            </div>
          </div>

          {/* Mobile: Login + Hamburger */}
          <div className="flex lg:hidden relative z-20 items-center gap-2">
            <Button className="relative h-8 px-4 py-1 rounded-lg border-none overflow-hidden
              bg-gradient-to-r from-white via-[#e9d5ff] to-white
              shadow-[0_4px_20px_rgba(168,85,247,0.4)]
              transition-all duration-300">
              <span className="relative z-10 [font-family:'Cambay',Helvetica] font-semibold text-[#1b092e] text-xs sm:text-sm tracking-[0.2px] leading-[normal]">
                Login
              </span>
            </Button>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/[0.1] 
              hover:bg-white/[0.1] transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-5 h-5 text-white" />
              ) : (
                <MenuIcon className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-[calc(100%+8px)] left-0 right-0 
            rounded-[10px] overflow-hidden
            bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04]
            border border-white/[0.18]
            shadow-[0_8px_32px_rgba(168,85,247,0.25)]
            animate-fade-in"
            style={{
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            }}
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 rounded-lg
                    [font-family:'Cambay',Helvetica] font-normal text-white/90 text-sm
                    hover:bg-white/[0.1] hover:text-white
                    transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              
              {/* Language selector in mobile menu */}
              <li className="mt-2 pt-2 border-t border-white/[0.1]">
                <button className="w-full flex items-center justify-between px-4 py-3 rounded-lg
                  bg-white/[0.05] border border-white/[0.1]
                  [font-family:'Cambay',Helvetica] font-normal text-white/90 text-sm
                  hover:bg-white/[0.1] transition-all duration-300">
                  <div className="flex items-center gap-2">
                    <GlobeIcon className="w-5 h-5 text-white/80" />
                    <span>English</span>
                  </div>
                  <ChevronDownIcon className="w-4 h-4 text-white/80" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="relative w-full">
        <section className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <HeroSection />
        </section>

        <section className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <MainContentSection />
        </section>

        <section className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] z-10">
          <HowItWorksSection />
        </section>

        {/* Background image between How It Works and Pricing */}
        <div className="relative w-full h-0">
          <img
            src="/bg2.png"
            alt=""
            className="absolute -top-[400px] left-0 w-auto h-[1200px] pointer-events-none z-0"
          />
        </div>

        <section className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] z-10">
          <PricingSection />
        </section>

        <section className="relative w-full">
          <PayoutsSection />
        </section>

        <section className="relative w-full">
          <BuildSection />
        </section>

        {/* Background effect spanning between BuildSection and CalculatorSection */}
        <div className="relative w-full h-0">
          <img
            src="/calculator-section/bg-effectt.svg"
            alt=""
            className="absolute -top-[1100px] right-0 w-[1500px] h-auto opacity-100 pointer-events-none z-10"
          />
        </div>

        <section className="relative w-full">
          <CalculatorSection />
        </section>

        {/* Background decoration for Comparison section */}
        <div className="relative w-full h-0">
          <img
            className="absolute top-[-300px] md:top-[-700px] left-1/2 -translate-x-1/2 w-[1400px] md:w-[1200px] h-[800px] md:h-[1452px] pointer-events-none opacity-90 md:opacity-100 z-0 object-cover"
            alt="Background decoration"
            src="/bg5.png"
          />
        </div>

        <section className="relative w-full">
          <ComparisonTableSection />
        </section>

        <section className="relative w-full">
          <SponsorSection />
        </section>

        {/* Background decoration between Sponsor and Collaboration */}
        <div className="relative w-full h-0">
          <img
            src="/bg6.png"
            alt=""
            className="absolute -top-[350px] left-1/2 -translate-x-1/2 w-full h-auto pointer-events-none z-0"
            style={{ mixBlendMode: 'lighten', opacity: 0.95 }}
          />
        </div>

        <section className="relative w-full -mb-12 md:-mb-16">
          <CollaborationSection />
        </section>

        <section className="relative w-full mt-8 md:mt-12">
          <DiscordSection />
        </section>

        {/* Background effect spanning from Discord to Media section */}
        <div className="relative w-full h-0">
          <img
            src="/discord-section/effect.png"
            alt=""
            className="absolute -top-[800px] left-0 w-auto h-[1500px] opacity-70 pointer-events-none z-0"
          />
        </div>

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