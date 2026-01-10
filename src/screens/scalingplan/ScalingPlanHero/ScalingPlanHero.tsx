export const ScalingPlanHero = () => {
  return (
    <section className="relative w-full flex flex-col items-center overflow-visible px-4">
      <div className="relative w-full max-w-[1440px] flex flex-col items-center px-0">
        <div className="flex flex-col items-start w-full max-w-[765px]">
          {/* Heading */}
          <h1 
            className="font-['M_PLUS_2',Helvetica]"
            style={{
              marginTop: '245px',
              textAlign: 'left',
              fontSize: '42px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '60px',
              background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Scaling Plan
          </h1>

          {/* Subheading */}
          <h2
            className="font-['M_PLUS_2',Helvetica]"
            style={{
              marginTop: '14px',
              color: '#FFF',
              textAlign: 'left',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '50px',
            }}
          >
            Grow your capital. Earn a higher split. Scale up to $300,000.
          </h2>

          {/* Description */}
          <p
            className="font-['M_PLUS_2',Helvetica]"
            style={{
              marginTop: '9px',
              color: '#FFF',
              textAlign: 'left',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '26px',
            }}
          >
            At ThaurusGuru, we offer a clear path for traders who show consistent results. Our 4-Level Scaling Plan is built to reward profitable trading with increased allocation and improved profit share — up to 95/5.
          </p>
        </div>
      </div>
    </section>
  );
};
