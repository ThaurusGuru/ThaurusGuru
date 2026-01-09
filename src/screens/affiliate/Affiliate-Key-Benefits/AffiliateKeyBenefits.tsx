export const AffiliateKeyBenefits = () => {
  return (
    <>
      <style>{`
        @media (max-width: 568px) {
          .key-benefits-section-mobile {
            flex-direction: column !important;
            align-items: center !important;
            padding-top: 100px !important;
            padding-bottom: 60px !important;
          }

          .key-benefits-heading-mobile {
            margin-left: 0 !important;
            width: auto !important;
            font-family: "M PLUS 2" !important;
            font-size: 24px !important;
            font-weight: 400 !important;
            line-height: 30px !important;
            text-align: center !important;
            margin-bottom: 40px !important;
          }

          .key-benefits-list-mobile {
            margin-left: 0 !important;
            padding: 0 20px !important;
            gap: 20px !important;
          }

          .key-benefits-item-mobile {
            width: auto !important;
            max-width: 386px !important;
            height: auto !important;
            min-height: 54px !important;
            padding: 11px 20px !important;
            gap: 12px !important;
          }

          .key-benefits-text-mobile {
            font-size: 14px !important;
            line-height: 20px !important;
          }

          .key-benefits-icon-mobile {
            width: 20px !important;
            height: 20px !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
      
      <section className="key-benefits-section-mobile w-full relative flex flex-row items-start" style={{ paddingTop: '162px', paddingBottom: '100px' }}>
        <h2
          className="key-benefits-heading-mobile"
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
            flexShrink: 0,
          }}
        >
          Key Benefits
        </h2>
        <div className="key-benefits-list-mobile" style={{ marginLeft: '128px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {[
            { icon: '/Affiliate/key-benfits/icon-1.svg', text: 'Earn up to 30% in commissions' },
            {
              icon: '/Affiliate/key-benfits/icon-2.svg',
              text: 'Lifetime Commissions (We are the only company that offers lifetime commissions)',
            },
            { icon: '/Affiliate/key-benfits/icon-4.svg', text: 'First Withdrawal on Demand' },
            { icon: '/Affiliate/key-benfits/icon-5.svg', text: 'VIP Affiliate Support 24/7' },
            { icon: '/Affiliate/key-benfits/icon-6.svg', text: 'Sub-Affiliate available' },
          ].map((item, index) => (
            <div
              key={index}
              className="key-benefits-item-mobile"
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
              <img 
                src={item.icon} 
                alt="icon" 
                className="key-benefits-icon-mobile"
                style={{ width: '24px', height: '24px' }} 
              />
              <p
                className="key-benefits-text-mobile"
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
    </>
  );
};