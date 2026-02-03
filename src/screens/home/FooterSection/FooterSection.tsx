import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const FooterSection = () => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState<string[]>([]);


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
        className="absolute -top-[500px] md:-top-[800px] left-0 right-0 bottom-0 w-full pointer-events-none"
        style={{
          backgroundImage: 'url(/footer/footer-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(to bottom, transparent, black 30%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%)'
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
            <div className="md:hidden border border-[#B784FF] rounded-[40px] p-6 translate-y-5 -mb-5 animate-fade-in opacity-0 [--animation-delay:200ms]">
              {/* Big Thaurus Logo - Mobile - Centered at top */}
              <div className="flex justify-center items-center mb-8 mt-6">
                <img
                  src="/thaurus-big-logo.svg"
                  alt="Thaurus Guru"
                  className="w-full max-w-[280px] h-auto object-contain"
                />
              </div>
              
              {/* Follow us on Our Socials */}
              <div className="flex flex-col items-start mb-8">
                <h3 
                  className="[font-family:'Poppins',Helvetica] font-normal text-white text-[18px] tracking-[0.18px] leading-normal mb-4"
                >
                  Follow us on Our Socials
                </h3>
                
                {/* Social Media Icons */}
                <div className="flex gap-3">
                  <a href="https://discord.com/invite/VjCZJ2QwMn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/thaurusguru/profilecard/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                    <img 
                      src="/footer/ri_instagram-fill.svg" 
                      alt="Instagram"
                      className="w-7 h-7"
                      style={{ width: '28px', height: '28px' }}
                    />
                  </a>
                  <a href="https://x.com/ThaurusGuru" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    <img 
                      src="/footer/ri_bluesky-fill.svg" 
                      alt="Bluesky"
                      className="w-7 h-7"
                      style={{ width: '28px', height: '28px' }}
                    />
                  </a>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    
                  </a>
                </div>
              </div>

              {/* Quick Links Section - Expandable */}
              <div className="flex flex-col mb-4">
                <button
                  onClick={() => toggleSection('Quick Links')}
                  className="w-full flex items-center gap-2 py-3 text-left group"
                >
                  <h3 className="[font-family:'Cambay',Helvetica] font-normal text-white text-[16px] tracking-[0.16px] leading-normal">
                    Quick Links
                  </h3>
                  <ChevronRight 
                    className={`w-4 h-4 text-white transition-transform duration-300 ${
                      openSections.includes('Quick Links') ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSections.includes('Quick Links') 
                      ? 'max-h-[500px] opacity-100 mb-2' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="flex flex-col gap-1 pl-0 pb-2">
                    <li>
                      <a href="#pricing-section" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[12px] tracking-[0.12px] leading-normal hover:text-white transition-colors">
                        Challenges
                      </a>
                    </li>
                    <li>
                      <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[12px] tracking-[0.12px] leading-normal hover:text-white transition-colors">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[12px] tracking-[0.12px] leading-normal hover:text-white transition-colors">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Trading Section - Expandable */}
              <div className="flex flex-col mb-8">
                <button
                  onClick={() => toggleSection('Trading')}
                  className="w-full flex items-center gap-2 py-3 text-left group"
                >
                  <h3 className="[font-family:'Cambay',Helvetica] font-normal text-white text-[16px] tracking-[0.16px] leading-normal">
                    Trading
                  </h3>
                  <ChevronRight 
                    className={`w-4 h-4 text-white transition-transform duration-300 ${
                      openSections.includes('Trading') ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSections.includes('Trading') 
                      ? 'max-h-[500px] opacity-100 mb-2' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <ul className="flex flex-col gap-1 pl-0 pb-2">
                    <li>
                      <a href="#" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[12px] tracking-[0.12px] leading-normal hover:text-white transition-colors">
                        How it Works
                      </a>
                    </li>
                    <li>
                      <a href="#pricing-section" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[12px] tracking-[0.12px] leading-normal hover:text-white transition-colors">
                        Two Step
                      </a>
                    </li>
                    <li>
                      <a href="#pricing-section" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[12px] tracking-[0.12px] leading-normal hover:text-white transition-colors">
                        Three Step
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Discord Card - Mobile */}
              <div 
                className="relative overflow-hidden mb-8"
                style={{ 
                  width: '100%',
                  height: '150px',
                  borderRadius: '15px'
                }}
              >
                <img 
                  src="/footer/footer-discord.png" 
                  alt="Join Our Discord Community"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex justify-center items-end pb-6">
                  <button 
                    onClick={() => window.open('https://discord.com/invite/VjCZJ2QwMn', '_blank')}
                    className="inline-flex items-center hover:opacity-90 transition-opacity"
                    style={{
                      padding: '8px 24px',
                      gap: '24px',
                      borderRadius: '18px',
                      border: '0.6px solid #B784FF',
                      background: '#0A003A'
                    }}
                  >
                    <span 
                      className="font-['Poppins',Helvetica] whitespace-nowrap"
                      style={{
                        color: '#FFF',
                        fontSize: '10px',
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

              {/* Bottom Bar - Mobile */}
              <div className="mt-8 mb-4 border-t border-white/10 pt-6 flex flex-col items-center gap-6">
                <p className="font-['Poppins',Helvetica] text-[#b982fb] text-[10px] opacity-60 text-center">
                  © 2024 - 2025 Thaurus Ltd. All rights reserved.
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
                  <a href="https://discord.com/invite/VjCZJ2QwMn" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/thaurusguru/profilecard/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ width: '32.502px', height: '32.501px', aspectRatio: '1/1' }}>
                      <path d="M11.9416 1.83325C12.9728 1.836 13.4962 1.8415 13.9481 1.85434L14.126 1.86075C14.3313 1.86809 14.5339 1.87725 14.7786 1.88825C15.754 1.93409 16.4195 2.08809 17.0034 2.3145C17.6084 2.54734 18.1181 2.86267 18.6277 3.37142C19.094 3.82951 19.4547 4.38385 19.6846 4.99575C19.9111 5.57967 20.0651 6.24517 20.1109 7.22142C20.1219 7.46525 20.1311 7.66783 20.1384 7.87408L20.1439 8.05192C20.1576 8.50292 20.1631 9.02633 20.165 10.0576L20.1659 10.7414V11.9422C20.1681 12.6109 20.1611 13.2795 20.1448 13.9479L20.1393 14.1257C20.132 14.332 20.1228 14.5346 20.1118 14.7784C20.066 15.7547 19.9101 16.4192 19.6846 17.0041C19.4547 17.616 19.094 18.1703 18.6277 18.6284C18.1696 19.0947 17.6153 19.4554 17.0034 19.6853C16.4195 19.9117 15.754 20.0657 14.7786 20.1116L14.126 20.1391L13.9481 20.1446C13.4962 20.1574 12.9728 20.1638 11.9416 20.1657L11.2577 20.1666H10.0578C9.38888 20.1689 8.71995 20.1619 8.05122 20.1455L7.87339 20.14C7.65578 20.1318 7.43822 20.1223 7.22072 20.1116C6.24539 20.0657 5.57989 19.9117 4.99505 19.6853C4.38348 19.4553 3.82946 19.0946 3.37164 18.6284C2.905 18.1704 2.54399 17.6161 2.3138 17.0041C2.08739 16.4202 1.93339 15.7547 1.88755 14.7784L1.86005 14.1257L1.85547 13.9479C1.83857 13.2795 1.83093 12.6109 1.83255 11.9422V10.0576C1.83002 9.38897 1.83674 8.72035 1.85272 8.05192L1.85914 7.87408C1.86647 7.66783 1.87564 7.46525 1.88664 7.22142C1.93247 6.24517 2.08647 5.58058 2.31289 4.99575C2.54361 4.3836 2.90526 3.82923 3.37255 3.37142C3.83011 2.90534 4.38381 2.54465 4.99505 2.3145C5.57989 2.08809 6.24447 1.93409 7.22072 1.88825C7.46456 1.87725 7.66806 1.86809 7.87339 1.86075L8.05122 1.85525C8.71965 1.83897 9.38827 1.83194 10.0569 1.83417L11.9416 1.83325ZM10.9992 6.41658C9.78365 6.41658 8.61786 6.89947 7.75832 7.75901C6.89877 8.61855 6.41589 9.78434 6.41589 10.9999C6.41589 12.2155 6.89877 13.3813 7.75832 14.2408C8.61786 15.1004 9.78365 15.5832 10.9992 15.5832C12.2148 15.5832 13.3806 15.1004 14.2401 14.2408C15.0997 13.3813 15.5826 12.2155 15.5826 10.9999C15.5826 9.78434 15.0997 8.61855 14.2401 7.75901C13.3806 6.89947 12.2148 6.41658 10.9992 6.41658ZM10.9992 8.24992C11.3604 8.24986 11.718 8.32093 12.0516 8.45907C12.3853 8.59722 12.6885 8.79973 12.9439 9.05505C13.1993 9.31037 13.4019 9.61349 13.5402 9.94711C13.6784 10.2807 13.7496 10.6383 13.7497 11.0995C13.7497 11.3606 13.6787 11.7182 13.5405 12.0519C13.4024 12.3855 13.1999 12.6887 12.9446 12.9441C12.6892 13.1995 12.3861 13.4022 12.0525 13.5404C11.7189 13.6787 11.3613 13.7499 11.0001 13.7499C10.2708 13.7499 9.57132 13.4602 9.0556 12.9445C8.53987 12.4287 8.25014 11.7293 8.25014 10.9999C8.25014 10.2706 8.53987 9.5711 9.0556 9.05537C9.57132 8.53965 10.2708 8.24992 11.0001 8.24992M15.8126 5.04158C15.5087 5.04158 15.2173 5.16231 15.0024 5.37719C14.7875 5.59208 14.6668 5.88352 14.6668 6.18742C14.6668 6.49131 14.7875 6.78276 15.0024 6.99764C15.2173 7.21253 15.5087 7.33325 15.8126 7.33325C16.1165 7.33325 16.408 7.21253 16.6229 6.99764C16.8378 6.78276 16.9585 6.49131 16.9585 6.18742C16.9585 5.88352 16.8378 5.59208 16.6229 5.37719C16.408 5.16231 16.1165 5.04158 15.8126 5.04158Z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-purple-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" style={{ width: '32.502px', height: '32.501px', aspectRatio: '1/1' }}>
                      <path d="M11.0007 10.9134C10.1702 9.22582 7.90965 6.07961 5.80773 4.52903C3.79382 3.04361 3.02657 3.29949 2.52332 3.53907C1.94032 3.81219 1.83398 4.74848 1.83398 5.29761C1.83398 5.84865 2.12273 9.8104 2.31065 10.4726C2.93398 12.6576 5.14682 13.3955 7.18732 13.1588C4.19898 13.6217 1.5434 14.7592 5.02398 18.8111C8.85382 22.9559 10.2728 17.9227 11.0007 15.3707C11.7285 17.9227 12.5663 22.7747 16.9077 18.8111C20.1673 15.3707 17.8032 13.6217 14.8149 13.1588C16.8545 13.3955 19.0682 12.6576 19.6906 10.4726C19.8786 9.81136 20.1673 5.84865 20.1673 5.29857C20.1673 4.74753 20.061 3.81315 19.478 3.53715C18.9747 3.29949 18.2075 3.04169 16.1936 4.52711C14.0917 6.08057 11.8302 9.22678 11.0007 10.9134Z" fill="white"/>
                    </svg>
                  </a>

                  <a href="https://x.com/ThaurusGuru" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition-colors">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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
                    <a href="#pricing-section" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
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
                    <a href="#pricing-section" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      How it Works
                    </a>
                  </li>
                  <li>
                    <a href="#pricing-section" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      Two Step
                    </a>
                  </li>
                  <li>
                    <a href="#pricing-section" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors">
                      Three Step
                    </a>
                  </li>
                  <li>
                    <a href="#pricing-section" className="[font-family:'Poppins',Helvetica] font-normal text-[#B982FB] text-[14px] tracking-[0.14px] leading-normal hover:text-white transition-colors whitespace-nowrap">
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
                    onClick={() => window.open('https://discord.com/invite/VjCZJ2QwMn', '_blank')}
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