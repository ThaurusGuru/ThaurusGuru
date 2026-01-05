
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
            paddingRight: '89px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
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

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '18px', gap: '15px' }}>
              <img src="/Affiliate/sub-affiliate/icon-1.svg" alt="icon" style={{ width: '24px', height: '24px', filter: 'brightness(0) saturate(100%) invert(62%) sepia(29%) saturate(1161%) hue-rotate(213deg) brightness(101%) contrast(103%)' }} />
              <p
                style={{
                  color: '#FFF',
                  fontFamily: '"M PLUS 2"',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '26px',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                5% Lifetime Commissions
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '18px', gap: '15px' }}>
              <img src="/Affiliate/sub-affiliate/icon-2.svg" alt="icon" style={{ width: '24px', height: '24px', filter: 'brightness(0) saturate(100%) invert(62%) sepia(29%) saturate(1161%) hue-rotate(213deg) brightness(101%) contrast(103%)' }} />
              <p
                style={{
                  color: '#FFF',
                  fontFamily: '"M PLUS 2"',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '26px',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                No limits on partners or earnings
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '18px', gap: '15px' }}>
              <img src="/Affiliate/sub-affiliate/icon-3.svg" alt="icon" style={{ width: '24px', height: '24px', filter: 'brightness(0) saturate(100%) invert(62%) sepia(29%) saturate(1161%) hue-rotate(213deg) brightness(101%) contrast(103%)' }} />
              <p
                style={{
                  color: '#FFF',
                  fontFamily: '"M PLUS 2"',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '26px',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                Earn every time your affiliates make sales
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '18px', gap: '15px' }}>
              <img src="/Affiliate/sub-affiliate/icon-4.svg" alt="icon" style={{ width: '24px', height: '24px', filter: 'brightness(0) saturate(100%) invert(62%) sepia(29%) saturate(1161%) hue-rotate(213deg) brightness(101%) contrast(103%)' }} />
              <p
                style={{
                  color: '#FFF',
                  fontFamily: '"M PLUS 2"',
                  fontSize: '14px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '26px',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                Simple, transparent, scalable
              </p>
            </div>
          </div>
          <div style={{ marginLeft: '280px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p
              style={{
                color: '#FFF',
                fontFamily: '"M PLUS 2"',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '34px',
                margin: 0,
              }}
            >
              Example
            </p>

            {/* Cards row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '36px' }}>
              {/* Card 1: 15 new affiliates */}
              <div
                style={{
                  display: 'flex',
                  width: '106px',
                  padding: '12px 21px 7px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  border: '1px solid #B97EFF',
                }}
              >
                <div style={{ width: '65px', flexShrink: 0 }}>
                  <p
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '16px',
                      margin: 0,
                    }}
                  >
                    15
                  </p>
                  <p
                    style={{
                      color: '#6D3AA4',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '16px',
                      margin: 0,
                    }}
                  >
                    new affiliates
                  </p>
                </div>
              </div>

              {/* Symbol × */}
              <img src="/Affiliate/sub-affiliate/cross.svg" alt="×" style={{ width: '20px', height: '20px' }} />

              {/* Card 2: $1,000 sales each */}
              <div
                style={{
                  display: 'flex',
                  width: '106px',
                  padding: '12px 21px 7px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  border: '1px solid #B97EFF',
                }}
              >
                <div style={{ width: '65px', flexShrink: 0 }}>
                  <p
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '16px',
                      margin: 0,
                    }}
                  >
                    $1,000
                  </p>
                  <p
                    style={{
                      color: '#6D3AA4',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '16px',
                      margin: 0,
                    }}
                  >
                    sales each
                  </p>
                </div>
              </div>

              {/* Symbol = */}
              <img src="/Affiliate/sub-affiliate/equal.svg" alt="=" style={{ width: '20px', height: '20px' }} />

              {/* Card 3: $15,000 total volume */}
              <div
                style={{
                  display: 'flex',
                  width: '106px',
                  padding: '12px 21px 7px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  border: '1px solid #B97EFF',
                  background: 'radial-gradient(76.23% 51.43% at 50% 50%, rgba(112, 0, 255, 0.10) 0%, #1E0933 100%)',
                  boxShadow: '0 4px 18px 0 rgba(0, 0, 0, 0.25) inset',
                }}
              >
                <div style={{ width: '65px', flexShrink: 0 }}>
                  <p
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '16px',
                      margin: 0,
                    }}
                  >
                    $15,000
                  </p>
                  <p
                    style={{
                      color: '#6D3AA4',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '16px',
                      margin: 0,
                    }}
                  >
                    total volume
                  </p>
                </div>
              </div>
            </div>

            {/* Second row: 5% = $750 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '24px' }}>
              {/* Card 1: 5% lifetime commission - wider card */}
              <div
                style={{
                  display: 'flex',
                  width: '140px',
                  padding: '12px 21px 7px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  border: '1px solid #B97EFF',
                }}
              >
                <div style={{ width: '100px', flexShrink: 0 }}>
                  <p
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '16px',
                      margin: 0,
                    }}
                  >
                    5%
                  </p>
                  <p
                    style={{
                      color: '#6D3AA4',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '16px',
                      margin: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    lifetime commission
                  </p>
                </div>
              </div>

              {/* Symbol = */}
              <img src="/Affiliate/sub-affiliate/equal.svg" alt="=" style={{ width: '20px', height: '20px' }} />

              {/* Card 2: $750 straight to you */}
              <div
                style={{
                  display: 'flex',
                  width: '106px',
                  padding: '12px 21px 7px 20px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '10px',
                  border: '1px solid #B97EFF',
                  background: 'radial-gradient(76.23% 51.43% at 50% 50%, rgba(112, 0, 255, 0.10) 0%, #1E0933 100%)',
                  boxShadow: '0 4px 18px 0 rgba(0, 0, 0, 0.25) inset',
                }}
              >
                <div style={{ width: '65px', flexShrink: 0 }}>
                  <p
                    style={{
                      color: '#FFF',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '500',
                      lineHeight: '16px',
                      margin: 0,
                    }}
                  >
                    $750
                  </p>
                  <p
                    style={{
                      color: '#6D3AA4',
                      textAlign: 'center',
                      fontFamily: '"M PLUS 2"',
                      fontSize: '10px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '16px',
                      margin: 0,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    straight to you
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
