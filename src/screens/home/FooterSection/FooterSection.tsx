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

            {/* Desktop: New layout */}
            <div className="hidden md:flex flex-row items-start justify-start mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              {/* Follow us on Our Socials Section */}
              <div className="flex flex-col">
                <h3 
                  className="[font-family:'Poppins',Helvetica] font-normal text-white text-[22px] tracking-[0.22px] leading-normal mb-6"
                  style={{ color: '#FFF' }}
                >
                  Follow us on Our Socials
                </h3>
                
                {/* Social Media Icons */}
                <div className="flex gap-4">
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="3"/>
                      <circle cx="18" cy="6" r="1.5"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links Section - 96px from left section */}
              <div className="flex flex-col" style={{ marginLeft: '96px' }}>
                <h3 
                  className="[font-family:'Cambay',Helvetica] font-normal text-white text-[22px] tracking-[0.22px] leading-normal mb-[9px] whitespace-nowrap"
                  style={{ color: '#FFF' }}
                >
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      Challenges
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      Affiliate
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      Blogs
                    </a>
                  </li>
                </ul>
              </div>

              {/* Trading Section - 98px from Quick Links */}
              <div className="flex flex-col" style={{ marginLeft: '98px' }}>
                <h3 
                  className="[font-family:'Cambay',Helvetica] font-normal text-white text-[22px] tracking-[0.22px] leading-normal mb-[9px]"
                  style={{ color: '#FFF' }}
                >
                  Trading
                </h3>
                <ul className="flex flex-col gap-1">
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      One Step
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      Two Step
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      Three Step
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      Instant Funding
                    </a>
                  </li>
                  <li>
                    <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors whitespace-nowrap">
                      Try Pay As You Go
                    </a>
                  </li>
                </ul>
              </div>

              {/* Discord Card - 160px from Trading */}
              <div 
                className="relative overflow-hidden"
                style={{ 
                  marginLeft: '160px',
                  width: '348px',
                  height: '171px',
                  borderRadius: '15px'
                }}
              >
                <img 
                  src="/footer/footer-discord.png" 
                  alt="Join Our Discord Community"
                  className="absolute inset-0 w-full h-full object-contain"
                  style={{ 
                    objectPosition: 'center center'
                  }}
                />
                <div className="absolute inset-0 flex justify-center" style={{ alignItems: 'flex-end', paddingBottom: '25px' }}>
                  <button 
                    className="inline-flex items-center hover:opacity-90 transition-opacity"
                    style={{
                      padding: '10px 28px',
                      gap: '36px',
                      borderRadius: '18px',
                      border: '0.6px solid #B784FF',
                      background: '#0A003A'
                    }}
                  >
                    <span 
                      className="font-['Poppins',Helvetica] whitespace-nowrap"
                      style={{
                        color: '#FFF',
                        fontSize: '9px',
                        fontWeight: 300,
                        lineHeight: 'normal',
                        letterSpacing: '0.12px'
                      }}
                    >
                      Join Our Discord Community
                    </span>
                    <img 
                      src="/footer/Vector 6996.svg" 
                      alt="Arrow"
                      className="w-auto h-auto"
                    />
                  </button>
                </div>
              </div>
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