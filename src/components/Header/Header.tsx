import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, GlobeIcon, MenuIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

// Language options for the selector
const languages = [
  { code: 'en', label: 'EN' },
  { code: 'sk', label: 'SK' },
  { code: 'uk', label: 'UK' },
  { code: 'es', label: 'ES' },
];

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

  // Refs for timeout IDs
  const activeDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const langDropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (activeDropdownTimeout.current) clearTimeout(activeDropdownTimeout.current);
      if (langDropdownTimeout.current) clearTimeout(langDropdownTimeout.current);
    };
  }, []);

  // Handle active dropdown with delay
  const handleActiveDropdown = (label: string | null) => {
    if (activeDropdownTimeout.current) clearTimeout(activeDropdownTimeout.current);

    if (label) {
      // Small delay before showing
      activeDropdownTimeout.current = setTimeout(() => {
        setActiveDropdown(label);
      }, 150);
    } else {
      // Delay before hiding to allow moving mouse to the dropdown
      activeDropdownTimeout.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 300);
    }
  };

  // Handle language dropdown with delay
  const handleLangDropdown = (isOpen: boolean) => {
    if (langDropdownTimeout.current) clearTimeout(langDropdownTimeout.current);

    if (isOpen) {
      langDropdownTimeout.current = setTimeout(() => {
        setIsLangDropdownOpen(true);
      }, 150);
    } else {
      langDropdownTimeout.current = setTimeout(() => {
        setIsLangDropdownOpen(false);
      }, 300);
    }
  };

  // Get current language label
  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  // Handle language change
  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLangDropdownOpen(false);
    setIsMobileLangOpen(false);
  };

  // Handle smooth scroll to sections with header offset
  const handleHashNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes('#')) {
      e.preventDefault();
      const hash = href.split('#')[1];
      const element = document.getElementById(hash);
      
      if (element) {
        const headerOffset = 100; // Account for fixed header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        setIsMobileMenuOpen(false);
      }
    }
  };

  // Navigation items with translations
  const navItems = [
    { 
      label: t('header.challenges'), 
      href: "/",
      subItems: [
        { label: t('header.howItWorks'), href: "/how-it-works" },
        { label: t('header.tradingRules'), href: "/trading-rules" },
        { label: t('header.scalingPlan'), href: "/scaling-plan" },
        { label: t('header.reward'), href: "/reward" },
      ]
    },
    { label: t('header.aboutUs'), href: "/about-us" },
    { label: t('header.faq'), href: "/faq" },
    { label: t('header.affiliate'), href: "/affiliate" },
    { label: t('header.contactUs'), href: "/contact-us" },
    { label: t('header.blogs'), href: "/blogs" },
    
  ];

  return (
    <header className="fixed top-[20px] sm:top-[41px] left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-32px)] sm:w-[calc(100%-80px)] lg:w-[1440px] h-[46px] sm:h-16">
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
          isolation: 'isolate',
        }}
      >
        {/* Backdrop filter layer - separated from content */}
        <div 
          className="absolute inset-0 rounded-[10px] -z-10 pointer-events-none"
          style={{
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          }}
        />

        {/* Background gradient */}
        <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] opacity-90 -z-10" />
        
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 rounded-[10px] overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.15] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </div>

        {/* Subtle inner glow */}
        <div className="absolute inset-[1px] rounded-[9px] bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
        
        {/* Logo - with iOS optimization */}
        <Link to="/" className="relative z-20">
          <img
            className="w-[100px] sm:w-[130px] lg:w-[157px] h-8 sm:h-10 lg:h-12 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
            transition-transform duration-300 hover:scale-105"
            alt="Logo"
            src="/thaurus logo.svg"
            style={{
              transform: 'translateZ(0)',
              WebkitTransform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              imageRendering: '-webkit-optimize-contrast',
            }}
          />
        </Link>

        {/* Desktop Navigation Items - Hidden on mobile/tablet */}
        <ul className="hidden lg:inline-flex relative z-20 items-center justify-center gap-11">
          {navItems.map((item, index) => (
            <li 
              key={index} 
              className="relative"
              onMouseEnter={() => item.subItems && handleActiveDropdown(item.label)}
              onMouseLeave={() => item.subItems && handleActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 group/item cursor-pointer">
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="relative font-['Cambay',Helvetica] font-normal text-white/90 text-sm tracking-[0] leading-[normal] 
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
                    className="relative font-['Cambay',Helvetica] font-normal text-white/90 text-sm tracking-[0] leading-[normal] 
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
                {item.subItems && (
                  <ChevronDownIcon className={`w-4 h-4 text-white transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                )}
              </div>

              {/* Dropdown Menu */}
              {item.subItems && activeDropdown === item.label && (
                <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 min-w-[220px]
                  rounded-xl border border-white/18
                  bg-linear-to-b from-[#1b0a2e]/95 to-[#090422]/98 backdrop-blur-3xl
                  shadow-[0_24px_48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)_inset,0_4px_16px_rgba(168,85,247,0.15)]
                  p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-300">
                  {item.subItems.map((sub, sIdx) => (
                    <Link
                      key={sIdx}
                      to={sub.href}
                      onClick={(e) => handleHashNavigation(e, sub.href)}
                      className="group/sub px-4 py-2.5 rounded-lg
                      font-['Cambay',Helvetica] font-normal text-white/80 text-sm
                      hover:bg-white/10 hover:text-white hover:pl-5
                      transition-all duration-300 flex items-center justify-between"
                    >
                      {sub.label}
                      <div className="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover/sub:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side actions - Desktop */}
        <div className="hidden lg:inline-flex relative z-20 items-center gap-4">
          {/* Language selector with dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => handleLangDropdown(true)}
            onMouseLeave={() => handleLangDropdown(false)}
          >
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
                {currentLang.label}
              </span>
              <ChevronDownIcon className={`w-3.5 h-3.5 text-white/80
              transition-all duration-300 group-hover/lang:text-white ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Language Dropdown */}
            {isLangDropdownOpen && (
              <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[100px]
                rounded-xl border border-white/18
                bg-linear-to-b from-[#1b0a2e]/95 to-[#090422]/98 backdrop-blur-3xl
                shadow-[0_24px_48px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.08)_inset,0_4px_16px_rgba(168,85,247,0.15)]
                p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-4 py-2 rounded-lg
                      font-['Cambay',Helvetica] font-normal text-sm text-center
                      hover:bg-white/10 hover:text-white
                      transition-all duration-300
                      ${i18n.language === lang.code ? 'text-white bg-white/10' : 'text-white/80'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="inline-flex items-center gap-4">
            {/* Web App Button - Elegant gradient */}
            <a href="https://my.thaurusguru.com/auth/signin" target="_blank" rel="noopener noreferrer">
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
                  {t('header.login')}
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile: Login + Hamburger */}
        <div className="flex lg:hidden relative z-20 items-center gap-2">
          <a href="https://my.thaurusguru.com/auth/signin" target="_blank" rel="noopener noreferrer">
            <Button className="relative h-8 px-4 py-1 rounded-lg border-none overflow-hidden
              bg-gradient-to-r from-white via-[#e9d5ff] to-white
              shadow-[0_4px_20px_rgba(168,85,247,0.4)]
              transition-all duration-300">
              <span className="relative z-10 [font-family:'Cambay',Helvetica] font-semibold text-[#1b092e] text-xs sm:text-sm tracking-[0.2px] leading-[normal]">
                {t('header.login')}
              </span>
            </Button>
          </a>

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
          bg-gradient-to-br from-[#1b0a2e]/98 to-[#090422]/99 backdrop-blur-3xl
          border border-white/18
          shadow-[0_20px_40px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)_inset]
          animate-fade-in"
          style={{
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          }}
        >
          <ul className="flex flex-col p-4 gap-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/10 group transition-all duration-300"
                    onClick={() => item.subItems ? setActiveDropdown(activeDropdown === item.label ? null : item.label) : setIsMobileMenuOpen(false)}
                  >
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className="flex-1 font-['Cambay',Helvetica] font-normal text-white/90 text-sm"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="flex-1 font-['Cambay',Helvetica] font-normal text-white/90 text-sm"
                      >
                        {item.label}
                      </a>
                    )}
                    {item.subItems && (
                      <ChevronDownIcon className={`w-4 h-4 text-white/60 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </div>
                  
                  {item.subItems && activeDropdown === item.label && (
                    <ul className="flex flex-col ml-4 border-l border-white/10 overflow-hidden animate-in slide-in-from-top-1 duration-300">
                      {item.subItems.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <Link
                            to={sub.href}
                            onClick={(e) => handleHashNavigation(e, sub.href)}
                            className="block px-8 py-2.5 font-['Cambay',Helvetica] font-normal text-white/60 text-xs hover:text-white transition-colors"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
            
            {/* Language selector in mobile menu */}
            <li className="mt-2 pt-2 border-t border-white/10">
              <button 
                onClick={() => setIsMobileLangOpen(!isMobileLangOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg
                bg-white/5 border border-white/10
                font-['Cambay',Helvetica] font-normal text-white/90 text-sm
                hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <GlobeIcon className="w-5 h-5 text-white/80" />
                  <span>{currentLang.label}</span>
                </div>
                <ChevronDownIcon className={`w-4 h-4 text-white/80 transition-transform duration-300 ${isMobileLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Mobile Language Options */}
              {isMobileLangOpen && (
                <div className="mt-2 flex flex-col gap-1 pl-4 animate-in slide-in-from-top-1 duration-300">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`px-4 py-2 rounded-lg text-left
                        font-['Cambay',Helvetica] font-normal text-sm
                        hover:bg-white/10 transition-all duration-300
                        ${i18n.language === lang.code ? 'text-white bg-white/10' : 'text-white/70'}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};