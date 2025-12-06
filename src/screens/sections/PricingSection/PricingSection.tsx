import { InfoIcon, ZapIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const processSteps = [
  { label: "Pick your challenge" },
  { label: "Select your capital" },
  { label: "Start trading with our funds" },
];

const challengeTypes = [
  { icon: true, label: "Instant" },
  { number: "1", label: "One Step" },
  { number: "2", label: "Two Step" },
  { number: "3", label: "Three Step" },
];

const accountSizes = ["$5K", "$10K", "$25K", "$50K", "$100K"];

const tableRows = [
  { label: "Profit Target (Phase 1)", hasInfo: true },
  { label: "Max Daily Drawdown", hasInfo: true },
  { label: "Max Overall Drawdown", hasInfo: true },
  { label: "Minimum Trading Days", hasInfo: true },
  { label: "Payout Split", hasInfo: true },
  { label: "Leverage", hasInfo: true },
];

const columnData = [
  { value: "8%" },
  { value: "4%" },
  { value: "10%" },
  { value: "4" },
  { value: "80%/20% - Bi-Weekly\n80%/20% - Weekly (add-on)" },
  { value: "FX 1:50 , Indices 1:10, Metals 1:10, Energies 1:10 & Crypto 1:1" },
];

const prices = ["$89", "$129", "$249", "$369", "$589"];

export const PricingSection = () => {
  return (
    <section className="relative w-full py-10 px-4 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="max-w-[1160px] mx-auto">
        {/* Top Badges */}
        <div className="flex items-center gap-4 mb-6 opacity-0 animate-fade-in [--animation-delay:200ms]">
          {processSteps.map((step, index) => (
            <Badge
              key={index}
              className="h-auto px-[17px] py-[5px] rounded-[14px] border-[0.6px] border-white shadow-[inset_0px_4px_4px_#00000040] bg-[linear-gradient(90deg,rgba(112,35,192,1)_0%,rgba(53,16,90,1)_100%)] text-white text-xs [font-family:'Blinker',Helvetica] font-normal whitespace-nowrap"
            >
              {step.label}
            </Badge>
          ))}
        </div>

        {/* Heading */}
        <h2 className="mt-10 mb-6 text-white [font-family:'M_PLUS_2',Helvetica] font-normal text-[42px] tracking-[0] leading-[normal] opacity-0 animate-fade-in [--animation-delay:400ms]">
          Choose Your Prop Trading Challenge &amp; Get Funded Today
        </h2>

        {/* Subheading */}
        <p className="mb-8 [font-family:'Cambay',Helvetica] font-normal text-[#c193f1] text-base tracking-[0] leading-[normal] opacity-0 animate-fade-in [--animation-delay:600ms]">
          Build your trading path with flexible challenges designed for every style.
        </p>

        {/* Model Selection */}
        <div className="mb-6 opacity-0 animate-fade-in [--animation-delay:800ms]">
          <p className="[font-family:'Cambay',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] mb-4">
            Model
          </p>
          <div className="flex gap-4">
            <Button className="h-[52px] w-[180px] rounded-[10px] border border-solid border-[#a770e0] bg-[linear-gradient(164deg,rgba(96,40,158,1)_0%,rgba(51,9,97,1)_100%)] [font-family:'Cambay',Helvetica] font-bold text-white text-xl hover:opacity-90 transition-opacity">
              CLASSIC
            </Button>
            <Button className="h-[52px] w-[180px] bg-[#1b0732] rounded-[10px] border border-solid border-[#4f1b85] [font-family:'Cambay',Helvetica] font-bold text-white text-xl hover:opacity-90 transition-opacity">
              PRO
            </Button>
            <div className="relative ml-auto">
              <p className="absolute top-[-36px] left-[-47px] rotate-[-15deg] [font-family:'Cambay',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                Try now
              </p>
              <img
                className="absolute top-[-36px] left-[34px] w-[38px] h-[26px]"
                alt="Arrow"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/group-66.png"
              />
              <Button className="h-[52px] w-[228px] rounded-[10px] border-[none] bg-[linear-gradient(159deg,rgba(246,230,255,1)_0%,rgba(214,146,255,1)_25%,rgba(129,72,237,1)_50%,rgba(72,41,195,1)_75%,rgba(9,4,34,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(90deg,rgba(110,64,225,1)_0%,rgba(122,39,239,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none [text-shadow:0px_2px_4px_#00000040] [font-family:'Cambay',Helvetica] font-bold text-white text-xl hover:opacity-90 transition-opacity">
                PAY AS YOU GO
              </Button>
            </div>
          </div>
        </div>

        {/* Challenge Type Cards - INDIVIDUAL BORDERED CARDS */}
        <div className="flex items-center justify-between mb-6 opacity-0 animate-fade-in [--animation-delay:1000ms]">
          {challengeTypes.map((type, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 px-6 py-3 rounded-xl
                border-2 border-[#8b5cf6]
                bg-gradient-to-br from-[#60289e]/40 to-[#1d0a32]/40
                backdrop-blur-md
                shadow-[0_4px_16px_rgba(139,92,246,0.4)]"
            >
              {type.icon ? (
                <ZapIcon className="w-[26px] h-[26px] text-white" />
              ) : (
                <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-[26px] tracking-[0] leading-[normal]">
                  {type.number}
                </span>
              )}
              <span className="[font-family:'Blinker',Helvetica] font-semibold text-white text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
                {type.label}
              </span>
            </div>
          ))}
        </div>

        {/* Add-ons Bar */}
        <div className="mb-6 h-[53px] border-t border-b border-[#e8b0ff3d] bg-[linear-gradient(90deg,rgba(31,10,52,1)_0%,rgba(102,56,152,1)_50%,rgba(27,9,46,1)_100%)] flex items-center px-[51px] opacity-0 animate-fade-in [--animation-delay:1200ms]">
          <div className="flex items-center gap-2">
            <span className="[font-family:'Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
              Add-ons&nbsp;&nbsp;&nbsp;&nbsp; -
            </span>
            <span className="[font-family:'Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
              <span className="font-bold">News trading</span> (+10% from challenge price) |{" "}
              <span className="font-bold">Weekend Trading</span> (+10% from challenge price) |{" "}
              <span className="font-bold">Weekly Payout</span> (+40% from challenge price)
            </span>
          </div>
        </div>

        {/* Platform Badge */}
        <div className="flex items-center justify-start mb-6 opacity-0 animate-fade-in [--animation-delay:1400ms]">
          <div className="flex items-center gap-2.5 px-[17px] py-[5px] rounded-[20px] border border-solid border-[#d9b6fe1a] shadow-[inset_0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(96,40,158,0.4)_0%,rgba(29,10,50,0.4)_25%,rgba(27,9,46,0.4)_50%,rgba(30,8,53,0.4)_75%,rgba(51,9,97,0.4)_100%)]">
            <span className="[font-family:'Blinker',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
              Platform - Meta Trader 5
            </span>
            <img
              className="w-6 h-6 object-cover"
              alt="MT5"
              src="https://c.animaapp.com/mishf4erVkDEuN/img/image-2-3.png"
            />
          </div>
        </div>

        {/* Pricing Table */}
        <Card className="relative border-none bg-transparent opacity-0 animate-fade-in [--animation-delay:1600ms]">
          <CardContent className="p-0">
            {/* Table Grid */}
            <div className="relative">
              {/* Account Size Headers */}
              <div className="grid grid-cols-[200px_repeat(5,1fr)] gap-4 mb-4">
                <div></div>
                {accountSizes.map((size, index) => (
                  <div key={index} className="rounded-2xl 
                    bg-gradient-to-b from-[#60289e]/40 to-[#330961]/40
                    backdrop-blur-md border border-[#d9b6fe]/10
                    p-4 text-center">
                    <p className="[font-family:'Poppins',Helvetica] font-semibold text-white text-2xl tracking-[0] leading-[normal] mb-1">
                      {size}
                    </p>
                    <div className="flex items-center justify-center gap-1">
                      <span className="[font-family:'Cambay',Helvetica] font-normal text-[#9d62d9] text-xs tracking-[0] leading-[normal]">
                        Account Size
                      </span>
                      <InfoIcon className="w-4 h-4 text-[#9d62d9]" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Rows */}
              {tableRows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-[200px_repeat(5,1fr)] gap-4 mb-3">
                  {/* Row Label */}
                  <div className={`flex items-center gap-2 px-4 rounded-xl
                    bg-gradient-to-r from-[#1f0a34] via-[#29094b] to-[#1b092e]
                    ${rowIndex >= 4 ? 'py-4 min-h-[80px]' : 'py-3'}`}>
                    <span className="[font-family:'Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                      {row.label}
                    </span>
                    {row.hasInfo && (
                      <InfoIcon className="w-4 h-4 text-white flex-shrink-0" />
                    )}
                  </div>
                  
                  {/* Row Data Cells */}
                  {accountSizes.map((_, colIndex) => (
                    <div key={colIndex} className={`flex items-center justify-center rounded-xl
                      bg-white/5 backdrop-blur-sm border border-white/5
                      ${rowIndex >= 4 ? 'py-4 min-h-[80px]' : 'py-3'}`}>
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-center tracking-[0] leading-relaxed px-2 text-sm">
                        {columnData[rowIndex].value.split('\n').map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < columnData[rowIndex].value.split('\n').length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              {/* Pricing Row */}
              <div className="grid grid-cols-[200px_repeat(5,1fr)] gap-4 mt-8">
                <div></div>
                {prices.map((price, index) => (
                  <div key={index} className="flex flex-col items-center gap-4">
                    <div className="h-16 rounded-lg border-2 border-dashed border-[#b882fb]
                      flex items-center justify-center px-4 w-full">
                      <span className="bg-gradient-to-br from-[#9e59ff] to-[#e9b1ff]
                        bg-clip-text text-transparent
                        [font-family:'Poppins',Helvetica] font-semibold text-3xl tracking-[0] leading-normal">
                        {price}
                      </span>
                    </div>
                    <Button className="h-10 w-full rounded-lg
                      border border-[#e8b0ff]
                      bg-gradient-to-r from-white to-[#dab6ff]
                      [font-family:'Cambay',Helvetica] font-bold text-black text-base
                      hover:opacity-90 transition-opacity">
                      Start Now
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-16">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />
              
              {/* Payment Providers - MOVED HERE */}
              <div className="w-full px-8 py-4 bg-white rounded-2xl border border-[#7a27ef] mb-8">
                <div className="flex items-center justify-around flex-wrap gap-4">
                  <span className="text-sm font-semibold text-gray-800">CONFIRMO</span>
                  <span className="text-sm font-semibold text-gray-800">🦋 Flutterwave</span>
                  <span className="text-sm font-semibold text-gray-800">LIPA</span>
                  <span className="text-sm font-semibold text-gray-800">VISA</span>
                  <span className="text-sm font-semibold text-gray-800">Mastercard</span>
                  <span className="text-sm font-semibold text-gray-800">American Express</span>
                </div>
              </div>

              <div className="flex items-start gap-12">
                {/* Icon Column */}
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                    <InfoIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                    <ZapIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center">
                    <span className="text-white text-xl">⚠</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <p className="[font-family:'Cambay',Helvetica] font-normal text-[#916dc3] text-base tracking-[0] leading-7 mb-4">
                    This plan include
                  </p>
                  
                  <div className="space-y-2">
                    <p className="[font-family:'Cambay',Helvetica] font-normal text-white text-base tracking-[0] leading-7">
                      Margin usage 40%
                    </p>
                    <p className="[font-family:'Cambay',Helvetica] font-normal text-white text-base tracking-[0] leading-7">
                      News trading - Not Possible 5 min before and 5 min after the high-impact news.
                    </p>
                    <p className="[font-family:'Cambay',Helvetica] font-normal text-white text-base tracking-[0] leading-7">
                      Risk per trade 1-2%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};