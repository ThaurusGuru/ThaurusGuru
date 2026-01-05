

export const AffiliateKeyBenefits = () => {
  return (
    <section className="w-full relative flex flex-row items-start" style={{ paddingTop: '162px', paddingBottom: '100px' }}>
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
        {[
          { icon: '/Affiliate/key-benfits/icon-1.svg', text: 'Earn up to 30% in commissions' },
          {
            icon: '/Affiliate/key-benfits/icon-2.svg',
            text: 'Lifetime Commissions (We are the only company that offers lifetime commissions)',
          },
          {
            icon: '/Affiliate/key-benfits/icon-3.svg',
            text: 'No Minimum Withdrawal (For your comfort, there is no minimum withdrawal amount)',
          },
          { icon: '/Affiliate/key-benfits/icon-4.svg', text: 'First Withdrawal on Demand' },
          { icon: '/Affiliate/key-benfits/icon-5.svg', text: 'VIP Affiliate Support 24/7' },
          { icon: '/Affiliate/key-benfits/icon-6.svg', text: 'Sub-Affiliate available' },
        ].map((item, index) => (
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
            <img src={item.icon} alt="icon" style={{ width: '24px', height: '24px' }} />
            <p
              style={{
                color: '#FFF',
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '32px',
                margin: 0,
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
