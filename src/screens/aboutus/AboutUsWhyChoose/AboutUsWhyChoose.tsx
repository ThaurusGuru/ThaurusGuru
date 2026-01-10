export const AboutUsWhyChoose = () => {
  return (
    <section className="relative w-full flex flex-col items-center mt-[80px] md:mt-[160px]">
      {/* Why Choose Thaurus Guru? Heading */}
      <h2
        className="font-['M_PLUS_2',Helvetica] text-[24px] md:text-[42px] leading-[35px] md:leading-[60px] text-center"
        style={{
          background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Why Choose Thaurus Guru?
      </h2>

      {/* Description - 40px below */}
      <p
        className="font-['Cambay',Helvetica] mt-[20px] md:mt-[40px] w-[320px] md:w-[575px] text-center text-[12px] md:text-[14px] font-normal leading-normal"
      >
        <span className="text-[#FFF]">Comprehensive Trading Programs:</span>
        <span className="text-[#C293F1]"> Our Challenge, Verification, and Live Trading phases are tailored to support traders at every level of their journey.</span>
      </p>

      {/* Cards Container - 75px below on desktop, 40px on mobile */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-[40px] md:mt-[75px] gap-[20px] md:gap-[95px]">
        
        {/* Card 1: Advanced Tools and Resources */}
        <div
          className="relative p-px rounded-[20px] overflow-hidden"
          style={{
            width: '270px',
            height: '242px',
            background: 'linear-gradient(180deg, rgba(233, 177, 255, 0.15) 0%, rgba(233, 177, 255, 0.5) 40%, rgba(233, 177, 255, 0.4) 60%, rgba(233, 177, 255, 0.05) 100%)',
          }}
        >
          <div
            className="relative flex flex-col items-center w-full h-full rounded-[19px] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(35, 11, 62, 0.20) 0%, rgba(93, 39, 164, 0.20) 100%), #1b082e',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
                 style={{ background: 'radial-gradient(circle at top left, rgba(233, 177, 255, 0.15) 0%, transparent 50%)' }} 
            />
            <div className="absolute top-[35px] flex items-center justify-center">
              <div style={{ display: 'flex', width: '66px', height: '66px', borderRadius: '33px', border: '1px solid #B988FA', background: '#1B092E', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', width: '56px', height: '56px', borderRadius: '28px', border: '1px solid #B988FA', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/AboutUs/icon-1.svg" alt="Icon 1" style={{ width: '28px', height: '28px' }} />
                </div>
              </div>
            </div>
            <span className="[font-family:'M_PLUS_2',Helvetica]" style={{ marginTop: '123px', color: '#FFF', textAlign: 'center', fontSize: '14px', fontWeight: 400 }}>
              Advanced Tools and Resources
            </span>
            <span className="[font-family:'Cambay',Helvetica]" style={{ marginTop: '20px', width: '167px', color: '#B988FA', textAlign: 'center', fontSize: '12px', lineHeight: '16px' }}>
              Access real-time analysis, news, and signals from Berry, our AI finance specialist.
            </span>
          </div>
        </div>

        {/* Card 2: Community and Networking */}
        <div
          className="relative p-px rounded-[20px] overflow-hidden"
          style={{
            width: '270px',
            height: '242px',
            background: 'linear-gradient(180deg, rgba(233, 177, 255, 0.15) 0%, rgba(233, 177, 255, 0.5) 40%, rgba(233, 177, 255, 0.4) 60%, rgba(233, 177, 255, 0.05) 100%)',
          }}
        >
          <div
            className="relative flex flex-col items-center w-full h-full rounded-[19px] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(35, 11, 62, 0.20) 0%, rgba(93, 39, 164, 0.20) 100%), #1b082e',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
                 style={{ background: 'radial-gradient(circle at top left, rgba(233, 177, 255, 0.15) 0%, transparent 50%)' }} 
            />
            <div className="absolute top-[35px] flex items-center justify-center">
              <div style={{ display: 'flex', width: '66px', height: '66px', borderRadius: '33px', border: '1px solid #B988FA', background: '#1B092E', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', width: '56px', height: '56px', borderRadius: '28px', border: '1px solid #B988FA', justifyContent: 'center', alignItems: 'center' }}>
                    <img src="/AboutUs/icon-2.svg" alt="Icon 2" style={{ width: '32px', height: '32px' }} />
                </div>
              </div>
            </div>
            <span className="[font-family:'M_PLUS_2',Helvetica]" style={{ marginTop: '123px', color: '#FFF', textAlign: 'center', fontSize: '14px', fontWeight: 400 }}>
              Community and Networking
            </span>
            <span className="[font-family:'Cambay',Helvetica]" style={{ marginTop: '20px', width: '167px', color: '#B988FA', textAlign: 'center', fontSize: '12px', lineHeight: '16px' }}>
              Join a thriving community of traders and gain insights from industry professionals.
            </span>
          </div>
        </div>

        {/* Card 3: Support and Mentorship */}
        <div
          className="relative p-px rounded-[20px] overflow-hidden"
          style={{
            width: '270px',
            height: '242px',
            background: 'linear-gradient(180deg, rgba(233, 177, 255, 0.15) 0%, rgba(233, 177, 255, 0.5) 40%, rgba(233, 177, 255, 0.4) 60%, rgba(233, 177, 255, 0.05) 100%)',
          }}
        >
          <div
            className="relative flex flex-col items-center w-full h-full rounded-[19px] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, rgba(35, 11, 62, 0.20) 0%, rgba(93, 39, 164, 0.20) 100%), #1b082e',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30"
                 style={{ background: 'radial-gradient(circle at top left, rgba(233, 177, 255, 0.15) 0%, transparent 50%)' }} 
            />
            <div className="absolute top-[35px] flex items-center justify-center">
              <div style={{ display: 'flex', width: '66px', height: '66px', borderRadius: '33px', border: '1px solid #B988FA', background: '#1B092E', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', width: '56px', height: '56px', borderRadius: '28px', border: '1px solid #B988FA', justifyContent: 'center', alignItems: 'center' }}>
                  <img src="/AboutUs/icon-3.svg" alt="Icon 3" style={{ width: '32px', height: '32px' }} />
                </div>
              </div>
            </div>
            <span className="[font-family:'M_PLUS_2',Helvetica]" style={{ marginTop: '123px', color: '#FFF', textAlign: 'center', fontSize: '14px', fontWeight: 400 }}>
              Support and Mentorship
            </span>
            <span className="[font-family:'Cambay',Helvetica]" style={{ marginTop: '20px', width: '200px', color: '#B988FA', textAlign: 'center', fontSize: '12px', lineHeight: '16px' }}>
              Benefit from our extensive educational materials and one-on-one mentoring sessions.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
