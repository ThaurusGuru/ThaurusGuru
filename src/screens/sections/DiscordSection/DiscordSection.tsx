import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const featureCards = [
  {
    icon: "https://c.animaapp.com/mishf4erVkDEuN/img/majesticons-chat-line.svg",
    title: "Market Chats",
    description: "Discuss insights across major markets and asset classes.",
    channels: [
      "# 💬 forex-chat",
      "# 💬 gold-chat",
      "# 💬 indices-chat",
      "# 💬 stocks-chat",
      "# 💬 oil-chat",
      "# 💬 crypto-chat",
    ],
    hasImage: true,
    imageUrl: "https://c.animaapp.com/mishf4erVkDEuN/img/group-112.png",
  },
  {
    icon: "https://c.animaapp.com/mishf4erVkDEuN/img/ant-design-stock-outlined.svg",
    title: "Trade Ideas",
    description:
      "Explore high-quality trade setups shared by the Thaurus Guru community.",
    channels: ["# 📈 trade-ideas"],
    hasImage: false,
  },
  {
    icon: "https://c.animaapp.com/mishf4erVkDEuN/img/fluent-people-community-16-regular.svg",
    title: "Community Hub",
    description:
      "Ask questions, learn, share, and connect with traders worldwide.",
    channels: [
      "# ❓ ask-questions",
      "# 💬 general-chat",
      "# 🌍 regional-chat",
      "# 🏆 competition-chat",
      "# 📈 trade-ideas",
      "# 💡 suggestions",
      "# 💸 payout-proof",
      "# 😂 memes",
    ],
    hasImage: false,
  },
  {
    icon: "https://c.animaapp.com/mishf4erVkDEuN/img/fluent-speaker-1-28-regular.svg",
    title: "Announcements",
    description:
      "Stay informed with the latest updates, features, and news from Thaurus Guru.",
    channels: ["# 📢 announcements"],
    hasImage: false,
  },
];

export const DiscordSection = () => {
  return (
    <section className="relative w-full py-12 md:py-16 px-4">
      <div className="max-w-[1202px] mx-auto">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          {/* Heading - Mobile responsive */}
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[24px] md:text-[42px] text-center tracking-[0.24px] md:tracking-[0.42px] leading-[normal]">
            Join The Thaurus Community!
          </h2>

          {/* Description - Mobile responsive */}
          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] max-w-[290px] md:max-w-[365px] [font-family:'Poppins',Helvetica] font-normal text-[#C293F1] md:text-white text-xs md:text-base text-center tracking-[0.12px] md:tracking-[0.16px] leading-4 md:leading-[26px]">
            Step into the heart of the action with our exclusive trading
            community.
          </p>

          {/* Discord Screenshot - Responsive size */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] relative w-full max-w-[386.587px] md:max-w-[1160px] flex justify-center mt-3 md:mt-4 mb-[-30px] md:mb-[-50px]">
            <img
              className="w-[386.587px] h-[258.928px] md:w-[1161.262px] md:h-[777.788px] rounded-[12px]"
              style={{ aspectRatio: '386.59/258.93' }}
              alt="Discord Community Announcement"
              src="/discord-section/discord-img.svg"
            />
          </div>

          {/* Feature Cards - Overlapping bottom of Discord image */}
          <div className="relative z-10 w-full max-w-[390px] md:max-w-[1200px] px-4 md:px-56">
            {/* Dark background with gradient blend */}
            <div 
              className="absolute inset-0 -top-12 md:-top-20 rounded-b-[12px]"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, #1B092E 40%, #1B092E 100%)'
              }}
            />
            
            {/* Mobile: 2x2 grid, Desktop: 1x4 grid */}
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="translate-y-[-1rem] animate-fade-in opacity-0 relative w-full md:w-[190px] h-[100px] md:h-[112px] rounded-[10px] overflow-hidden bg-transparent border-0"
                  style={{
                    animationDelay: `${600 + index * 100}ms`,
                    backgroundImage: 'url(/collaboration/Rectangle-bg.svg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <CardContent className="p-3 md:p-5 h-full flex flex-col relative">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4 relative z-10">
                      <img
                        className="w-5 h-5 md:w-6 md:h-6"
                        alt={`${card.title} icon`}
                        src={card.icon}
                      />
                      <h3 className="text-[#7F89EC] font-['Cambay'] text-[12px] md:text-[14px] font-bold leading-normal">
                        {card.title}
                      </h3>
                    </div>

                    <p className="w-full md:w-[153px] text-[#7C85E2] font-['Cambay'] text-[9px] md:text-[10px] font-normal leading-[10px] md:leading-[12px] mb-2 md:mb-4 relative z-10">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Button - Mobile responsive */}
          <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] mt-1 md:mt-0 flex items-center gap-[5px] px-3 md:px-4 py-[5px] h-[38px] md:h-[42px] bg-[#0e5fca] rounded-[20px] border border-solid border-white shadow-[0px_0px_0.27px_#728bac] hover:bg-[#0e5fca]/90 hover:scale-105 transition-all duration-300">
            <img
              className="w-[32px] h-[32px] md:w-[37.59px] md:h-[37.59px]"
              alt="Discord icon"
              src="https://c.animaapp.com/mishf4erVkDEuN/img/social-media-day-png-highquality-transparent-icons-popular-apps-.png"
            />
            <span className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[13px] md:text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              Join For Free
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};