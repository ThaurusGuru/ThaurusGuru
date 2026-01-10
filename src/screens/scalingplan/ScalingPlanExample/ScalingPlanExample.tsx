import React from "react";

export const ScalingPlanExample = () => {
  return (
    <section className="relative w-full flex flex-col items-center overflow-visible px-4">
      <div className="relative w-full max-w-[1440px] flex flex-col items-center px-0" style={{ marginTop: '100px' }}>
        <div className="flex flex-col items-start w-full max-w-[765px]">
          {/* Heading */}
          <h2 
            className="font-['M_PLUS_2',Helvetica]"
            style={{
              textAlign: 'left',
              width: '100%',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '50px',
              background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Example: Scaling from Different Starting Points
          </h2>

          {/* Description */}
          <p
            className="font-['M_PLUS_2',Helvetica]"
            style={{
              marginTop: '19px',
              width: '100%',
              color: '#FFF',
              textAlign: 'left',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '26px',
            }}
          >
            The table below shows how your account grows through the four levels:
          </p>

          {/* Table */}
          <div 
            className="w-full md:w-[810px] min-h-[370px] overflow-x-auto md:overflow-hidden rounded-[5px] border border-[#B988FA] mt-[36px]"
          >
            <table className="w-full h-full border-collapse">
              <thead>
                <tr style={{ height: '61.6px', borderBottom: '1px solid #34006B' }}>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px]">Starting Balance</th>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px] border-l border-[#34006B]">Level 1</th>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px] border-l border-[#34006B]">Level 2</th>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px] border-l border-[#34006B]">Level 3</th>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px] border-l border-[#34006B]">Level 4</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { start: "$5,000", l1: "$6,500", l2: "$8,450", l3: "$10,985", l4: "$15,000" },
                  { start: "$10,000", l1: "$13,000", l2: "$16,900", l3: "$21,970", l4: "$30,000" },
                  { start: "$25,000", l1: "$32,500", l2: "$42,250", l3: "$54,925", l4: "$75,000" },
                  { start: "$50,000", l1: "$65,000", l2: "$84,500", l3: "$109,850", l4: "$150,000" },
                  { start: "$100,000", l1: "$130,000", l2: "$169,000", l3: "$219,700", l4: "$300,000" },
                ].map((row, idx) => (
                  <tr key={idx} style={{ 
                    height: '61.6px', 
                    borderBottom: idx < 4 ? '1px solid #34006B' : 'none' 
                  }}>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] whitespace-nowrap">{row.start}</td>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] border-l border-[#34006B] whitespace-nowrap">{row.l1}</td>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] border-l border-[#34006B] whitespace-nowrap">{row.l2}</td>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] border-l border-[#34006B] whitespace-nowrap">{row.l3}</td>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] border-l border-[#34006B] whitespace-nowrap">{row.l4}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Growth Explanation */}
          <p
            className="font-['M_PLUS_2',Helvetica]"
            style={{
              marginTop: '35px',
              width: '100%',
              color: '#FFF',
              textAlign: 'left',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '26px',
            }}
          >
            The same percentage growth is applied at each level:
            <br />
            ×1.3 → ×1.3 → ×1.3 → ×1.365
          </p>

          {/* Requirements Summary */}
          <div className="flex flex-col items-start w-full" style={{ marginTop: '98px' }}>
            <h2 
              className="font-['M_PLUS_2',Helvetica]"
              style={{
                textAlign: 'left',
                width: '100%',
                fontSize: '32px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '50px',
                background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Requirements Summary
            </h2>

            <p
              className="font-['M_PLUS_2',Helvetica]"
              style={{
                marginTop: '20px',
                width: '100%',
                color: '#FFF',
                textAlign: 'left',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '26px',
              }}
            >
              To be eligible for a scale-up, you must meet the following:
              <br /><br />
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span> Reach the profit target set for the level
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span> Maintain required consistency in your trading performance
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white rounded-full"></span> Avoid any rule violations
              </span>
              <br />
              Once you qualify, your account is reviewed and upgraded accordingly.
            </p>
          </div>

          {/* CTA Button */}
          <div className="w-full flex justify-center md:justify-start mt-[120px] md:pl-[300px] mb-[200px]">
            <button
              style={{
                display: 'inline-flex',
                padding: '10px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                borderRadius: '10px',
                border: '1px solid #510F96',
                background: 'linear-gradient(104deg, #F6E6FF -33.17%, #D692FF 16.49%, #8148ED 66.15%, #4829C3 115.81%, #090422 165.47%)',
                boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.25) inset',
                cursor: 'pointer'
              }}
            >
              <span
                style={{
                  color: '#FFF',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.25)',
                  fontFamily: 'Cambay, Helvetica',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  lineHeight: '20px',
                }}
              >
                Start Scaling Now
              </span>
              <div
                style={{
                  display: 'flex',
                  width: '34px',
                  height: '23px',
                  padding: '1px 7px',
                  marginLeft: '10px',
                  alignItems: 'center',
                  gap: '10px',
                  borderRadius: '30px',
                  background: '#FFF',
                }}
              >
                <div style={{ width: '20px', height: '20px', flexShrink: 0, aspectRatio: '1/1' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.33464 10L16.668 10M16.668 10L11.668 15M16.668 10L11.668 5" stroke="url(#paint0_linear_1682_2509)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear_1682_2509" x1="36.9346" y1="9.89899" x2="30.2818" y2="25.5912" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#F6E6FF"/>
                        <stop offset="0.25" stopColor="#D692FF"/>
                        <stop offset="0.5" stopColor="#8148ED"/>
                        <stop offset="0.75" stopColor="#4829C3"/>
                        <stop offset="1" stopColor="#090422"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

