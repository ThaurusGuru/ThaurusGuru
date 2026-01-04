import React from 'react';

export const AffiliateKeyBenefits = () => {
  return (
    <section className="w-full relative flex flex-row items-start" style={{ paddingTop: '162px' }}>
      <h2
        style={{
          marginLeft: '140px',
          width: '180px',
          fontFamily: '"M PLUS 2"',
          fontSize: '42px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '56px',
          background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          flexShrink: 0, // Prevent heading from shrinking
        }}
      >
        Key Benefits
      </h2>
      <div style={{ marginLeft: '128px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {Array(6).fill(null).map((_, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              width: '852px',
              height: '54px',
              padding: '11px 34px',
              alignItems: 'center',
              gap: '16px',
              borderRadius: '30px',
              border: '1px solid #5C17BC',
              background: 'linear-gradient(90deg, rgba(82, 26, 151, 0.40) 0%, rgba(27, 9, 46, 0.40) 100%)',
            }}
          >
            <p
              style={{
                color: '#FFF',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '32px',
              }}
            >
              Earn up to 30% in commissions
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
