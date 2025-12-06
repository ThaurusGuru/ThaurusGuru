import React from "react";
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
    <section className="relative w-full py-16 px-4">
      <div className="max-w-[1202px] mx-auto">
        <div className="flex flex-col items-center gap-8">
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[42px] text-center tracking-[0.42px] leading-[normal]">
            Join The Thaurus Community!
          </h2>

          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] max-w-[365px] [font-family:'Poppins',Helvetica] font-normal text-white text-base text-center tracking-[0.16px] leading-[26px]">
            Step into the heart of the action with our exclusive trading
            community.
          </p>

          {/* Discord Screenshot - Proper large size */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] relative w-full max-w-[1160px] flex justify-center mt-8 mb-[-80px]">
            <img
              className="w-full h-auto rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              alt="Discord Community Announcement"
              src="https://c.animaapp.com/mishf4erVkDEuN/img/announcement-2.png"
            />
          </div>

          {/* Feature Cards - Overlapping bottom of Discord image */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1000px] px-4">
            {featureCards.map((card, index) => (
              <Card
                key={index}
                className="translate-y-[-1rem] animate-fade-in opacity-0 relative w-full h-[260px] rounded-[10px] border-2 border-solid border-[#7f89ec]/60 shadow-[0px_4px_12px_#7f89ec40] bg-[linear-gradient(180deg,rgba(88,103,241,0.35)_0%,rgba(154,164,255,0.2)_100%)] backdrop-blur-xl overflow-hidden"
                style={{
                  animationDelay: `${600 + index * 100}ms`,
                }}
              >
                <CardContent className="p-5 h-full flex flex-col relative">
                  {/* Decorative background images */}
                  {card.hasImage && (
                    <img
                      className="absolute bottom-0 left-[3px] w-[185px] h-auto opacity-40"
                      alt="Market Chats Illustration"
                      src={card.imageUrl}
                    />
                  )}
                  
                  {/* Community Hub decorative design */}
                  {card.title === "Community Hub" && (
                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
                      <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-gradient-to-br from-[#7f89ec]/40 to-transparent blur-2xl" />
                      <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gradient-to-tl from-[#9aa4ff]/30 to-transparent blur-xl" />
                    </div>
                  )}
                  
                  {/* Announcements decorative design */}
                  {card.title === "Announcements" && (
                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-30">
                      <div className="absolute bottom-2 right-2 w-20 h-20 rounded-full bg-gradient-to-br from-[#7f89ec]/50 to-transparent blur-xl" />
                      <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-gradient-to-tl from-[#5867f1]/40 to-transparent blur-lg" />
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4 relative z-10">
                    <div className="w-9 h-9 rounded-lg bg-white/30 backdrop-blur-sm flex items-center justify-center border border-white/40">
                      <img
                        className="w-6 h-6 brightness-0 invert"
                        alt={`${card.title} icon`}
                        src={card.icon}
                      />
                    </div>
                    <h3 className="[font-family:'Cambay',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="w-full max-w-[200px] [font-family:'Cambay',Helvetica] font-medium text-white/95 text-[11px] tracking-[0] leading-[14px] mb-4 relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                    {card.description}
                  </p>

                  <div className="[font-family:'Cambay',Helvetica] font-normal text-white/90 text-xs tracking-[0] leading-[18px] relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]">
                    {card.channels.map((channel, channelIndex) => (
                      <React.Fragment key={channelIndex}>
                        {channel}
                        {channelIndex < card.channels.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join Button */}
          <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] flex items-center gap-[5px] px-4 py-[5px] h-[42px] bg-[#0e5fca] rounded-[20px] border border-solid border-white shadow-[0px_0px_0.27px_#728bac] hover:bg-[#0e5fca]/90 hover:scale-105 transition-all duration-300">
            <img
              className="w-[37.59px] h-[37.59px]"
              alt="Discord icon"
              src="https://c.animaapp.com/mishf4erVkDEuN/img/social-media-day-png-highquality-transparent-icons-popular-apps-.png"
            />
            <span className="[font-family:'Montserrat',Helvetica] font-bold text-white text-[15px] tracking-[0] leading-[normal] whitespace-nowrap">
              Join For Free
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};