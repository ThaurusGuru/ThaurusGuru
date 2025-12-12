import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

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

const testimonials = [
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-1.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-1.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-1.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-5.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-1.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-1.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-1.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-5.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-1.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-1.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-1.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
  {
    stars: "https://c.animaapp.com/mishf4erVkDEuN/img/frame-154-5.svg",
    author: "George Nyabadza,",
    time: "4 hours ago",
    title: "Super-thrilled with my first payout",
    description:
      "I am super-thrilled to have received my first payout, and beautifully crafted Payout Certificate, from Thaurus Guru. There is no better way to be self-emplyed than to be partnered.",
  },
];

export const MediaSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenshotsPerView = 4;

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

  return (
    <section className="relative w-full py-16 px-4">
      <div className="max-w-[1160px] mx-auto">
        {/* Left-aligned heading */}
        <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[42px] tracking-[0.42px] leading-normal mb-16">
          Thaurus Trust Wall
        </h2>

        {/* Screenshots carousel section */}
        <div className="relative mb-20">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] relative">
            {/* Screenshots container */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * (216 + 24)}px)` }}
              >
                {screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[216px] h-[350px] rounded-[23px] overflow-hidden border border-solid border-[#e8b0ff] p-[7px]"
                  >
                    <img
                      className="w-full h-full rounded-[17px] object-cover"
                      alt={screenshot.alt}
                      src={screenshot.src}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#7a27ef]/80 to-[#4d1891]/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= screenshots.length - screenshotsPerView}
              className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#7a27ef]/80 to-[#4d1891]/80 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>

         
        </div>

        {/* Reviews Image */}
        <div className="relative">
          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] flex justify-center">
            <img
              src="/reviews/Text reviews.svg"
              alt="Customer Reviews"
              className="w-[1160px] h-[666px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};