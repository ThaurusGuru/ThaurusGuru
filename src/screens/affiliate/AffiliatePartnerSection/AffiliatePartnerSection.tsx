// src/screens/affiliate/AffiliatePartnerSection.tsx
export const AffiliatePartnerSection = () => {
  const partnerCards = [
    {
      icon: "/Affiliate/partner/mage_money-exchange.svg",
      title: "Earn While You Refer",
      description: "Get paid for every first purchase.",
    },
    {
      icon: "/Affiliate/partner/mage_money-exchange.svg",
      title: "Real-Time Tracking",
      description: "Monitor your earnings instantly.",
    },
    {
      icon: "/Affiliate/partner/mage_money-exchange.svg",
      title: "Marketing Materials",
      description: "Access professional resources.",
    },
    {
      icon: "/Affiliate/partner/mage_money-exchange.svg",
      title: "Dedicated Support",
      description: "Get help whenever you need.",
    },
  ];

  return (
    <section className="relative w-full px-7 mt-[156px]">
      {/* Heading */}
      <h2 
        className="text-center font-normal"
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
      <div className="flex justify-center gap-[25px] mt-[91px]">
        {partnerCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center pt-[43px]"
            style={{
              width: '270px',
              height: '242px',
              borderRadius: '20px',
              border: '1px solid #E9B1FF',
              background: 'linear-gradient(180deg, rgba(35, 11, 62, 0.20) 0%, rgba(93, 29, 164, 0.20) 100%)',
            }}
          >
            {/* Icon Circle */}
            <div
              className="flex items-center justify-center"
              style={{
                width: '72px',
                height: '72px',
                padding: '16px 21px',
                borderRadius: '37px',
                border: '0.6px solid #B988FA',
              }}
            >
              <img 
                src={card.icon} 
                alt={card.title}
                className="w-auto h-auto"
              />
            </div>

            {/* Title - 20px spacing */}
            <p
              className="mt-[20px]"
              style={{
                color: '#FFF',
                fontFamily: '"M PLUS 2"',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: 'normal',
              }}
            >
              {card.title}
            </p>

            {/* Description - 12px spacing */}
            <p
              className="mt-[12px]"
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
  );
};