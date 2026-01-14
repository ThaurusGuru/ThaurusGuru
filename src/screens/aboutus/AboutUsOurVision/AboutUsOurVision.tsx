import { useTranslation } from "react-i18next";

export const AboutUsOurVision = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full flex flex-col items-center overflow-visible mt-[100px] md:mt-[150px]">
      <div className="relative w-full max-w-[1440px] flex flex-col items-start px-0 overflow-visible min-h-[650px] md:min-h-[774px]">
        {/* Background SVG Line - Desktop */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="1149" 
          height="774" 
          viewBox="0 0 1149 774" 
          fill="none"
          className="absolute -top-40 left-[145.5px] z-0 pointer-events-none hidden md:block"
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

        {/* Background SVG Line - Mobile */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="366" 
          height="629" 
          viewBox="0 0 366 629" 
          fill="none"
          className="absolute top-[-45px] left-4 z-0 pointer-events-none block md:hidden"
          style={{ width: '365px', height: '629px' }}
        >
          <path 
            d="M0.5 0V271.5C0.5 282.546 9.45431 291.5 20.5 291.5H345.5C356.546 291.5 365.5 300.454 365.5 311.5V629" 
            stroke="url(#paint0_linear_1724_3053)"
          />
          <defs>
            <linearGradient id="paint0_linear_1724_3053" x1="183" y1="-24" x2="183" y2="629.407" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1B092F"/>
              <stop offset="0.5" stop-color="#5400C2"/>
              <stop offset="1" stop-color="#1B092F"/>
            </linearGradient>
          </defs>
        </svg>

        {/* --- Vision Section (Left on Desktop, Top on Mobile) --- */}
        
        {/* Decorative Circle & Dashed Line - Left/Top */}
        <div className="absolute left-[7px] md:left-[135px] top-[25px] z-10">
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
        
        {/* Dashed Line going right/left */}
        <div 
          className="absolute left-[25px] md:left-[146px] top-[36px] border-t border-dashed border-[#8401F7] w-[40px] md:w-[64px]"
        />

        {/* Vision Badge Container */}
        <div
          className="ml-[65px] md:ml-[210px] inline-flex rounded-[20px] border-2 border-[#7C00FF] p-[10px_20px] md:p-[16px_26px] items-center justify-center gap-[10px]"
        >
          <span
            className="font-['M_PLUS_2',Helvetica] text-[#FFF] text-[20px] md:text-[32px] font-normal leading-[34px] text-center w-[120px] md:w-[164px]"
          >
            {t('aboutUs.ourVision')}
          </span>
        </div>

        {/* Vision Description */}
        <div
          className="font-['Cambay',Helvetica] text-[#FFF] text-[12px] md:text-[14px] font-normal leading-relaxed mt-[20px] md:mt-[51px] ml-[65px] md:ml-[210px] w-[210px] md:w-[467px]"
        >
          <p style={{ marginBottom: '8px' }}>• {t('aboutUs.ourVisionPoint1')}</p>
          <p style={{ marginBottom: '8px' }}>• {t('aboutUs.ourVisionPoint2')}</p>
          <p>• {t('aboutUs.ourVisionPoint3')}</p>
        </div>

        {/* --- Mission Section (Bottom/Right on Desktop, Bottom/Right on Mobile) --- */}

        {/* Our Mission Container */}
        <div
          className="relative self-start md:self-end md:relative mt-[130px] md:mt-[169px] ml-[120px] md:ml-0 md:mr-[437px] inline-flex flex-col items-start"
        >
          <div className="inline-flex rounded-[20px] border-2 border-[#7C00FF] p-[10px_20px] md:p-[16px_26px] items-center justify-center gap-[10px]">
            <span
              className="font-['M_PLUS_2',Helvetica] text-[#FFF] text-[20px] md:text-[32px] font-normal leading-tight text-center w-[120px] md:w-[186px]"
            >
              {t('aboutUs.ourMission')}
            </span>
          </div>
          
          {/* Dashed Line going right - Desktop only */}
          <div className="hidden md:block absolute left-[100%] top-[36px] w-[291px] border-t border-dashed border-[#8401F7]" />
          
          {/* Dashed Line going right - Mobile */}
          <div className="block md:hidden absolute left-[100%] top-[20px] w-[100px] border-t border-dashed border-[#8401F7]" />

          {/* Decorative Circle & Dashed Line - Right/Bottom */}
          <div className="absolute left-[calc(100%+100px-11px)] md:left-[calc(100%+291px-11px)] top-[9px] md:top-[25px] z-10">
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
        </div>

        {/* Mission Description */}
        <div
          className="self-start md:self-end font-['Cambay',Helvetica] text-[#FFF] text-[12px] md:text-[14px] font-normal leading-relaxed mt-[20px] md:mt-[44px] ml-[120px] md:mr-[210px] w-[210px] md:w-[465px]"
        >
          <p style={{ marginBottom: '8px' }}>
            • {t('aboutUs.ourMissionPoint1')}
          </p>
          <p style={{ marginBottom: '8px' }}>
            • {t('aboutUs.ourMissionPoint2')}
          </p>
          <p>
            • {t('aboutUs.ourMissionPoint3')}
          </p>
        </div>
      </div>
    </section>
  );
};
