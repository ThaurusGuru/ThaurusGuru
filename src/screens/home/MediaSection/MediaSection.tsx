import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const screenshots = [
  {
    src: "https://c.animaapp.com/mishf4erVkDEuN/img/screenshot-2025-11-23-213314-1.png",
    alt: "Screenshot 1",
  },
  {
    src: "https://c.animaapp.com/mishf4erVkDEuN/img/screenshot-2025-11-23-213441-1.png",
    alt: "Screenshot 2",
  },
  {
    src: "https://c.animaapp.com/mishf4erVkDEuN/img/screenshot-2025-11-23-213358-1.png",
    alt: "Screenshot 3",
  },
  {
    src: "https://c.animaapp.com/mishf4erVkDEuN/img/screenshot-2025-11-23-213415-1.png",
    alt: "Screenshot 4",
  },
  {
    src: "https://c.animaapp.com/mishf4erVkDEuN/img/screenshot-2025-11-23-213258-1.png",
    alt: "Screenshot 5",
  },
];

export const MediaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshotsPerView = window.innerWidth < 768 ? 1 : 4;

  const nextSlide = () => {
    if (currentIndex < screenshots.length - screenshotsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Calculate transform based on screen size
  const getTransform = () => {
    if (window.innerWidth < 768) {
      // Mobile: card width (180px) + gap (16px)
      return `translateX(-${currentIndex * (180 + 16)}px)`;
    }
    // Desktop: card width (216px) + gap (24px)
    return `translateX(-${currentIndex * (216 + 24)}px)`;
  };

  return (
    <section className="relative w-full py-12 md:py-16 px-4">
      <div className="max-w-[1160px] mx-auto">
        {/* Heading - Responsive */}
        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[24px] md:text-[42px] tracking-[0.24px] md:tracking-[0.42px] leading-normal mb-8 md:mb-16 text-center">
          Testimonials
        </h2>

        {/* Screenshots carousel section */}
        <div className="relative mb-12 md:mb-20 px-12 md:px-0">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] relative">
            {/* Screenshots container */}
            {/* <div className="overflow-hidden mx-auto max-w-[180px] md:max-w-none">
              <div 
                className="flex gap-4 md:gap-6 transition-transform duration-500 ease-out"
                style={{ transform: getTransform() }}
              >
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[180px] h-[280px] md:w-[216px] md:h-[350px] rounded-[20px] md:rounded-[23px] overflow-hidden border border-solid border-[#e8b0ff] p-[6px] md:p-[7px]"
                  >
                    <img
                      className="w-full h-full rounded-[15px] md:rounded-[17px] object-cover"
                      alt={screenshot.alt}
                      src={screenshot.src}
                    />
                  </div>
                ))}
              </div>
            </div> */}

            {/* Navigation arrows - Mobile: inside container, Desktop: outside */}
            {/* <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#7a27ef]/80 to-[#4d1891]/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= screenshots.length - screenshotsPerView}
              className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#7a27ef]/80 to-[#4d1891]/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 z-10"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </button> */}
          </div>
        </div>

        {/* Reviews Image - Responsive */}
        <div className="relative">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] flex justify-center">
            {/* Mobile Review Image */}
            <img
              src="/reviews/mobile-review.svg"
              alt="Customer Reviews"
              className="block md:hidden w-full max-w-[390px] h-auto"
            />
            {/* Desktop Review Image */}
            <img
              src="/reviews/Text reviews.svg"
              alt="Customer Reviews"
              className="hidden md:block w-full max-w-[1160px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};