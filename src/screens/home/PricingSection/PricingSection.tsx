import { InfoIcon } from "lucide-react";
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

// Dynamic table rows based on model and challenge type
const getTableRows = (model: 'classic' | 'pro' | 'payg', tabIndex: number) => {
  const baseRows = [
    {
      label: "Profit Split",
      hasInfo: true,
      tooltip: "Bi-Weekly\n80%/20% - Weekly (add-on)"
    },
    {
      label: "Leverage",
      hasInfo: true,
      tooltip: "" // This will be calculated dynamically
    },
    { label: "Price", hasInfo: false },
  ];

  // Classic model variations
  if (model === 'classic') {
    if (tabIndex === 0) { // Instant
      return [
        { label: "Max Daily Drawdown", hasInfo: true, tooltip: "3%" },
        { label: "Max Overall Drawdown", hasInfo: true, tooltip: "5%" },
        { label: "Minimum Trading Days", hasInfo: true, tooltip: "7 trading days minimum" },
        ...baseRows
      ];
    } else if (tabIndex === 1) { // Step-1
      return [
        { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "8%" },
        { label: "Max Daily Drawdown", hasInfo: true, tooltip: "4%" },
        { label: "Max Overall Drawdown", hasInfo: true, tooltip: "10%" },
        { label: "Minimum Trading Days", hasInfo: true, tooltip: "4 trading days minimum" },
        ...baseRows
      ];
    } else if (tabIndex === 2) { // Step-2
      return [
        { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "8%" },
        { label: "Profit Target (Phase 2)", hasInfo: true, tooltip: "4%" },
        { label: "Max Daily Drawdown", hasInfo: true, tooltip: "4%" },
        { label: "Max Overall Drawdown", hasInfo: true, tooltip: "10%" },
        { label: "Minimum Trading Days", hasInfo: true, tooltip: "3 trading days minimum" },
        ...baseRows
      ];
    } else if (tabIndex === 3) { // Step-3
      return [
        { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "6%" },
        { label: "Profit Target (Phase 2)", hasInfo: true, tooltip: "4%" },
        { label: "Profit Target (Phase 3)", hasInfo: true, tooltip: "2%" },
        { label: "Max Daily Drawdown", hasInfo: true, tooltip: "4%" },
        { label: "Max Overall Drawdown", hasInfo: true, tooltip: "10%" },
        { label: "Minimum Trading Days", hasInfo: true, tooltip: "3 trading days minimum" },
        ...baseRows
      ];
    }
  }

  // PRO model variations
  if (model === 'pro') {
    if (tabIndex === 0) { // Instant
      return [
        { label: "Max Drawdown (Trailing)", hasInfo: true, tooltip: "4%" },
        { label: "Minimum Trading Days", hasInfo: true, tooltip: "7 trading days minimum" },
        ...baseRows
      ];
    } else if (tabIndex === 1) { // Step-1
      return [
        { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "10%" },
        { label: "Max Drawdown (Trailing)", hasInfo: true, tooltip: "5%" },
        { label: "Minimum Trading Days", hasInfo: true, tooltip: "4 trading days minimum" },
        ...baseRows
      ];
    } else if (tabIndex === 2) { // Step-2
      return [
        { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "10%" },
        { label: "Profit Target (Phase 2)", hasInfo: true, tooltip: "4%" },
        { label: "Max Drawdown (Trailing)", hasInfo: true, tooltip: "5%" },
        { label: "Minimum Trading Days", hasInfo: true, tooltip: "3 trading days minimum" },
        ...baseRows
      ];
    }
  }

  // PAYG model - only has one section: Three Step
  if (model === 'payg') {
    return [
      { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "2%" },
      { label: "Profit Target (Phase 2)", hasInfo: true, tooltip: "4%" },
      { label: "Profit Target (Phase 3)", hasInfo: true, tooltip: "6%" },
      { label: "Max Daily Drawdown", hasInfo: true, tooltip: "4%" },
      { label: "Minimum Trading Days", hasInfo: true, tooltip: "4 per phase" },
      { label: "Time Limit", hasInfo: true, tooltip: "30 days" },
      { label: "Payout Split", hasInfo: true, tooltip: "80%" },
      ...baseRows.slice(1) // Only Leverage and Price, no Profit Split
    ];
  }

  // Default fallback
  return [
    { label: "Profit Target (Phase 1)", hasInfo: true, tooltip: "8%" },
    { label: "Max Daily Drawdown", hasInfo: true, tooltip: "4%" },
    { label: "Max Overall Drawdown", hasInfo: true, tooltip: "10%" },
    { label: "Minimum Trading Days", hasInfo: true, tooltip: "4 trading days minimum" },
    ...baseRows
  ];
};

// Dynamic column data based on model and challenge type
const getColumnData = (model: 'classic' | 'pro' | 'payg', tabIndex: number) => {
  if (model === 'classic') {
    if (tabIndex === 0) { // Instant
      return [
        { value: "3%" }, // Max Daily Drawdown
        { value: "5%" }, // Max Overall Drawdown
        { value: "7" }, // Minimum Trading Days
        { value: "" }, // Profit Split - calculated dynamically
        { value: "" }, // Leverage - calculated dynamically
      ];
    } else if (tabIndex === 1) { // Step-1
      return [
        { value: "8%" }, // Profit Target (Phase 1)
        { value: "4%" }, // Max Daily Drawdown
        { value: "10%" }, // Max Overall Drawdown
        { value: "4" }, // Minimum Trading Days
        { value: "" }, // Profit Split - calculated dynamically
        { value: "" }, // Leverage - calculated dynamically
      ];
    } else if (tabIndex === 2) { // Step-2
      return [
        { value: "8%" }, // Profit Target (Phase 1)
        { value: "4%" }, // Profit Target (Phase 2)
        { value: "4%" }, // Max Daily Drawdown
        { value: "10%" }, // Max Overall Drawdown
        { value: "3" }, // Minimum Trading Days
        { value: "" }, // Profit Split - calculated dynamically
        { value: "" }, // Leverage - calculated dynamically
      ];
    } else if (tabIndex === 3) { // Step-3
      return [
        { value: "6%" }, // Profit Target (Phase 1)
        { value: "4%" }, // Profit Target (Phase 2)
        { value: "2%" }, // Profit Target (Phase 3)
        { value: "4%" }, // Max Daily Drawdown
        { value: "10%" }, // Max Overall Drawdown
        { value: "3" }, // Minimum Trading Days
        { value: "" }, // Profit Split - calculated dynamically
        { value: "" }, // Leverage - calculated dynamically
      ];
    }
  }

  if (model === 'pro') {
    if (tabIndex === 0) { // Instant
      return [
        { value: "4%" }, // Max Drawdown (Trailing)
        { value: "7" }, // Minimum Trading Days
        { value: "" }, // Profit Split - calculated dynamically
        { value: "" }, // Leverage - calculated dynamically
      ];
    } else if (tabIndex === 1) { // Step-1
      return [
        { value: "10%" }, // Profit Target (Phase 1)
        { value: "5%" }, // Max Drawdown (Trailing)
        { value: "4" }, // Minimum Trading Days
        { value: "" }, // Profit Split - calculated dynamically
        { value: "" }, // Leverage - calculated dynamically
      ];
    } else if (tabIndex === 2) { // Step-2
      return [
        { value: "10%" }, // Profit Target (Phase 1)
        { value: "4%" }, // Profit Target (Phase 2)
        { value: "5%" }, // Max Drawdown (Trailing)
        { value: "3" }, // Minimum Trading Days
        { value: "" }, // Profit Split - calculated dynamically
        { value: "" }, // Leverage - calculated dynamically
      ];
    }
  }

  // PAYG model - only one section: Three Step
  if (model === 'payg') {
    return [
      { value: "2%" }, // Profit Target (Phase 1)
      { value: "4%" }, // Profit Target (Phase 2)
      { value: "6%" }, // Profit Target (Phase 3)
      { value: "4%" }, // Max Daily Drawdown
      { value: "4 per phase" }, // Minimum Trading Days
      { value: "30" }, // Time Limit
      { value: "80%" }, // Payout Split
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

const prices = ["$89", "$129", "$249", "$369", "$589"];

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
          <div className="text-white text-xs [font-family:'Poppins',Helvetica] whitespace-pre-line leading-relaxed">
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
  const [activeTab, setActiveTab] = React.useState(0);
  const [activeAccountIndex, setActiveAccountIndex] = React.useState(0);
  const [activeModel, setActiveModel] = React.useState<'classic' | 'pro' | 'payg'>('classic');

  // Get dynamic table rows and column data
  const tableRows = React.useMemo(() => getTableRows(activeModel, activeTab), [activeModel, activeTab]);
  const columnData = React.useMemo(() => getColumnData(activeModel, activeTab), [activeModel, activeTab]);

  // Function to get profit split based on model and challenge type
  const getProfitSplit = React.useCallback((model: 'classic' | 'pro' | 'payg', tabIndex: number): string => {
    if (model === 'payg') {
      return 'Up to 80%';
    }

    // For Classic and Pro models
    if (tabIndex === 0) { // Instant
      return model === 'classic' ? 'Up to 85%' : 'Up to 85%';
    } else if (tabIndex === 1) { // One Step
      return model === 'classic' ? 'Up to 90%' : 'Up to 90%';
    } else if (tabIndex === 2) { // Two Step
      return model === 'classic' ? 'Up to 95%' : 'Up to 95%';
    } else if (tabIndex === 3) { // Three Step (Classic only)
      return 'Up to 90%';
    }

    return 'Up to 80%';
  }, []);

  // Function to get leverage main text based on model and challenge type
  const getLeverageText = React.useCallback((model: 'classic' | 'pro' | 'payg', tabIndex: number): string => {
    if (model === 'payg') {
      return '1:100';
    }

    if (tabIndex === 0) { // Instant
      return model === 'classic' ? '1:30' : '1:30';
    } else if (tabIndex === 1) { // One Step
      return model === 'classic' ? '1:50' : '1:50';
    } else if (tabIndex === 2) { // Two Step
      return model === 'classic' ? '1:100' : '1:100';
    } else if (tabIndex === 3) { // Three Step (Classic only)
      return '1:100';
    }

    return '1:30';
  }, []);

  // Function to get leverage tooltip text based on model and challenge type
  const getLeverageTooltip = React.useCallback((model: 'classic' | 'pro' | 'payg', tabIndex: number): string => {
    if (model === 'payg') {
      return '1:100 FX, 1:20 Indices, 1:30 Commodities, 1:5 Crypto, Energies 1:10';
    }

    if (tabIndex === 0) { // Instant
      return model === 'classic'
        ? 'FX 1:30, Metals/Energies 1:10, Indices 1:10, Crypto 1:1'
        : 'FX 1:30, Metals/Energies 1:10, Indices 1:10, Crypto 1:1';
    } else if (tabIndex === 1) { // One Step
      return model === 'classic'
        ? 'FX 1:50 , Indices 1:10, Metals 1:10, Energies 1:10 & Crypto 1:1'
        : 'FX 1:50 , Indices 1:10, Metals 1:10, Energies 1:10 & Crypto 1:1';
    } else if (tabIndex === 2) { // Two Step
      return model === 'classic'
        ? '1:100 FX, 1:20 Indices, 1:30 Metals, 1:5 Crypto, Energies 1:10'
        : '1:100 FX, 1:20 Indices, 1:30 Commodities, 1:5 Crypto, Energies 1:10';
    } else if (tabIndex === 3) { // Three Step (Classic only)
      return '1:100 FX, 1:20 Indices, 1:30 Commodities, 1:5 Crypto, Energies 1:10';
    }

    return 'FX 1:30, Metals/Energies 1:10, Indices 1:10, Crypto 1:1';
  }, []);

  // Function to get add-ons based on model and challenge type
  const getAddOns = React.useCallback((model: 'classic' | 'pro' | 'payg', tabIndex: number) => {
    // Instant, Instant PRO, and Pay As You Go - No Add-ons
    if (tabIndex === 0 || model === 'payg') {
      return [];
    }

    // Classic Three Step - 4 add-ons
    if (model === 'classic' && tabIndex === 3) {
      return [
        { icon: '/pricing-section/icon-1.svg', title: 'News trading', price: '' },
        { icon: '/pricing-section/icon-2.svg', title: 'Weekend Trading', price: '' },
        { icon: '/pricing-section/icon-3.svg', title: 'Weekly Payout', price: '' },
        { icon: '/pricing-section/icon-1.svg', title: 'No minimum trading days', price: '' },
      ];
    }

    // Classic One-Two Step and PRO One-Two Step - 3 add-ons
    if ((model === 'classic' && (tabIndex === 1 || tabIndex === 2)) ||
        (model === 'pro' && (tabIndex === 1 || tabIndex === 2))) {
      return [
        { icon: '/pricing-section/icon-1.svg', title: 'News Trading', price: '' },
        { icon: '/pricing-section/icon-2.svg', title: 'Weekend Trading', price: '' },
        { icon: '/pricing-section/icon-3.svg', title: 'Weekly Payout', price: '' },
      ];
    }

    return [];
  }, []);

  // Filter challenge types based on active model
  const availableChallengeTypes = React.useMemo(() => {
    if (activeModel === 'pro') {
      // Hide Three Step (index 3) when PRO is active
      return challengeTypes.filter((_, index) => index !== 3);
    } else if (activeModel === 'payg') {
      // PAYG only shows "Three Step" - no tabs needed
      return [];
    }
    return challengeTypes;
  }, [activeModel]);

  // Reset active tab when switching models
  React.useEffect(() => {
    if (activeModel === 'pro' && activeTab === 3) {
      setActiveTab(0); // Reset to Instant
    }
    // PAYG doesn't use tabs, no need to reset
  }, [activeModel, activeTab]);

  return (
    <section className="relative w-full py-6 md:py-10 px-4 translate-y-[-1rem] animate-fade-in opacity-0">
      <div className="max-w-[1160px] mx-auto">
        {/* Top Badges - Mobile: Horizontal Scroll, Desktop: Normal */}
        <div className="mb-4 md:mb-6 opacity-0 animate-fade-in [--animation-delay:200ms]">
          <div className="flex md:flex-row items-center gap-2 md:gap-4 pb-2 md:pb-0">
            {processSteps.map((step, index) => (
              <Badge
                key={index}
                className="flex-shrink-0 h-auto px-2 md:px-[17px] py-1 md:py-[5px] rounded-[14px] border-[0.6px] border-white shadow-[inset_0px_4px_4px_#00000040] bg-[linear-gradient(90deg,rgba(112,35,192,1)_0%,rgba(53,16,90,1)_100%)] text-white text-[8px] md:text-xs [font-family:'Blinker',Helvetica] font-normal whitespace-nowrap"
              >
                {step.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Heading - Mobile: 363px width, 24px size */}
        <h2 className="mt-6 md:mt-10 mb-3 md:mb-6 
          w-full max-w-[363px] md:max-w-none
          [font-family:'M_PLUS_2',Helvetica] font-normal 
          text-[24px] md:text-[42px] 
          tracking-[0] leading-[normal] 
          bg-gradient-to-b from-white to-[#E9B1FF] bg-clip-text text-transparent 
          opacity-0 animate-fade-in [--animation-delay:400ms]">
          Choose Your Prop Trading Challenge &amp; Get Funded Today
        </h2>

        {/* Subheading - Mobile: 287px width, 12px size */}
        <p className="mb-6 md:mb-8 
          w-full max-w-[287px] md:max-w-none
          [font-family:'Cambay',Helvetica] font-normal text-[#c193f1] 
          text-[12px] md:text-base 
          tracking-[0] leading-[18px] md:leading-[normal] 
          opacity-0 animate-fade-in [--animation-delay:600ms]">
          Build your trading path with flexible challenges designed for every style.
        </p>

        {/* Model Selection - Mobile Responsive Layout */}
        <div className="mb-6 opacity-0 animate-fade-in [--animation-delay:800ms]">
          <p className="[font-family:'Cambay',Helvetica] font-bold text-white 
            text-base md:text-xl tracking-[0] leading-[normal] mb-3 md:mb-4">
            Model
          </p>
          
          {/* Mobile: 2 rows, Desktop: 1 row */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            {/* First Row on Mobile: CLASSIC and PRO */}
            <div className="flex gap-3 md:gap-4">
              <Button
                onClick={() => setActiveModel('classic')}
                className={`flex-1 md:flex-none h-[44px] md:h-[52px] md:w-[180px]
                rounded-[10px] border border-solid
                [font-family:'Cambay',Helvetica] font-bold text-white
                text-base md:text-xl
                hover:opacity-90 transition-opacity
                ${activeModel === 'classic'
                  ? 'border-[#a770e0] bg-[linear-gradient(164deg,rgba(96,40,158,1)_0%,rgba(51,9,97,1)_100%)]'
                  : 'border-[#4f1b85] bg-[#1b0732]'
                }`}>
                CLASSIC
              </Button>
              <Button
                onClick={() => setActiveModel('pro')}
                className={`flex-1 md:flex-none h-[44px] md:h-[52px] md:w-[180px]
                rounded-[10px] border border-solid
                [font-family:'Cambay',Helvetica] font-bold text-white
                text-base md:text-xl
                hover:opacity-90 transition-opacity
                ${activeModel === 'pro'
                  ? 'border-[#a770e0] bg-[linear-gradient(164deg,rgba(96,40,158,1)_0%,rgba(51,9,97,1)_100%)]'
                  : 'border-[#4f1b85] bg-[#1b0732]'
                }`}>
                PRO
              </Button>
            </div>

            {/* Second Row on Mobile: Pay As You Go - Using Image */}
            <div className="relative w-full md:w-auto md:ml-auto flex items-center justify-start mt-4 md:mt-0">
              {/* Mobile: Try Now SVG Image */}
              <img
                className="md:hidden absolute top-[-32px] left-[calc(50%+40px)] -translate-x-1/2 w-auto h-[85px] object-contain"
                alt="Try now"
                src="/pricing-section/try-now-mobile.svg"
              />
              
              {/* Desktop: Try Now Text */}
              <p className="hidden md:block absolute top-[-36px] left-[-47px] rotate-[-15deg] 
                [font-family:'Cambay',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                Try now
              </p>
              {/* Desktop: Arrow */}
              <img
                className="hidden md:block absolute top-[-36px] left-[34px] w-[38px] h-[26px]"
                alt="Arrow"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/group-66.png"
              />
              
              {/* Mobile & Desktop: Custom Styled Button */}
              <button
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
                  [font-family:'Cambay',Helvetica] font-bold text-[20px] leading-normal"
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
          <div className="w-full relative flex items-center justify-between mt-8 md:mt-16 pt-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {/* Tab Buttons */}
            {availableChallengeTypes.map((type, index) => {
              // Get the original index from challengeTypes array
              const originalIndex = challengeTypes.findIndex(ct => ct.label === type.label);

              return (
                <div
                  key={index}
                  onClick={() => setActiveTab(originalIndex)}
                  className={`relative flex items-center justify-center gap-2 md:gap-3 py-2 md:py-5.5 cursor-pointer flex-shrink-0
                    ${index > 0 ? 'hidden md:flex' : 'flex'}
                    ${activeTab === originalIndex
                      ? `text-white bg-[#1a0a2e] border-t border-l border-r border-[#DAB6FF] rounded-t-[20px] px-6 md:px-18 md:translate-y-[-2.9px] translate-y-[7.9px] pb-[calc(1.375rem+3.4px)] z-10 ml-[6px] md:ml-0`
                      : 'text-white bg-transparent px-4 md:px-8'
                  } ${(type.label === 'Three Step' || (type.label === 'Two Step' && activeModel === 'pro')) ? 'ml-[0.8px]' : ''}`}
                >
                  {type.icon && (
                    <img src="/pricing-section/instant_flash.svg" alt="Instant" className="w-[20px] md:w-[26px] h-[20px] md:h-[26px]" />
                  )}
                  <span className="[font-family:'Blinker',Helvetica] font-semibold text-[18px] md:text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
                    {type.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* PAYG Header - Show when in PAYG mode */}
        {activeModel === 'payg' && (
          <div className="w-full relative flex items-center justify-between mt-8 md:mt-16 pt-1">
            <div className="relative flex items-center justify-center gap-2 md:gap-3 py-2 md:py-5.5 flex-shrink-0 text-white bg-[#1a0a2e] border-t border-l border-r border-[#DAB6FF] rounded-t-[20px] px-6 md:px-18 md:translate-y-[-2.9px] translate-y-[7.9px] pb-[calc(1.375rem+3.4px)] z-10">
              <span className="[font-family:'Blinker',Helvetica] font-semibold text-[18px] md:text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
                Three Step
              </span>
            </div>
          </div>
        )}

        {/* Bordered Table Container - FIXED BORDER */}
        <div
          className={`w-full border border-[#DAB6FF] bg-[#1a0a2e]
            ${activeModel === 'payg' ? 'rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]' : ''}
            ${activeModel !== 'payg' && activeTab === 0 ? 'rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]' : ''}
            ${activeModel !== 'payg' && activeTab === 1 ? 'rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]' : ''}
            ${activeModel !== 'payg' && activeTab === 2 ? `rounded-tl-[20px] ${activeModel === 'pro' ? 'rounded-tr-none' : 'rounded-tr-[20px]'} rounded-bl-[20px] rounded-br-[20px]` : ''}
            ${activeModel !== 'payg' && activeTab === 3 ? 'rounded-tl-[20px] rounded-tr-none rounded-bl-[20px] rounded-br-[20px]' : ''}
            p-4 md:p-8`}
          style={{
            maxWidth: typeof window !== 'undefined' && window.innerWidth < 768 ? '386px' : 'none',
            margin: typeof window !== 'undefined' && window.innerWidth < 768 ? '0 auto' : undefined,
            overflow: typeof window !== 'undefined' && window.innerWidth < 768 ? 'hidden' : 'visible',
            marginTop: typeof window !== 'undefined' && window.innerWidth < 768 ? '-1px' : '-4px'
          }}
        >
          
          {/* Promotional Banner - Hidden on mobile */}
          <div className="hidden md:flex items-center justify-end mt-6 mb-8">
            <div 
              className="w-[848px] h-[53px] rounded-[10px] flex items-center justify-center gap-3 px-6 border-2 border-dashed border-[#b882fb]"
              style={{
                background: 'linear-gradient(90deg,#1F0A34 0%,#4F1990 50%,#1B092E 100%)',
              }}
            >
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

          {/* Mobile: Promotional Banner - Compact version */}
          <div className="md:hidden flex flex-col items-center gap-3 mt-4 mb-6">
            <div 
              className="w-full flex flex-col items-center gap-2 p-3 rounded-[10px] border-2 border-dashed border-[#b882fb]"
              style={{
                background: 'linear-gradient(90deg,#1F0A34 0%,#4F1990 50%,#1B092E 100%)',
              }}
            >
              <span className="text-white [font-family:'Poppins',Helvetica] font-normal text-[14px] text-center leading-[20px]">
                15% Off + BOGO on 1,2,3 Step Challenges
              </span>
              <span className="text-[#A861FF] [font-family:'Poppins',Helvetica] font-bold text-[24px] leading-[28px]">
                CODE - XMAS
              </span>
            </div>
            
            {/* Challenge Type Buttons */}
            <div className="w-full flex gap-2 justify-center">
              {availableChallengeTypes.slice(1).map((type, index) => {
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
                    <span className="[font-family:'Blinker',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                      {type.number} {type.label}
                    </span>
                  </button>
                );
              })}
            </div>
            
            {/* Account Size Buttons */}
            <div className="w-full flex gap-2 justify-center pb-2">
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
                  <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                    {size}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Platform Badge */}
          <div className="flex items-center justify-start mt-6 md:mt-12 -mb-6 md:-mb-10 opacity-0 animate-fade-in [--animation-delay:1400ms]">
            <div className="flex items-center gap-2 md:gap-2.5 mt-4 md:mt-8 px-2 md:px-[10px] py-1 md:py-[5px] rounded-[20px] border border-solid border-[#d9b6fe1a] shadow-[inset_0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(96,40,158,0.4)_0%,rgba(29,10,50,0.4)_25%,rgba(27,9,46,0.4)_50%,rgba(30,8,53,0.4)_75%,rgba(51,9,97,0.4)_100%)]">
              <span className="[font-family:'Blinker',Helvetica] font-normal text-white text-[10px] md:text-xs tracking-[0] leading-[normal]">
                Platform - Meta Trader 5
              </span>
              <img
                className="w-5 md:w-6 h-5 md:h-6 object-cover"
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
                  <p className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[34px] tracking-[0] leading-[normal] mb-1">
                    {accountSizes[activeAccountIndex]}
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="[font-family:'Cambay',Helvetica] font-normal text-[#9d62d9] text-xs tracking-[0] leading-[normal]">
                      Account Size
                    </span>
                    <InfoIcon className="w-3 h-3 text-[#9d62d9]" />
                  </div>
                </div>

                {/* Table Data - Fixed height container with scroll */}
                <div className="w-full mb-4">
                  <div className="space-y-4">
                    {tableRows.slice(0, -1).map((row, rowIndex) => {
                      // Determine if this is Profit Split, Payout Split, or Leverage row
                      const isProfitSplit = row.label === "Profit Split";
                      const isPayoutSplit = row.label === "Payout Split";
                      const isLeverage = row.label === "Leverage";
                      const isLargeRow = isProfitSplit || isPayoutSplit || isLeverage;

                      // Get dynamic tooltip for leverage
                      const dynamicTooltip = isLeverage
                        ? getLeverageTooltip(activeModel, activeTab)
                        : row.tooltip;

                      return (
                        <div
                          key={rowIndex}
                          className={`w-full ${isLargeRow ? 'h-[100px]' : 'h-[40px]'} flex flex-row items-center justify-between px-3 rounded-[8px]`}
                          style={{
                            background: 'linear-gradient(90deg, #1F0A34 0%, #29094B 50%, #1B092E 100%)'
                          }}
                        >
                          {/* Left: Label with info icon */}
                          <div className="flex items-center gap-1">
                            <span className="[font-family:'Poppins',Helvetica] font-normal text-[#975CE9] text-[16px] tracking-[0] leading-[normal]">
                              {row.label}
                            </span>
                            {row.hasInfo && dynamicTooltip && (
                              <InfoTooltip content={dynamicTooltip} />
                            )}
                          </div>

                          {/* Right: Value */}
                          <span className="[font-family:'Poppins',Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal] text-right">
                            {isProfitSplit ? (
                              // Profit Split - Dynamic based on model and tab
                              getProfitSplit(activeModel, activeTab)
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
                  <div className="w-[110px] h-[68px] rounded-lg border-2 border-dashed border-[#b882fb] flex items-center justify-center mx-auto my-6">
                    <span 
                      className="[font-family:'Poppins',Helvetica] font-semibold text-[38px] tracking-[0] leading-[normal]"
                      style={{
                        background: 'linear-gradient(115deg, #9E59FF 15.77%, #E9B1FF 93.98%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {prices[activeAccountIndex]}
                    </span>
                  </div>
                  <Button
                    onClick={() => window.open('https://my.thaurusguru.com/promotion/challenge', '_blank')}
                    className="flex w-full max-w-[312px] h-[44px] px-[35px] py-[6px] justify-center items-center gap-[10px] rounded-[10px] border border-[#E9B1FF] mx-auto"
                    style={{
                      background: 'linear-gradient(90deg, #FFF 0%, #DAB6FF 100%)'
                    }}
                  >
                    <span className="w-[77px] h-[20px] shrink-0 text-black [font-family:'Cambay',Helvetica] font-bold text-[16px] leading-[normal]">
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
                    const isProfitSplit = row.label === "Profit Split";
                    const isPayoutSplit = row.label === "Payout Split";
                    const isLeverage = row.label === "Leverage";
                    const isPrice = row.label === "Price";
                    const isLargeRow = isProfitSplit || isPayoutSplit || isLeverage || isPrice;
                    const rowHeight = isPrice ? 90 : (isLargeRow ? 80 : 46);

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
                      <p className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[34px] tracking-[0] leading-normal mb-1">
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

                {/* Table Rows - FIXED: Using exact heights to match backgrounds */}
                {tableRows.filter(row => row.label !== "Price").map((row, rowIndex) => {
                  // Determine if this is Profit Split, Payout Split, or Leverage row
                  const isProfitSplit = row.label === "Profit Split";
                  const isPayoutSplit = row.label === "Payout Split";
                  const isLeverage = row.label === "Leverage";
                  const isLargeRow = isProfitSplit || isPayoutSplit || isLeverage;

                  // Get dynamic tooltip for leverage
                  const dynamicTooltip = isLeverage
                    ? getLeverageTooltip(activeModel, activeTab)
                    : row.tooltip;

                  return (
                    <div key={rowIndex} className="grid grid-cols-[230px_repeat(5,1fr)] gap-4 mb-3 relative z-10">
                      <div className={`flex items-center gap-2 px-4 rounded-xl ${isLargeRow ? 'h-[80px] translate-y-[-4px]' : 'h-[46px]'}`}>
                        <span className="[font-family:'Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                          {row.label}
                        </span>
                        {row.hasInfo && dynamicTooltip && (
                          <InfoTooltip content={dynamicTooltip} />
                        )}
                      </div>
                      {accountSizes.map((_, colIndex) => (
                        <div key={colIndex} className={`flex items-center justify-center rounded-xl ${isLargeRow ? 'h-[80px]' : 'h-[46px]'}`}>
                          <span className={`[font-family:'Poppins',Helvetica] font-normal text-white text-center tracking-[0] px-2 text-sm block w-full ${isLargeRow ? 'leading-[1.4] translate-y-[-4px]' : 'leading-relaxed'}`}>
                            {isProfitSplit ? (
                              // Profit Split - Dynamic based on model and tab
                              getProfitSplit(activeModel, activeTab)
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
                    <span className="[font-family:'Cambay',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                      Price
                    </span>
                  </div>
                  {prices.map((price, index) => (
                    <div key={index} className="flex items-center justify-center rounded-xl h-[90px]">
                      <div className="h-16 rounded-lg border-2 border-dashed border-[#b882fb] flex items-center justify-center px-4 w-[65%]">
                        <span className="bg-gradient-to-br from-[#9e59ff] to-[#e9b1ff] bg-clip-text text-transparent [font-family:'Poppins',Helvetica] font-semibold text-3xl tracking-[0] leading-normal">
                          {price}
                        </span>
                      </div>
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
                        className="h-10 w-[85%] mx-auto rounded-lg border border-[#e8b0ff] bg-gradient-to-r from-white to-[#dab6ff] [font-family:'Cambay',Helvetica] font-bold text-black text-base hover:opacity-90 transition-opacity"
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
                          <span className="text-[#9d62d9] [font-family:'Cambay',Helvetica] font-normal text-base whitespace-nowrap">
                            Add-ons
                          </span>
                          <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(233, 177, 255, 0.24)' }}></div>
                        </div>
                        <div className={`flex items-center ${addOns.length === 4 ? 'justify-around' : 'justify-between'} gap-3`}>
                          {addOns.map((addon, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <img src={addon.icon} alt={addon.title} className="w-10 h-10 flex-shrink-0" />
                              <span className="text-white [font-family:'Cambay',Helvetica] text-base whitespace-nowrap">
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
                    <span className="text-[#9d62d9] [font-family:'Cambay',Helvetica] font-normal text-sm whitespace-nowrap">
                      Add-ons
                    </span>
                    <div className="flex-1 h-px bg-purple-500"></div>
                  </div>
                  <div className="space-y-3">
                    {addOns.map((addon, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <img src={addon.icon} alt={addon.title} className="w-8 h-8 flex-shrink-0" />
                        <span className="text-white [font-family:'Cambay',Helvetica] text-[12px] leading-[48px]">
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