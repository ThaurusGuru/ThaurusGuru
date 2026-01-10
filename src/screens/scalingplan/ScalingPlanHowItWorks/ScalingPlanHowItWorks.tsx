export const ScalingPlanHowItWorks = () => {
  return (
    <section className="relative w-full flex flex-col items-center overflow-visible px-4">
      <div className="relative w-full max-w-[1440px] flex flex-col items-center px-0" style={{ marginTop: '92px' }}>
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
            How it works
          </h2>

          {/* Description */}
          <p
            className="font-['M_PLUS_2',Helvetica]"
            style={{
              marginTop: '14px',
              width: '100%',
              color: '#FFF',
              textAlign: 'left',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '26px',
            }}
          >
            Your trading performance is reviewed regularly. If you meet the required profit targets and consistency rules, your account will be scaled to the next level — no extra payments, no reset fees.
          </p>

          {/* Table */}
          <div 
            className="w-full md:w-[810px] min-h-[308px] overflow-x-auto md:overflow-hidden rounded-[5px] border border-[#B988FA] mt-[49px]"
          >
            <table className="w-full h-full border-collapse">
              <thead>
                <tr style={{ height: '61.6px', borderBottom: '1px solid #34006B' }}>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px]">Level</th>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px] border-l border-[#34006B]">Allocation<br/>Growth</th>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px] border-l border-[#34006B]">Profit<br/>Target</th>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px] border-l border-[#34006B]">Consistency<br/>Requirement</th>
                  <th className="text-white text-center font-['M_PLUS_2',Helvetica] text-[13px] md:text-[16px] font-semibold leading-[30px] px-2 md:px-[10px] border-l border-[#34006B]">Profit<br/>Split</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "Level 1", growth: "+30%", target: "10%", consistency: "Not required", split: "80/20" },
                  { level: "Level 2", growth: "+30%", target: "15%", consistency: "30% consistency", split: "85/15" },
                  { level: "Level 3", growth: "+30%", target: "20%", consistency: "25% consistency", split: "90/10" },
                  { level: "Level 4", growth: "+36.5%", target: "30%", consistency: "20% consistency", split: "95/5" },
                ].map((row, idx) => (
                  <tr key={idx} style={{ 
                    height: '61.6px', 
                    borderBottom: idx < 3 ? '1px solid #34006B' : 'none' 
                  }}>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] whitespace-nowrap">{row.level}</td>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] border-l border-[#34006B] whitespace-nowrap">{row.growth}</td>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] border-l border-[#34006B] whitespace-nowrap">{row.target}</td>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] border-l border-[#34006B] whitespace-nowrap">{row.consistency}</td>
                    <td className="text-white text-center font-['M_PLUS_2',Helvetica] text-[12px] md:text-[16px] font-normal leading-[30px] px-2 md:px-[10px] border-l border-[#34006B] whitespace-nowrap">{row.split}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Consistency Definition */}
          <p
            className="font-['M_PLUS_2',Helvetica]"
            style={{
              marginTop: '45px',
              width: '100%',
              color: '#FFF',
              textAlign: 'left',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '26px',
            }}
          >
            Consistency means your profits must be steady — no single day or week should account for a disproportionate share of your total gain.
          </p>
        </div>
      </div>
    </section>
  );
};

