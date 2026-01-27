import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const FooterSection = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const footerColumns = [
    {
      title: t('footer.contact'),
      links: [t('footer.support'), t('footer.chat'), t('footer.contactLink'), t('footer.faqsLink')],
    },
    {
      title: t('footer.quickLinks'),
      links: [t('footer.aboutUs'), t('footer.career'), t('footer.purchaseAssessment')],
    },
    {
      title: t('footer.trading'),
      links: [
        t('footer.howItWorks'),
        t('footer.oneStep'),
        t('footer.twoStep'),
        t('footer.threeStep'),
        t('footer.instantFunding'),
        t('footer.tryPayAsYouGo'),
      ],
    },
    {
      title: t('footer.community'),
      links: [t('footer.joinDiscord'), t('footer.instagramCommunity')],
    },
  ];

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((section) => section !== title)
        : [...prev, title]
    );
  };

  return (
    <footer className="relative w-full bg-transparent flex justify-center md:pt-20">
      {/* Background Image - Full width, extended upward */}
      <div 
        className="absolute -top-24 md:-top-48 left-0 right-0 bottom-0 w-full pointer-events-none"
        style={{
          backgroundImage: 'url(/footer/footer-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, transparent, black 15%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%)'
        }}
      />

      {/* Container */}
      <div className="relative w-full max-w-[386px] md:max-w-[1314px] mx-auto">
        {/* SVG Border - Desktop only */}
        <svg 
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1315 566" 
          fill="none"
          preserveAspectRatio="none"
        >
          <path 
            d="M0.5 50.5V565.5M1314.5 565.5V50.5C1314.5 22.8858 1292.11 0.5 1264.5 0.5H50.5C22.8858 0.5 0.5 22.8858 0.5 50.5" 
            stroke="#B784FF"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Content */}
        <div className="relative px-6 md:px-8 lg:px-20 md:pt-16 md:pb-8 mt-0 md:mt-8">
          {/* Big Thaurus Logo - Above everything - Hidden on mobile */}
          <div className="hidden md:flex justify-center items-center mb-8 md:mb-12 translate-y-[-1rem] animate-fade-in opacity-0">
            <img
              src="/thaurus-big-logo.svg"
              alt="Thaurus Guru"
              className="w-full max-w-[300px] md:max-w-[800px] lg:max-w-[1200px] h-auto object-contain"
            />
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Mobile: Card with border and rounded corners */}
            <div className="md:hidden border border-[#B784FF] rounded-[40px] p-4 translate-y-5 -mb-5 animate-fade-in opacity-0 [--animation-delay:200ms]">
              {/* Big Thaurus Logo - Mobile - Centered at top */}
              <div className="flex justify-center items-center mb-8 mt-6">
                <img
                  src="/thaurus-big-logo.svg"
                  alt="Thaurus Guru"
                  className="w-full max-w-[280px] h-auto object-contain"
                />
              </div>
              
              {/* Logo - Left aligned */}
              <div className="flex flex-col items-start mb-6 ml-6">
                <img
                  className="w-[120px] object-cover mb-4"
                  alt="Company logo"
                  src="/footer/thaurus-logo.svg"
                />

                <img
                  className="w-[200px] h-auto"
                  alt="Social media links"
                  src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-181.svg"
                />
              </div>

              {/* Accordion sections */}
              <div className="flex flex-col mb-4 ml-6">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    {/* Section header - Clickable */}
                    <button
                      onClick={() => toggleSection(column.title)}
                      className="w-full flex items-center gap-2 py-3 text-left group"
                    >
                      <h3 className="[font-family:'Cambay',Helvetica] font-normal text-white text-[16px] tracking-[0.16px] leading-normal">
                        {column.title}
                      </h3>
                      <ChevronRight 
                        className={`w-4 h-4 text-white transition-transform duration-300 ${
                          openSections.includes(column.title) ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {/* Section content - Expandable */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSections.includes(column.title) 
                          ? 'max-h-[500px] opacity-100 mb-2' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="flex flex-col gap-2 pl-0 pb-2">
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href="#"
                              className="font-['Poppins',Helvetica] font-normal text-[#b882fb] text-xs tracking-[0.12px] leading-normal hover:text-white transition-colors"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Bar - Mobile */}
              <div className="mt-8 mb-4 border-t border-white/10 pt-6 flex flex-col items-center gap-6">
                <p className="font-['Poppins',Helvetica] text-[#b982fb] text-[10px] opacity-60 text-center">
                  © 2023 - 2025 Thaurus Ltd. All rights reserved.
                </p>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-4">
                  <Link to="/cookies-policy" className="font-['Poppins',Helvetica] text-[#b982fb] text-[10px] opacity-60 hover:text-white transition-colors">Cookies Policy</Link>
                  <Link to="/terms-and-conditions" className="font-['Poppins',Helvetica] text-[#b982fb] text-[10px] opacity-60 hover:text-white transition-colors">Terms & Conditions</Link>
                  <Link to="/privacy-policy" className="font-['Poppins',Helvetica] text-[#b982fb] text-[10px] opacity-60 hover:text-white transition-colors">Privacy Policy</Link>
                </div>
                {/* Restored Disclaimer Text - Mobile */}
                <p className="font-['Poppins',Helvetica] text-[#b982fb] text-[8px] tracking-[0.08px] leading-normal opacity-40 text-center px-4 pb-4">
                  {t('footer.disclaimerText')}
                </p>
              </div>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="lg:col-span-1">
                <img
                  className="object-cover mb-6"
                  alt="Company logo"
                  src="/footer/thaurus-logo.svg"
                />

                <img
                  className="w-[258px] h-[31px]"
                  alt="Social media links"
                  src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-181.svg"
                />
              </div>

              {footerColumns.map((column, index) => (
                <nav
                  key={column.title}
                  className="flex flex-col gap-2 translate-y-[-1rem] animate-fade-in opacity-0 md:ml-16"
                  style={
                    {
                      "--animation-delay": `${400 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <h3 className="[font-family:'Cambay',Helvetica] font-normal text-white text-[22px] tracking-[0.22px] leading-normal mb-2">
                    {column.title}
                  </h3>
                  <ul className="flex flex-col gap-1">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="[font-family:'Poppins',Helvetica] font-normal text-[#b882fb] text-sm tracking-[0.14px] leading-normal hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            {/* Bottom Bar - Desktop */}
            <div className="hidden md:flex flex-row items-center justify-between mt-12 pt-8 border-t border-white/10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
              <p className="font-['Poppins',Helvetica] text-[#b982fb] text-xs opacity-60">
                © 2023 - 2025 Thaurus Ltd. All rights reserved.
              </p>
              <div className="flex flex-row items-center gap-8">
                <Link to="/cookies-policy" className="font-['Poppins',Helvetica] text-[#b982fb] text-xs opacity-60 hover:text-white transition-colors">Cookies Policy</Link>
                <Link to="/terms-and-conditions" className="font-['Poppins',Helvetica] text-[#b982fb] text-xs opacity-60 hover:text-white transition-colors">Terms & Conditions</Link>
                <Link to="/privacy-policy" className="font-['Poppins',Helvetica] text-[#b982fb] text-xs opacity-60 hover:text-white transition-colors">Privacy Policy</Link>
              </div>
            </div>
            {/* Restored Disclaimer Text - Desktop */}
            <div className="hidden md:block mt-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
              <p className="font-['Poppins',Helvetica] font-light text-[#b982fb] text-[10px] md:text-xs tracking-[0.1px] md:tracking-[0.12px] leading-[1.5] md:leading-normal opacity-40">
                {t('footer.disclaimerText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};