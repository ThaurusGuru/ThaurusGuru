export const AboutUsWhoWeAre = () => {
  return (
    <section className="relative w-full px-4 md:px-8 flex flex-col items-center" style={{ marginTop: '200px' }}>
      {/* Main Box */}
      <div
        className="relative flex items-center"
        style={{
          width: '1146px',
          maxWidth: '90vw',
          height: '260px',
          borderRadius: '20px',
          border: '1px solid #7C00FF',
          boxShadow: '0 4px 44px 0 #2C0E50',
        }}
      >
        {/* Content Container - horizontal layout */}
        <div className="flex items-start w-full" style={{ paddingLeft: '71px', paddingRight: '85px' }}>
          {/* Heading - "Who We Are?" on the left */}
          <h2
            className="[font-family:'M_PLUS_2',Helvetica] shrink-0"
            style={{
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
            Who We Are?
          </h2>

          {/* Description - on the right side with gap */}
          <p
            className="[font-family:'Cambay',Helvetica] mt-4"
            style={{
              marginLeft: '85px',
              width: '669px',
              maxWidth: '100%',
              fontSize: '14px',
              fontStyle: 'normal',
              lineHeight: '24px',
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
