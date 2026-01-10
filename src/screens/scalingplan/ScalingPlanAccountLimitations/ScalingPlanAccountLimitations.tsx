

export const ScalingPlanAccountLimitations = () => {
  return (
    <section className="relative w-full flex flex-col items-center overflow-visible px-4 pb-20">
      <div className="relative w-full max-w-[1440px] flex flex-col items-center px-0" style={{ marginTop: '83px' }}>
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
            Account Type Limitations
          </h2>

          {/* Table */}
          <div 
            className="w-full md:w-[810px] min-h-[308px] overflow-x-auto md:overflow-hidden rounded-[5px] border border-[#B988FA] mt-[34px]"
          >
            <table className="w-full h-full border-collapse">
              <thead>
                <tr style={{ height: '61.6px', borderBottom: '1px solid #34006B' }}>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px]">Account Type</th>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px] border-l border-[#34006B]">Maximum Scaling Level</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: "Three Step Classic", level: "Up to Level 3" },
                  { type: "Two Step (Classic, Pro)", level: "Up to Level 4" },
                  { type: "One Step (Classic, Pro)", level: "Up to Level 3" },
                  { type: "Instant Account (Classic, Pro)", level: "Up to Level 2" },
                ].map((row, idx) => (
                  <tr key={idx} style={{ 
                    height: '61.6px', 
                    borderBottom: idx < 3 ? '1px solid #34006B' : 'none' 
                  }}>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] whitespace-nowrap">{row.type}</td>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] border-l border-[#34006B] whitespace-nowrap">{row.level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

