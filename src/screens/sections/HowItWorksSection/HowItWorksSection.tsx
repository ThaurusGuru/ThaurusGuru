import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

const stepsData = [
  {
    number: "1",
    title: "Sign Up & Pick Your Challenge",
    description: "Choose the funding program that fits your trading style.",
    icon: (
      <>

        <img
          className="absolute top-[37px] left-8 w-[66px] h-[66px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-1.svg"
        />
        <img
          className="absolute top-[42px] left-[37px] w-14 h-14"
          alt="Ellipse"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-2.svg"
        />
        <img
          className="top-[30.70%] absolute w-[26.37%] h-0 left-[26.92%] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/line-1.svg"
        />
        <img
          className="top-[31.14%] absolute w-[8.79%] h-0 left-0 object-cover"
          alt="Line"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/line-2.svg"
        />
        <img
          className="absolute w-0 h-[15.79%] top-0 left-[17.58%] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/line-3.svg"
        />
        <img
          className="absolute w-[3.87%] h-[9.50%] top-[26.39%] left-[16.96%]"
          alt="Vector"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/vector.svg"
        />
        <img
          className="absolute w-[4.76%] h-[3.80%] top-[29.24%] left-[14.88%]"
          alt="Vector"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/vector-4.svg"
        />
      </>
    ),
  },
  {
    number: "2",
    title: "Prove Your Skills",
    description:
      "Trade in a real-market environment and hit the profit targets.",
    icon: (
      <>

        <div className="absolute top-0 left-0 w-[194px] h-[102px]">
          <img
            className="absolute top-9 left-8 w-[66px] h-[66px]"
            alt="Ellipse"
            src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-1.svg"
          />
          <img
            className="absolute top-[41px] left-[37px] w-14 h-14"
            alt="Ellipse"
            src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-2.svg"
          />
          <img
            className="absolute w-[49.48%] h-0 top-[67.65%] left-[50.52%] object-cover"
            alt="Line"
            src="https://c.animaapp.com/mishf4erVkDEuN/img/line-1.svg"
          />
          <img
            className="absolute w-[16.49%] h-0 top-[68.63%] left-0 object-cover"
            alt="Line"
            src="https://c.animaapp.com/mishf4erVkDEuN/img/line-2.svg"
          />
          <img
            className="absolute w-0 h-[35.29%] top-0 left-[32.99%] object-cover"
            alt="Line"
            src="https://c.animaapp.com/mishf4erVkDEuN/img/line-3.svg"
          />
        </div>
        <img
          className="absolute w-[7.14%] top-14 left-[14.29%] h-[26px]"
          alt="Streamline target"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/streamline-target.svg"
        />
      </>
    ),
  },
  {
    number: "3",
    title: "Get Funded",
    description: "Pass the evaluation and start trading with our capital.",
    icon: (
      <>

        <img
          className="absolute top-9 left-8 w-[66px] h-[66px]"
          alt="Ellipse"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-1.svg"
        />
        <img
          className="absolute top-[41px] left-[37px] w-14 h-14"
          alt="Ellipse"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-2.svg"
        />
        <img
          className="top-[30.26%] absolute w-[26.37%] h-0 left-[26.92%] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/line-1.svg"
        />
        <img
          className="top-[30.70%] absolute w-[8.79%] h-0 left-0 object-cover"
          alt="Line"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/line-2.svg"
        />
        <img
          className="absolute w-0 h-[15.79%] top-0 left-[17.58%] object-cover"
          alt="Line"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/line-3.svg"
        />
        <img
          className="absolute w-[4.46%] h-[9.27%] top-[25.19%] left-[15.35%]"
          alt="Vector"
          src="https://c.animaapp.com/mishf4erVkDEuN/img/vector-2.svg"
        />
      </>
    ),
  },
  // {
  //   number: "4",
  //   title: "Trade Smarter With AI",
  //   description: "Use AI insights and MT5 tools to make data-driven trades.",
  //   icon: (
  //     <>
  //       <div className="absolute top-0 left-0 w-[194px] h-[102px]">
  //         <img
  //           className="absolute top-9 left-8 w-[66px] h-[66px]"
  //           alt="Ellipse"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-1.svg"
  //         />
  //         <img
  //           className="absolute top-[41px] left-[37px] w-14 h-14"
  //           alt="Ellipse"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-2.svg"
  //         />
  //         <img
  //           className="absolute w-[49.48%] h-0 top-[67.65%] left-[50.52%] object-cover"
  //           alt="Line"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/line-1.svg"
  //         />
  //         <img
  //           className="absolute w-[16.49%] h-0 top-[68.63%] left-0 object-cover"
  //           alt="Line"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/line-2.svg"
  //         />
  //         <img
  //           className="absolute w-0 h-[35.29%] top-0 left-[32.99%] object-cover"
  //           alt="Line"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/line-3.svg"
  //         />
  //       </div>
  //       <img
  //         className="absolute top-14 left-[52px] w-[26px] h-[26px]"
  //         alt="Hugeicons ai scan"
  //         src="https://c.animaapp.com/mishf4erVkDEuN/img/hugeicons-ai-scan.svg"
  //       />
  //     </>
  //   ),
  // },
  // {
  //   number: "5",
  //   title: "Earn & Withdraw Profits",
  //   description: "Keep up to 80% profits with fast, reliable payouts.",
  //   icon: (
  //     <>
  //       <div className="absolute top-0 left-0 w-[194px] h-[102px]">
  //         <img
  //           className="absolute top-9 left-8 w-[66px] h-[66px]"
  //           alt="Ellipse"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-1.svg"
  //         />
  //         <img
  //           className="absolute top-[41px] left-[37px] w-14 h-14"
  //           alt="Ellipse"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/ellipse-2.svg"
  //         />
  //         <img
  //           className="absolute w-[49.48%] h-0 top-[67.65%] left-[50.52%] object-cover"
  //           alt="Line"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/line-1.svg"
  //         />
  //         <img
  //           className="absolute w-[16.49%] h-0 top-[68.63%] left-0 object-cover"
  //           alt="Line"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/line-2.svg"
  //         />
  //         <img
  //           className="absolute w-0 h-[35.29%] top-0 left-[32.99%] object-cover"
  //           alt="Line"
  //           src="https://c.animaapp.com/mishf4erVkDEuN/img/line-3.svg"
  //         />
  //       </div>
  //       <img
  //         className="absolute top-14 left-[52px] w-[26px] h-[26px]"
  //         alt="Fluent arrow growth"
  //         src="https://c.animaapp.com/mishf4erVkDEuN/img/fluent-arrow-growth-20-filled.svg"
  //       />
  //     </>
  //   ),
  // },
];

export const HowItWorksSection = () => {
  return (
    <section className="w-full py-20 px-4 flex flex-col gap-16">
      <h2 className="max-w-[832px] mx-auto 
        text-center font-normal text-[42px] leading-normal
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
              className="relative h-[220px] rounded-[25px] border-none 
              bg-gradient-to-br from-[#4d1891]/20 to-[#1e0933]/20
              backdrop-blur-md border border-purple-500/30
              shadow-[0_8px_32px_0_rgba(77,24,145,0.3)]
              hover:border-purple-500/50 hover:shadow-[0_12px_40px_0_rgba(77,24,145,0.4)]
              transition-all duration-300
              overflow-hidden 
              translate-y-[-1rem] animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${200 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="relative h-full p-0">
                <div className="absolute top-0 right-0 w-1/2 h-2/3 rounded-[25px] 
                  blur-[40px] bg-gradient-to-br from-[#dab6ff]/20 to-transparent" />

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

                  <div className="absolute top-6 right-10 
                    [font-family:'Manrope',Helvetica] font-normal text-[#a770e0]/20 
                    text-[60px] tracking-[0] leading-none">
                    {step.number}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Second Row - 2 Cards Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[780px] mx-auto">
          {stepsData.slice(3, 5).map((step, index) => (
            <Card
              key={index + 3}
              className="relative h-[220px] rounded-[25px] border-none 
              bg-gradient-to-br from-[#4d1891]/20 to-[#1e0933]/20
              backdrop-blur-md border border-purple-500/30
              shadow-[0_8px_32px_0_rgba(77,24,145,0.3)]
              hover:border-purple-500/50 hover:shadow-[0_12px_40px_0_rgba(77,24,145,0.4)]
              transition-all duration-300
              overflow-hidden 
              translate-y-[-1rem] animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${500 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <CardContent className="relative h-full p-0">
                <div className="absolute top-0 right-0 w-1/2 h-2/3 rounded-[25px] 
                  blur-[40px] bg-gradient-to-br from-[#dab6ff]/20 to-transparent" />

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

                  <div className="absolute top-6 right-10 
                    [font-family:'Manrope',Helvetica] font-normal text-[#a770e0]/20 
                    text-[60px] tracking-[0] leading-none">
                    {step.number}
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