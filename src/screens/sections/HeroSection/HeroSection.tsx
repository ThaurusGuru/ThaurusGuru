import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { ArrowRight } from "lucide-react";

const featureCards = [
  {
    title: "Meta Trader 5",
    subtitle: "Now available",
  },
  {
    title: "Boost Performance With Powerful AI Tools",
    subtitle: "Try it now!",
  },
  {
    title: "Full Trading Education & Support",
    subtitle: "Learn More",
  },
];

const reviewCards = [
  {
    logo: "https://c.animaapp.com/mishf4erVkDEuN/img/trustpilot-logo-white-icon-1.svg",
    rating: "4.4",
    ratingColor: "text-[#04da8d]",
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154.svg",
    label: "Excellent",
    subtext: "Based on reviews",
    subtextColor: "text-[#7ec2b0]",
    borderColor: "border-[#00b67b]",
    bgGradient: "from-[#015235]/60 to-[#1b092e]",
  },
  {
    logo: "https://c.animaapp.com/mishf4erVkDEuN/img/ttp.png",
    rating: "4.6",
    ratingColor: "text-[#003aff]",
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-155.svg",
    label: "Excellent",
    subtext: "Based on 169+ users",
    subtextColor: "text-[#1468ca]",
    borderColor: "border-[#003aff]",
    bgGradient: "from-[#001a71]/60 to-[#1b092e]",
  },
];

export const HeroSection = () => {
  return (
    <section className="relative w-full px-[105px] pt-[220px] pb-[100px]">
      <div className="grid grid-cols-2 gap-16">
        {/* Left Column - Content */}
        <div className="flex flex-col">
          {/* Badge with violet gradient and white border */}
          <Badge className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] 
            inline-flex items-center justify-center self-start gap-2.5 px-5 py-2 h-auto 
            rounded-full border-2 border-white/60
            bg-gradient-to-r from-[#2c115c] via-[#47107b] to-[#4d0d8d]
            shadow-lg shadow-purple-500/30">
            <span className="[font-family:'Blinker',Helvetica] font-medium text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              Get funded today!
            </span>
          </Badge>

          {/* Main Heading - Bigger and more spacious */}
          <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] 
            mt-10 [font-family:'M_PLUS_2',Helvetica] font-normal text-white text-[62px] 
            tracking-[-0.02em] leading-[1.15]">
            Master the Markets
            <br />
            with Thaurus Guru
          </h1>

          {/* Feature Cards Row */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] 
  flex gap-6 mt-10">
  {featureCards.map((card, index) => (
    <Card
      key={index}
      className={`${
        index === 0 ? 'w-[95px]' : index === 1 ? 'w-[140px]' : 'w-[130px]'
      } h-[90px] rounded-xl
      bg-white/5 backdrop-blur-md border border-white/10 
      shadow-[0_8px_32px_0_rgba(96,32,163,0.35)]
      hover:bg-white/10 hover:border-white/20 transition-all duration-300`}
    >
      <CardContent className="flex flex-col items-start justify-center gap-2 p-3 h-full">
        <div className={`[font-family:'Cambay',Helvetica] font-normal text-white ${
          index === 0 ? 'text-[15px]' : 'text-[13px]'
        } leading-snug`}>
          {card.title}
        </div>
        <div className="[font-family:'Cambay',Helvetica] text-[#9d62d9] text-[11px] font-normal tracking-[0] leading-normal">
          {card.subtitle}
        </div>
      </CardContent>
    </Card>
  ))}
</div>

          {/* Description */}
          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] 
            mt-8 [font-family:'Cambay',Helvetica] font-normal text-[#c193f1] text-[15px] 
            tracking-[0] leading-relaxed">
            Unlock your trading potential with powerful AI tools and funded challenges.
            <br />
            Learn, trade, and grow with expert support at every step.
          </p>

          {/* CTA Buttons */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] 
            flex flex-wrap items-center gap-4 mt-10">
            <Button className="h-12 px-7 rounded-lg 
              bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#7c3aed]
              border-none
              shadow-[0_4px_24px_0_rgba(168,85,247,0.5)] 
              hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.7)] 
              hover:scale-105 transition-all duration-300
              group">
              <span className="[font-family:'Cambay',Helvetica] font-bold text-white text-[15px] tracking-[0] leading-[normal]">
                Start your Challenge
              </span>
              <ArrowRight className="w-5 h-5 ml-2 text-white group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              className="h-12 px-7 rounded-lg 
              bg-transparent backdrop-blur-sm
              border border-[#7a27ef]/50 
              hover:bg-white/5 hover:border-[#7a27ef] 
              hover:shadow-[0_4px_24px_0_rgba(122,39,239,0.3)]
              transition-all duration-300">
              <span className="[font-family:'Cambay',Helvetica] font-bold text-white text-[15px] tracking-[0] leading-[normal]">
                Try pay as you go challenge
              </span>
            </Button>
          </div>

          {/* Review Cards */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] 
            flex gap-4 mt-14">
            {reviewCards.map((review, index) => (
              <div
                key={index}
                className={`flex-1 h-16 rounded-xl backdrop-blur-md bg-gradient-to-r ${review.bgGradient}
                border ${review.borderColor}
                shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]
                hover:bg-white/5 transition-all duration-300
                p-4 flex items-center justify-between`}
              >
                <div className="flex items-center gap-3">
                  <img
                    className="h-5 object-contain"
                    alt="Logo"
                    src={review.logo}
                  />
                  <div className="flex flex-col">
                    <div className="[font-family:'Poppins',Helvetica] font-medium text-white text-[9px] leading-tight">
                      {review.label}
                    </div>
                    <div className={`[font-family:'Poppins',Helvetica] font-normal ${review.subtextColor} text-[8px] leading-tight`}>
                      {review.subtext}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`[font-family:'Poppins',Helvetica] font-semibold ${review.ratingColor} text-sm`}>
                    {review.rating}
                  </div>
                  <img
                    className="h-3"
                    alt="Stars"
                    src={review.stars}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Video/Dashboard with Pure Glass - shifted right and down */}
<div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] 
  flex items-center justify-end mb-28 mr-8">
  <div className="relative w-[600px] h-[340px] rounded-2xl overflow-hidden">
    {/* Pure Glass effect container - NO colored background */}
    <div className="absolute inset-0 
      bg-white/[0.03] backdrop-blur-2xl 
      border border-white/20 
      shadow-[0_8px_32px_0_rgba(31,38,135,0.37),inset_0_1px_1px_rgba(255,255,255,0.1)]">
    </div>
    
    {/* Content - Video placeholder with minimal styling */}
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Video play button */}
      <div className="w-16 h-16 rounded-full 
        bg-white/10 backdrop-blur-md 
        border border-white/30
        flex items-center justify-center
        hover:bg-white/20 hover:scale-110 transition-all duration-300
        cursor-pointer
        shadow-[0_4px_24px_0_rgba(255,255,255,0.1)]">
        <div className="w-0 h-0 
          border-t-[10px] border-t-transparent 
          border-l-[16px] border-l-white 
          border-b-[10px] border-b-transparent 
          ml-1" />
      </div>
    </div>

    {/* Shimmer effect */}
    <div className="absolute inset-0 
      bg-gradient-to-r from-transparent via-white/5 to-transparent 
      -skew-x-12 animate-shimmer" />
  </div>
</div>
      </div>
    </section>
  );
};