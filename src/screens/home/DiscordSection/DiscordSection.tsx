import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { useTranslation } from "react-i18next";

export const DiscordSection = () => {
  const { t } = useTranslation();

  const featureCards = [
    {
      icon: "/discord-section/majesticons-chat-line.svg",
      title: t('discord.marketChats'),
      description: t('discord.marketChatsDesc'),
      channels: [
        "# 💬 forex-chat",
        "# 💬 gold-chat",
        "# 💬 indices-chat",
        "# 💬 stocks-chat",
        "# 💬 oil-chat",
        "# 💬 crypto-chat",
      ],
      hasImage: true,
      imageUrl: "/discord-section/group-112.png",
    },
    {
      icon: "/discord-section/ant-design-stock-outlined.svg",
      title: t('discord.tradeIdeas'),
      description: t('discord.tradeIdeasDesc'),
      channels: ["# 📈 trade-ideas"],
      hasImage: false,
    },
    {
      icon: "/discord-section/fluent-people-community-16-regular.svg",
      title: t('discord.communityHub'),
      description: t('discord.communityHubDesc'),
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
      icon: "/discord-section/fluent-speaker-1-28-regular.svg",
      title: t('discord.announcements'),
      description: t('discord.announcementsDesc'),
      channels: ["# 📢 announcements"],
      hasImage: false,
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 px-4">
      <div className="max-w-[1202px] mx-auto">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          {/* Heading - Mobile responsive */}
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[24px] md:text-[42px] text-center tracking-[0.24px] md:tracking-[0.42px] leading-[normal]">
            {t('discord.title')}
          </h2>

          {/* Description - Mobile responsive */}
          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] max-w-[290px] md:max-w-[365px] [font-family:'Poppins',Helvetica] font-normal text-[#C293F1] md:text-white text-xs md:text-base text-center tracking-[0.12px] md:tracking-[0.16px] leading-4 md:leading-[26px]">
            {t('discord.description')}
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
            {/* Dark background wrapping the cards */}
            <div 
              className="absolute inset-0 top-6 md:top-8 rounded-xl pointer-events-none"
              style={{
                background: '#1B092E',
                boxShadow: '0 0 40px 20px #1B092E'
              }}
            />
            
            {/* Mobile: 2x2 grid, Desktop: 1x4 grid */}
            <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {featureCards.map((card, index) => (
                <Card
                  key={index}
                  className="translate-y-[-1rem] animate-fade-in opacity-0 relative w-[190px] h-[112px] rounded-[10px] overflow-hidden bg-transparent border-0"
                  style={{
                    animationDelay: `${600 + index * 100}ms`,
                    backgroundImage: 'url(/collaboration/Rectangle-bg.svg)',
                    backgroundColor: 'rgba(27, 9, 46, 0.4)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'overlay'
                  }}
                >
                  <CardContent className="px-5 py-3 md:px-6 md:py-5 h-full flex flex-col relative">
                    <div className="flex items-center gap-2 md:gap-3 mb-1 relative z-10">
                      <img
                        className="w-5 h-5 md:w-6 md:h-6"
                        alt={`${card.title} icon`}
                        src={card.icon}
                      />
                      <h3 className="text-[#7F89EC] font-['Cambay'] text-[14px] font-bold leading-normal">
                        {card.title}
                      </h3>
                    </div>

                    <p className="w-[153px] text-[#7C85E2] font-['Cambay'] text-[10px] font-normal leading-[12px] mb-2 md:mb-4 relative z-10">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Join Button - Mobile responsive */}
          <Button 
            onClick={() => window.open('https://discord.com/invite/VjCZJ2QwMn', '_blank')}
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] mt-6 md:mt-10 flex items-center gap-[5px] px-3 md:px-4 py-[5px] h-[38px] md:h-[42px] bg-[#0e5fca] rounded-[20px] border border-solid border-white shadow-[0px_0px_0.27px_#728bac] hover:bg-[#0e5fca]/90 hover:scale-105 transition-all duration-300">
            <img
              className="w-[32px] h-[32px] md:w-[37.59px] md:h-[37.59px]"
              alt="Discord icon"
              src="/discord-section/social-media-day-png-highquality-transparent-icons-popular-apps-.png"
            />
            <span className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[13px] md:text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              {t('discord.joinForFree')}
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};