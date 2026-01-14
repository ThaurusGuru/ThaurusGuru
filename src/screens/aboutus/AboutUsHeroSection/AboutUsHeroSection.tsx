import { Badge } from "../../../components/ui/badge";
import { useTranslation } from "react-i18next";

export const AboutUsHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-[600px] flex flex-col items-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
        }}
        src="/AboutUs/Hero/her-bg.png"
        alt="Background"
      />
      

      {/* Content Container - 110px from header */}
      <div className="relative z-10 flex flex-col items-center" style={{ marginTop: '210px' }}>
        {/* Badge */}
        <Badge className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] 
              inline-flex items-center justify-center self-center gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 h-auto 
              rounded-full border border-white/60 sm:border-2
              bg-gradient-to-r from-[#2c115c] via-[#47107b] to-[#4d0d8d]
              shadow-lg shadow-purple-500/30">
          <span className="[font-family:'Blinker',Helvetica] font-medium text-white text-[10px] sm:text-xs tracking-[0] leading-[normal] whitespace-nowrap">
            Thaurus Guru
          </span>
        </Badge>

        {/* Heading - 18px below badge */}
        <h1 
          className="[font-family:'M_PLUS_2',Helvetica] font-normal bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
          style={{
            marginTop: '18px',
            textAlign: 'center',
            fontSize: '42px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '60px',
            background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          {t('aboutUs.title')}
        </h1>

        {/* Description - 29px below heading */}
        <p
          className="[font-family:'Cambay',Helvetica]"
          style={{
            marginTop: '29px',
            width: '526px',
            maxWidth: '90vw',
            color: '#FFF',
            textAlign: 'center',
            fontSize: '18px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal'
          }}
        >
          {t('aboutUs.heroDescription')}
        </p>
      </div>
    </section>
  );
};
