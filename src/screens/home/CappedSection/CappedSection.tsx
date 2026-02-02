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
      className="flex flex-col justify-center items-center border border-[#E9B1FF] overflow-hidden"
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
        className="text-white text-center font-['Cambay',Helvetica]"
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
  const MONTHLY_TARGET = CAP_AMOUNT - START_AMOUNT; // Amount to add over a month
  const INCREMENT_PER_SECOND = MONTHLY_TARGET / (30 * 24 * 60 * 60); // ~18.52 per second

  // FIXED LAUNCH DATE - Set this to when you want the counter to start
  // Example: February 3, 2026 at 00:00:00 UTC
  const LAUNCH_DATE = new Date('2026-02-03T00:00:00Z').getTime();

  // Calculate current funding based on fixed launch date
  const calculateCurrentFunding = (): number => {
    const now = Date.now();
    const elapsedSeconds = Math.max(0, (now - LAUNCH_DATE) / 1000);
    const calculatedAmount = START_AMOUNT + (elapsedSeconds * INCREMENT_PER_SECOND);
    return Math.min(calculatedAmount, CAP_AMOUNT);
  };

  const [fundingAmount, setFundingAmount] = useState(START_AMOUNT);

  useEffect(() => {
    // Initialize with current calculated amount
    setFundingAmount(calculateCurrentFunding());

    // Update counter every second
    const interval = setInterval(() => {
      setFundingAmount(prev => {
        const currentAmount = calculateCurrentFunding();
        if (currentAmount >= CAP_AMOUNT) return CAP_AMOUNT;

        // Add some randomness to make it feel more organic
        const randomMultiplier = 0.8 + Math.random() * 0.4; // Smaller variance for smoother look
        const increment = INCREMENT_PER_SECOND * randomMultiplier;
        const newAmount = Math.min(prev + increment, CAP_AMOUNT);

        return newAmount;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
// Format number to 7 digits (for $2M-$50M range)
const formatToDigits = (num: number): string[] => {
  const rounded = Math.floor(num);
  const str = rounded.toString().padStart(7, '0');  // Changed from 8 to 7
  return str.split('');
};

  const fundingDigits = formatToDigits(fundingAmount);
  const remainingAmount = CAP_AMOUNT - fundingAmount;

  // Format remaining as $X.XXM
  const formatRemaining = (amount: number): string => {
    if (amount <= 0) return '$0 remaining';
    const millions = amount / 1_000_000;
    return `$${millions.toFixed(2)}M remaining`;
  };

  return (
    <section 
      className="relative w-full py-20 px-4 flex justify-center items-center min-h-screen"
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
          className="text-white text-center font-['Poppins',Helvetica]"
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
          className="text-white text-center font-['Poppins',Helvetica] mt-[22px]"
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
          className="text-white text-center font-['Poppins',Helvetica] mt-[12px]"
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
          className="relative w-full max-w-[898px] h-[332px] rounded-[20px] mt-[72px] flex flex-col items-center"
          style={{
            background: 'linear-gradient(180deg, rgba(96, 40, 158, 0.40) 0%, rgba(29, 10, 50, 0.40) 25%, rgba(27, 9, 46, 0.40) 50%, rgba(30, 8, 53, 0.40) 75%, rgba(51, 9, 97, 0.40) 100%)'
          }}
        >
          {/* Amount funded text */}
          <p 
            className="text-[#E9B1FF] text-center font-['Poppins',Helvetica] mt-[72px]"
            style={{
              fontSize: '28px',
              fontWeight: 400,
              lineHeight: 'normal'
            }}
          >
            Amount funded based on our data
          </p>

          {/* Funding Amount Display */}
          <div className="flex items-center gap-2 mt-[16px]">
            {/* Dollar Sign */}
            <span 
              className="text-white text-center font-['Poppins',Helvetica]"
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
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
            {/* Live funding updates */}
            <div 
              className="rounded-[30px] p-[2px]"
              style={{
                background: 'linear-gradient(90deg, rgba(233, 177, 255, 0.5) 0%, rgba(129, 72, 237, 0.5) 100%)'
              }}
            >
              <div 
                className="flex justify-center items-center rounded-[28px]"
                style={{
                  padding: '6px 14px',
                  gap: '10px',
                  background: 'rgba(27, 9, 46, 0.95)'
                }}
              >
                {/* Pulsing live dot */}
                <span
                  className="relative flex h-3 w-3 mr-2"
                >
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                  />
                  <span
                    className="relative inline-flex rounded-full h-3 w-3 bg-green-500"
                  />
                </span>
                <span
                  className="text-white text-center font-['Poppins',Helvetica]"
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
              className="rounded-[30px] p-[2px]"
              style={{
                background: 'linear-gradient(90deg, rgba(233, 177, 255, 0.5) 0%, rgba(129, 72, 237, 0.5) 100%)'
              }}
            >
              <div 
                className="flex justify-center items-center rounded-[28px]"
                style={{
                  padding: '6px 14px',
                  gap: '10px',
                  background: 'rgba(27, 9, 46, 0.95)'
                }}
              >
                <span
                  className="text-white text-center font-['Poppins',Helvetica]"
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
          className="inline-flex justify-center items-center rounded-[10px] border border-[#510F96] mt-[24px] transition-transform hover:scale-105 relative"
          style={{
            padding: '10px 20px',
            gap: '10px',
            background: 'linear-gradient(104deg, #F6E6FF -33.17%, #D692FF 16.49%, #8148ED 66.15%, #4829C3 115.81%, #090422 165.47%)',
            boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.25) inset, 0 0 20px rgba(129, 72, 237, 0.5)',
            zIndex: 20
          }}
          onClick={() => window.open('https://my.thaurusguru.com/promotion/challenge', '_blank')}
        >
          <span 
            className="text-white font-['Cambay',Helvetica]"
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
            className="flex items-center justify-center rounded-[30px] bg-white"
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
                transform: 'rotate(90deg)',
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
  );
};