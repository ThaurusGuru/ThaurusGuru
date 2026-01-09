export const AffiliateInfluencerPartnership = () => {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(184, 130, 251, 0.5),
                        0 0 60px rgba(184, 130, 251, 0.3),
                        inset 0 0 30px rgba(184, 130, 251, 0.2);
          }
          50% { 
            box-shadow: 0 0 40px rgba(184, 130, 251, 0.7),
                        0 0 80px rgba(184, 130, 251, 0.5),
                        inset 0 0 40px rgba(184, 130, 251, 0.3);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes glow-border {
          0%, 100% { border-color: rgba(184, 130, 251, 0.5); }
          50% { border-color: rgba(233, 177, 255, 0.8); }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        .exclusive-card-wrapper {
          position: relative;
          filter: drop-shadow(0 0 40px rgba(184, 130, 251, 0.4));
        }

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

          .influencer-section-container-mobile:not(.event-budget-glow) {
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

          .exclusive-card-wrapper {
            filter: drop-shadow(0 0 20px rgba(184, 130, 251, 0.3));
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
          A dedicated partnership package designed exclusively for influencers.
We tailor the collaboration to your audience, content style, and personal brand — providing custom tools, exclusive benefits, and flexible conditions to maximize impact and long-term value.
        </p>

      {/* Tables Container */}
      <div className="influencer-tables-container-mobile flex flex-wrap justify-center gap-[136px] mt-[121px]">
        {/* Table 1 - EXCLUSIVE GLAMOROUS */}
        <div className="exclusive-card-wrapper">
          <div
            className="influencer-table-mobile flex flex-col relative pt-8 md:pt-0"
            style={{
              width: '512px',
              height: '720px',
              borderRadius: '20px',
              border: '2px solid rgba(184, 130, 251, 0.6)',
              background: 'linear-gradient(180deg, rgba(36, 7, 66, 0.6) 0%, rgba(20, 5, 35, 0.8) 100%)',
              marginTop: '20px',
              position: 'relative',
              animation: 'glow-border 3s ease-in-out infinite',
            }}
          >
            {/* Ambient Glow Layers */}
            <div 
              className="absolute inset-0 rounded-[20px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(184, 130, 251, 0.3) 0%, transparent 50%)',
                zIndex: 0,
              }}
            />
            <div 
              className="absolute inset-0 rounded-[20px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 50% 100%, rgba(123, 39, 239, 0.2) 0%, transparent 50%)',
                zIndex: 0,
              }}
            />
            
            {/* Animated Corner Accents */}
            <div 
              className="absolute top-0 left-0 w-20 h-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at top left, rgba(184, 130, 251, 0.4) 0%, transparent 70%)',
                animation: 'sparkle 2s ease-in-out infinite',
                zIndex: 1,
              }}
            />
            <div 
              className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at top right, rgba(184, 130, 251, 0.4) 0%, transparent 70%)',
                animation: 'sparkle 2s ease-in-out infinite 0.5s',
                zIndex: 1,
              }}
            />
            <div 
              className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at bottom left, rgba(184, 130, 251, 0.4) 0%, transparent 70%)',
                animation: 'sparkle 2s ease-in-out infinite 1s',
                zIndex: 1,
              }}
            />
            <div 
              className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at bottom right, rgba(184, 130, 251, 0.4) 0%, transparent 70%)',
                animation: 'sparkle 2s ease-in-out infinite 1.5s',
                zIndex: 1,
              }}
            />

            {/* Header */}
            <div className="influencer-header-mobile absolute top-[-32px] md:top-[-41px] left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
               <div className="relative flex items-center justify-center" style={{ animation: 'float 3s ease-in-out infinite' }}>
                 {/* Mobile: SVG */}
                 <img 
                   src="/Affiliate/exclusive.svg" 
                   alt="Exclusive" 
                   className="md:hidden" 
                   style={{ 
                     width: '386px', 
                     height: '74px',
                     filter: 'brightness(1.3) drop-shadow(0 0 20px rgba(184, 130, 251, 0.8))'
                   }} 
                 />
                 {/* Desktop: PNG */}
                 <img 
                   src="/Affiliate/exclusive.png" 
                   alt="Exclusive" 
                   className="hidden md:block" 
                   style={{ 
                     width: 'auto', 
                     height: 'auto', 
                     maxWidth: '600px',
                     filter: 'brightness(1.3) drop-shadow(0 0 25px rgba(184, 130, 251, 0.9))'
                   }} 
                 />
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
                     whiteSpace: 'nowrap',
                     textShadow: '0 0 30px rgba(184, 130, 251, 1), 0 0 50px rgba(233, 177, 255, 0.8)',
                   }}
                 >
                   Exclusive
                 </p>
              </div>
            </div>

            {/* Commission Container - ULTRA PREMIUM */}
            <div
              className="influencer-section-container-mobile influencer-first-row-mobile relative overflow-hidden"
              style={{
                display: 'flex',
                height: '49px',
                padding: '13px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                alignSelf: 'stretch',
                background: 'linear-gradient(135deg, rgba(123, 39, 239, 0.7) 0%, rgba(184, 130, 251, 0.8) 50%, rgba(123, 39, 239, 0.7) 100%)',
                border: '2px solid rgba(233, 177, 255, 0.5)',
                borderRadius: '12px',
                marginTop: '60px',
                marginLeft: '12px',
                marginRight: '12px',
                animation: 'pulse-glow 2s ease-in-out infinite',
                zIndex: 10,
              }}
            >
              {/* Multi-layered shimmer */}
              <div 
                className="absolute inset-0 rounded-[12px]" 
                style={{ 
                  background: 'linear-gradient(110deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 2s ease-in-out infinite'
                }} 
              />
              <div 
                className="absolute inset-0 rounded-[12px]" 
                style={{ 
                  background: 'linear-gradient(110deg, transparent 40%, rgba(233, 177, 255, 0.4) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmer 3s ease-in-out infinite 0.5s'
                }} 
              />
              
              {/* Glow orbs */}
              <div 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16"
                style={{
                  background: 'radial-gradient(circle, rgba(233, 177, 255, 0.4) 0%, transparent 70%)',
                  animation: 'pulse-glow 1.5s ease-in-out infinite',
                }}
              />
              <div 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16"
                style={{
                  background: 'radial-gradient(circle, rgba(233, 177, 255, 0.4) 0%, transparent 70%)',
                  animation: 'pulse-glow 1.5s ease-in-out infinite 0.75s',
                }}
              />

              <p
                className="influencer-commission-text-mobile relative z-10"
                style={{
                  color: '#FFF',
                  textAlign: 'center',
                  fontFamily: 'Cambay',
                  fontSize: '19px',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  lineHeight: '22px',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(184, 130, 251, 0.6)',
                  letterSpacing: '0.5px',
                }}
              >
                Commission up to 30%
              </p>
            </div>

            {/* Feature Rows - GLAMOROUS */}
            {[
              { text: "Giveaway for the partner's community" },
              { text: "Participation in monthly competitions for affiliates" },
              { text: "Custom graphics on demand from our inhouse designers" },
              { text: "24/7 Priority Support" },
              { text: "1 x 10k 2-Step PRO Challenge Account" },
              { text: "Verified status on key socials (X, Instagram, etc.)" },
              { text: "Event Budget — We cover the event budget, you build the right audience", highlight: true }
            ].map((item, index) => (
              <div
                key={index}
                className="influencer-section-container-mobile relative overflow-hidden group"
                style={{
                  display: 'flex',
                  minHeight: '49px',
                  padding: '13px 20px', 
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  alignSelf: 'stretch',
                  background: item.highlight
                    ? 'linear-gradient(135deg, rgba(123, 39, 239, 0.6) 0%, rgba(184, 130, 251, 0.7) 50%, rgba(123, 39, 239, 0.6) 100%)'
                    : 'linear-gradient(135deg, rgba(123, 39, 239, 0.3) 0%, rgba(184, 130, 251, 0.35) 50%, rgba(123, 39, 239, 0.3) 100%)',
                  border: item.highlight 
                    ? '2px solid rgba(233, 177, 255, 0.6)' 
                    : '1px solid rgba(184, 130, 251, 0.3)',
                  borderRadius: '10px',
                  marginTop: '26px',
                  marginLeft: '12px',
                  marginRight: '12px',
                  boxShadow: item.highlight 
                    ? '0 4px 25px rgba(184, 130, 251, 0.4), inset 0 0 30px rgba(184, 130, 251, 0.25)'
                    : '0 2px 15px rgba(184, 130, 251, 0.2), inset 0 0 20px rgba(184, 130, 251, 0.15)',
                  animation: item.highlight ? 'pulse-glow 2.5s ease-in-out infinite' : 'none',
                  transition: 'all 0.3s ease',
                  zIndex: 10,
                }}
              >
                {/* Shimmer effect */}
                <div 
                  className="absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  style={{ 
                    background: 'linear-gradient(110deg, transparent 40%, rgba(255, 255, 255, 0.2) 50%, transparent 60%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 2s ease-in-out infinite'
                  }} 
                />
                
                <p
                  className="influencer-feature-text-mobile relative z-11"
                  style={{
                    color: item.highlight ? '#FFF' : '#F3E8FF',
                    textAlign: 'center',
                    fontFamily: 'Cambay',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: item.highlight ? '600' : '400',
                    lineHeight: '22px',
                    whiteSpace: 'pre-wrap',
                    textShadow: item.highlight 
                      ? '0 2px 10px rgba(0, 0, 0, 0.8), 0 0 15px rgba(184, 130, 251, 0.5)' 
                      : '0 2px 8px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Table 2 - Non-Exclusive (Standard - subtle contrast) */}
        <div
          className="influencer-table-mobile flex flex-col relative pt-8 md:pt-0"
          style={{
            width: '512px',
            height: '720px',
            borderRadius: '20px',
            border: '1px solid rgba(233, 177, 255, 0.3)',
            background: 'rgba(36, 7, 66, 0.40)',
            marginTop: '20px',
            opacity: 0.85,
          }}
        >
          {/* Header */}
          <div className="influencer-header-mobile absolute top-[-32px] md:top-[-41px] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
             <div className="relative flex items-center justify-center">
               {/* Mobile: SVG */}
               <img src="/Affiliate/nonexclusive.svg" alt="Non-Exclusive" className="md:hidden" style={{ width: '386px', height: '61.367px' }} />
               {/* Desktop: PNG */}
               <img src="/Affiliate/exclusive.png" alt="Non-Exclusive" className="hidden md:block" style={{ width: 'auto', height: 'auto', maxWidth: '600px' }} />
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
            "Participation in monthly competitions for affiliates",
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
      </div>
    </section>
    </>
  );
};