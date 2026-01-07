import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

const stepsData = [
  {
    number: "1",
    title: "Sign Up & Pick Your Challenge",
    description: "Choose the funding program that fits your trading style.",
    icon: (
      <img
        className="absolute -top-6 sm:-top-9 left-2 w-32 sm:w-44 h-32 sm:h-44"
        alt="Icon"
        src="/How-it-works/icon.svg"
      />
    ),
  },
  {
    number: "2",
    title: "Prove Your Skills",
    description:
      "Trade in a real-market environment and hit the profit targets.",
    icon: (
      <img
        className="absolute -top-6 sm:-top-9 left-2 w-32 sm:w-44 h-32 sm:h-44"
        alt="Icon"
        src="/How-it-works/icon-2.svg"
      />
    ),
  },
  {
    number: "3",
    title: "Get Funded",
    description: "Pass the evaluation and start trading with our capital.",
    icon: (
      <img
        className="absolute -top-6 sm:-top-9 left-2 w-32 sm:w-44 h-32 sm:h-44"
        alt="Icon"
        src="/How-it-works/icon-3.svg"
      />
    ),
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="w-full py-12 md:py-20 px-4 flex flex-col gap-8 md:gap-16">
      <h2 className="max-w-[263px] md:max-w-[832px] lg:max-w-none mx-auto 
        text-center font-normal text-[24px] md:text-[42px] leading-normal
        bg-gradient-to-b from-white to-[#E9B1FF] bg-clip-text text-transparent
        [font-family:'M_PLUS_2',Helvetica]
        translate-y-[-1rem] animate-fade-in opacity-0">
        How Thaurus Guru&apos;s Prop Trading Works?
      </h2>

      <div className="max-w-[1160px] mx-auto w-full">
        {/* Mobile: Vertical Stack, Desktop: 3 Columns */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 items-center md:items-stretch">
          {stepsData.map((step, index) => (
            <Card
              key={index}
              className="relative w-full max-w-[285px] md:max-w-none
              h-[180px] md:h-[240px] 
              rounded-[19.902px] md:rounded-[25px] 
              border-[0.796px] md:border-0 border-[#A770E1] md:border-transparent
              backdrop-blur-md
              shadow-[0_8px_32px_0_rgba(77,24,145,0.3)]
              hover:shadow-[0_12px_40px_0_rgba(77,24,145,0.4)]
              transition-all duration-300
              translate-y-[-1rem] animate-fade-in opacity-0
              bg-contain bg-center bg-no-repeat
              bg-gradient-to-b from-[rgba(77,24,145,0.20)] to-[rgba(30,9,51,0.20)] md:bg-none"
              style={
                {
                  "--animation-delay": `${200 + index * 100}ms`,
                  backgroundImage: window.innerWidth >= 768 ? "url('/How-it-works/card-bg.svg')" : "none",
                } as React.CSSProperties
              }
            >
              <CardContent className="relative h-full p-0">
                <div className="relative h-full">
                  {step.icon}

                  <div className="absolute top-[90px] md:top-[125px] left-6 md:left-8
                    w-auto md:w-auto
                    [font-family:'Cambay',Helvetica] font-bold md:font-semibold 
                    text-white text-[14px] md:text-[20px] 
                    text-left whitespace-nowrap
                    tracking-[0] leading-[20.698px] md:leading-normal">
                    {step.title}
                  </div>

                  <div className="absolute top-[125px] md:top-[165px] left-6 md:left-8
                    w-[196px] md:w-[280px] 
                    [font-family:'Manrope',Helvetica] font-normal text-[#9d62d9] 
                    text-xs md:text-sm 
                    text-left
                    tracking-[0] leading-4 md:leading-5">
                    {step.description}
                  </div>

                  <div className="absolute top-6 md:top-9 right-6 md:right-10">
                    <div className="absolute -top-6 md:-top-9 -right-6 md:-right-10 
                      w-[120px] md:w-[188px] h-[100px] md:h-[153px] 
                      rounded-[19.902px] md:rounded-[25px] blur-[25px] md:blur-[37.5px]"
                      style={{
                        background: 'linear-gradient(230deg, rgba(218, 182, 255, 0.20) 1.67%, rgba(30, 9, 51, 0.20) 88.85%)'
                      }}
                    />
                    <div className="relative [font-family:'Manrope',Helvetica] font-normal text-[#a770e0]/20 
                      text-[40px] md:text-[60px] tracking-[0] leading-none">
                      {step.number}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};