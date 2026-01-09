export const AboutUsOurVision = () => {
  return (
    <section className="relative w-full flex flex-col items-center overflow-visible" style={{ marginTop: '150px' }}>
      <div className="relative w-full max-w-[1440px] flex flex-col items-start px-0 overflow-visible">
        {/* Background SVG Line */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="1149" 
          height="774" 
          viewBox="0 0 1149 774" 
          fill="none"
          className="absolute -top-40 left-[145.5px] z-0 pointer-events-none"
          style={{ width: '1148px', height: '774px' }}
        >
          <path 
            d="M0.5 0V388.557C0.5 399.603 9.45431 408.557 20.5 408.557H1128.5C1139.55 408.557 1148.5 417.512 1148.5 428.557V774" 
            stroke="url(#paint0_linear_1658_2021)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="paint0_linear_1658_2021" x1="574.5" y1="70.5456" x2="574.5" y2="774.5" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1B092F"/>
              <stop offset="0.5" stop-color="#5400C2"/>
              <stop offset="1" stop-color="#1B092F"/>
            </linearGradient>
          </defs>
        </svg>

        {/* --- Vision Section (Left) --- */}
        
        {/* Decorative Circle at end of dashed line */}
        <div 
          style={{
            position: 'absolute',
            left: '135px', // 146 - 11
            top: '25px',
            width: '22px',
            height: '22px',
            zIndex: 10
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <g filter="url(#circle_filter0_d)">
              <circle cx="11" cy="11" r="9" fill="#8800FF"/>
            </g>
            <g filter="url(#circle_filter1_d)">
              <circle cx="11.0016" cy="11.0001" r="5.4" fill="#1B092E"/>
            </g>
            <defs>
              <filter id="circle_filter0_d" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.434969 0 0 0 0 0.0762761 0 0 0 0 0.816557 0 0 0 0.9 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              <filter id="circle_filter1_d" x="3.60156" y="3.6001" width="14.8008" height="14.8" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
        
        {/* Dashed Line going left */}
        <div 
          style={{
            position: 'absolute',
            left: '146px',
            top: '36px',
            width: '64px',
            height: '1px',
            borderTop: '1px dashed #8401F7'
          }}
        />

        {/* Vision Badge Container */}
        <div
          style={{
            marginLeft: '210px',
            display: 'inline-flex',
            padding: '16px 26px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '20px',
            border: '2px solid #7C00FF',
          }}
        >
          <span
            className="[font-family:'M_PLUS_2',Helvetica]"
            style={{
              width: '164px',
              height: '36px',
              color: '#FFF',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '34px',
              textAlign: 'center',
            }}
          >
            Our Vision
          </span>
        </div>

        {/* Vision Description */}
        <div
          className="[font-family:'Cambay',Helvetica]"
          style={{
            marginTop: '51px',
            marginLeft: '210px',
            width: '467px',
            color: '#FFF',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          <p style={{ marginBottom: '8px' }}>• Build a global community of confident, disciplined traders</p>
          <p style={{ marginBottom: '8px' }}>• Combine trading expertise with smart, modern technology</p>
          <p>• Enable traders to unlock their full potential and grow consistently</p>
        </div>

        {/* --- Mission Section (Right) --- */}

        {/* Our Mission Container */}
        <div
          className="self-end relative"
          style={{
            marginTop: '169px',
            marginRight: '437px',
            display: 'inline-flex',
            padding: '16px 26px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            borderRadius: '20px',
            border: '2px solid #7C00FF',
          }}
        >
          {/* Dashed Line going right */}
          <div 
            style={{
              position: 'absolute',
              left: '100%',
              top: '36px',
              width: '291px',
              height: '1px',
              borderTop: '1px dashed #8401F7'
            }}
          />
          {/* Decorative Circle at end of dashed line */}
          <div 
            style={{
              position: 'absolute',
              left: 'calc(100% + 291px - 11px)',
              top: 'calc(36px - 11px)',
              width: '22px',
              height: '22px',
              zIndex: 10
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <g filter="url(#circle_filter0_d_mission)">
                <circle cx="11" cy="11" r="9" fill="#8800FF"/>
              </g>
              <g filter="url(#circle_filter1_d_mission)">
                <circle cx="11.0016" cy="11.0001" r="5.4" fill="#1B092E"/>
              </g>
              <defs>
                <filter id="circle_filter0_d_mission" x="0" y="0" width="22" height="22" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="1"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.434969 0 0 0 0 0.0762761 0 0 0 0 0.816557 0 0 0 0.9 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_mission"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_mission" result="shape"/>
                </filter>
                <filter id="circle_filter1_d_mission" x="3.60156" y="3.6001" width="14.8008" height="14.7998" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset/>
                  <feGaussianBlur stdDeviation="1"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_mission"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_mission" result="shape"/>
                </filter>
              </defs>
            </svg>
          </div>
          <span
            className="[font-family:'M_PLUS_2',Helvetica]"
            style={{
              width: '186px',
              height: '36px',
              color: '#FFF',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '34px',
              textAlign: 'center',
            }}
          >
            Our Mission
          </span>
        </div>

        {/* Mission Description */}
        <div
          className="self-end [font-family:'Cambay',Helvetica]"
          style={{
            marginTop: '44px',
            marginRight: '210px',
            width: '465px',
            color: '#FFF',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          <p style={{ marginBottom: '8px' }}>
            • Empower traders with advanced tools and practical education
          </p>
          <p style={{ marginBottom: '8px' }}>
            • Provide real-time market insights through our AI finance specialist, Berry
          </p>
          <p>
            • Offer structured programs focused on consistency and long-term success
          </p>
        </div>
      </div>
    </section>
  );
};
