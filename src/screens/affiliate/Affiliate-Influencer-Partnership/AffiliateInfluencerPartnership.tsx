export const AffiliateInfluencerPartnership = () => {
  return (
    <>
      <style>{`
        @media (max-width: 568px) {
          .influencer-heading-mobile {
            text-align: center !important;
            font-family: "M PLUS 2" !important;
            font-size: 24px !important;
            font-weight: 400 !important;
            line-height: 35px !important;
          }
          
          .influencer-desc-mobile {
            width: 312px !important;
            color: #C293F1 !important;
            text-align: center !important;
            font-family: Cambay !important;
            font-size: 12px !important;
            font-weight: 400 !important;
            line-height: 20px !important;
          }

          .influencer-table-mobile {
            width: 295.637px !important;
            height: auto !important;
            border-radius: 11.548px !important;
            border: 0.577px solid #E9B1FF !important;
            background: rgba(36, 7, 66, 0.40) !important;
            margin-left: 14px !important;
            margin-right: 14px !important;
            margin-top: 40px !important;
          }

          .influencer-header-mobile {
            width: 222.727px !important;
            height: 35.458px !important;
            top: -10px !important;
          }

          .influencer-header-text-mobile {
            font-size: 16px !important;
            line-height: 20px !important;
          }

          .influencer-section-container-mobile {
            display: flex !important;
            height: 28.293px !important;
            padding: 8px 20px !important;
            justify-content: center !important;
            align-items: center !important;
            gap: 6px !important;
            flex-shrink: 0 !important;
            align-self: stretch !important;
            background: linear-gradient(90deg, rgba(27, 9, 46, 0.50) 0%, rgba(81, 30, 148, 0.50) 50%, rgba(27, 9, 46, 0.50) 100%) !important;
            margin: 14px 0 !important;
          }

          .influencer-first-row-mobile {
            margin-top: 69px !important;
          }

          .influencer-commission-text-mobile {
            color: #FFF !important;
            text-align: center !important;
            font-family: Cambay !important;
            font-size: 12px !important;
            font-weight: 400 !important;
            line-height: 12px !important;
          }

          .influencer-feature-text-mobile {
            color: #B988FA !important;
            text-align: center !important;
            font-family: Cambay !important;
            font-size: 10px !important;
            font-weight: 400 !important;
            line-height: 12px !important;
          }

          .influencer-tables-container-mobile {
            flex-direction: column !important;
            gap: 20px !important;
            margin-top: 60px !important;
          }

          .influencer-section-mobile {
            margin-top: 100px !important;
          }
        }
      `}</style>
      
      <section className="influencer-section-mobile w-full flex flex-col items-center mt-[150px] px-4">
        <h2
          className="influencer-heading-mobile"
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
          className="influencer-desc-mobile"
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
      <div className="influencer-tables-container-mobile flex flex-wrap justify-center gap-[136px] mt-[121px]">
        {/* Table 1 - Exclusive */}
        <div
          className="influencer-table-mobile flex flex-col relative"
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
          <div className="influencer-header-mobile absolute top-[-32px] md:top-[-50px] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
             <div className="relative flex items-center justify-center">
               <img src="/Affiliate/exclusive.svg" alt="Exclusive" style={{ width: '386px', height: '74px' }} />
               <p
                 className="influencer-header-text-mobile absolute"
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
            className="influencer-section-container-mobile influencer-first-row-mobile"
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
              className="influencer-commission-text-mobile"
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
            "Giveaway for the partner's community",
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
              className="influencer-section-container-mobile"
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
                className="influencer-feature-text-mobile"
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
          className="influencer-table-mobile flex flex-col relative"
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
          <div className="influencer-header-mobile absolute top-[-32px] md:top-[-50px] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
             <div className="relative flex items-center justify-center">
               <img src="/Affiliate/nonexclusive.svg" alt="Non-Exclusive" style={{ width: '386px', height: '61.367px' }} />
               <p
                 className="influencer-header-text-mobile absolute"
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
            className="influencer-section-container-mobile influencer-first-row-mobile"
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
              className="influencer-commission-text-mobile"
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
            "Giveaway for the partner's community",
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
              className="influencer-section-container-mobile"
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
                className="influencer-feature-text-mobile"
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
    </>
  );
};