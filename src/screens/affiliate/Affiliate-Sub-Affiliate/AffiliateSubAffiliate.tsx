import React from 'react';

export const AffiliateSubAffiliate = () => {
  return (
    <section className="w-full flex flex-col items-center mt-[175px] px-4">
      <div
        style={{
          width: '1160px',
          height: '558px',
          borderRadius: '30px',
          border: '1px solid #E9B1FF',
          background: 'linear-gradient(180deg, rgba(38, 8, 74, 0.10) 0%, rgba(90, 19, 176, 0.10) 100%)',
          position: 'relative', // For absolute positioning of inner elements if needed, though flex might be better
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Main Heading */}
        <h2
          style={{
            marginTop: '68px',
            textAlign: 'center',
            fontFamily: '"M PLUS 2"',
            fontSize: '42px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '60px',
            background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Sub-Affiliate Earnings
        </h2>

        {/* Subheading */}
        <p
          style={{
            marginTop: '10px',
            color: '#FFF',
            textAlign: 'center',
            fontFamily: '"M PLUS 2"',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: '30px',
          }}
        >
          A partnership that scales with you.
        </p>

        {/* Description */}
        <p
          style={{
            marginTop: '5px',
            width: '500px',
            color: '#C293F1',
            textAlign: 'center',
            fontFamily: '"M PLUS 2"',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: '26px',
          }}
        >
          Refer affiliates, grow together, and receive 5% lifetime commissions from their performance.
        </p>

        {/* Features List Left Side */}
        <div
          style={{
            marginTop: '44px',
            alignSelf: 'flex-start',
            marginLeft: '89px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h3
            style={{
              color: '#FFF',
              fontFamily: '"M PLUS 2"',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: '500',
              lineHeight: '34px',
            }}
          >
            Why it works?
          </h3>

          <p
            style={{
              marginTop: '18px',
              color: '#FFF',
              fontFamily: '"M PLUS 2"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
            }}
          >
            5% Lifetime Commissions
          </p>

          <p
            style={{
              marginTop: '18px',
              color: '#FFF',
              fontFamily: '"M PLUS 2"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
            }}
          >
            No limits on partners or earnings
          </p>

          <p
            style={{
              marginTop: '18px',
              color: '#FFF',
              fontFamily: '"M PLUS 2"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
            }}
          >
            Earn every time your affiliates make sales
          </p>

          <p
            style={{
              marginTop: '18px',
              color: '#FFF',
              fontFamily: '"M PLUS 2"',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
            }}
          >
            Simple, transparent, scalable
          </p>
        </div>
      </div>
    </section>
  );
};
