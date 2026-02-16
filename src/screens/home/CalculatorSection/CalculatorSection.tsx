import { useState, useRef, useEffect } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { useTranslation } from "react-i18next";

const yAxisLabels = ["$8,000", "$6,000", "$4,000", "$2,000", "$0"];

export const CalculatorSection = () => {
  const { t } = useTranslation();
  const [accountSize, setAccountSize] = useState(25000);
  const [profitRate, setProfitRate] = useState(12);
  const [rewardSplit, setRewardSplit] = useState(80);
  const [dotPosition, setDotPosition] = useState(0);

  // Account size options
  const accountSizes = [5000, 10000, 25000, 50000, 100000];
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Update dot position when account size changes
  useEffect(() => {
    const index = accountSizes.indexOf(accountSize);
    const button = buttonRefs.current[index];
    if (button) {
      const parent = button.closest('.flex.items-center.justify-between');
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const buttonRect = button.getBoundingClientRect();
        const relativeLeft = buttonRect.left - parentRect.left + buttonRect.width / 2;
        setDotPosition(relativeLeft);
      }
    }
  }, [accountSize, accountSizes]);

  // Calculate estimated earnings
  const calculateEarnings = () => {
    const profit = accountSize * (profitRate / 100);
    const earnings = profit * (rewardSplit / 100);
    return Math.round(earnings).toLocaleString();
  };

  // Calculate bar height for chart (proportional to max $8000, capped with margin)
  const calculateBarHeight = () => {
    const earnings = accountSize * (profitRate / 100) * (rewardSplit / 100);
    const pxPerDollar = 175 / 8000;
    const raw = earnings * pxPerDollar;
    return Math.min(raw, 245); // cap so bar stays inside card with margin
  };

  // Calculate bar height for mobile
  const calculateBarHeightMobile = () => {
    const earnings = accountSize * (profitRate / 100) * (rewardSplit / 100);
    const pxPerDollar = 140 / 8000;
    const raw = earnings * pxPerDollar;
    return Math.min(raw, 195); // cap so bar stays inside card with margin
  };

  return (
    <section className="relative w-full pt-12 pb-0 md:pt-20 md:pb-0 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="container mx-auto px-4 max-w-[1160px]">
        <h2 className="w-full max-w-[238px] md:max-w-none mx-auto text-center mb-8 md:mb-16 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-[24px] md:text-[42px] tracking-[0] leading-[35px] md:leading-[78px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {t('calculator.heading')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[490px_1fr] gap-6 md:gap-9 items-start mb-8 md:-mb-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <div className="relative flex flex-col gap-6 lg:block w-full lg:w-[490px]">
            {/* Earnings Estimator Card */}
            <div className="relative w-full h-[250px] md:h-[306px]">
              <img
                className="absolute top-0 left-0 w-full h-full object-contain"
                alt="Mask group"
                src="/calculator-section/earning-card.svg"
              />

              <Badge className="absolute top-[20px] md:top-[27px] left-[20px] md:left-[35px] flex w-[163px] h-[35px] items-center justify-center gap-[7px] px-[13px] py-1 bg-[#17003980] rounded-[18px] border border-[#7a27ef]/50 backdrop-blur-sm z-10">
                <img
                  className="relative w-5 h-5"
                  alt="Solar calculator"
                  src="/calculator-section/solar-calculator-minimalistic-outline.svg"
                />
                <span className="relative [font-family:'Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[20px] whitespace-nowrap">
                  Earnings Estimator
                </span>
              </Badge>

              <div className="absolute top-[140px] md:top-[180px] left-[20px] md:left-[33px] right-[20px] md:right-[33px] w-auto md:w-[425px] z-10">
                <p className="[font-family:'Cambay',Helvetica] font-normal text-sm md:text-lg tracking-[0] leading-[18px] md:leading-[22px]">
                  <span className="text-[#dcc0ff]">Use our calculator </span>
                  <span className="text-[#874dce]">to</span>
                  <span className="text-[#dcc0ff]"> estimate your monthly payouts </span>
                  <span className="text-[#874dce]">based on your account size and performance.</span>
                  <span className="text-[#dcc0ff]"> No stress. No uncertainty. Just clear insights into your earning potential.</span>
                </p>
              </div>
            </div>

            {/* Estimated Monthly Take-Home Chart */}
            <div className="bar-chart-card-border relative lg:absolute lg:top-[30px] lg:left-0 w-full max-w-[386px] lg:max-w-[490px] h-[241px] lg:h-[306px] rounded-[15.755px] lg:rounded-[20px] mx-auto lg:mx-0 overflow-hidden">
              <Badge className="absolute top-[20px] lg:top-7 left-[20px] lg:left-[35px] flex w-auto lg:w-[242px] h-[35px] items-center justify-center gap-[7px] px-[13px] py-1 bg-[#17003980] rounded-[18px] border border-[#7a27ef]/50 backdrop-blur-sm z-10">
                <img
                  className="relative w-[22px] h-[22px]"
                  alt="Healthicons money"
                  src="/calculator-section/solar-calculator-minimalistic-outline.svg"
                />
                <span className="relative [font-family:'Cambay',Helvetica] font-normal text-white text-xs lg:text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Estimated Monthly Take-Home
                </span>
              </Badge>

              {/* Chart Grid Lines */}
              <div className="absolute top-[75px] left-[60px] lg:top-[85px] lg:left-[76px] w-[266px] lg:w-[338px] h-[140px] lg:h-[175px] flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={`chart-line-${index}`}
                    className="w-[266px] lg:w-[338px] h-[0.788px] lg:h-[1px]"
                    style={{ background: 'rgba(255, 255, 255, 0.15)' }}
                  />
                ))}
              </div>

              {/* Y-axis labels - same position as grid, each label centered on its grid line */}
              <div className="absolute top-[75px] left-[10px] lg:top-[85px] lg:left-[18px] h-[140px] lg:h-[175px] flex flex-col items-start justify-between [font-family:'Poppins',Helvetica] font-normal text-white text-[8px] lg:text-xs tracking-[0]">
                {yAxisLabels.map((label, index) => (
                  <div key={`y-label-${index}`} className="h-0 flex items-center leading-none">{label}</div>
                ))}
              </div>

              {/* Dynamic Bar - White/Purple gradient - Desktop */}
              <div
                className="hidden lg:block absolute left-[310px] w-[62px] rounded-[15px_15px_0px_0px] bg-gradient-to-b from-white/90 via-white/50 to-transparent transition-all duration-300 z-10"
                style={{
                  height: `${calculateBarHeight()}px`,
                  bottom: '46px'
                }}
              />

              {/* Dynamic Bar - White/Purple gradient - Mobile */}
              <div
                className="lg:hidden absolute left-[245px] w-[49px] rounded-[12px_12px_0px_0px] bg-gradient-to-b from-white/90 via-white/50 to-transparent transition-all duration-300 z-10"
                style={{
                  height: `${calculateBarHeightMobile()}px`,
                  bottom: '26px'
                }}
              />

              {/* Static comparison bar - Dark purple - Desktop */}
              <div
                className="hidden lg:block absolute left-[190px] w-[62px] rounded-[15px_15px_0px_0px] bg-[linear-gradient(180deg,rgba(20,0,51,1)_0%,rgba(24,12,43,0)_100%)]"
                style={{
                  height: '91px',
                  bottom: '46px'
                }}
              />

              {/* Static comparison bar - Dark purple - Mobile */}
              <div
                className="lg:hidden absolute left-[150px] w-[49px] rounded-[12px_12px_0px_0px] bg-[linear-gradient(180deg,rgba(20,0,51,1)_0%,rgba(24,12,43,0)_100%)]"
                style={{
                  height: '73px',
                  bottom: '26px'
                }}
              />

              {/* Value label for left bar - Desktop */}
              <div className="hidden lg:flex absolute left-[184px] w-[73px] h-9 bg-[#4b1d7b] rounded-[18px] z-20" style={{ bottom: `${46 + 91 + 8}px` }}>
                <div className="flex mt-[3px] w-16 h-[30px] ml-[5px] relative items-center justify-center gap-2.5 px-2.5 py-[5px] bg-[rgba(27,9,46,0.33)] rounded-[23.633px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-normal text-white text-sm leading-5 whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
                    $4,150
                  </span>
                </div>
              </div>

              {/* Value label for left bar - Mobile */}
              <div className="lg:hidden absolute left-[140px] w-[60px] h-8 flex bg-[#4b1d7b] rounded-[18px] z-20" style={{ bottom: `${26 + 73 + 8}px` }}>
                <div className="flex mt-[3px] w-[50px] h-[26px] ml-[5px] relative items-center justify-center gap-2.5 px-2 py-[5px] bg-[rgba(27,9,46,0.33)] rounded-[23.633px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-normal text-white text-xs leading-5 whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
                    $4,150
                  </span>
                </div>
              </div>

              {/* Value label for right bar - Dynamic - Desktop */}
              <div
                className="hidden lg:flex absolute left-[302px] w-[78px] h-9 bg-[#4b1d7b] rounded-[18px] transition-all duration-300 z-20"
                style={{
                  bottom: `${Math.min(46 + calculateBarHeight() + 8, 255)}px`
                }}
              >
                <div className="mt-[3px] w-[68px] ml-[5px] flex h-[30px] relative items-center justify-center gap-2.5 px-2.5 py-[5px] bg-[rgba(27,9,46,0.33)] rounded-[23.633px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-normal text-white text-sm leading-5 whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
                    ${calculateEarnings()}
                  </span>
                </div>
              </div>

              {/* Value label for right bar - Dynamic - Mobile */}
              <div
                className="lg:hidden absolute left-[238px] w-[65px] h-8 flex bg-[#4b1d7b] rounded-[18px] transition-all duration-300 z-20"
                style={{
                  bottom: `${Math.min(26 + calculateBarHeightMobile() + 8, 194)}px`
                }}
              >
                <div className="mt-[3px] w-[55px] ml-[5px] flex h-[26px] relative items-center justify-center gap-2.5 px-2 py-[5px] bg-[rgba(27,9,46,0.33)] rounded-[23.633px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
                  <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-normal text-white text-xs leading-5 whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
                    ${calculateEarnings()}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Input Card */}
          <div className="calculator-card-border relative w-full max-w-[386px] lg:max-w-[634px] h-[510px] lg:h-[648px] mx-auto rounded-[20px] mb-6 lg:mb-0">
            <div className="relative z-10 flex flex-col gap-4 lg:gap-[28px] pt-6 lg:pt-[40px] px-6 lg:px-[62px] pb-6 lg:pb-0">
              {/* Account Size */}
              <div className="flex items-center justify-between">
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-base lg:text-lg tracking-[0] leading-5">
                  Account Size
                </h3>
                <div className="w-[78px] h-9 rounded-[18px] flex items-center justify-center">
                  <div className="w-[68px] h-[30px] flex items-center justify-center gap-2.5 px-2.5 py-[5px] rounded-[30px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
                    <span className="font-normal text-white text-sm leading-5 whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
                      ${accountSize.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Account Size Button Selection */}
              <div className="relative w-full px-2">
                <div className="flex items-center justify-between relative" style={{ position: 'relative' }}>
                  {accountSizes.map((size, index) => (
                    <div
                      key={size}
                      className="flex flex-col items-center gap-3"
                    >
                      <button
                        ref={(el) => { buttonRefs.current[index] = el; }}
                        onClick={() => setAccountSize(size)}
                        className="rounded-full border-2 transition-all duration-300 cursor-pointer flex items-center justify-center"
                        style={{
                          width: '24px',
                          height: '24px',
                          borderColor: accountSize === size ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.3)',
                          position: 'relative',
                        }}
                      >
                      </button>
                      <span
                        className="font-['Poppins',Helvetica] text-center whitespace-nowrap"
                        style={{
                          color: '#FFF',
                          fontSize: '14px',
                          fontStyle: 'normal',
                          fontWeight: 500,
                          lineHeight: '20px',
                        }}
                      >
                        {size >= 1000 ? `${size / 1000}k` : size}
                      </span>
                    </div>
                  ))}

                  {/* Single glowing dot that travels between circles */}
                  <div
                    className="absolute rounded-full bg-white pointer-events-none"
                    style={{
                      width: '17.143px',
                      height: '17.143px',
                      aspectRatio: '17.14/17.14',
                      left: `${dotPosition - 8.5715}px`,
                      top: '3.4285px',
                      boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.8), 0 0 40px 10px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.9)',
                      animation: 'glow-pulse 2s ease-in-out infinite',
                      transition: 'left 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      zIndex: 20,
                    }}
                  />
                </div>
              </div>

              {/* Add keyframes for glow animation */}
              <style>{`
                @keyframes glow-pulse {
                  0%, 100% {
                    box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.8), 0 0 40px 10px rgba(255, 255, 255, 0.4), inset 0 0 10px rgba(255, 255, 255, 0.9);
                  }
                  50% {
                    box-shadow: 0 0 30px 8px rgba(255, 255, 255, 1), 0 0 60px 15px rgba(255, 255, 255, 0.6), inset 0 0 15px rgba(255, 255, 255, 1);
                  }
                }
              `}</style>

              {/* Profit Rate */}
              <div className="flex items-center justify-between">
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-base lg:text-lg tracking-[0] leading-5">
                  Profit Rate
                </h3>
                <div className="w-[63px] h-9 bg-[#4b1d7b] rounded-[18px] flex items-center justify-center">
                  <div className="w-[52px] h-[30px] flex items-center justify-center gap-2.5 px-2.5 py-[5px] bg-[#1b092e54] rounded-[30px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
                    <span className="font-normal text-white text-sm leading-5 whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
                      {profitRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Profit Rate Slider */}
              <div className="relative w-full h-3.5">
                <div className="absolute top-1 left-0 w-full h-1.5 bg-[#1a0533] rounded-full" />
                <div 
                  className="absolute top-1 left-0 h-1.5 bg-gradient-to-r from-[#7a27ef] to-[#ab66ff] rounded-full transition-all duration-200"
                  style={{ width: `${(profitRate / 20) * 100}%` }}
                />
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={profitRate}
                  onChange={(e) => setProfitRate(Number(e.target.value))}
                  className="absolute top-0 left-0 w-full h-3.5 opacity-0 cursor-pointer z-10"
                />
                <div 
                  className="absolute top-0 w-3.5 h-3.5 bg-white rounded-[7px] border border-solid border-[#290d46] cursor-pointer transition-all duration-200 pointer-events-none"
                  style={{ left: `calc(${(profitRate / 20) * 100}% - 7px)` }}
                />
              </div>

              {/* Reward Split */}
              <div className="flex items-center justify-between">
                <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-base lg:text-lg tracking-[0] leading-5">
                  Reward Split
                </h3>
                <div className="w-[68px] h-9 bg-[#4b1d7b] rounded-[18px] flex items-center justify-center">
                  <div className="w-[58px] h-[30px] flex items-center justify-center gap-2.5 px-2.5 py-[5px] bg-[#1b092e54] rounded-[30px] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)]">
                    <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                      {rewardSplit}/{100 - rewardSplit}
                    </span>
                  </div>
                </div>
              </div>

              {/* Reward Split Radio Options */}
              <div className="inline-flex items-center gap-[24px] lg:gap-[34px] flex-wrap">
                <div 
                  className="inline-flex items-center gap-2 lg:gap-4 cursor-pointer"
                  onClick={() => setRewardSplit(80)}
                >
                  <div className={`w-5 h-5 rounded-[10px] border-2 flex items-center justify-center transition-all ${
                    rewardSplit === 80 
                      ? 'bg-white border-white' 
                      : 'bg-transparent border-[#4b1d7b]'
                  }`}>
                    {rewardSplit === 80 && (
                      <div className="w-2.5 h-2.5 bg-[#4b1d7b] rounded-[5px]" />
                    )}
                  </div>
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                    80/20
                  </span>
                </div>
                <div 
                  className="inline-flex items-center gap-2 lg:gap-4 cursor-pointer"
                  onClick={() => setRewardSplit(90)}
                >
                  <div className={`w-5 h-5 rounded-[10px] border-2 flex items-center justify-center transition-all ${
                    rewardSplit === 90 
                      ? 'bg-white border-white' 
                      : 'bg-transparent border-[#4b1d7b]'
                  }`}>
                    {rewardSplit === 90 && (
                      <div className="w-2.5 h-2.5 bg-[#4b1d7b] rounded-[5px]" />
                    )}
                  </div>
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                    90/10
                  </span>
                </div>
                <div 
                  className="inline-flex items-center gap-2 lg:gap-4 cursor-pointer"
                  onClick={() => setRewardSplit(95)}
                >
                  <div className={`w-5 h-5 rounded-[10px] border-2 flex items-center justify-center transition-all ${
                    rewardSplit === 95 
                      ? 'bg-white border-white' 
                      : 'bg-transparent border-[#4b1d7b]'
                  }`}>
                    {rewardSplit === 95 && (
                      <div className="w-2.5 h-2.5 bg-[#4b1d7b] rounded-[5px]" />
                    )}
                  </div>
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                    95/5
                  </span>
                </div>
              </div>

              {/* Estimated Earnings Result */}
              <div className="earnings-result-card w-full lg:w-[510px] h-auto lg:h-[178px] flex flex-col items-center justify-center gap-2 lg:gap-5 rounded-[20px] py-4 lg:py-7 px-5 lg:px-[70px] mt-4 lg:mt-0">
                <p className="relative [font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap z-10">
                  Your Estimated Earnings:
                </p>
                <p className="relative font-bold text-[#ab66ff] text-[28px] lg:text-[30px] leading-[32px] lg:leading-[36px] whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0] z-10">
                  ${calculateEarnings()}
                </p>
                <Button 
                  onClick={() => {
                    const element = document.getElementById('pricing-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex w-[196px] lg:w-[228px] h-[40px] lg:h-[50px] px-[30px] justify-center items-center gap-[-18px] lg:gap-[10px] rounded-[6px] lg:rounded-[10px]
                  border border-[#7A27EF]
                  bg-[linear-gradient(104deg,#F6E6FF_-33.17%,#D692FF_16.49%,#8148ED_66.15%,#4829C3_115.81%,#090422_165.47%)]
                  shadow-[0_4px_14px_0_rgba(0,0,0,0.25)_inset] 
                  hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.7)] 
                  hover:scale-105 transition-all duration-300
                  z-10
                  group">
                  <span className="w-[152px] h-[18px] lg:h-[20px] shrink-0 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.25)] [font-family:'Cambay',Helvetica] font-bold text-[13px] lg:text-[16px] leading-[normal]">
                    Start your Challenge
                  </span>
                  <div className="flex w-[28px] lg:w-[34px] h-[20px] lg:h-[23px] px-[7px] py-px items-center gap-[10px] shrink-0 rounded-[30px] bg-white group-hover:scale-110 transition-transform">
                    <img 
                      src="/solar_arrow-up-linear.svg" 
                      alt="Arrow" 
                      className="w-auto h-auto"
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};