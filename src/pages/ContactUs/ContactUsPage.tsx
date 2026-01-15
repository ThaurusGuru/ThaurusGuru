import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import "../../index.css";

export const ContactUsPage = () => {
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
        {[
          { src: "/Contact-Us/icons/discord.svg", alt: "Discord" },
          { src: "/Contact-Us/icons/instagram.svg", alt: "Instagram" },
          { src: "/Contact-Us/icons/X.svg", alt: "X" },
          { src: "/Contact-Us/icons/bluesky.svg", alt: "BlueSky" },
          { src: "/Contact-Us/icons/yt.svg", alt: "YouTube" },
          { src: "/Contact-Us/icons/tiktok.svg", alt: "TikTok" }
        ].map((icon, idx) => (
          <a key={idx} href="#" className="hover:scale-110 transition-transform">
            <img src={icon.src} alt={icon.alt} className="w-auto h-auto min-w-[20px]" />
          </a>
        ))}
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
            <button className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[10px] mb-[30px] rounded-[10px] border border-solid border-[#510F96] bg-[linear-gradient(104deg,#F6E6FF_-33.17%,#D692FF_16.49%,#8148ED_66.15%,#4829C3_115.81%,#090422_165.47%)] shadow-[0_4px_14px_0_rgba(0,0,0,0.25)_inset] hover:scale-105 transition-transform">
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
            <div className="flex flex-col gap-[25px] mb-[64px]">
              {[
                { 
                  title: "Management Operational Hours", 
                  hours: "Monday - Friday 9:00AM - 5:00PM ETC"
                },
                { 
                  title: "Support Team Operational Hours", 
                  hours: "24/7"
                }
              ].map((loc, idx) => (
                <div key={idx} className="w-full max-w-[473px] p-[28px_40px] flex items-center justify-center gap-[10px] rounded-[15px] border border-solid border-[#7A27EF] bg-[linear-gradient(334deg,rgba(36,7,66,0.40)_36.22%,rgba(162,86,255,0.15)_151.62%)]">
                  <div className="w-full max-w-[324px] text-white font-['Cambay'] text-center">
                    <p className="text-[18px] font-normal leading-normal mb-2">{loc.title}</p>
                    <p className="text-[14px] font-normal leading-normal" style={{ color: '#9F5AFF' }}>
                      {loc.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile-Only Map: Placed above form on mobile */}
            <div className="xl:hidden w-full flex justify-center">
              {MapContent}
            </div>

            {/* Affiliate Form Container */}
            <div className="w-full max-w-[473px] min-h-[646px] p-[54px_40px] rounded-[15px] border border-solid border-[#7A27EF] bg-[linear-gradient(334deg,rgba(36,7,66,0.40)_36.22%,rgba(162,86,255,0.15)_151.62%)]">
              <h3 className="w-full max-w-[318px] text-white font-['Cambay'] text-[24px] font-normal leading-[32px] uppercase mb-[38px] text-center xl:text-left mx-auto xl:mx-0">
                Contact Us if you want to become an affiliate
              </h3>

              <form className="flex flex-col gap-[15px] items-center xl:items-start">
                {[
                  { label: "Name", type: "text" },
                  { label: "Surname", type: "text" },
                  { label: "Email", type: "email" },
                  { label: "Subject", type: "text" },
                  { label: "Message", type: "textarea" }
                ].map((field, idx) => (
                  <div key={idx} className="flex flex-col gap-[4px] w-full max-w-[318px]">
                    <label className="text-white font-['Cambay'] text-[16px] font-normal leading-[22px] capitalize">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea className="w-full h-[100px] rounded-[2px] border border-solid border-[#7A27EF] bg-[rgba(115,0,255,0.20)] text-white p-2 outline-none resize-none" />
                    ) : (
                      <input type={field.type} className="w-full h-[38px] rounded-[2px] border border-solid border-[#7A27EF] bg-[rgba(115,0,255,0.20)] text-white px-2 outline-none" />
                    )}
                  </div>
                ))}
              </form>
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
