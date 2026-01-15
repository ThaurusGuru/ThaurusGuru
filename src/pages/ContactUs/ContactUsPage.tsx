import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import "../../index.css";

export const ContactUsPage = () => {
  const MapContent = (
    <img 
      src="/Contact-Us/map.svg" 
      alt="Location Map" 
      className="w-full max-w-[692px] h-auto rounded-[15px] mb-[64px]"
    />
  );

  const SocialsContent = (
    <div className="flex flex-col items-center xl:items-start w-full">
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
        <div className="flex flex-col xl:flex-row gap-[100px] xl:gap-[200px] justify-center lg:justify-start items-center xl:items-start">
          {/* Main Column (Mobile and Desktop) */}
          <div className="flex flex-col xl:pt-[120px] items-center xl:items-start max-w-[473px]">
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

            {/* Locations Heading */}
            <h2 className="text-[22px] italic font-normal leading-[28px] font-['Cambay'] bg-clip-text text-transparent bg-[linear-gradient(180deg,#FFF_0%,#E9B1FF_100%)] drop-shadow-[0_0_4px_rgba(106,0,255,0.80)] mb-[14px]">
              Locations
            </h2>

            {/* Location Cards */}
            <div className="flex flex-col gap-[25px] mb-[64px]">
              {[
                { title: "Bratislava", address: "Černyševského 10, 851 01 Bratislava, Slovak Repulic.", phone: "+421 914 288 292", email: "support@thaurusguru.com" },
                { title: "London", address: "124 City Road – Central London, EC1V 2NX , London – United Kingdom.", email: "support@thaurusguru.com" }
              ].map((loc, idx) => (
                <div key={idx} className="w-full max-w-[446px] p-[28px_40px] flex items-center justify-center gap-[10px] rounded-[15px] border border-solid border-[#7A27EF] bg-[linear-gradient(334deg,rgba(36,7,66,0.40)_36.22%,rgba(162,86,255,0.15)_151.62%)]">
                  <div className="w-full max-w-[324px] text-white font-['Cambay']">
                    <p className="text-[18px] font-normal leading-normal">{loc.title}</p>
                    <p className="text-[14px] italic font-normal leading-normal">{loc.address}</p>
                    <p className="text-[14px] font-normal leading-normal">
                      {loc.phone && <>{loc.phone}<br /></>}
                      {loc.email}
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
            <div className="w-full max-w-[446px] min-h-[646px] p-[54px_40px] rounded-[15px] border border-solid border-[#7A27EF] bg-[linear-gradient(334deg,rgba(36,7,66,0.40)_36.22%,rgba(162,86,255,0.15)_151.62%)]">
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
          <div className="hidden xl:flex flex-col xl:pt-[120px] items-center xl:items-start">
            {MapContent}
            {SocialsContent}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};
