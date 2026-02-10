import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import "../../index.css";

export const ContactUsPage = () => {
  // Function to open LiveAgent chat by clicking the chat widget button
  const openLiveChat = () => {
    const chatBtn = document.querySelector('.circleRollButtonIcon') as HTMLElement;
    if (chatBtn) {
      chatBtn.click();
    }
  };

  const MapContent = (
    <img 
      src="/Contact-Us/gifcu.gif" 
      alt="Location Map" 
      className="w-full max-w-[692px] h-auto rounded-[15px] mb-[64px]"
    />
  );

  const SocialsContent = (
    <div className="flex flex-col items-center xl:items-start w-full xl:ml-24">
      <h3 className="text-white font-['Cambay'] text-[24px] font-normal leading-[32px] uppercase mb-[26px] text-center xl:text-left">
        Connect with us on our socials
      </h3>
      <div className="flex gap-[26px] items-center justify-center xl:justify-start">
        <a href="https://discord.gg/85twnTkfnd" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'white' }}>
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/thaurusguru/profilecard/?igsh=MXRlOXRkY3NobW9xag%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <img src="/footer/ri_instagram-fill.svg" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://x.com/ThaurusGuru" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'white' }}>
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61572880682371" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <img src="/footer/ic_baseline-facebook.svg" alt="Facebook" className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/company/thaurus-guru/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <img src="/footer/Linkdin.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="https://www.tiktok.com/@thaurusguru" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
          <img src="/Contact-Us/icons/tiktok.svg" alt="TikTok" className="w-8 h-8" />
        </a>
      </div>
    </div>
  );

  return (
    <div className="bg-[#1b082e] w-full min-h-screen relative overflow-hidden flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-[20px] md:px-[180px]">
        <div className="flex flex-col xl:flex-row gap-[100px] xl:gap-[200px] justify-center items-center xl:items-start xl:ml-[100px]">
          {/* Main Column (Mobile and Desktop) */}
          <div className="flex flex-col xl:pt-[120px] xl:mt-12 items-center xl:items-start max-w-[473px]">
            {/* Heading */}
            <h1 className="w-full max-w-[357px] text-[42px] font-bold leading-[60px] font-['M_PLUS_2'] mb-[15px] text-center xl:text-left">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,#9A51FF_0%,#21004F_100%)]">24/7</span>{" "}
              <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFF_0%,#E9B1FF_100%)] drop-shadow-[0_0_4px_rgba(106,0,255,0.80)]">Support,</span><br />
              <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFF_0%,#E9B1FF_100%)] drop-shadow-[0_0_4px_rgba(106,0,255,0.80)]">When It Matters</span>
            </h1>

            {/* Subtext */}
            <p className="w-full max-w-[473px] text-[#FFF] font-['Cambay'] text-[14px] leading-normal font-normal mb-[40px] text-center xl:text-left">
              We understand you may have questions, and our support team is here to assist you. All inquiries are typically answered within 24 business hours. For faster help, please review our FAQ before contacting us.
            </p>

            {/* Support Button - Below description */}
            <button 
              onClick={openLiveChat}
              className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[10px] mb-[30px] rounded-[10px] border border-solid border-[#510F96] bg-[linear-gradient(104deg,#F6E6FF_-33.17%,#D692FF_16.49%,#8148ED_66.15%,#4829C3_115.81%,#090422_165.47%)] shadow-[0_4px_14px_0_rgba(0,0,0,0.25)_inset] hover:scale-105 transition-transform cursor-pointer"
            >
              <span className="text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.25)] font-['Cambay'] font-bold text-[16px] leading-[20px]">
                Talk to Our Support Team
              </span>
              <div className="flex w-[34px] h-[23px] px-[7px] py-px items-center gap-[10px] rounded-[30px] bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                  <path d="M3.33268 10L16.666 10M16.666 10L11.666 15M16.666 10L11.666 5" stroke="url(#paint0_linear_1880_1547)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <defs>
                    <linearGradient id="paint0_linear_1880_1547" x1="36.9327" y1="9.89899" x2="30.2798" y2="25.5912" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F6E6FF"/>
                      <stop offset="0.25" stopColor="#D692FF"/>
                      <stop offset="0.5" stopColor="#8148ED"/>
                      <stop offset="0.75" stopColor="#4829C3"/>
                      <stop offset="1" stopColor="#090422"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </button>

            {/* Location Cards */}
            <div className="flex flex-col gap-[25px] mb-[64px] w-full max-w-[473px]">
              {[
                { 
                  title: "Management Operational Hours", 
                  content: "Monday - Friday",
                  subtext: "9:00AM - 5:00PM ETC",
                  icon: null,
                  isEmail: false
                },
                { 
                  title: "Email Us", 
                  content: "support@thaurusguru.com",
                  subtext: "Available 24/7",
                  icon: null,
                  isEmail: true
                }
              ].map((loc, idx) => (
                <div key={idx} className="w-full p-[28px_40px] flex flex-col items-center justify-center rounded-[15px] border border-solid border-[#7A27EF] bg-[linear-gradient(334deg,rgba(36,7,66,0.40)_36.22%,rgba(162,86,255,0.15)_151.62%)]">
                  <div className="w-full text-white font-['Cambay'] text-center">
                    {/* Header (White) */}
                    <p className="text-[18px] font-normal leading-normal mb-2 text-white">
                      {loc.title}
                    </p>
                    
                    {/* Content (Purple) */}
                    <p className={`${loc.isEmail ? 'text-[20px] font-medium' : 'text-[14px] font-normal'} text-[#9F5AFF] leading-normal font-['Inter']`}>
                      {loc.content}
                    </p>

                    {/* Subtext (Purple) */}
                    {loc.subtext && (
                      <p className="text-[14px] font-normal leading-normal mt-1 text-[#9F5AFF]">
                        {loc.subtext}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile-Only Map: Placed above form on mobile */}
            <div className="xl:hidden w-full flex justify-center">
              {MapContent}
            </div>

            

            {/* Mobile-Only Socials: Placed below form on mobile */}
            <div className="xl:hidden w-full mt-16">
              {SocialsContent}
            </div>
          </div>

          {/* Right Column (Desktop Only) */}
          <div className="hidden xl:flex flex-col xl:pt-[120px] xl:-ml-20 items-center xl:items-start">
            {MapContent}
            {SocialsContent}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};