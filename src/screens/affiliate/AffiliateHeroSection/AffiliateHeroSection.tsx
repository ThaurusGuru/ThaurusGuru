export const AffiliateHeroSection = () => {
  const tierData = [
    {
      tier: "Tier 1",
      reach: "0-99 users",
      commission: "12.5%",
    },
    {
      tier: "Tier 2",
      reach: "100-299 users",
      commission: "13.5%",
    },
    {
      tier: "Tier 3",
      reach: "300+ users",
      commission: "15%",
    },
  ];

  // Mock data for the remaining 8 sections
  const mockSections = [
    { label: "Payout Frequency", value: "Monthly" },
    { label: "Cookie Duration", value: "90 Days" },
    { label: "Marketing Support", value: "Available" },
    { label: "Dedicated Manager", value: "Yes" },
    { label: "Tracking Dashboard", value: "Real-time" },
    { label: "Payment Methods", value: "Multiple" },
    { label: "Minimum Payout", value: "$100" },
    { label: "Bonus Incentives", value: "Included" },
  ];

  return (
    <section className="relative w-full min-h-screen pb-20 px-7">
      {/* Background Image - Top Center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto pointer-events-none z-0">
        <img
          src="/Affiliate/Hero/Bg1.png"
          alt="Affiliate Background"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Hero Image - 220px from top */}
      <div className="absolute top-[180px] left-1/2 -translate-x-1/2 w-full h-auto pointer-events-none z-0">
        <img
          src="/Affiliate/Hero/Hero section.svg"
          alt="Affiliate Hero"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content - 220px from top, above hero image */}
      <div className="relative top-[220px] left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        {/* Heading */}
        <h1 
          className="text-white text-center font-normal"
          style={{
            width: '729px',
            fontFamily: '"M PLUS 2", Helvetica',
            fontSize: '42px',
            lineHeight: '60px',
          }}
        >
          Earn up to 15% Commission as a Thaurus Guru Affiliate
        </h1>

        {/* Description - 32px spacing */}
        <p 
          className="text-center font-normal mt-10"
          style={{
            width: '696px',
            color: '#C293F1',
            fontFamily: 'Cambay, Helvetica',
            fontSize: '14px',
            lineHeight: 'normal',
          }}
        >
          Partner with a top-tier prop trading education platform with real tools, advanced tracking, and strong support.
        </p>

        {/* Button - 32px spacing */}
        <button 
          className="flex items-center justify-center gap-[10px] mt-10 hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300"
          style={{
            width: '136px',
            height: '50px',
            padding: '4px 28px 4px 30px',
            borderRadius: '10px',
            border: '1px solid #510F96',
            background: 'linear-gradient(104deg, #F6E6FF -33.17%, #D692FF 16.49%, #8148ED 66.15%, #4829C3 115.81%, #090422 165.47%)',
            boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.25) inset',
          }}
        >
          <span 
            className="font-bold"
            style={{
              color: '#FFF',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
              fontFamily: 'Cambay, Helvetica',
              fontSize: '16px',
              lineHeight: '20px',
            }}
          >
            Apply
          </span>
          
          {/* White circle with arrow */}
          <div 
            className="flex items-center flex-shrink-0"
            style={{
              width: '34px',
              height: '23px',
              padding: '1px 7px',
              borderRadius: '30px',
              background: '#FFF',
            }}
          >
            <img 
              src="/Affiliate/Hero/solar_arrow-up-linear.svg" 
              alt="Arrow"
              className="w-auto h-auto"
            />
          </div>
        </button>

        {/* Our Tiers Heading - 110px spacing */}
        <h2 
          className="text-center font-normal"
          style={{
            marginTop: '110px',
            fontFamily: '"M PLUS 2", Helvetica',
            fontSize: '42px',
            lineHeight: '60px',
            background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Our Tiers
        </h2>

        {/* Tier Cards - 91px spacing */}
        <div className="flex gap-7 mt-[91px] mb-20">
          {tierData.map((data, index) => (
            <div 
              key={index}
              className="relative"
              style={{
                width: '368px',
                height: '840px',
                borderRadius: '20px',
                border: '1px dashed #B988FA',
                background: 'linear-gradient(180deg, rgba(96, 40, 158, 0.40) 0%, rgba(29, 10, 50, 0.40) 25%, rgba(27, 9, 46, 0.40) 50%, rgba(30, 8, 53, 0.40) 75%, rgba(51, 9, 97, 0.40) 100%)',
              }}
            >
              {/* Tier Badge - Positioned at top center, half outside */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center"
                style={{
                  top: '-24px',
                  width: '171.733px',
                  height: '48px',
                  padding: '9px 39px',
                  borderRadius: '28px',
                  border: '1px solid #B988FA',
                  background: '#411372',
                }}
              >
                <span
                  style={{
                    color: '#B988FA',
                    fontFamily: 'Poppins',
                    fontSize: '22px',
                    fontWeight: '500',
                    lineHeight: 'normal',
                  }}
                >
                  {data.tier}
                </span>
              </div>

              {/* Card Content */}
              <div className="flex flex-col items-center pt-[49px]">
                {/* Reach Section */}
                <div>
                  <p
                    style={{
                      color: '#B988FA',
                      textAlign: 'center',
                      fontFamily: 'Poppins',
                      fontSize: '12px',
                      fontWeight: '400',
                      lineHeight: 'normal',
                    }}
                  >
                    Reach
                  </p>

                  <p
                    className="mt-[5px]"
                    style={{
                      color: '#FFF',
                      fontFamily: 'Poppins',
                      fontSize: '22px',
                      fontWeight: '500',
                      lineHeight: 'normal',
                    }}
                  >
                    {data.reach}
                  </p>
                </div>

                {/* Commission Section */}
                <div className="mt-[25px]">
                  <p
                    style={{
                      color: '#B988FA',
                      textAlign: 'center',
                      fontFamily: 'Poppins',
                      fontSize: '12px',
                      fontWeight: '400',
                      lineHeight: 'normal',
                    }}
                  >
                    Commission
                  </p>

                  <p
                    className="mt-[5px]"
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: 'Poppins',
                      fontSize: '22px',
                      fontWeight: '500',
                      lineHeight: 'normal',
                    }}
                  >
                    {data.commission}
                  </p>
                </div>

                {/* 8 Mock Sections */}
                {mockSections.map((section, idx) => (
                  <div key={idx} className="mt-[25px]">
                    <p
                      style={{
                        color: '#B988FA',
                        textAlign: 'center',
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        fontWeight: '400',
                        lineHeight: 'normal',
                      }}
                    >
                      {section.label}
                    </p>

                    <p
                      className="mt-[5px]"
                      style={{
                        color: '#FFF',
                        textAlign: 'center',
                        fontFamily: 'Poppins',
                        fontSize: '22px',
                        fontWeight: '500',
                        lineHeight: 'normal',
                      }}
                    >
                      {section.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};