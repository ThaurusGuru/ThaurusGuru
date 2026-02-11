export const HowItWorksHero = () => {
  const processSteps = [
    {
      title: "CHOOSE YOUR STARTING POINT",
      subtitle: "Find the account that fits you.",
      description: "Whether you are just beginning or already have experience, pick the account size that feels right for your goals. We offer a variety of options to ensure everyone can find their perfect match."
    },
    {
      title: "SIMPLE ACTIVATION",
      subtitle: "Multiple ways to get started.",
      description: "Secure your spot quickly using our trusted payment methods. We support Coinflow (Crypto), Revolut, Credit Card, and Bank Transfer. Choose what works best for you and get instant access to your trading dashboard."
    },
    {
      title: "PROVE YOUR POTENTIAL",
      subtitle: "Show us your strategy.",
      description: "This is your time to shine. Trade with our simulated capital, following the risk guidelines, and hit the profit targets to pass the challenge. It's your chance to demonstrate that you're ready for the next level."
    },
    {
      title: "GET FUNDED & CELEBRATE",
      subtitle: "Welcome to the ThaurusGuru family.",
      description: "You did it! Receive your official certificate and get access to your Funded Account. Trade in a professional environment and start earning rewards based on your performance. Your success is our success."
    }
  ];

  return (
    <div 
      className="relative w-full pt-[100px] pb-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'url(/How-it-wors-bg.png)',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Right Side Background Effect */}
      <img 
        src="/calculator-section/bg-effectt.png"
        alt=""
        className="absolute top-1/2 -translate-y-1/2 w-[500px] lg:w-[700px] h-auto pointer-events-none opacity-50 hidden md:block"
        style={{ right: 0 }}
      />
      
      <div className="max-w-[1148px] mx-auto relative z-10">
        {/* Hero Title */}
        <div className="relative overflow-visible">
          <h1 
            className="text-center md:text-left font-['M_PLUS_2'] text-[42px] font-normal leading-[60px] mt-[150px]"
            style={{
              background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            How it Works
          </h1>
          
          {/* Decorative Question Mark */}
          <div
            className="absolute pointer-events-none select-none -right-[40px] text-center font-bold text-[250px] leading-[280px] -top-[120px] w-[150px] h-[280px] md:right-0 md:text-[400px] md:leading-[420px] md:-top-[100px] md:w-[220px] md:h-[420px] lg:text-[548px] lg:leading-[550px] lg:-top-[130px] lg:w-[296px] lg:h-[550px]"
            style={{
              background: 'linear-gradient(180deg, rgba(171, 102, 255, 0.6) 0%, rgba(122, 39, 239, 0.4) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Cambay',
              mixBlendMode: 'overlay',
              opacity: 0.8
            }}
          >
            ?
          </div>
        </div>

        {/* Phase Description */}
        <p className="text-white font-['M_PLUS_2'] text-[16px] font-normal leading-[26px] text-center md:text-left max-w-[1148px] mt-[35px]">
          Phase Description: The ThaurusGuru Challenge is your gateway to the world of professional finance. We believe that everyone deserves a chance to trade with significant capital. No matter your background, show us your approach and unlock the door to becoming a Funded Trader.
        </p>

        {/* Process Steps Title */}
        <h2 
          className="text-center md:text-left font-['M_PLUS_2'] text-[42px] font-normal leading-[60px] mt-[69px]"
          style={{
            background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Process Steps
        </h2>

        {/* Process Steps Cards */}
        <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-[55px] mt-[60px] pt-[35px]">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="w-[272px] h-[336px] p-[35px_30px] flex flex-col items-center rounded-[20px] border border-[#E9B1FF] relative"
              style={{
                background: 'linear-gradient(180deg, rgba(35, 11, 62, 0.20) 0%, rgba(93, 29, 164, 0.20) 100%)'
              }}
            >
              {/* Arrow Icon at Top Center */}
              <div className="absolute -top-[30px] left-1/2 -translate-x-1/2">
                <div 
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: 'rgba(21, 2, 40, 0.50)',
                    border: '1px solid #E9B1FF',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
                  }}
                >
                  <img 
                    src={`/How-it-works/icons/process steps/icon-${index + 1}.svg`}
                    alt={step.title} 
                    className="w-[28px] h-[28px] aspect-square"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white text-center font-['M_PLUS_2'] text-[16px] font-normal leading-[26px]">
                {step.title}
              </h3>

              {/* Subtitle */}
              <p className="text-white font-['M_PLUS_2'] text-[14px] font-medium leading-[26px] text-center mt-[14px]">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-white text-center font-['M_PLUS_2'] text-[12px] font-normal leading-[22px] mt-[14px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Empowering Section Title */}
        <h2 
          className="text-center md:text-left font-['M_PLUS_2'] text-[42px] font-normal leading-[60px] mt-[89px]"
          style={{
            background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Empowering Your Trading Ambitions
        </h2>

        {/* Empowering Description */}
        <div className="max-w-[1148px] mt-[35px] text-white font-['M_PLUS_2'] text-[16px] leading-[26px] space-y-4 text-center md:text-left">
          <p className="font-bold">
            We believe that financial barriers shouldn't stop a great strategy. ThaurusGuru provides a professional ecosystem where your skills are the only currency that matters.
          </p>
          <p className="font-normal">
            <span className="font-bold">Our Approach:</span> You trade in a risk-free, professional simulation. We observe your discipline and consistency. When you succeed, you earn rewards that reflect your performance. It's a transparent, performance-driven partnership designed to help you scale without personal financial risk.
          </p>
        </div>
      </div>
    </div>
  );
};
