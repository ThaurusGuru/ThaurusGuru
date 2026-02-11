const payoutData = [
  { name: "Tunde Balogun", amount: "3,217.60", date: "04.12.2025", country: "NG" },
  { name: "Angelina Kruglenko", amount: "1,112.00", date: "30.10.2025", country: "UA" },
  { name: "Sade Adeniyi", amount: "608.83", date: "13.11.2025", country: "NG" },
  { name: "Arjun Malhotra", amount: "307.20", date: "17.12.2025", country: "IN" },
  { name: "Daria Kerchanova", amount: "3,012.78", date: "13.11.2025", country: "UA" },
  { name: "Zdenek Samoroc", amount: "402.40", date: "30.10.2025", country: "CZ" },
  { name: "Sadiq Abubakar", amount: "1,164.80", date: "17.12.2025", country: "NG" },
  { name: "FUNDEAD FX", amount: "16,508.00", date: "09.10.2025", country: "US" },
  { name: "Chikamso Nwaneri", amount: "1,880.00", date: "02.12.2025", country: "NG" },
  { name: "Oleksandr Shevchenko", amount: "2,728.00", date: "10.11.2025", country: "UA" },
  { name: "Olamide Adetayo", amount: "832.00", date: "09.01.2026", country: "NG" },
  { name: "Aisha Verma", amount: "153.60", date: "08.01.2026", country: "IN" },
  { name: "Diya Gupta", amount: "2,150.40", date: "12.01.2026", country: "IN" },
  { name: "Ishaan Iyer", amount: "4,268.80", date: "12.01.2026", country: "IN" },
  { name: "Femi Bankole", amount: "4,211.20", date: "12.01.2026", country: "NG" },
];

export const RewardSection = () => {
  const cards = [
    {
      title: "RAPID REWARDS",
      content: "In trading, timing is everything, and we believe the same applies to your rewards. At ThaurusGuru, we don't just \"pay quickly\"—we have engineered a financial infrastructure that respects your time. Provided that your trading activity remains in full compliance with our guidelines and no violations are detected, your performance-based rewards are processed within a 48-hour window. Whether you choose to withdraw via Crypto or Direct Bank Transfer, our priority is to get your success into your hands as fast as humanly possible.",
      image: "/reward/rapid.png"
    },
    {
      title: "TRADING CO-PILOT",
      content: "The markets don't sleep, and neither do we. Whether you are navigating a late-night session in New York or catching the early Tokyo open, our expert support team is active 24 hours a day, 7 days a week. Get real-time assistance via Discord or Live Chat whenever you need it.",
      image: "/reward/pilot.png"
    },
    {
      title: "PROFESSIONAL ENVIRONMENT",
      content: "Our partnership with Thaurus LTD is about providing you with a professional, simulated environment that you can actually trust. Every rule, every payout method, and every scaling step is clearly defined. No hidden clauses, no \"fine print\" traps. Just a clear path from your first trade to a professional career, backed by a firm that values transparency in every interaction.",
      image: "/reward/pro.png"
    }
  ];

  return (
    <section 
      id="reward" 
      className="relative w-full pb-[100px] overflow-hidden bg-[#1b082e]"
      style={{
        backgroundImage: 'url(/How-it-wors-bg.png)',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col items-center relative z-10">
        {/* The ThaurusGuru Foundation */}
        <h2 className="mt-[125px] text-center font-['M_PLUS_2'] text-[42px] font-normal leading-[60px] bg-linear-to-b from-white to-[#E9B1FF] bg-clip-text text-transparent">
          The ThaurusGuru Foundation
        </h2>
        
        {/* Integrity Without Compromise */}
        <h3 className="mt-[15px] text-center text-white font-['Poppins'] text-[26px] font-normal leading-[60px]">
          Integrity Without Compromise
        </h3>
        
        {/* Description */}
        <p className="mt-[5px] w-full max-w-[1009px] text-center text-white font-['Poppins'] text-[16px] font-normal leading-[26px]">
          In an industry full of promises, we choose to lead with actions. ThaurusGuru was built on a simple premise: your success is our primary asset. We’ve removed the friction from the process so you can focus on the charts while we handle the rest.
        </p>
        
        {/* Card(s) Container */}
        <div className="mt-[90px] w-full flex flex-col items-center gap-[30px]">
          {cards.map((card, index) => (
            <div key={index} className="w-full max-w-[1200px] rounded-[15px] border border-[#7D00FF] bg-[#7a27ef]/10 flex flex-col lg:flex-row items-center justify-between p-8 gap-6">
               {/* Text Content */}
               <div className="flex-1 flex flex-col">
                 <h4 className="text-left text-white font-['Poppins'] text-[22px] font-normal leading-[26px] uppercase">
                   {card.title}
                 </h4>
                 <div className="mt-[19px] text-justify text-white font-['Poppins'] text-[16px] font-normal leading-[26px]">
                   {card.content}
                 </div>
               </div>
               
               {/* Image */}
               <div className="shrink-0 ml-8 w-[250px] h-[250px] flex items-center justify-center">
                 <img 
                   src={card.image} 
                   alt={card.title}
                   className="object-contain"
                   style={{
                     width: index === 0 ? '208.273px' : index === 1 ? '155px' : '200px',
                     height: index === 0 ? '227px' : index === 1 ? '153.838px' : '200px'
                   }}
                 />
               </div>
            </div>
          ))}
        </div>

        {/* Featured Payouts Section */}
        <div className="w-full max-w-[1200px] mt-[61px] flex flex-col items-start px-0 lg:px-4">
          <h2 className="text-white font-['Poppins'] text-[22px] font-medium leading-normal">
            Featured Payouts
          </h2>
          
          <div className="mt-[24px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
            {payoutData.map((payout, i) => (
              <div 
                key={i} 
                className="flex items-center justify-between p-4 rounded-[14px] overflow-hidden"
                style={{
                  background: 'rgba(27, 9, 46, 0.6)',
                  boxShadow: '10px 10px 16px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.40), inset 1px 0 0 rgba(255, 255, 255, 0.32), inset 0 -1px 1px rgba(0, 0, 0, 0.13), inset -1px 0 1px rgba(0, 0, 0, 0.11)',
                  backdropFilter: 'blur(2.0px) brightness(110%)',
                  WebkitBackdropFilter: 'blur(2.0px) brightness(110%)',
                }}
              >
                <div className="flex flex-col">
                  <span className="text-[#cfa8ff] font-['Blinker'] text-[13px] font-semibold mb-1 uppercase tracking-wider">
                    {payout.name} <span className="text-[#b982fb] text-[10px] opacity-80">{payout.country}</span>
                  </span>
                  <div className="text-white font-['Poppins'] text-[16px] font-medium leading-tight whitespace-nowrap">
                    <span className="opacity-70 font-normal">Just got paid</span>
                    <span className="text-white font-bold text-[18px] ml-1.5">${payout.amount}</span>
                  </div>
                </div>
                <div className="w-[105px] h-[68px] rounded-[6px] overflow-hidden shadow-lg">
                  <img 
                    src={`/payouts/payouts/payout-${(i % 23) + 1}.png`} 
                    alt="Certificate" 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
