import { InfoIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { useTranslation } from "react-i18next";

const processSteps = [
  { label: "Pick your challenge" },
  { label: "Select your capital" },
  { label: "Start trading with our funds" },
];

const challengeTypes = [
  { number: "2", label: "Two Step" },
  { number: "3", label: "Three Step" },
];

const accountSizes = ["$5K", "$10K", "$25K", "$50K", "$100K"];

// Dynamic table rows based on model and challenge type
const getTableRows = (model: 'classic' | 'pro' | 'payg', tabIndex: number) => {
  const baseRows = [
    {
      label: "Profit Split",
      hasInfo: true,
      tooltip: "Your share of the generated profits. While the standard payout is 80%, our scaling program allows successful traders to increase their reward share up to a maximum of 95%."
    },
    {
      label: "Leverage",
      hasInfo: true,
      tooltip: "" // This will be calculated dynamically
    },
    { label: "Price", hasInfo: true, tooltip: "Evaluation fee for the selected account size" },
  ];

  // Classic model variations
  if (model === 'classic') {
    if (tabIndex === 0) { // Two Step
      return [
        { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "To advance to Phase 2, traders must reach the designated profit target of 8%." },
        { label: "Profit Target (Phase 2)", hasInfo: true, tooltip: "To complete the challenge, traders must reach the designated profit target of 5% in Phase 2." },
        { label: "Max Daily Drawdown", hasInfo: true, tooltip: "The maximum loss permitted within a single trading day, factoring in both closed trades and live market fluctuations. If your daily equity drops below this threshold, the account will be closed." },
        { label: "Max Overall Drawdown", hasInfo: true, tooltip: "This is the total allowable decline from your starting balance. It is calculated based on both realized and unrealized (floating) PnL. Exceeding this overall limit results in account closure." },
        { label: "Profit Split", hasInfo: true, tooltip: "Your share of the generated profits. While the standard payout is 80%, our scaling program allows successful traders to increase their reward share up to a maximum of 95%." },
        { label: "Minimum Trading Days", hasInfo: true, tooltip: "The required number of active trading days for each phase. This requirement varies depending on the specific challenge type selected." },
        { label: "Time Limit", hasInfo: true, tooltip: "Unlimited time to pass" },
        { label: "Leverage", hasInfo: true, tooltip: "" },
        { label: "Price", hasInfo: true, tooltip: "Evaluation fee for the selected account size" },
      ];
    } else if (tabIndex === 1) { // Three Step
      return [
        { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "To advance to Phase 2, traders must reach the designated profit target of 6%." },
        { label: "Profit Target (Phase 2)", hasInfo: true, tooltip: "To advance to Phase 3, traders must reach the designated profit target of 6%." },
        { label: "Profit Target (Phase 3)", hasInfo: true, tooltip: "To complete the challenge, traders must reach the designated profit target of 6% in Phase 3." },
        { label: "Max Overall Drawdown", hasInfo: true, tooltip: "This is the total allowable decline from your starting balance. It is calculated based on both realized and unrealized (floating) PnL. Exceeding this overall limit results in account closure." },
        { label: "Profit Split", hasInfo: true, tooltip: "Your share of the generated profits. While the standard payout is 80%, our scaling program allows successful traders to increase their reward share up to a maximum of 90%." },
        { label: "Minimum Trading Days", hasInfo: true, tooltip: "The required number of active trading days for each phase. This requirement varies depending on the specific challenge type selected." },
        { label: "Time Limit", hasInfo: true, tooltip: "30 days per phase to complete the challenge" },
        { label: "Leverage", hasInfo: true, tooltip: "" },
        { label: "Price", hasInfo: true, tooltip: "Evaluation fee for the selected account size" },
      ];
    }
  }

  // PAYG model - Pay As You Go
  if (model === 'payg') {
    return [
      { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "To advance to Phase 2, traders must reach the designated profit target of 8%." },
      { label: "Profit Target (Phase 2)", hasInfo: true, tooltip: "To complete the challenge, traders must reach the designated profit target of 5% in Phase 2." },
      { label: "Max Daily Drawdown", hasInfo: true, tooltip: "The maximum loss permitted within a single trading day, factoring in both closed trades and live market fluctuations. If your daily equity drops below this threshold, the account will be closed." },
      { label: "Max Overall Drawdown", hasInfo: true, tooltip: "This is the total allowable decline from your starting balance. It is calculated based on both realized and unrealized (floating) PnL. Exceeding this overall limit results in account closure." },
      { label: "Minimum Trading Days", hasInfo: true, tooltip: "The required number of active trading days for each phase. This requirement varies depending on the specific challenge type selected." },
      { label: "Time Limit", hasInfo: true, tooltip: "30 days per phase to complete the challenge" },
      { label: "Leverage", hasInfo: true, tooltip: "" },
      { label: "Price", hasInfo: true, tooltip: "Evaluation fee for the selected account size" },
    ];
  }

  // Default fallback
  return [
    { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "To advance to the next stage, traders must reach the designated profit target." },
    { label: "Max Daily Drawdown", hasInfo: true, tooltip: "The maximum loss permitted within a single trading day, factoring in both closed trades and live market fluctuations. If your daily equity drops below this threshold, the account will be closed." },
    { label: "Max Overall Drawdown", hasInfo: true, tooltip: "This is the total allowable decline from your starting balance. It is calculated based on both realized and unrealized (floating) PnL. Exceeding this overall limit results in account closure." },
    { label: "Minimum Trading Days", hasInfo: true, tooltip: "The required number of active trading days for each phase. This requirement varies depending on the specific challenge type selected." },
    ...baseRows
  ];
};

// Dynamic column data based on model and challenge type
const getColumnData = (model: 'classic' | 'pro' | 'payg', tabIndex: number) => {
  if (model === 'classic') {
    if (tabIndex === 0) { // Two Step
      return [
        { value: "8%" }, // Profit Target (Phase 1)
        { value: "5%" }, // Profit Target (Phase 2)
        { value: "5%" }, // Max Daily Drawdown
        { value: "10%" }, // Max Overall Drawdown
        { value: "" }, // Profit Split - calculated dynamically
        { value: "3 days" }, // Minimum Trading Days
        { value: "Unlimited" }, // Time Limit
        { value: "" }, // Leverage - calculated dynamically
      ];
    } else if (tabIndex === 1) { // Three Step
      return [
        { value: "6%" }, // Profit Target (Phase 1)
        { value: "6%" }, // Profit Target (Phase 2)
        { value: "6%" }, // Profit Target (Phase 3)
        { value: "5%" }, // Max Overall Drawdown
        { value: "" }, // Profit Split - calculated dynamically
        { value: "5 days" }, // Minimum Trading Days
        { value: "30 days/phase" }, // Time Limit
        { value: "" }, // Leverage - calculated dynamically
      ];
    }
  }

  // PAYG model - Pay As You Go
  if (model === 'payg') {
    return [
      { value: "8%" }, // Profit Target (Phase 1)
      { value: "5%" }, // Profit Target (Phase 2)
      { value: "5%" }, // Max Daily Drawdown
      { value: "10%" }, // Max Overall Drawdown
      { value: "3 days" }, // Minimum Trading Days
      { value: "30 days/phase" }, // Time Limit
      { value: "" }, // Leverage - calculated dynamically
    ];
  }

  // Default fallback
  return [
    { value: "8%" },
    { value: "4%" },
    { value: "10%" },
    { value: "4" },
    { value: "" }, // Profit Split - calculated dynamically
    { value: "" }, // Leverage - calculated dynamically
  ];
};

const prices = ["$45", "$85", "$185", "$295", "$510"];
const threeStepPrices = ["$35", "$65", "$145", "$245", "$410"];
// PAYG pricing - Phase 1, Phase 2, and total
const paygPhase1Prices = ["$27", "$55", "$120", "$195", "$348"];
const paygPhase2Prices = ["$27", "$40", "$85", "$135", "$232"];
const paygTotalPrices = ["$54", "$95", "$205", "$330", "$580"];

// Tooltip Component
const InfoTooltip = ({ content }: { content: string }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="relative inline-block">
      <InfoIcon 
        className="w-3 h-3 md:w-4 md:h-4 text-[#9d62d9] md:text-white flex-shrink-0 cursor-help" 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      {isVisible && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 w-max max-w-[250px] px-3 py-2 bg-[#2a0f4a] border border-[#9d62d9] rounded-lg shadow-lg">
          <div className="text-white text-xs font-['Poppins',Helvetica] whitespace-pre-line leading-relaxed">
            {content}
          </div>
          {/* Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#9d62d9]"></div>
        </div>
      )}
    </div>
  );
};

export const PricingSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState(0);
  const [activeAccountIndex, setActiveAccountIndex] = React.useState(0);
  const [activeModel, setActiveModel] = React.useState<'classic' | 'pro' | 'payg'>('classic');

  // Get dynamic table rows and column data
  const tableRows = React.useMemo(() => getTableRows(activeModel, activeTab), [activeModel, activeTab]);
  const columnData = React.useMemo(() => getColumnData(activeModel, activeTab), [activeModel, activeTab]);

  // Function to get profit split based on model, challenge type, and account size
  const getProfitSplit = React.useCallback((model: 'classic' | 'pro' | 'payg', tabIndex: number, accountIndex?: number): string => {
    if (model === 'payg') {
      return 'Up to 80%';
    }

    // For Classic model
    if (tabIndex === 0) { // Two Step
      return 'Up to 95%';
    } else if (tabIndex === 1) { // Three Step
      return 'Up to 90%';
    }

    return 'Up to 80%';
  }, []);

  // Function to get leverage main text based on model and challenge type
  const getLeverageText = React.useCallback((model: 'classic' | 'pro' | 'payg', tabIndex: number): string => {
    if (model === 'payg') {
      return '1:100';
    }

    if (tabIndex === 0) { // Two Step
      return '1:100';
    } else if (tabIndex === 1) { // Three Step
      return '1:100';
    }

    return '1:100';
  }, []);

  // Function to get leverage tooltip text based on model and challenge type
  const getLeverageTooltip = React.useCallback((model: 'classic' | 'pro' | 'payg', tabIndex: number): string => {
    if (model === 'payg') {
      return '1:100 FX, 1:20 Indices, 1:30 Commodities, 1:5 Crypto, Energies 1:10';
    }

    if (tabIndex === 0) { // Two Step
      return '1:100 FX, 1:20 Indices, 1:30 Commodities, 1:5 Crypto, Energies 1:10';
    } else if (tabIndex === 1) { // Three Step
      return '1:100 FX, 1:20 Indices, 1:30 Commodities, 1:5 Crypto, Energies 1:10';
    }

    return '1:100 FX, 1:20 Indices, 1:30 Commodities, 1:5 Crypto, Energies 1:10';
  }, []);

  // Function to get add-ons based on model and challenge type
  const getAddOns = React.useCallback((model: 'classic' | 'pro' | 'payg', tabIndex: number): { icon: string; title: string; price: string }[] => {
    // Pay As You Go - No Add-ons
    if (model === 'payg') {
      return [];
    }

    // Classic Two Step (index 0)
    if (model === 'classic' && tabIndex === 0) {
      return [
        { icon: '/pricing-section/icon-1.svg', title: 'News Trading', price: '' },
        { icon: '/pricing-section/icon-2.svg', title: 'Weekend Trading', price: '' },
        { icon: '/pricing-section/icon-3.svg', title: 'Days between Consecutive Withdrawals', price: '' },
        { icon: '/pricing-section/icon-4.svg', title: 'EA Bot Allowed', price: '' },
      ];
    }

    // Classic Three Step (index 1)
    if (model === 'classic' && tabIndex === 1) {
      return [
        { icon: '/pricing-section/icon-1.svg', title: 'News Trading', price: '' },
        { icon: '/pricing-section/icon-2.svg', title: 'Weekend Trading', price: '' },
        { icon: '/pricing-section/icon-3.svg', title: 'Weekly Payouts', price: '' },
        { icon: '/pricing-section/icon-4.svg', title: 'EA Bot Allowed', price: '' },
        { icon: '/pricing-section/icon-5.svg', title: 'No Minimum Trading Days', price: '' },
      ];
    }

    // Default - No add-ons
    return [];
  }, []);

  // Filter challenge types based on active model
  const availableChallengeTypes = React.useMemo(() => {
    if (activeModel === 'payg') {
      // PAYG only shows "Three Step" - no tabs needed
      return [];
    }
    return challengeTypes;
  }, [activeModel]);

  return (
    <section id="pricing-section" className="relative w-full py-6 md:py-10 px-4 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="max-w-[1160px] mx-auto">
        {/* Top Badges - Mobile: Horizontal Scroll, Desktop: Normal */}
        <div className="mb-4 md:mb-6 opacity-0 animate-fade-in [--animation-delay:200ms]">
          <div className="flex md:flex-row items-center gap-2 md:gap-4 pb-2 md:pb-0">
            {processSteps.map((step, index) => (
              <Badge
                key={index}
                className="flex-shrink-0 h-auto px-2 md:px-[17px] py-1 md:py-[5px] rounded-[14px] border-[0.6px] border-white shadow-[inset_0px_4px_4px_#00000040] bg-[linear-gradient(90deg,rgba(112,35,192,1)_0%,rgba(53,16,90,1)_100%)] text-white text-[8px] md:text-xs font-['Blinker',Helvetica] font-normal whitespace-nowrap"
              >
                {step.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Heading - Mobile: 363px width, 24px size */}
        <h2 className="mt-6 md:mt-10 mb-3 md:mb-6 
          w-full max-w-[363px] md:max-w-none
          font-['M_PLUS_2',Helvetica] font-normal 
          text-[24px] md:text-[42px] 
          tracking-[0] leading-[normal] 
          bg-gradient-to-b from-white to-[#E9B1FF] bg-clip-text text-transparent 
          opacity-0 animate-fade-in [--animation-delay:400ms]">
          {t('pricing.heading')}
        </h2>

        {/* Subheading - Mobile: 287px width, 12px size */}
        <p className="mb-6 md:mb-8 
          w-full max-w-[287px] md:max-w-none
          font-['Cambay',Helvetica] font-normal text-[#c193f1] 
          text-[12px] md:text-base 
          tracking-[0] leading-[18px] md:leading-[normal] 
          opacity-0 animate-fade-in [--animation-delay:600ms]">
          {t('pricing.subheading')}
        </p>

        {/* Model Selection - Mobile Responsive Layout */}
        <div className="mb-6 opacity-0 animate-fade-in [--animation-delay:800ms]">
          <p className="font-['Cambay',Helvetica] font-bold text-white 
            text-base md:text-xl tracking-[0] leading-[normal] mb-3 md:mb-4">
            Model
          </p>
          
          {/* Mobile: 2 rows, Desktop: 1 row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            {/* First Row on Mobile: CLASSIC */}
            <div className="flex gap-3 md:gap-4">
              <Button
                onClick={() => setActiveModel('classic')}
                className={`flex-none w-[228px] md:w-[180px] h-[52px]
                rounded-[10px] border border-solid
                font-['Cambay',Helvetica] font-bold text-white
                text-xl
                hover:opacity-90 transition-opacity
                ${activeModel === 'classic'
                  ? 'border-[#a770e0] bg-[linear-gradient(164deg,rgba(96,40,158,1)_0%,rgba(51,9,97,1)_100%)]'
                  : 'border-[#4f1b85] bg-[#1b0732]'
                }`}>
                CLASSIC
              </Button>
            </div>

            {/* Second Row on Mobile: Pay As You Go - Using Image */}
            <div className="relative w-full md:w-auto md:ml-auto flex items-center justify-start mt-4 md:mt-0">
              {/* Mobile: Try Now SVG Image */}
              <img
                className="md:hidden absolute top-[-32px] left-[calc(50%+40px)] -translate-x-1/2 w-auto h-[85px] object-contain"
                alt={t('Try Now')}
                src="/pricing-section/try-now-mobile.svg"
              />
              
              {/* Desktop: Try Now Text */}
              <p className="hidden md:block absolute top-[-36px] left-[-47px] rotate-[-15deg] 
                font-['Cambay',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                {t('Try Now')}
              </p>
              {/* Desktop: Arrow */}
              <img
                className="hidden md:block absolute top-[-36px] left-[34px] w-[38px] h-[26px]"
                alt="Arrow"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/group-66.png"
              />
              
              {/* Mobile & Desktop: Custom Styled Button */}
              <button
                data-model="payg"
                onClick={() => setActiveModel('payg')}
                className={`
                  flex w-[228px] h-[52px] px-[46px] py-[13px] 
                  justify-center items-center gap-[20px] 
                  rounded-[10px] border-2 border-[#6E40E1]
                  transition-all duration-200 active:scale-95 cursor-pointer
                  ${activeModel === 'payg' ? 'ring-2 ring-[#a770e0]' : ''}
                `}
                style={{
                  background: 'linear-gradient(104deg, #F6E6FF -33.17%, #D692FF 16.49%, #8148ED 66.15%, #4829C3 115.81%, #090422 165.47%)'
                }}
              >
                <span 
                  className="w-[154px] h-[26px] shrink-0 text-[#FFF] text-center
                  font-['Cambay',Helvetica] font-bold text-[20px] leading-normal"
                  style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  PAY AS YOU GO
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Challenge Type Tabs - OUTSIDE table container */}
        {/* Show tabs only when NOT in PAYG mode */}
        {activeModel !== 'payg' && (
          <div className="w-full relative flex items-center justify-start mt-8 md:mt-16 pt-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* Tab Buttons */}
            {availableChallengeTypes.map((type, index) => {
              // Get the original index from challengeTypes array
              const originalIndex = challengeTypes.findIndex(ct => ct.label === type.label);

              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(originalIndex)}
                  className={`relative flex items-center justify-center gap-2 md:gap-3 py-2 md:py-5.5 cursor-pointer flex-shrink-0
                    ${activeTab === originalIndex
                      ? `text-white bg-[#1a0a2e] border-t border-l border-r border-[#DAB6FF] rounded-t-[20px] px-6 md:px-18 md:translate-y-[-2.9px] translate-y-[7.9px] pb-[calc(1.375rem+3.4px)] z-10`
                      : 'text-white bg-transparent px-4 md:px-8'
                  }`}
                >
                  <span className="font-['Blinker',Helvetica] font-semibold text-[18px] md:text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
                    {type.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* PAYG Header - Show when in PAYG mode */}
        {activeModel === 'payg' && (
          <div className="w-full relative flex items-center justify-start mt-8 md:mt-16 pt-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="relative flex items-center justify-center gap-2 md:gap-3 py-2 md:py-5.5 flex-shrink-0 text-white bg-[#1a0a2e] border-t border-l border-r border-[#DAB6FF] rounded-t-[20px] px-6 md:px-18 md:translate-y-[-2.9px] translate-y-[7.9px] pb-[calc(1.375rem+3.4px)] z-10">
              <span className="font-['Blinker',Helvetica] font-semibold text-[18px] md:text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
                Pay As You Go
              </span>
            </div>
          </div>
        )}

        {/* Bordered Table Container - FIXED BORDER */}
        <div
          className={`w-full border border-[#DAB6FF] bg-[#1a0a2e]
            ${activeModel === 'payg' ? 'rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]' : ''}
            ${activeModel !== 'payg' && activeTab === 0 ? 'rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]' : ''}
            ${activeModel !== 'payg' && activeTab === 1 ? 'rounded-tl-[20px] rounded-tr-none rounded-bl-[20px] rounded-br-[20px]' : ''}
            p-4 md:p-8 ${activeModel === 'payg' ? 'pt-2 md:pt-4' : ''}`}
          style={{
            maxWidth: typeof window !== 'undefined' && window.innerWidth < 768 ? '386px' : 'none',
            margin: typeof window !== 'undefined' && window.innerWidth < 768 ? '0 auto' : undefined,
            overflow: typeof window !== 'undefined' && window.innerWidth < 768 ? 'hidden' : 'visible',
            marginTop: typeof window !== 'undefined' && window.innerWidth < 768 ? '-1px' : '-4px'
          }}
        >
          
          {/* Promotional Banner - Hidden on mobile and PAYG */}
          {activeModel !== 'payg' && (
            <div className="hidden md:flex items-center justify-end mt-6 mb-8">
              <div 
                className="w-[848px] h-[53px] rounded-[10px] flex items-center justify-center gap-6 px-6 border-2 border-dashed border-[#AF66FF]"
                style={{
                  background: 'linear-gradient(90deg, #1A082D 0%, #451581 50%, #1A082D 100%)',
                }}
              >
                <span className="text-white font-['Poppins',Helvetica] font-bold text-[22px] leading-none uppercase tracking-wide">
                  LIMITED TIME: 20% OFF CHALLENGES
                </span>
                <span className="text-white text-2xl font-bold">→</span>
                <span className="text-[#BD85FF] font-['Poppins',Helvetica] font-bold text-[24px] leading-none uppercase tracking-wide">
                  USE CODE TG20
                </span>
              </div>
            </div>
          )}

          {/* Mobile: Promotional Banner - Compact version */}
          {activeModel !== 'payg' && (
            <div className="md:hidden flex flex-col items-center gap-3 mt-4 mb-6">
              <div 
                className="w-full flex flex-col items-center gap-2 p-3 rounded-[10px] border-2 border-dashed border-[#AF66FF]"
                style={{
                  background: 'linear-gradient(90deg, #1A082D 0%, #451581 50%, #1A082D 100%)',
                }}
              >
                <span className="text-white font-['Poppins',Helvetica] font-bold text-[14px] text-center leading-tight uppercase tracking-tight">
                  LIMITED TIME: 20% OFF CHALLENGES
                </span>
                <span className="text-[#BD85FF] font-['Poppins',Helvetica] font-bold text-[22px] leading-none uppercase">
                  USE CODE TG20
                </span>
              </div>
            </div>
          )}
            
            {/* Challenge Type Buttons - Hidden on desktop and for PAYG */}
            {activeModel !== 'payg' && (
              <div className="w-full flex gap-2 justify-center md:hidden mb-4">
                {availableChallengeTypes.map((type, index) => {
                  // Get the original index from challengeTypes array
                  const originalIndex = challengeTypes.findIndex(ct => ct.label === type.label);

                  return (
                    <button
                      key={index}
                      onClick={() => setActiveTab(originalIndex)}
                      className={`flex flex-col justify-center items-center w-[112px] h-[36px] px-[20px] py-[6px] gap-[10px] rounded-[10px] border transition-all
                        ${activeTab === originalIndex
                          ? 'bg-[linear-gradient(164deg,rgba(96,40,158,1)_0%,rgba(51,9,97,1)_100%)] border-[#a770e0]'
                          : 'bg-[#1b0732] border-[#4f1b85]'
                        }`}
                    >
                      <span className="font-['Blinker',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                        {type.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
            
            {/* Account Size Buttons - Hidden on desktop and for PAYG on mobile */}
            {activeModel !== 'payg' && (
              <div className="w-full flex gap-2 justify-center pb-2 md:hidden">
                {accountSizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveAccountIndex(index)}
                    className="flex flex-col justify-center items-center w-[62px] h-[36px] px-[20px] py-[6px] gap-[10px] rounded-[10px] border shrink-0 transition-all"
                    style={
                      activeAccountIndex === index
                        ? {
                            border: '1px solid rgba(218, 182, 255, 0.15)',
                            background: 'linear-gradient(104deg, #F6E6FF -33.17%, #D692FF 16.49%, #8148ED 66.15%, #4829C3 115.81%, #090422 165.47%)'
                          }
                        : {
                            border: '1px solid #4f1b85',
                            background: '#1b0732'
                          }
                    }
                  >
                    <span className="font-['Poppins',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      {size}
                    </span>
                  </button>
                ))}
              </div>
            )}
          
          {/* Platform Badge */}
          <div className="flex items-center justify-start mt-6 md:mt-12 -mb-6 md:-mb-10 opacity-0 animate-fade-in [--animation-delay:1400ms]">
            <div 
              className="inline-flex items-center justify-center gap-[10px] px-[20px] py-[12px] rounded-[26px] border border-solid border-[rgba(218,182,255,0.10)]"
              style={{
                background: 'linear-gradient(180deg, #60289E 0%, #1D0A32 99.73%, #1B092E 199.46%, #1E0835 299.18%, #330961 398.91%)',
                boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25) inset'
              }}
            >
              <span className="font-['Blinker',Helvetica] font-normal text-white text-[14px] md:text-[16px] tracking-[0] leading-[normal]">
                Platform - Meta Trader 5
              </span>
              <img
                className="w-6 md:w-7 h-6 md:h-7 object-cover"
                alt="MT5"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/image-2-3.png"
              />
            </div>
          </div>

          {/* Mobile: Horizontal Scrollable Pricing Cards */}
          <div className="md:hidden mt-8 opacity-0 animate-fade-in [--animation-delay:1600ms]">
            <div className="w-full mx-auto">
              <div
                className="w-full max-w-[340px] mx-auto h-auto rounded-[20px] border border-[#DAB6FF] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] p-4"
              >
                {/* Account Size Header */}
                <div className="text-center mb-4 pb-4">
                  <p className="font-['Poppins',Helvetica] font-semibold text-white text-[34px] tracking-[0] leading-[normal] mb-1">
                    {accountSizes[activeAccountIndex]}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="font-['Cambay',Helvetica] font-normal text-[#9d62d9] text-xs tracking-[0] leading-[normal]">
                      {t('pricing.accountSize')}
                    </span>
                    <InfoIcon className="w-3 h-3 text-[#9d62d9]" />
                  </div>
                </div>

                {/* Table Data - Fixed height container with scroll */}
                <div className="w-full mb-4">
                  <div className="space-y-3">
                    {tableRows.slice(0, -1).map((row, rowIndex) => {
                      // Determine if this is Profit Split or Leverage row for dynamic values
                      const isProfitSplit = row.label === "Profit Split";
                      const isLeverage = row.label === "Leverage";

                      // Get dynamic tooltip for leverage
                      const dynamicTooltip = isLeverage
                        ? getLeverageTooltip(activeModel, activeTab)
                        : row.tooltip;

                      return (
                        <div
                          key={rowIndex}
                          className="w-full h-[40px] flex flex-row items-center justify-between px-3 rounded-[8px]"
                          style={{
                            background: 'linear-gradient(90deg, #1F0A34 0%, #29094B 50%, #1B092E 100%)'
                          }}
                        >
                          {/* Left: Label with info icon */}
                          <div className="flex items-center gap-1">
                            <span className="font-['Poppins',Helvetica] font-normal text-[#975CE9] text-[14px] tracking-[0] leading-[normal]">
                              {row.label}
                            </span>
                            {row.hasInfo && dynamicTooltip && (
                              <InfoTooltip content={dynamicTooltip} />
                            )}
                          </div>

                          {/* Right: Value */}
                          <span className="font-['Poppins',Helvetica] font-normal text-white text-[14px] tracking-[0] leading-[normal] text-right">
                            {isProfitSplit ? (
                              // Profit Split - Dynamic based on model, tab, and account size
                              getProfitSplit(activeModel, activeTab, activeAccountIndex)
                            ) : isLeverage ? (
                              // Leverage - Dynamic based on model and tab
                              getLeverageText(activeModel, activeTab)
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
                      );
                    })}
                  </div>
                </div>

                  {/* Price & Button */}
                <div className="mt-auto space-y-3">
                  <div className="flex flex-col items-center gap-1 my-6">
                    {activeModel === 'payg' ? (
                      <>
                        <div className="inline-flex flex-col justify-center items-center px-[10px] py-[6px] rounded-[10px] border border-dashed border-[#B982FB]">
                          <div className="flex items-center gap-2">
                            <span className="text-[#c193f1] text-[12px] font-['Poppins',Helvetica]">Phase 1 -</span>
                            <span className="text-white font-['Poppins',Helvetica] font-semibold text-[20px]">{paygPhase1Prices[activeAccountIndex]}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#c193f1] text-[12px] font-['Poppins',Helvetica]">Phase 2 -</span>
                            <span className="text-white font-['Poppins',Helvetica] font-semibold text-[20px]">{paygPhase2Prices[activeAccountIndex]}</span>
                          </div>
                        </div>
                        <p className="font-['Poppins',Helvetica] text-[16px] font-medium tracking-[0] leading-normal mt-2">
                          <span className="text-white">Total </span>
                          <span className="font-bold text-[#9e59ff]">{paygTotalPrices[activeAccountIndex]}</span>
                        </p>
                      </>
                    ) : (
                      <div className="w-[110px] h-[68px] rounded-lg border-2 border-dashed border-[#b882fb] flex items-center justify-center">
                        <span 
                          className="font-['Poppins',Helvetica] font-semibold text-[38px] tracking-[0] leading-[normal]"
                          style={{
                            background: 'linear-gradient(115deg, #9E59FF 15.77%, #E9B1FF 93.98%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          {(activeTab === 1 && activeModel === 'classic') ? threeStepPrices[activeAccountIndex] : prices[activeAccountIndex]}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Price Label for Mobile */}
                  {activeModel !== 'payg' && (
                    <div className="flex items-center justify-center gap-1 mb-4">
                      <span className="font-['Cambay',Helvetica] font-normal text-[#9d62d9] text-xs tracking-[0] leading-[normal]">
                        {t('pricing.price')}
                      </span>
                      <InfoTooltip content="Evaluation fee for the selected account size" />
                    </div>
                  )}
                  <Button
                    onClick={() => window.open('https://my.thaurusguru.com/promotion/challenge', '_blank')}
                    className="flex w-full max-w-[312px] h-[44px] px-[35px] py-[6px] justify-center items-center gap-[10px] rounded-[10px] border border-[#E9B1FF] mx-auto"
                    style={{
                      background: 'linear-gradient(90deg, #FFF 0%, #DAB6FF 100%)'
                    }}
                  >
                    <span className="w-[77px] h-[20px] shrink-0 text-black font-['Cambay',Helvetica] font-bold text-[16px] leading-[normal]">
                      Start Now
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Original Pricing Table - FIXED ALIGNMENT */}
          <Card className="hidden md:block relative border-none bg-transparent opacity-0 animate-fade-in [--animation-delay:1600ms]">
            <CardContent className="p-0">
              {/* Table Grid */}
              <div className="relative">
                {/* Column Background Wrappers */}
                <div className={`absolute left-[calc(246px)] -top-5 w-[calc((100%-310px)/5)] ${getAddOns(activeModel, activeTab).length === 0 ? 'h-[calc(100%-90px)]' : 'h-[calc(100%-220px)]'} rounded-[20px] border border-solid border-[rgba(218,182,255,0.10)] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0`}></div>
                <div className={`absolute left-[calc(246px+((100%-310px)/5+16px)*1)] -top-5 w-[calc((100%-310px)/5)] ${getAddOns(activeModel, activeTab).length === 0 ? 'h-[calc(100%-90px)]' : 'h-[calc(100%-220px)]'} rounded-[20px] border border-solid border-[rgba(218,182,255,0.10)] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0`}></div>
                <div className={`absolute left-[calc(246px+((100%-310px)/5+16px)*2)] -top-5 w-[calc((100%-310px)/5)] ${getAddOns(activeModel, activeTab).length === 0 ? 'h-[calc(100%-90px)]' : 'h-[calc(100%-220px)]'} rounded-[20px] border border-solid border-[rgba(218,182,255,0.10)] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0`}></div>
                <div className={`absolute left-[calc(246px+((100%-310px)/5+16px)*3)] -top-5 w-[calc((100%-310px)/5)] ${getAddOns(activeModel, activeTab).length === 0 ? 'h-[calc(100%-90px)]' : 'h-[calc(100%-220px)]'} rounded-[20px] border border-solid border-[rgba(218,182,255,0.10)] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0`}></div>
                <div className={`absolute left-[calc(246px+((100%-310px)/5+16px)*4)] -top-5 w-[calc((100%-310px)/5)] ${getAddOns(activeModel, activeTab).length === 0 ? 'h-[calc(100%-90px)]' : 'h-[calc(100%-220px)]'} rounded-[20px] border border-solid border-[rgba(218,182,255,0.10)] bg-[linear-gradient(180deg,rgba(96,40,158,0.40)_0%,rgba(29,10,50,0.40)_25%,rgba(27,9,46,0.40)_50%,rgba(30,8,53,0.40)_75%,rgba(51,9,97,0.40)_100%)] pointer-events-none z-0`}></div>
                
                {/* Row Backgrounds - DYNAMICALLY GENERATED */}
                {(() => {
                  let currentTop = 122; // Starting position
                  const rowBackgrounds = [];

                  // Generate backgrounds for all rows including Price
                  for (let i = 0; i < tableRows.length; i++) {
                    const row = tableRows[i];
                    const isPrice = row.label === "Price";
                    // PAYG has taller price row (120px), others have 90px
                    const rowHeight = isPrice ? (activeModel === 'payg' ? 120 : 90) : 46;

                    rowBackgrounds.push(
                      <div
                        key={i}
                        className="absolute left-0 w-full bg-[linear-gradient(90deg,#1F0A34_0%,#29094B_50%,#1B092E_100%)] pointer-events-none -z-10"
                        style={{
                          top: `${currentTop}px`,
                          height: `${rowHeight}px`
                        }}
                      />
                    );

                    currentTop += rowHeight + 12; // Add row height + margin (mb-3 = 12px)
                  }

                  return rowBackgrounds;
                })()}
                
                {/* Account Size Headers */}
                <div className="grid grid-cols-[230px_repeat(5,1fr)] gap-4 mb-4 relative z-10">
                  <div></div>
                  {accountSizes.map((size, index) => (
                    <div key={index} className="rounded-2xl p-4 text-center">
                      <p className="font-['Poppins',Helvetica] font-semibold text-white text-[34px] tracking-[0] leading-normal mb-1">
                        {size}
                      </p>
                      <div className="flex items-center justify-center gap-1">
                        <span className="font-['Cambay',Helvetica] font-normal text-[#9d62d9] text-xs tracking-[0] leading-[normal]">
                          Account Size
                        </span>
                        <InfoIcon className="w-4 h-4 text-[#9d62d9]" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Table Rows - FIXED: Using exact heights to match backgrounds */}
                {tableRows.filter(row => row.label !== "Price").map((row, rowIndex) => {
                  // Determine if this is Profit Split or Leverage row for dynamic values
                  const isProfitSplit = row.label === "Profit Split";
                  const isLeverage = row.label === "Leverage";

                  // Get dynamic tooltip for leverage
                  const dynamicTooltip = isLeverage
                    ? getLeverageTooltip(activeModel, activeTab)
                    : row.tooltip;

                  return (
                    <div key={rowIndex} className="grid grid-cols-[230px_repeat(5,1fr)] gap-4 mb-3 relative z-10">
                      <div className="flex items-center gap-2 px-4 rounded-xl h-[46px]">
                        <span className="font-['Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                          {row.label}
                        </span>
                        {row.hasInfo && dynamicTooltip && (
                          <InfoTooltip content={dynamicTooltip} />
                        )}
                      </div>
                      {accountSizes.map((_, colIndex) => (
                        <div key={colIndex} className="flex items-center justify-center rounded-xl h-[46px]">
                          <span className="font-['Poppins',Helvetica] font-normal text-white text-center tracking-[0] px-2 text-sm block w-full leading-relaxed">
                            {isProfitSplit ? (
                              // Profit Split - Dynamic based on model, tab, and account size
                              getProfitSplit(activeModel, activeTab, colIndex)
                            ) : isLeverage ? (
                              // Leverage - Dynamic based on model and tab
                              getLeverageText(activeModel, activeTab)
                            ) : (
                              columnData[rowIndex]?.value.split('\n').map((line, i) => (
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
                  );
                })}

                {/* Pricing Row */}
                <div className="grid grid-cols-[230px_repeat(5,1fr)] gap-4 mb-3 relative z-10">
                  <div className="flex items-center gap-2 px-4 rounded-xl h-[90px]">
                    <span className="font-['Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                      {t('pricing.price')}
                    </span>
                    <InfoTooltip content="Evaluation fee for the selected account size" />
                  </div>
                  {prices.map((price: string, index: number) => (
                    <div key={index} className={`flex flex-col items-center justify-center rounded-xl ${activeModel === 'payg' ? 'h-[120px] gap-1' : 'h-[90px] gap-1.5'}`}>
                      {activeModel === 'payg' ? (
                        <>
                          <div className="inline-flex flex-col justify-center items-center px-[10px] py-[6px] rounded-[10px] border border-dashed border-[#B982FB]">
                            <div className="flex items-center gap-1">
                              <span className="text-[#c193f1] text-[11px] font-['Poppins',Helvetica]">Phase 1 -</span>
                              <span className="text-white font-['Poppins',Helvetica] font-semibold text-[18px]">{paygPhase1Prices[index]}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="text-[#c193f1] text-[11px] font-['Poppins',Helvetica]">Phase 2 -</span>
                              <span className="text-white font-['Poppins',Helvetica] font-semibold text-[18px]">{paygPhase2Prices[index]}</span>
                            </div>
                          </div>
                          <p className="font-['Poppins',Helvetica] text-[14px] font-medium tracking-[0] leading-normal">
                             <span className="text-white">Total </span>
                             <span className="font-bold text-[#9e59ff]">{paygTotalPrices[index]}</span>
                          </p>
                        </>
                      ) : (
                        <div className="h-16 w-[65%] rounded-lg border-2 border-dashed border-[#b882fb] flex items-center justify-center px-4">
                          <span 
                            className="bg-gradient-to-br from-[#9e59ff] to-[#e9b1ff] bg-clip-text text-transparent font-['Poppins',Helvetica] font-semibold text-3xl tracking-[0] leading-normal"
                          >
                             {(activeTab === 1 && activeModel === 'classic') ? threeStepPrices[index] : price}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Start Now Buttons Row */}
                <div className="grid grid-cols-[230px_repeat(5,1fr)] gap-4 relative z-10">
                  <div></div>
                  {prices.map((_, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <Button
                        onClick={() => window.open('https://my.thaurusguru.com/promotion/challenge', '_blank')}
                        className="h-10 w-[85%] mx-auto rounded-lg border border-[#e8b0ff] bg-gradient-to-r from-white to-[#dab6ff] font-['Cambay',Helvetica] font-bold text-black text-base hover:opacity-90 transition-opacity"
                      >
                        Start Now
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Payment Providers Section */}
                <div className="grid grid-cols-[230px_repeat(5,1fr)] gap-4 mt-16 ">
                  <div></div>
                  <div className="col-span-5 w-full px-8 py-4 bg-white rounded-2xl border border-[#7a27ef]">
                    <div className="flex items-center justify-around flex-wrap gap-4">
                      <img src="/pricing-section/confirmo.svg" alt="CONFIRMO" className="h-5 object-contain" />
                      <img src="/pricing-section/flutterwave.svg" alt="Flutterwave" className="h-10 object-contain" />
                      <img src="/pricing-section/UPI.svg" alt="UPI" className="h-6 object-contain" />
                      <img src="/pricing-section/VISA.svg" alt="VISA" className="h-6 object-contain" />
                      <img src="/pricing-section/mastercard.svg" alt="Mastercard" className="h-6 object-contain" />
                      <img src="/pricing-section/American Express.svg" alt="American Express" className="h-6 object-contain" />
                    </div>
                  </div>
                </div>

                {/* Add-ons Section - DESKTOP: Dynamic based on model and tab */}
                <div className="mt-8">
                  {(() => {
                    const addOns = getAddOns(activeModel, activeTab);

                    if (addOns.length === 0) {
                      return null;
                    }

                    return (
                      <>
                        <div className="flex items-center gap-2 mb-6">
                          <div className="w-8 h-px" style={{ backgroundColor: 'rgba(233, 177, 255, 0.24)' }}></div>
                          <span className="text-[#9d62d9] font-['Cambay',Helvetica] font-normal text-base whitespace-nowrap">
                            Add-ons
                          </span>
                          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(233, 177, 255, 0.24)' }}></div>
                        </div>
                        <div className="flex items-center justify-between gap-x-4 lg:gap-x-6">
                          {addOns.map((addon, index) => (
                            <div key={index} className="flex items-center gap-1.5 lg:gap-2.5">
                              <img src={addon.icon} alt={addon.title} className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" />
                              <span className="text-white font-['Cambay',Helvetica] text-[12px] md:text-[13px] lg:text-[15px] whitespace-nowrap">
                                <span className="font-bold">{addon.title}</span>
                                {addon.price && <span className="font-normal"> {addon.price}</span>}
                              </span>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile: Payment Providers */}
          <div className="md:hidden mt-6 px-4 py-3 bg-white rounded-2xl border border-[#7a27ef]">
            <div className="grid grid-cols-3 gap-3 items-center justify-items-center">
              <img src="/pricing-section/confirmo.svg" alt="CONFIRMO" className="h-5 object-contain" />
              <img src="/pricing-section/flutterwave.svg" alt="Flutterwave" className="h-5 object-contain" />
              <img src="/pricing-section/UPI.svg" alt="UPI" className="h-5 object-contain" />
              <img src="/pricing-section/VISA.svg" alt="VISA" className="h-5 object-contain" />
              <img src="/pricing-section/mastercard.svg" alt="Mastercard" className="h-5 object-contain" />
              <img src="/pricing-section/American Express.svg" alt="American Express" className="h-5 object-contain" />
            </div>
          </div>

          {/* Mobile: Add-ons Section - Dynamic based on model and tab */}
          <div className="md:hidden mt-6">
            {(() => {
              const addOns = getAddOns(activeModel, activeTab);

              if (addOns.length === 0) {
                return null;
              }

              return (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-px bg-purple-500"></div>
                    <span className="text-[#9d62d9] font-['Cambay',Helvetica] font-normal text-sm whitespace-nowrap">
                      Add-ons
                    </span>
                    <div className="flex-1 h-px bg-purple-500"></div>
                  </div>
                  <div className="flex overflow-x-auto pb-2 [scrollbar-width:thin] scrollbar-color-[#9d62d9_transparent] gap-6">
                    {addOns.map((addon, index) => (
                      <div key={index} className="flex items-center gap-2 flex-shrink-0">
                        <img src={addon.icon} alt={addon.title} className="w-8 h-8 flex-shrink-0" />
                        <span className="text-white font-['Cambay',Helvetica] text-[12px] whitespace-nowrap">
                          <span className="font-bold">{addon.title}</span>
                          {addon.price && <span className="font-normal"> {addon.price}</span>}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};