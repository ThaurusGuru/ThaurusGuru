import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Trading3DElement } from "../../../components/Trading3DElement";

const reviewImages = [
  {
    src: "/hero/Trustpilot.svg",
    url: "https://www.trustpilot.com/review/thaurusguru.com",
    alt: "Trustpilot Reviews"
  },
  {
    src: "/hero/TTP.svg",
    url: "https://thetrustedprop.com/prop-firms/thaurus-guru/reviews",
    alt: "The Trusted Prop Reviews"
  },
];

export const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToPricing = (activatePayg = false) => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      if (activatePayg) {
        // Wait for scroll to complete, then trigger PAYG
        setTimeout(() => {
          const paygButton = document.querySelector('[data-model="payg"]') as HTMLButtonElement;
          if (paygButton) {
            paygButton.click();
          }
        }, 800);
      }
    }
  };

  const featureCards = [
    {
      title: (
        <>
          {t('hero.metaTraderLine1')}
          <br />
          {t('hero.metaTraderLine2')}
        </>
      ),
      subtitle: t('hero.nowAvailable'),
      link: null,
      logo: "/meta-trader.png",
    },
    {
      title: (
        <>
          {t('hero.supportLine1')}
          <br />
          {t('hero.supportLine2')}
        </>
      ),
      subtitle: t('hero.learnMore'),
      link: "/contact-us",
      logo: undefined,
    },
    {
      title: (
        <>
          {t('hero.zeroLine1')}
          <br />
          {t('hero.zeroLine2')}
        </>
      ),
      subtitle: t('hero.startTradingToday'),
      link: null,
      logo: undefined,
    },
  ];

  return (
    <section className="relative w-full px-4 md:px-8 lg:px-[105px] pt-[130px] md:pt-[180px] lg:pt-[220px] pb-[40px] md:pb-[80px] lg:pb-[100px] overflow-hidden">
      {/* Hero Background Image with line effects */}
      <div className="absolute inset-0 right-0 bottom-[-100px] w-full h-full pointer-events-none">
        <img
          src="/hero/hero-bg.avif" 
          alt="Hero Background"
          className="absolute top-0 left-0 w-full h-full object-cover object-top mix-blend-screen"
          style={{ opacity: 1 }}
        />
        {/* Minimal gradient - only at bottom for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b082e]" />
      </div>

      <div className="relative z-10 lg:max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-center lg:items-start order-1 lg:order-1">
            {/* Badge with violet gradient, white border and premium animations */}
            <Badge className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] 
              inline-flex items-center justify-center self-center lg:self-start gap-3 px-6 sm:px-10 py-3 sm:py-4 h-auto 
              rounded-full border-2 border-white/90
              bg-gradient-to-r from-[#2c115c] via-[#47107b] to-[#4d0d8d]
              shadow-[0_0_30px_rgba(168,85,247,0.5)]
              hover:scale-110 hover:shadow-[0_0_40px_rgba(168,85,247,0.7)]
              transition-all duration-300
              relative overflow-hidden group cursor-pointer">
              {/* Constant Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer pointer-events-none" />
              
              <span className="relative z-10 [font-family:'Blinker',Helvetica] font-bold text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] tracking-[1px] leading-[normal] whitespace-nowrap uppercase drop-shadow-md">
                {t('hero.badge')}
              </span>
              
              {/* Dual Pulse effect */}
              <div className="absolute inset-0 rounded-full animate-ping opacity-30 border-2 border-purple-400 pointer-events-none" />
              <div className="absolute inset-[-4px] rounded-full animate-pulse opacity-10 bg-purple-500/20 blur-sm pointer-events-none" />
            </Badge>

            {/* Main Heading - Mobile centered, Desktop left-aligned */}
            <h1 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] 
              mt-4 sm:mt-6 md:mt-8 lg:mt-10 [font-family:'M_PLUS_2',Helvetica] font-normal text-white 
              text-[24px] sm:text-[40px] md:text-[52px] lg:text-[62px] 
              tracking-[-0.02em] leading-[1.4] sm:leading-[1.15]
              text-center lg:text-left w-full max-w-[235px] sm:max-w-none">
              {t('hero.titleLine1')}
              <br />
              {t('hero.titleLine2')}
            </h1>

            {/* Description - Centered block with justified text on mobile, left on desktop */}
            <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:300ms] 
              mt-3 sm:mt-5 md:mt-7 lg:mt-8 [font-family:'Cambay',Helvetica] font-normal text-[#c193f1] 
              text-[12px] sm:text-[14px] md:text-[15px] tracking-[0] leading-[1.5] sm:leading-relaxed 
              w-full max-w-[249px] sm:max-w-[400px] lg:max-w-[540px]
              text-justify mx-auto lg:text-left lg:mx-0">
              {t('hero.description')}
            </p>

            {/* Feature Cards Row - Centered on mobile, left on desktop */}
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] 
              grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mt-4 sm:mt-6 md:mt-8 lg:mt-10 
              w-full max-w-[280px] sm:max-w-[360px] md:max-w-[460px]
              mx-auto lg:mx-0 lg:-ml-2">
              {featureCards.map((card, index) => {
                const CardContent = (
                  <>
                    {/* Background Image */}
                    <img
                      src="/hero/card.svg"
                      alt="Card Background"
                      className="absolute inset-0 w-full h-full object-fill"
                    />
                    
                    {/* Text Overlay */}
                    <div className="relative z-10 flex items-center p-1.5 sm:p-2 md:p-3 h-full ml-3">
                      <div className="flex flex-col items-start justify-center gap-0.5 sm:gap-1 md:gap-2">
                        <div className="flex items-center gap-2">
                          <div className="[font-family:'Cambay',Helvetica] font-normal text-white text-[11px] sm:text-[14px] md:text-[15px] lg:text-[16px] leading-[13px] sm:leading-[16px] md:leading-[17px] lg:leading-[18px]">
                            {card.title}
                          </div>
                          {/* Logo - if available, positioned on the right of the title */}
                          {card.logo && (
                            <img
                              src={card.logo}
                              alt="Logo"
                              className="w-[15px] h-[15px] sm:w-[22px] sm:h-[22px] md:w-[26px] md:h-[26px] object-contain shrink-0"
                            />
                          )}
                        </div>
                        <div className="[font-family:'Cambay',Helvetica] text-[#9D63D9] font-normal text-[5px] sm:text-[7px] md:text-[8px] leading-normal">
                          {card.subtitle}
                        </div>
                      </div>
                    </div>
                  </>
                );

                return card.link ? (
                  <Link
                    key={index}
                    to={card.link}
                    className="relative h-[65px] sm:h-[80px] md:h-[85px] lg:h-[90px] 
                    hover:scale-105 transition-all duration-300 cursor-pointer block"
                  >
                    {CardContent}
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="relative h-[65px] sm:h-[80px] md:h-[85px] lg:h-[90px] 
                    hover:scale-105 transition-all duration-300"
                  >
                    {CardContent}
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons - Centered on mobile, left on desktop */}
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] 
              flex flex-col sm:flex-row flex-wrap items-center lg:items-start gap-3 md:gap-4 mt-5 sm:mt-6 md:mt-8 lg:mt-10 w-full">
              <Button 
                onClick={() => scrollToPricing(false)}
                className="flex w-[196px] lg:w-[228px] h-[40px] lg:h-[50px] px-[30px] justify-center items-center gap-[-18px] lg:gap-[10px] rounded-[6px] lg:rounded-[10px]
                border border-[#7A27EF]
                bg-[linear-gradient(104deg,#F6E6FF_-33.17%,#D692FF_16.49%,#8148ED_66.15%,#4829C3_115.81%,#090422_165.47%)]
                shadow-[0_4px_14px_0_rgba(0,0,0,0.25)_inset] 
                hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.7)] 
                hover:scale-105 transition-all duration-300
                group">
                <span className="w-[152px] h-[18px] lg:h-[20px] shrink-0 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.25)] [font-family:'Cambay',Helvetica] font-bold text-[13px] lg:text-[16px] leading-[normal]">
                  {t('hero.startYourChallenge')}
                </span>
                <div className="flex w-[28px] lg:w-[34px] h-[20px] lg:h-[23px] px-[7px] py-px items-center gap-[10px] shrink-0 rounded-[30px] bg-white group-hover:scale-110 transition-transform">
                  <img 
                    src="/solar_arrow-up-linear.svg" 
                    alt="Arrow" 
                    className="w-auto h-auto"
                  />
                </div>
              </Button>

              <Button
                onClick={() => scrollToPricing(true)}
                variant="outline"
                className="w-full sm:w-auto max-w-[196px] sm:max-w-none h-10 sm:h-11 md:h-12 px-5 md:px-7 rounded-md sm:rounded-lg 
                bg-gradient-to-r from-[rgba(0,0,0,0.20)] to-[rgba(122,39,239,0.20)] backdrop-blur-sm
                border border-[#5D1DA0] 
                shadow-[0_4px_12.3px_0_#2D0953_inset]
                hover:bg-white/5 hover:border-[#7a27ef] 
                hover:shadow-[0_4px_24px_0_rgba(122,39,239,0.3)]
                transition-all duration-300">
                <span className="[font-family:'Cambay',Helvetica] font-bold text-white text-[12px] sm:text-[13px] md:text-[15px] tracking-[0] leading-[normal]">
                  {t('hero.tryPayAsYouGo')}
                </span>
              </Button>
            </div>

            {/* Review Images - Centered on mobile, left on desktop */}
            <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] 
              flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 mt-6 sm:mt-8 md:mt-10 lg:mt-14 w-full">
              {reviewImages.map((review, index) => (
                <a
                  key={index}
                  href={review.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 duration-300"
                >
                  <img
                    src={review.src}
                    alt={review.alt}
                    className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - 3D Animation */}
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] 
            flex items-center justify-center lg:justify-end order-2 lg:order-2 mt-6 lg:-mt-16">
            <div className="relative w-full max-w-[270px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] 
              h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px]">
              <Trading3DElement />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};