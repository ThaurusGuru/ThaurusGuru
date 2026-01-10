export const AboutUsWhoWeAre = () => {
  return (
    <section className="relative w-full px-4 md:px-8 flex flex-col items-center mt-[100px] md:mt-[200px]">
      {/* Main Box */}
      <div
        className="relative flex flex-col md:flex-row items-center justify-center md:items-center"
        style={{
          width: '100%',
          maxWidth: '1146px',
          height: 'auto',
          minHeight: window.innerWidth < 768 ? '245px' : '260px',
          borderRadius: '20px',
          border: '1px solid #7C00FF',
          boxShadow: '0 4px 44px 0 #2C0E50',
          padding: window.innerWidth < 768 ? '20px' : '0 85px 0 71px',
        }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-4 md:gap-0">
          {/* Heading - "Who We Are?" */}
          <h2
            className="font-['M_PLUS_2',Helvetica] shrink-0 text-center md:text-left"
            style={{
              fontSize: window.innerWidth < 768 ? '24px' : '42px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: window.innerWidth < 768 ? '60px' : '60px',
              background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              width: window.innerWidth < 768 ? '386px' : 'auto',
              maxWidth: '100%',
            }}
          >
            Who We Are?
          </h2>

          {/* Description */}
          <p
            className="font-['Cambay',Helvetica] text-center md:text-left mt-[17px] md:mt-4"
            style={{
              marginLeft: window.innerWidth < 768 ? '0' : '85px',
              width: window.innerWidth < 768 ? '320px' : '669px',
              maxWidth: '100%',
              fontSize: window.innerWidth < 768 ? '12px' : '14px',
              fontStyle: 'normal',
              lineHeight: 'normal',
            }}
          >
            <span style={{ color: '#C293F1', fontWeight: 400 }}>Thaurus Guru is </span>
            <span style={{ color: '#FFF', fontWeight: 700 }}>a leading proprietary trading firm</span>
            <span style={{ color: '#C293F1', fontWeight: 400 }}> dedicated to identifying and nurturing talented traders. With the backing of our experienced team and advanced technologies, we offer a structured pathway to help traders prove their skills, achieve consistency, and trade with our capital.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
