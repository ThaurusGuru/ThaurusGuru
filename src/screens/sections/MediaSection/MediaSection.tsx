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

        {/* Testimonials section */}
        <div className="relative">
          <div className="absolute w-full h-[235px] top-0 left-0 bg-[linear-gradient(180deg,rgba(27,9,46,1)_0%,rgba(28,10,47,0)_100%)] pointer-events-none z-10" />

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[17px] gap-y-[52px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="w-full max-w-[280px] mx-auto border border-solid border-[#e8b0ff] rounded-[3.77px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(96,32,163,0.43)_0%,rgba(36,12,61,0.43)_100%)]"
              >
                <CardContent className="p-5 space-y-3">
                  <img
                    className="w-[118px] h-[22px]"
                    alt="Rating stars"
                    src={testimonial.stars}
                  />

                  <div className="flex items-center gap-2">
                    <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[11px] tracking-[0] leading-[18.8px]">
                      {testimonial.author}
                    </span>
                    <span className="[font-family:'Poppins',Helvetica] font-light text-[#929292] text-[9px] tracking-[0] leading-[18.8px]">
                      {testimonial.time}
                    </span>
                  </div>

                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs tracking-[0] leading-[18.8px]">
                    {testimonial.title}
                  </h3>

                  <p className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(27,9,46,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-light text-transparent text-[10px] tracking-[0] leading-[15.1px]">
                    {testimonial.description}
                  </p>

                  <Button
                    variant="link"
                    className="h-auto p-0 [font-family:'Poppins',Helvetica] font-medium text-[#1bad7c] text-[10px] tracking-[0] leading-[15.1px]"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="absolute w-full h-[236px] bottom-0 left-0 bg-[linear-gradient(0deg,rgba(27,9,46,1)_0%,rgba(28,10,47,0)_100%)] pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};