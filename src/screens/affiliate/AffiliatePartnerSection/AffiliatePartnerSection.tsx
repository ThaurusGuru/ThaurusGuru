// src/screens/affiliate/AffiliatePartnerSection.tsx
export const AffiliatePartnerSection = () => {
  const partnerCards = [
    {
      icon: "/Affiliate/partner/mage_money-exchange.svg",
      title: "Earn While You Refer",
      description: "Get paid for every first purchase.",
    },
    {
      icon: "/Affiliate/partner/image 1.svg",
      title: "Give More, Convert More",
      description: "Your referrals get a first-purchase discount.",
    },
    {
      icon: "/Affiliate/partner/img-2.svg",
      title: "See Results Instantly",
      description: "Track clicks, sales, and payouts in real time.",
    },
    {
      icon: "/Affiliate/partner/img-3.svg",
      title: "Share. Scale. Earn.",
      description: "Promote anywhere with your unique link.",
    },
  ];

  return (
    <>
      <style>{`
        @media (max-width: 568px) {
          .partner-heading-mobile {
            width: 239px !important;
            text-align: center !important;
            font-family: "M PLUS 2" !important;
            font-size: 24px !important;
            font-weight: 400 !important;
            line-height: 35px !important;
          }
          
          .partner-cards-mobile {
            flex-direction: column !important;
            align-items: center !important;
            padding-left: 28px !important;
            padding-right: 28px !important;
          }

          .partner-card-mobile {
            width: 100% !important;
            max-width: 320px !important;
            height: 200px !important;
            padding: 30px 20px !important;
          }

          .partner-icon-mobile {
            width: 60px !important;
            height: 60px !important;
          }

          .partner-icon-inner-mobile {
            width: 54px !important;
            height: 54px !important;
            padding: 15px !important;
            border-radius: 27px !important;
          }

          .partner-title-mobile {
            font-size: 13px !important;
            margin-top: 16px !important;
          }

          .partner-description-mobile {
            width: 120px !important;
            font-size: 11px !important;
            line-height: 14px !important;
            margin-top: 10px !important;
          }

          .partner-section-mobile {
            padding-left: 28px !important;
            padding-right: 28px !important;
            margin-top: 100px !important;
          }

          .partner-cards-spacing-mobile {
            margin-top: 60px !important;
            gap: 20px !important;
          }
        }
      `}</style>
      
      <section className="partner-section-mobile relative w-full px-7 mt-[156px]">
        {/* Heading */}
        <h2 
          className="partner-heading-mobile text-center font-normal mx-auto"
          style={{
            fontFamily: '"M PLUS 2"',
            fontSize: '42px',
            fontWeight: '400',
            lineHeight: '60px',
            background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Become Thaurus Guru's Partner
        </h2>

      {/* Cards - 91px spacing */}
      <div className="partner-cards-mobile partner-cards-spacing-mobile flex justify-center gap-[25px] mt-[91px]">
        {partnerCards.map((card, index) => (
          <div
            key={index}
            className="partner-card-mobile flex flex-col items-center"
            style={{
              width: '270px',
              height: '242px',
              paddingTop: '43px',
              borderRadius: '20px',
              border: '1px solid #E9B1FF',
              background: 'linear-gradient(180deg, rgba(35, 11, 62, 0.20) 0%, rgba(93, 29, 164, 0.20) 100%)',
            }}
          >
            {/* Icon Circle */}
            <div
              className="partner-icon-mobile flex items-center justify-center"
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '37px',
                border: '0.6px solid #B988FA',
              }}
            >
              <div
                className="partner-icon-inner-mobile"
                style={{
                  display: 'flex',
                  width: '66px',
                  height: '66px',
                  padding: '18px',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '33px',
                  border: '1px solid #B988FA',
                  background: '#1B092E',
                }}
              >
                <img 
                  src={card.icon} 
                  alt={card.title}
                  className="w-auto h-auto"
                />
              </div>
            </div>

            {/* Title - 20px spacing */}
            <p
              className="partner-title-mobile mt-[20px]"
              style={{
                color: '#FFF',
                fontFamily: '"M PLUS 2"',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: 'normal',
                textAlign: 'center',
              }}
            >
              {card.title}
            </p>

            {/* Description - 12px spacing */}
            <p
              className="partner-description-mobile mt-[12px]"
              style={{
                width: '130px',
                color: '#B988FA',
                textAlign: 'center',
                fontFamily: 'Cambay',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '16px',
              }}
            >
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};