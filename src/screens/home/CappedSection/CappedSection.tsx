export const CappedSection = () => {
  // The funding digits - can be made dynamic later
  const fundingDigits = ['7', '3', '1', '0', '0', '0'];

  return (
    <section 
      className="relative w-full py-20 px-4 flex justify-center items-center"
      style={{
        backgroundImage: 'url(/comparisontable/upper-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          Capped
        </p>

        {/* $30 Million */}
        <h2 
          className="text-white text-center font-['Poppins',Helvetica] mt-[22px]"
          style={{
            fontSize: '48px',
            fontWeight: 500,
            lineHeight: '46px'
          }}
        >
          $30 Million
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

            {/* Digit Boxes */}
            {fundingDigits.map((digit, index) => (
              <div
                key={index}
                className="flex flex-col justify-end items-center border border-[#E9B1FF]"
                style={{
                  width: '48px',
                  height: '76px',
                  padding: '16px 13px',
                  gap: '10px',
                  background: 'rgba(65, 19, 114, 0.30)'
                }}
              >
                <span 
                  className="text-white text-center font-['Cambay',Helvetica]"
                  style={{
                    fontSize: '48px',
                    fontWeight: 400,
                    lineHeight: '36px'
                  }}
                >
                  {digit}
                </span>
              </div>
            ))}
          </div>

          {/* Bottom Badges */}
          <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
            {/* Live funding updates */}
            <div 
              className="flex justify-center items-center rounded-[30px]"
              style={{
                padding: '6px 14px',
                gap: '10px',
                background: 'linear-gradient(90deg, rgba(45, 9, 83, 0.20) 0%, rgba(168, 90, 249, 0.20) 100%)'
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
                Live funding updates
              </span>
            </div>

            {/* Remaining amount */}
            <div 
              className="flex justify-center items-center rounded-[30px]"
              style={{
                padding: '6px 14px',
                gap: '10px',
                background: 'linear-gradient(90deg, rgba(45, 9, 83, 0.20) 0%, rgba(168, 90, 249, 0.20) 100%)'
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
                $2.69M remaining
              </span>
            </div>
          </div>
        </div>

        {/* Get Funded Now Button */}
        <button 
          className="inline-flex justify-center items-center rounded-[10px] border border-[#510F96] mt-[24px] hover:opacity-90 transition-opacity"
          style={{
            padding: '10px 20px',
            gap: '10px',
            background: 'linear-gradient(104deg, #F6E6FF -33.17%, #D692FF 16.49%, #8148ED 66.15%, #4829C3 115.81%, #090422 165.47%)',
            boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.25) inset'
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
