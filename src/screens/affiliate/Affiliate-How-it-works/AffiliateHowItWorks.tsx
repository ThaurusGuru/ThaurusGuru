export const AffiliateHowItWorks = () => {
  return (
    <>
      <style>{`
        @media (max-width: 568px) {
          .howitworks-heading-mobile {
            text-align: center !important;
            font-family: "M PLUS 2" !important;
            font-size: 24px !important;
            font-weight: 400 !important;
            line-height: 35px !important;
            margin-top: 100px !important;
          }

          .howitworks-timeline-mobile {
            margin-top: 60px !important;
          }
          
          .step-title-1-mobile {
            width: 139px !important;
            color: #FFF !important;
            font-family: Blinker !important;
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }
          
          .step-desc-1-mobile {
            width: 157px !important;
            color: #B988FA !important;
            font-family: Cambay !important;
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-title-2-mobile {
            width: 82px !important;
            color: #FFF !important;
            text-align: right !important;
            font-family: Blinker !important;
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-desc-2-mobile {
            width: 144px !important;
            color: #B988FA !important;
            text-align: right !important;
            font-family: Cambay !important;
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-title-3-mobile {
            width: 121px !important;
            color: #FFF !important;
            font-family: Blinker !important;
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-desc-3-mobile {
            width: 151px !important;
            color: #B988FA !important;
            font-family: Cambay !important;
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-title-4-mobile {
            color: #FFF !important;
            text-align: right !important;
            font-family: Blinker !important;
            font-size: 20px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }

          .step-desc-4-mobile {
            width: 144px !important;
            color: #B988FA !important;
            text-align: right !important;
            font-family: Cambay !important;
            font-size: 16px !important;
            font-weight: 400 !important;
            line-height: 26px !important;
            white-space: normal !important;
          }
        }
      `}</style>
      
      <section className="w-full flex flex-col items-center">
        <h2
          className="howitworks-heading-mobile text-center"
          style={{
            marginTop: '157px',
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
          How it works?
        </h2>
      <div
        className="howitworks-timeline-mobile"
        style={{
          marginTop: '110px',
          width: '6px',
          height: '802px',
          background: '#571FA1',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '76px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '20px',
            height: '20px',
            backgroundColor: '#FFF',
            borderRadius: '50%',
            border: '2px solid #571FA1',
          }}
        />
        
        {/* Step 1 Content */}
        <div
          style={{
            position: 'absolute',
            top: '63px',
            left: '50%',
            marginLeft: '42px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Number Box */}
          <div
            style={{
              display: 'flex',
              width: '46px',
              height: '46px',
              padding: '15px 19px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '23px',
              background: 'rgba(122, 39, 239, 0.20)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '19px',
                flexShrink: 0,
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Manrope',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '18px',
              }}
            >
              1
            </span>
          </div>

          {/* Title */}
          <p
            className="step-title-1-mobile"
            style={{
              marginTop: '24px',
              color: '#FFF',
              textAlign: 'left',
              fontFamily: 'Blinker',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
              whiteSpace: 'nowrap',
            }}
          >
            Activate your Affiliate account
          </p>

          {/* Description */}
          <p
            className="step-desc-1-mobile"
            style={{
              marginTop: '2px',
              color: '#B988FA',
              textAlign: 'left',
              fontFamily: 'Cambay',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
              whiteSpace: 'nowrap',
            }}
          >
            Contact support to verify and activate your status
          </p>
        </div>

        {/* Step 2 Content */}
        <div
          style={{
            position: 'absolute',
            top: '210px',
            right: '50%',
            marginRight: '42px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          {/* Number Box */}
          <div
            style={{
              display: 'flex',
              width: '46px',
              height: '46px',
              padding: '15px 19px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '23px',
              background: 'rgba(122, 39, 239, 0.20)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '19px',
                flexShrink: 0,
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Manrope',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '18px',
              }}
            >
              2
            </span>
          </div>

          {/* Title */}
          <p
            className="step-title-2-mobile"
            style={{
              marginTop: '24px',
              color: '#FFF',
              textAlign: 'right',
              fontFamily: 'Blinker',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
              whiteSpace: 'nowrap',
            }}
          >
            Promote your link
          </p>

          {/* Description */}
          <p
            className="step-desc-2-mobile"
            style={{
              marginTop: '2px',
              color: '#B988FA',
              textAlign: 'right',
              fontFamily: 'Cambay',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
              whiteSpace: 'nowrap',
            }}
          >
            Share it anywhere - tracking ensures you get credit even if users buy later.
          </p>
        </div>

        {/* Step 3 Content */}
        <div
          style={{
            position: 'absolute',
            top: '358px',
            left: '50%',
            marginLeft: '42px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* Number Box */}
          <div
            style={{
              display: 'flex',
              width: '46px',
              height: '46px',
              padding: '15px 19px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '23px',
              background: 'rgba(122, 39, 239, 0.20)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '19px',
                flexShrink: 0,
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Manrope',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '18px',
              }}
            >
              3
            </span>
          </div>

          {/* Title */}
          <p
            className="step-title-3-mobile"
            style={{
              marginTop: '24px',
              color: '#FFF',
              textAlign: 'left',
              fontFamily: 'Blinker',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
              whiteSpace: 'nowrap',
            }}
          >
            Track Performance
          </p>

          {/* Description */}
          <p
            className="step-desc-3-mobile"
            style={{
              marginTop: '2px',
              color: '#B988FA',
              textAlign: 'left',
              fontFamily: 'Cambay',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
              whiteSpace: 'nowrap',
            }}
          >
            Monitor clicks and purchases in real time via your dashboard.
          </p>
        </div>

        {/* Step 4 Content */}
        <div
          style={{
            position: 'absolute',
            top: '536px',
            right: '50%',
            marginRight: '42px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          {/* Number Box */}
          <div
            style={{
              display: 'flex',
              width: '46px',
              height: '46px',
              padding: '15px 19px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '23px',
              background: 'rgba(122, 39, 239, 0.20)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '19px',
                flexShrink: 0,
                color: '#FFF',
                textAlign: 'center',
                fontFamily: 'Manrope',
                fontSize: '24px',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '18px',
              }}
            >
              4
            </span>
          </div>

          {/* Title */}
          <p
            className="step-title-4-mobile"
            style={{
              marginTop: '24px',
              color: '#FFF',
              textAlign: 'right',
              fontFamily: 'Blinker',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
              whiteSpace: 'nowrap',
            }}
          >
            Claim rewards
          </p>

          {/* Description */}
          <p
            className="step-desc-4-mobile"
            style={{
              marginTop: '2px',
              color: '#B988FA',
              textAlign: 'right',
              fontFamily: 'Cambay',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '26px',
              whiteSpace: 'nowrap',
            }}
          >
            Request your payout directly from the rewards page when eligible.
          </p>
        </div>
      </div>
    </section>
    </>
  );
};