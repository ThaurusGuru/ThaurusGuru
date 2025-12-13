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
  { label: "Price", hasInfo: false },
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
  const [activeTab, setActiveTab] = React.useState(0);

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
        <h2 className="mt-10 mb-6 [font-family:'M_PLUS_2',Helvetica] font-normal text-[42px] tracking-[0] leading-[normal] bg-gradient-to-b from-white to-[#E9B1FF] bg-clip-text text-transparent opacity-0 animate-fade-in [--animation-delay:400ms]">
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
              <img
                className="w-[228px] h-[52px] object-cover cursor-pointer hover:opacity-90 transition-opacity"
                alt="Pay As You Go"
                src="/pricing-section/payg-btn.svg"
              />
            </div>
          </div>
        </div>

        {/* Challenge Type Tabs - OUTSIDE table container */}
        <div className="relative flex items-center mt-16 opacity-0 animate-fade-in [--animation-delay:1000ms]">
          {/* Tab Buttons */}
          {challengeTypes.map((type, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative flex items-center justify-center gap-3 py-6 cursor-pointer ${
                activeTab === index 
                  ? 'text-white bg-[#1a0a2e] border-t border-l border-r border-[rgba(218,182,255,0.2)] rounded-t-[20px] px-12' 
                  : 'text-gray-400 bg-transparent px-8'
              } ${index > 0 ? 'ml-20' : ''}`}
            >
              {type.icon ? (
                <ZapIcon className="w-[26px] h-[26px]" />
              ) : (
                <span className="[font-family:'Poppins',Helvetica] font-normal text-[26px] tracking-[0] leading-[normal]">
                  {type.number}
                </span>
              )}
              <span className="[font-family:'Blinker',Helvetica] font-semibold text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
                {type.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bordered Table Container */}
        <div className="border border-[rgba(218,182,255,0.2)] rounded-[24px] rounded-tl-none p-8 -mt-[1px]">
          
          {/* Promotional Banner */}
          <div className="flex items-center justify-end mt-6 mb-8">
            <div className="w-[888px] h-[53px] rounded-[10px] border border-dashed border-[#B982FB] bg-[linear-gradient(90deg,#1F0A34_0%,#4F1990_50%,#1B092E_100%)] flex items-center justify-center gap-3 px-6">
              <span className="text-white [font-family:'Poppins',Helvetica] font-normal text-[22px] leading-[28px]">
                15% Off + BOGO on 1,2,3 Step Challenges
              </span>
              <img 
                src="/pricing-section/basil_arrow-up-outline.svg" 
                alt="Arrow" 
                className="w-6 h-6"
              />
              <span className="text-[#A861FF] [font-family:'Poppins',Helvetica] font-bold text-[24px] leading-[28px]">
                CODE - XMAS
              </span>
            </div>
          </div>

          {/* Platform Badge */}
          <div className="flex items-center justify-start  mt-12 -mb-10 opacity-0 animate-fade-in [--animation-delay:1400ms]">
            <div className="flex items-center gap-2.5 mt-8 px-[10px] py-[5px] rounded-[20px] border border-solid border-[#d9b6fe1a] shadow-[inset_0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(96,40,158,0.4)_0%,rgba(29,10,50,0.4)_25%,rgba(27,9,46,0.4)_50%,rgba(30,8,53,0.4)_75%,rgba(51,9,97,0.4)_100%)]">
              <span className="[font-family:'Blinker',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal]">
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
                {/* Column Background Wrappers */}
                <div className="absolute left-[212px] -top-5 w-[calc((100%-200px-64px)/5+2px)] h-[calc(100%-315px)] rounded-[20px] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0"></div>
                <div className="absolute left-[calc(212px+((100%-200px-64px)/5+16px)*1)] -top-5 w-[calc((100%-200px-64px)/5+2px)] h-[calc(100%-315px)] rounded-[20px] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0"></div>
                <div className="absolute left-[calc(212px+((100%-200px-64px)/5+16px)*2)] -top-5 w-[calc((100%-200px-64px)/5+2px)] h-[calc(100%-315px)] rounded-[20px] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0"></div>
                <div className="absolute left-[calc(212px+((100%-200px-64px)/5+16px)*3)] -top-5 w-[calc((100%-200px-64px)/5+2px)] h-[calc(100%-315px)] rounded-[20px] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0"></div>
                <div className="absolute left-[calc(212px+((100%-200px-64px)/5+16px)*4-4px)] -top-5 w-[calc((100%-200px-64px)/5+2px)] h-[calc(100%-315px)] rounded-[20px] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0"></div>
                
                {/* Row Backgrounds */}
                {/* Profit Target (Phase 1) - Row 0 */}
                <div className="absolute left-0 top-[95px] w-[1157px] h-[46px] bg-[linear-gradient(90deg,#1F0A34_0%,#29094B_50%,#1B092E_100%)] pointer-events-none -z-10"></div>
                {/* Max Daily Drawdown - Row 1 */}
                <div className="absolute left-0 top-[153px] w-[1157px] h-[46px] bg-[linear-gradient(90deg,#1F0A34_0%,#29094B_50%,#1B092E_100%)] pointer-events-none -z-10"></div>
                {/* Max Overall Drawdown - Row 2 */}
                <div className="absolute left-0 top-[211px] w-[1157px] h-[46px] bg-[linear-gradient(90deg,#1F0A34_0%,#29094B_50%,#1B092E_100%)] pointer-events-none -z-10"></div>
                {/* Minimum Trading Days - Row 3 */}
                <div className="absolute left-0 top-[280px] w-[1157px] h-[46px] bg-[linear-gradient(90deg,#1F0A34_0%,#29094B_50%,#1B092E_100%)] pointer-events-none -z-10"></div>
                {/* Payout Split - Row 4 (taller for multi-line content) */}
                <div className="absolute left-0 top-[348px] w-[1157px] h-[80px] bg-[linear-gradient(90deg,#1F0A34_0%,#29094B_50%,#1B092E_100%)] pointer-events-none -z-10"></div>
                {/* Leverage - Row 5 (taller for multi-line content) */}
                <div className="absolute left-0 top-[465px] w-[1157px] h-[80px] bg-[linear-gradient(90deg,#1F0A34_0%,#29094B_50%,#1B092E_100%)] pointer-events-none -z-10"></div>
                
                {/* Account Size Headers */}
                <div className="grid grid-cols-[200px_repeat(5,1fr)] gap-4 mb-4 relative z-10">
                  <div></div>
                  {accountSizes.map((size, index) => (
                    <div key={index} className="rounded-2xl p-4 text-center">
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
                  <div key={rowIndex} className="grid grid-cols-[200px_repeat(5,1fr)] gap-4 mb-3 relative z-10">
                    {/* Row Label */}
                    <div className={`flex items-center gap-2 px-4 rounded-xl
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
                        ${rowIndex >= 4 ? 'py-4 min-h-[80px]' : 'py-3'}`}>
                        <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-center tracking-[0] leading-relaxed px-2 text-sm">
                          {row.label === "Price" ? (
                            ""
                          ) : (
                            columnData[rowIndex].value.split('\n').map((line, i) => (
                              <React.Fragment key={i}>
                                {line}
                                {i < columnData[rowIndex].value.split('\n').length - 1 && <br />}
                              </React.Fragment>
                            ))
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Pricing Row */}
                <div className="grid grid-cols-[200px_repeat(5,1fr)] gap-4 -mt-20 relative z-10">
                  <div></div>
                  {prices.map((price, index) => (
                    <div key={index} className="flex flex-col items-center gap-4">
                      <div className="h-16 rounded-lg border-2 border-dashed border-[#b882fb]
                        flex items-center justify-center px-4 w-[85%]">
                        <span className="bg-gradient-to-br from-[#9e59ff] to-[#e9b1ff]
                          bg-clip-text text-transparent
                          [font-family:'Poppins',Helvetica] font-semibold text-3xl tracking-[0] leading-normal">
                          {price}
                        </span>
                      </div>
                      <Button className="h-10 w-[85%] rounded-lg
                        border border-[#e8b0ff]
                        bg-gradient-to-r from-white to-[#dab6ff]
                        [font-family:'Cambay',Helvetica] font-bold text-black text-base
                        hover:opacity-90 transition-opacity">
                        Start Now
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Payment Providers Section */}
                <div className="grid grid-cols-[200px_repeat(5,1fr)] gap-4 mt-6">
                  <div></div>
                  <div className="col-span-5 w-full px-8 py-4 bg-white rounded-2xl border border-[#7a27ef]">
                    <div className="flex items-center justify-around flex-wrap gap-4">
                      <img src="/pricing-section/confirmo.svg" alt="CONFIRMO" className="h-6 object-contain" />
                      <img src="/pricing-section/flutterwave.svg" alt="Flutterwave" className="h-6 object-contain" />
                      <img src="/pricing-section/UPI.svg" alt="UPI" className="h-6 object-contain" />
                      <img src="/pricing-section/VISA.svg" alt="VISA" className="h-6 object-contain" />
                      <img src="/pricing-section/mastercard.svg" alt="Mastercard" className="h-6 object-contain" />
                      <img src="/pricing-section/American Express.svg" alt="American Express" className="h-6 object-contain" />
                    </div>
                  </div>
                </div>

                {/* Add-ons Section */}
                <div className="mt-8">
                  {/* Add-ons Header with Horizontal Line */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-4 h-px bg-purple-500"></div>
                    <span className="text-[#9d62d9] [font-family:'Cambay',Helvetica] font-normal text-base whitespace-nowrap">
                      Add-ons
                    </span>
                    <div className="flex-1 h-px bg-purple-500"></div>
                  </div>

                  {/* Add-ons Items */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <img src="/pricing-section/icon-1.svg" alt="News trading" className="w-10 h-10" />
                      <span className="text-white [font-family:'Cambay',Helvetica] text-base leading-[52px]">
                        <span className="font-bold">News trading</span>
                        <span className="font-normal"> (+10% from challenge price)</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pricing-section/icon-2.svg" alt="Weekend Trading" className="w-10 h-10" />
                      <span className="text-white [font-family:'Cambay',Helvetica] text-base leading-[52px]">
                        <span className="font-bold">Weekend Trading</span>
                        <span className="font-normal"> (+10% from challenge price)</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pricing-section/icon-3.svg" alt="Weekly Payout" className="w-10 h-10" />
                      <span className="text-white [font-family:'Cambay',Helvetica] text-base leading-[52px]">
                        <span className="font-bold">Weekly Payout</span>
                        <span className="font-normal"> (+40% from challenge price)</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
        {/* End Bordered Table Container */}
      </div>
    </section>
  );
};