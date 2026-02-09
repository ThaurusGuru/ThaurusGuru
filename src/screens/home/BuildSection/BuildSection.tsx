import { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

const statCards = [
  { number: "25+", label: "Dedicated\\nProfessionals" },
  { number: "3", label: "Dedicated Offices\\naround the world" },
  { number: "24/7", label: "Available\\ncustomer services" },
];

export const BuildSection = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    if (selectedImage) {
      window.addEventListener('keydown', handleEsc);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <section className="relative w-full -mt-24 md:mt-0 pb-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 md:gap-12 items-start">
          {/* Map Section - Centered on Mobile */}
          <div className="relative w-full max-w-[650px] h-[600px] lg:ml-12 mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <img
              className="absolute top-0 left-0 w-full h-full object-contain"
              alt="World map with locations"
              src="/build-section/Map.svg"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-8 items-center lg:items-start">
            <h2 className="w-full lg:max-w-[590px] text-center lg:text-left -mt-8 md:mt-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[30px] md:text-[42px] tracking-[0] leading-[40px] md:leading-[58px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              {t('build.heading1')}
              <br />
              {t('build.heading2')}
            </h2>

            <div className="flex gap-[11px] justify-center lg:justify-start lg:gap-[15px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              {statCards.map((card, index) => (
                <div
                  key={index}
                  className="w-[105.35px] lg:w-[184px] cursor-pointer hover:opacity-80 transition-opacity
                    px-[20.041px] lg:px-[35px] pt-[19.467px] lg:pt-[34px] pb-[8.549px] lg:pb-[16px] pr-[24.045px] lg:pr-[42px]"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    borderRadius: '10px',
                    border: '1px solid #E9B1FF',
                    background: 'radial-gradient(83.12% 57.39% at 79.62% 50.26%, rgba(112, 0, 255, 0.20) 0%, rgba(30, 9, 51, 0.20) 100%)',
                    boxShadow: '0 4px 8px 0 rgba(63, 13, 116, 0.40)',
                  }}
                >
                  <div className="flex flex-col w-full gap-[8px] lg:gap-[14px]">
                    <div
                      className="w-[61.263px] h-[14.886px] lg:w-[107px] lg:h-[26px]
                        text-[28px] lg:text-[50px] leading-[9.161px] lg:leading-[16px]"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Manrope',
                        fontStyle: 'normal',
                        fontWeight: 700,
                      }}
                    >
                      {card.number}
                    </div>
                    <div
                      className="lg:w-[140px]
                        text-[7px] lg:text-[14px] leading-[9.161px] lg:leading-[16px]"
                      style={{
                        color: '#FFF',
                        fontFamily: 'Cambay',
                        fontStyle: 'normal',
                        fontWeight: 700,
                      }}
                    >
                      {card.label.split('\\n').map((line, i) => (
                        <span key={i}>
                          {line}
                          {i < card.label.split('\\n').length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="w-full max-w-[346px] lg:max-w-[579px] text-center lg:text-left [font-family:'Cambay',Helvetica] font-normal lg:font-medium text-white text-[12px] lg:text-lg tracking-[0.12px] lg:tracking-[0.20px] leading-[16px] lg:leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              {t('build.description')}
            </p>

            <Button 
              onClick={() => {
                const element = document.getElementById('pricing-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex w-[196px] lg:w-[228px] h-[40px] lg:h-[50px] px-[30px] justify-center items-center gap-[-18px] lg:gap-[10px] rounded-[6px] lg:rounded-[10px]
              border border-[#7A27EF]
              bg-[linear-gradient(104deg,#F6E6FF_-33.17%,#D692FF_16.49%,#8148ED_66.15%,#4829C3_115.81%,#090422_165.47%)]
              shadow-[0_4px_14px_0_rgba(0,0,0,0.25)_inset] 
              hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.7)] 
              hover:scale-105 transition-all duration-300
              translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]
              group">
              <span className="w-[152px] h-[18px] lg:h-[20px] shrink-0 text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.25)] [font-family:'Cambay',Helvetica] font-bold text-[13px] lg:text-[16px] leading-[normal]">
                Start your Challenge
              </span>
              <div className="flex w-[28px] lg:w-[34px] h-[20px] lg:h-[23px] px-[7px] py-px items-center gap-[10px] shrink-0 rounded-[30px] bg-white group-hover:scale-110 transition-transform">
                <img 
                  src="/solar_arrow-up-linear.svg" 
                  alt="Arrow" 
                  className="w-auto h-auto"
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Card Layout - 4 columns on desktop, 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-[18px] lg:gap-6 w-full max-w-[390px] md:max-w-none lg:px-24 px-4 mx-auto mt-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
              style={{
                aspectRatio: '55/32'
              }}
              onClick={() => setSelectedImage(`/build-section/${num}.png`)}
            >
              <img 
                src={`/build-section/${num}.png`}
                alt={`Build section card ${num}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-[95vw] max-h-[95vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Full screen view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};