import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

const stepsData = [
  {
    number: "1",
    title: "Sign Up & Pick Your Challenge",
    description: "Choose the funding program that fits your trading style.",
    icon: (
      <img
        className="absolute -top-9 left-2 w-44 h-44"
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
        className="absolute -top-9 left-2 w-44 h-44"
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
        className="absolute -top-9 left-2 w-44 h-44"
        alt="Icon"
        src="/How-it-works/icon-3.svg"
      />
    ),
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="w-full py-20 px-4 flex flex-col gap-16">
      <h2 className="max-w-[832px] mx-auto 
        text-center font-normal text-[42px] leading-normal whitespace-nowrap
        bg-gradient-to-b from-white to-[#E9B1FF] bg-clip-text text-transparent
        [font-family:'M_PLUS_2',Helvetica]
        translate-y-[-1rem] animate-fade-in opacity-0">
        How Thaurus Guru&apos;s Prop Trading Works?
      </h2>

      <div className="max-w-[1160px] mx-auto w-full">
        {/* First Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {stepsData.slice(0, 3).map((step, index) => (
            <Card
              key={index}
              className="relative h-[240px] rounded-[25px] border-0
              backdrop-blur-md
              shadow-[0_8px_32px_0_rgba(77,24,145,0.3)]
              hover:shadow-[0_12px_40px_0_rgba(77,24,145,0.4)]
              transition-all duration-300
              translate-y-[-1rem] animate-fade-in opacity-0
              bg-contain bg-center bg-no-repeat"
              style={
                {
                  "--animation-delay": `${200 + index * 100}ms`,
                  backgroundImage: "url('/How-it-works/card-bg.svg')",
                } as React.CSSProperties
              }
            >
              <CardContent className="relative h-full p-0">
                <div className="relative h-full">
                  {step.icon}

                  <div className="absolute top-[125px] left-8 
                    [font-family:'Cambay',Helvetica] font-bold text-white text-lg 
                    tracking-[0] leading-[26px]">
                    {step.title}
                  </div>

                  <div className="absolute top-[155px] left-8 w-[280px] 
                    [font-family:'Manrope',Helvetica] font-normal text-[#9d62d9] text-sm 
                    tracking-[0] leading-5">
                    {step.description}
                  </div>

                  <div className="absolute top-9 right-10">
                    <div className="absolute -top-9 -right-10 w-[188px] h-[153px] rounded-[25px] blur-[37.5px]"
                      style={{
                        background: 'linear-gradient(230deg, rgba(218, 182, 255, 0.20) 1.67%, rgba(30, 9, 51, 0.20) 88.85%)'
                      }}
                    />
                    <div className="relative [font-family:'Manrope',Helvetica] font-normal text-[#a770e0]/20 
                      text-[60px] tracking-[0] leading-none">
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