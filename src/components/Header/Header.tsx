import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, GlobeIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Trading", href: "#" },
  { label: "FAQ", href: "#" },
  { label: "Affiliate", href: "/affiliate" },
  { label: "About Us", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Blogs", href: "#" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
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
        <Link to="/">
          <img
            className="relative z-20 w-[100px] sm:w-[130px] lg:w-[157px] h-8 sm:h-10 lg:h-12 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
            transition-transform duration-300 hover:scale-105"
            alt="Logo"
            src="/thaurus logo.svg"
          />
        </Link>

        {/* Desktop Navigation Items - Hidden on mobile/tablet */}
        <ul className="hidden lg:inline-flex relative z-20 items-center justify-center gap-11">
          {navItems.map((item, index) => (
            <li key={index}>
              {item.href.startsWith('/') ? (
                <Link
                  to={item.href}
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
                </Link>
              ) : (
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
              )}
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
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="block px-4 py-3 rounded-lg
                    [font-family:'Cambay',Helvetica] font-normal text-white/90 text-sm
                    hover:bg-white/[0.1] hover:text-white
                    transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
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
                )}
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
  );
};
