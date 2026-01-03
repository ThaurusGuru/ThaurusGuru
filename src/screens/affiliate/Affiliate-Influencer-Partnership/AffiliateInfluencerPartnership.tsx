import React from 'react';

export const AffiliateInfluencerPartnership = () => {
  return (
    <section className="w-full flex flex-col items-center mt-[150px] px-4">
      <h2
        style={{
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
        Influencer Partnership
      </h2>
      <p
        style={{
          width: '899px',
          maxWidth: '100%',
          marginTop: '24px',
          color: '#C293F1',
          textAlign: 'center',
          fontFamily: '"M PLUS 2"',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '26px',
        }}
      >
        Available only for influencers with more than 6,000 followers and an average engagement of 800-2000 views per post. If these conditions are not met, the partner will be assigned to Affiliate Model 1
      </p>

      {/* Tables Container */}
      <div className="flex flex-wrap justify-center gap-[136px] mt-[121px]">
        {/* Table 1 - Exclusive */}
        <div
          className="flex flex-col relative"
          style={{
            width: '512px',
            height: '834px',
            borderRadius: '20px',
            border: '1px solid #E9B1FF',
            background: 'rgba(36, 7, 66, 0.40)',
            marginTop: '20px' // Add margin to avoid clipping absolute header
          }}
        >
          {/* Header */}
          <div className="absolute top-[-17px] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
             <div className="relative flex items-center justify-center">
               <img src="/Affiliate/influence/Vector 6992.png" alt="Exclusive" style={{ width: '386px', height: '74px' }} />
               <p
                 className="absolute"
                 style={{
                   color: '#FFF',
                   fontFamily: 'Cambay',
                   fontSize: '28px',
                   fontStyle: 'normal',
                   fontWeight: '400',
                   lineHeight: '34px',
                   textTransform: 'uppercase',
                   whiteSpace: 'nowrap'
                 }}
               >
                 Exclusive
               </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              height: '49px',
              padding: '13px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              alignSelf: 'stretch',
              background: 'linear-gradient(90deg, rgba(27, 9, 46, 0.50) 0%, rgba(81, 30, 148, 0.50) 50%, rgba(27, 9, 46, 0.50) 100%)',
              marginTop: '60px',
            }}
          >
            <p
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Cambay',
                fontSize: '19px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '22px',
                whiteSpace: 'nowrap',
              }}
            >
              Commission up to 30%
            </p>
          </div>

          {/* Feature Rows */}
          {[
            "Giveaway for the partner’s community",
            "Dedicated 10% Discount Code",
            "Participation in monthly competitions for affiliates\n(Prizes in accounts or in $)",
            "Custom graphics on demand from our inhouse designers",
            "24/7 Priority Support",
            "-",
            "-",
            "-"
          ].map((text, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                minHeight: '49px', // Use minHeight to accommodate multiline text
                padding: '13px 20px', 
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                alignSelf: 'stretch',
                background: 'linear-gradient(90deg, rgba(27, 9, 46, 0.50) 0%, rgba(81, 30, 148, 0.50) 50%, rgba(27, 9, 46, 0.50) 100%)',
                marginTop: '26px',
              }}
            >
              <p
                style={{
                  color: '#B988FA',
                  textAlign: 'center',
                  fontFamily: 'Cambay',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '22px',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Table 2 - Non-Exclusive */}
        <div
          className="flex flex-col relative"
          style={{
            width: '512px',
            height: '834px',
            borderRadius: '20px',
            border: '1px solid #E9B1FF',
            background: 'rgba(36, 7, 66, 0.40)',
            marginTop: '20px'
          }}
        >
          {/* Header */}
          <div className="absolute top-[-17px] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
             <div className="relative flex items-center justify-center">
               <img src="/Affiliate/influence/Vector 6992.png" alt="Non-Exclusive" style={{ width: '386px', height: '61.367px' }} />
               <p
                 className="absolute"
                 style={{
                   color: '#FFF',
                   fontFamily: 'Cambay',
                   fontSize: '28px',
                   fontStyle: 'normal',
                   fontWeight: '400',
                   lineHeight: '34px',
                   textTransform: 'uppercase',
                   whiteSpace: 'nowrap'
                 }}
               >
                 NON-Exclusive
               </p>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              height: '49px',
              padding: '13px 20px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              alignSelf: 'stretch',
              background: 'linear-gradient(90deg, rgba(27, 9, 46, 0.50) 0%, rgba(81, 30, 148, 0.50) 50%, rgba(27, 9, 46, 0.50) 100%)',
              marginTop: '60px',
            }}
          >
            <p
              style={{
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Cambay',
                fontSize: '19px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '22px',
                whiteSpace: 'nowrap',
              }}
            >
              Commission up to 20%
            </p>
          </div>

          {/* Feature Rows */}
          {[
            "Giveaway for the partner’s community",
            "Dedicated 10% Discount Code",
            "Participation in monthly competitions for affiliates\n(Prizes in accounts or in $)",
            "Custom graphics on demand from our inhouse designers",
            "24/7 Priority Support",
            "1 x 50k 2-Step PRO Challenge Account",
            "Verified status on key socials (X, Instagram, etc.)",
            "Event Budget — We cover the event budget, you build the right audience"
          ].map((text, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                minHeight: '49px',
                padding: '13px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                alignSelf: 'stretch',
                background: 'linear-gradient(90deg, rgba(27, 9, 46, 0.50) 0%, rgba(81, 30, 148, 0.50) 50%, rgba(27, 9, 46, 0.50) 100%)',
                marginTop: '26px',
              }}
            >
              <p
                style={{
                  color: '#B988FA',
                  textAlign: 'center',
                  fontFamily: 'Cambay',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '22px',
                  whiteSpace: 'pre-wrap'
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
