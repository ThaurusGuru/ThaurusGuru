import { useState, useEffect, useRef } from 'react';

// Animated digit component with slot-machine effect
const AnimatedDigit = ({ digit }: { digit: string }) => {
  const [displayDigit, setDisplayDigit] = useState(digit);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevDigit = useRef(digit);

  useEffect(() => {
    if (prevDigit.current !== digit) {
      setIsAnimating(true);
      // Quick flip animation
      setTimeout(() => {
        setDisplayDigit(digit);
        setTimeout(() => setIsAnimating(false), 150);
      }, 150);
      prevDigit.current = digit;
    }
  }, [digit]);

  return (
    <div
      className="flex flex-col justify-center items-center border border-[#E9B1FF] overflow-hidden capped-digit-box"
      style={{
        width: '48px',
        height: '76px',
        padding: '16px 13px',
        gap: '10px',
        background: 'rgba(65, 19, 114, 0.30)',
        position: 'relative'
      }}
    >
      <span
        className="text-white text-center font-['Cambay',Helvetica] capped-digit-text"
        style={{
          fontSize: '48px',
          fontWeight: 400,
          lineHeight: '36px',
          transform: isAnimating ? 'translateY(-100%)' : 'translateY(0)',
          opacity: isAnimating ? 0 : 1,
          transition: 'all 0.15s ease-out',
          textShadow: '0 0 10px rgba(233, 177, 255, 0.5)'
        }}
      >
        {displayDigit}
      </span>
      {/* Glow effect on change */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle, rgba(233, 177, 255, 0.3) 0%, transparent 70%)',
          opacity: isAnimating ? 1 : 0,
          transition: 'opacity 0.3s ease-out',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export const CappedSection = () => {
  // Configuration
  const CAP_AMOUNT = 50_000_000; // $50 Million cap
  const START_AMOUNT = 2_000_000; // Starting from $2 Million

  const [fundingAmount, setFundingAmount] = useState(START_AMOUNT);

  useEffect(() => {
    // Challenge amounts that can be funded
    const CHALLENGE_AMOUNTS = [5000, 10000, 25000, 50000, 100000];

    // Update counter every 100ms with random challenge increments
    const interval = setInterval(() => {
      setFundingAmount(prev => {
        if (prev >= CAP_AMOUNT) return CAP_AMOUNT;

        // Random probability for funding event: 0.5% chance per tick
        const roll = Math.random();
        
        if (roll > 0.995) {
          // Randomly select a challenge amount to add
          const increment = CHALLENGE_AMOUNTS[Math.floor(Math.random() * CHALLENGE_AMOUNTS.length)];
          const newAmount = Math.min(prev + increment, CAP_AMOUNT);
          return newAmount;
        }

        return prev;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  
// Format number to 8 digits (for up to $50M range)
const formatToDigits = (num: number): string[] => {
  // Round to nearest 10 so only the last digit is always 0
  const rounded = Math.floor(num / 10) * 10;
  // Pad to 8 digits to accommodate $50,000,000 consistently
  const str = rounded.toString().padStart(8, '0');
  return str.split('');
};

  const fundingDigits = formatToDigits(fundingAmount);
  const remainingAmount = CAP_AMOUNT - fundingAmount;

  // Format remaining as $X.XXM - Reduced precision to make jumps feel more significant
  const formatRemaining = (amount: number): string => {
    if (amount <= 0) return '$0 remaining';
    const millions = amount / 1_000_000;
    return `$${millions.toFixed(2)}M remaining`;
  };

  return (
    <>
      <style>{`
        /* Mobile-only styles - only apply below 768px */
        @media (max-width: 767px) {
          .capped-digit-box {
            width: 28px !important;
            height: 46px !important;
            padding: 8px 6px !important;
          }
          
          .capped-digit-text {
            font-size: 28px !important;
            line-height: 22px !important;
          }
          
          .capped-section {
            padding-top: 150px !important;
            padding-bottom: 40px !important;
            background-position: center calc(30% - 13.5vh) !important;
          }
          
          .capped-label {
            font-size: 14px !important;
          }
          
          .capped-title {
            font-size: 32px !important;
            margin-top: 12px !important;
          }
          
          .capped-subtitle {
            font-size: 12px !important;
            margin-top: 8px !important;
            padding: 0 16px !important;
          }
          
          .capped-main-container {
            min-height: 280px !important;
            height: auto !important;
            border-radius: 12px !important;
            margin-top: 32px !important;
            padding-bottom: 64px !important;
          }
          
          .capped-amount-text {
            font-size: 16px !important;
            margin-top: 32px !important;
            padding: 0 16px !important;
          }
          
          .capped-digits-container {
            gap: 4px !important;
            margin-top: 12px !important;
          }
          
          .capped-dollar-sign {
            font-size: 32px !important;
            line-height: 24px !important;
          }
          
          .capped-badges {
            bottom: 16px !important;
            left: 12px !important;
            right: 12px !important;
            flex-direction: column !important;
            gap: 8px !important;
          }
          
          .capped-badge {
            border-radius: 20px !important;
            width: 100% !important;
          }
          
          .capped-badge-inner {
            border-radius: 18px !important;
            padding: 4px 10px !important;
            gap: 6px !important;
          }
          
          .capped-badge-dot {
            height: 8px !important;
            width: 8px !important;
            margin-right: 4px !important;
          }
          
          .capped-badge-text {
            font-size: 12px !important;
            line-height: 16px !important;
          }
          
          .capped-button {
            border-radius: 8px !important;
            margin-top: 16px !important;
            padding: 8px 14px !important;
            gap: 8px !important;
          }
          
          .capped-button-text {
            font-size: 13px !important;
            line-height: 16px !important;
          }
          
          .capped-button-arrow {
            border-radius: 20px !important;
            width: 28px !important;
            height: 19px !important;
            padding: 1px 5px !important;
          }
        }
        
        /* Tablet styles - 768px to 1023px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .capped-digit-box {
            width: 38px !important;
            height: 60px !important;
            padding: 12px 10px !important;
          }
          
          .capped-digit-text {
            font-size: 38px !important;
            line-height: 30px !important;
          }
          
          .capped-section {
            padding-top: 250px !important;
          }
          
          .capped-title {
            font-size: 40px !important;
          }
          
          .capped-subtitle {
            font-size: 14px !important;
          }
          
          .capped-amount-text {
            font-size: 22px !important;
          }
          
          .capped-dollar-sign {
            font-size: 42px !important;
          }
        }
      `}</style>
      <section 
      className="relative w-full py-20 px-4 flex justify-center items-center min-h-screen capped-section"
      style={{
        backgroundImage: 'url(/Capped/capped.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center calc(50% - 10vh)',
        backgroundRepeat: 'no-repeat',
        paddingTop: '400px'
      }}
    >
      <div className="flex flex-col items-center max-w-[1200px] w-full">
        {/* Capped Label */}
        <p 
          className="text-white text-center font-['Poppins',Helvetica] capped-label"
          style={{
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '26px'
          }}
        >
          Capped at
        </p>

        {/* $50 Million */}
        <h2 
          className="text-white text-center font-['Poppins',Helvetica] mt-[22px] capped-title"
          style={{
            fontSize: '48px',
            fontWeight: 500,
            lineHeight: '46px'
          }}
        >
          $50 Million
        </h2>

        {/* Subtitle */}
        <p 
          className="text-white text-center font-['Poppins',Helvetica] mt-[12px] capped-subtitle"
          style={{
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '20px'
          }}
        >
          Total capital allocated to active traders
        </p>

        {/* Main Container */}
        <div 
          className="relative w-full max-w-[898px] h-[332px] rounded-[20px] mt-[72px] flex flex-col items-center capped-main-container"
          style={{
            background: 'linear-gradient(180deg, rgba(96, 40, 158, 0.40) 0%, rgba(29, 10, 50, 0.40) 25%, rgba(27, 9, 46, 0.40) 50%, rgba(30, 8, 53, 0.40) 75%, rgba(51, 9, 97, 0.40) 100%)'
          }}
        >
          {/* Amount funded text */}
          <p 
            className="text-[#E9B1FF] text-center font-['Poppins',Helvetica] mt-[72px] capped-amount-text"
            style={{
              fontSize: '28px',
              fontWeight: 400,
              lineHeight: 'normal'
            }}
          >
            Amount funded based on our data
          </p>

          {/* Funding Amount Display */}
          <div className="flex items-center gap-2 mt-[16px] capped-digits-container">
            {/* Dollar Sign */}
            <span 
              className="text-white text-center font-['Poppins',Helvetica] capped-dollar-sign"
              style={{
                fontSize: '53px',
                fontWeight: 300,
                lineHeight: '36px'
              }}
            >
              $
            </span>

            {/* Digit Boxes - Animated */}
            {fundingDigits.map((digit, index) => (
              <AnimatedDigit key={index} digit={digit} />
            ))}
          </div>

          {/* Bottom Badges */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center capped-badges">
            {/* Live funding updates */}
            <div 
              className="rounded-[30px] p-[2px] capped-badge"
              style={{
                background: 'linear-gradient(90deg, rgba(233, 177, 255, 0.5) 0%, rgba(129, 72, 237, 0.5) 100%)'
              }}
            >
              <div 
                className="flex justify-center items-center rounded-[28px] capped-badge-inner"
                style={{
                  padding: '6px 14px',
                  gap: '10px',
                  background: 'rgba(27, 9, 46, 0.95)'
                }}
              >
                {/* Pulsing live dot */}
                <span
                  className="relative flex h-3 w-3 mr-2 capped-badge-dot"
                >
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                  />
                  <span
                    className="relative inline-flex rounded-full h-3 w-3 bg-green-500"
                  />
                </span>
                <span
                  className="text-white text-center font-['Poppins',Helvetica] capped-badge-text"
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: '22px'
                  }}
                >
                  Live funding updates
                </span>
              </div>
            </div>

            {/* Remaining amount */}
            <div 
              className="rounded-[30px] p-[2px] capped-badge"
              style={{
                background: 'linear-gradient(90deg, rgba(233, 177, 255, 0.5) 0%, rgba(129, 72, 237, 0.5) 100%)'
              }}
            >
              <div 
                className="flex justify-center items-center rounded-[28px] capped-badge-inner"
                style={{
                  padding: '6px 14px',
                  gap: '10px',
                  background: 'rgba(27, 9, 46, 0.95)'
                }}
              >
                <span
                  className="text-white text-center font-['Poppins',Helvetica] capped-badge-text"
                  style={{
                    fontSize: '18px',
                    fontWeight: 400,
                    lineHeight: '22px'
                  }}
                >
                  {formatRemaining(remainingAmount)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Get Funded Now Button */}
        <button 
          className="inline-flex justify-center items-center rounded-[10px] border border-[#510F96] mt-[24px] transition-transform hover:scale-105 relative capped-button"
          style={{
            padding: '10px 20px',
            gap: '10px',
            background: 'linear-gradient(104deg, #F6E6FF -33.17%, #D692FF 16.49%, #8148ED 66.15%, #4829C3 115.81%, #090422 165.47%)',
            boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.25) inset, 0 0 20px rgba(129, 72, 237, 0.5)',
            zIndex: 20
          }}
          onClick={() => {
            const element = document.getElementById('pricing-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span 
            className="text-white font-['Cambay',Helvetica] capped-button-text"
            style={{
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '20px',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)'
            }}
          >
            Get Funded Now
          </span>

          {/* Arrow Icon Container */}
          <div 
            className="flex items-center justify-center rounded-[30px] bg-white capped-button-arrow"
            style={{
              width: '34px',
              height: '23px',
              padding: '1px 7px'
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
              style={{
                flexShrink: 0
              }}
            >
              <path 
                d="M3.33335 10L16.6667 10M16.6667 10L11.6667 15M16.6667 10L11.6667 5" 
                stroke="url(#paint0_linear_2260_3678)" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient 
                  id="paint0_linear_2260_3678" 
                  x1="36.9334" 
                  y1="9.89899" 
                  x2="30.2805" 
                  y2="25.5912" 
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#F6E6FF"/>
                  <stop offset="0.25" stopColor="#D692FF"/>
                  <stop offset="0.5" stopColor="#8148ED"/>
                  <stop offset="0.75" stopColor="#4829C3"/>
                  <stop offset="1" stopColor="#090422"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </button>
      </div>
    </section>
    </>
  );
};