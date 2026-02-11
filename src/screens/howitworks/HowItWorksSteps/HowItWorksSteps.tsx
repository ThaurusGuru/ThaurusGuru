export const HowItWorksSteps = () => {
  const step2Cards = [
    {
      title: "FUNDED ACCOUNT",
      description: "You can now trading on a professional demo account with virtual funds. Access your trading platform. Thaurus LTD, ensuring a premium trading experience."
    },
    {
      title: "COLLECT YOUR REWARDS",
      description: "Your consistency deserves the best return. After the initial testing phase and profit share of up to 80%, of your success, we share it weekly."
    },
    {
      title: "CRYPTO & BANK TRANSFERS",
      description: "Our partnership is built on transparency and security. When you succeed, we celebrate the rewards, choose your preferred method - Crypto or Bank Transfer. It's fast and reliable processing."
    },
    {
      title: "START YOUR NEXT PHASE",
      description: "You've made it! Because your trading works, you can proceed forwards. Now it's the time to monetize your trading skills and start your career with the ThaurusGuru community."
    }
  ];

  const step3Cards = [
    {
      title: "SHOW THE WORLD",
      description: "Win the respect of the elite. You reached the finish line. You didn't quit us, and your journey is just beginning. You can now take your talents. Show your support to our community and share your profits on social media and let the achievements sweetens your victory."
    },
    {
      title: "TRUSTPILOT REVIEWS",
      description: "No inflated ego goes. Your seamless help us grow and build a better environment for everyone. After receiving your payout, tell us about your path with ThaurusGuru. We can't wait to hear your story."
    },
    {
      title: "SCALE UP TO $300,000",
      description: "Your journey doesn't stop at the first million. Stay disciplined our scaling program allows you to unlock accounts up to $300,000. It's time to set opportunity to boost your potential and reach new heights if you keep up speed."
    },
    {
      title: "INVITE & EARN",
      description: "Sharing a better way makes both you friends to use the ThaurusGuru completely and we are 100% confident you have no trouble using the way."
    }
  ];

  return (
    <div className="relative w-full pb-20 px-4 sm:px-6 lg:px-8 mt-[101px]">
      <div className="max-w-[1148px] mx-auto">
        {/* Step 2 Section */}
        <div className="mb-20">
          {/* Step 2 Title */}
          <h2 
            className="text-center md:text-left font-['M_PLUS_2'] text-[42px] font-normal leading-[60px]"
            style={{
              background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Step 2: Funded Account
          </h2>

          {/* Step 2 Description */}
          <p className="text-white font-['M_PLUS_2'] text-[16px] font-normal leading-[26px] text-center md:text-left max-w-[1148px] mt-[35px]">
            Achieving your goals opens the door to a professional partnership. Once you pass the evaluation, you gain access to your Funded Account within a professional simulated environment.
          </p>

          {/* Step 2 Cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-[55px] mt-[60px] pt-[35px]">
            {step2Cards.map((card, index) => (
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
                      src={`/How-it-works/icons/funded account/icon-${index + 1}.svg`}
                      alt={card.title} 
                      className="w-[28px] h-[28px] aspect-square"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-center font-['M_PLUS_2'] text-[16px] font-normal leading-[26px]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-white text-center font-['M_PLUS_2'] text-[12px] font-normal leading-[22px] mt-[14px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3 Section */}
        <div>
          {/* Step 3 Title */}
          <h2 
            className="text-center md:text-left font-['M_PLUS_2'] text-[42px] font-normal leading-[60px]"
            style={{
              background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Step 3: Join the Elite
          </h2>

          {/* Step 3 Description */}
          <p className="text-white font-['M_PLUS_2'] text-[16px] font-normal leading-[26px] text-center md:text-left max-w-[1148px] mt-[35px]">
            You've achieved what only a few can. Now, it's time to showcase your talent, inspire others, and maximize your potential with ThaurusGuru.
          </p>

          {/* Step 3 Cards */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-[55px] mt-[60px] pt-[35px]">
            {step3Cards.map((card, index) => (
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
                      src={`/How-it-works/icons/Join the elite/icon-${index + 1}.svg`}
                      alt={card.title} 
                      className="w-[28px] h-[28px] aspect-square"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-center font-['M_PLUS_2'] text-[16px] font-normal leading-[26px]">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-white text-center font-['M_PLUS_2'] text-[12px] font-normal leading-[22px] mt-[14px]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
