import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const locations = [
  {
    name: "Nigeria",
    top: "top-[282px]",
    left: "left-[61px]",
    flagSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/image-2.png",
    vectorSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/vector-3-2.svg",
  },
  {
    name: "Slovakia",
    top: "top-[137px]",
    left: "left-[138px]",
    flagSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/image-2-1.png",
    vectorSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/vector-3.svg",
  },
  {
    name: "Mauritius",
    top: "top-[407px]",
    left: "left-[262px]",
    flagSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/image-2-2.png",
    vectorSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/vector-3-1.svg",
  },
];

const statImages = [
  "/build-section/card-1.svg",
  "/build-section/card-2.svg",
  "/build-section/card-3.svg",
];

const placeholderCards = Array(4).fill(null);

export const BuildSection = () => {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section - Centered on Mobile */}
          <div className="relative w-full max-w-[566px] h-[534px] lg:ml-12 mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <img
              className="absolute top-0 left-0 w-[534px] h-[534px]"
              alt="World map"
              src="https://c.animaapp.com/mishf4erVkDEuN/img/group-64.png"
            />

            {locations.map((location) => (
              <div
                key={location.name}
                className={`absolute ${location.top} ${location.left} w-[79px] h-20`}
              >
                <div className="absolute top-[38px] left-[18px] w-[42px] h-[42px] flex bg-[#200b36] rounded-[21px] border-[0.6px] border-solid border-[#3f166b] shadow-[inset_0px_2px_7.3px_#481d75,0px_3px_7px_#e8b0ff]">
                  <img
                    className="mt-[5px] w-[22.5px] h-[31px] ml-[9px]"
                    alt={`${location.name} flag`}
                    src={location.flagSrc}
                  />
                </div>

                <img
                  className="absolute top-0 left-0 w-[77px] h-9"
                  alt="Location marker"
                  src={location.vectorSrc}
                />

                <div className="absolute top-[7px] left-[17px] [font-family:'Cambay',Helvetica] font-bold text-black text-sm leading-[normal] tracking-[0]">
                  {location.name}
                </div>
              </div>
            ))}
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-8 items-center lg:items-start">
            <h2 className="w-full max-w-[570px] text-center lg:text-left mt-6 md:mt-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[32px] md:text-[42px] tracking-[0] leading-[40px] md:leading-[58px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <span className="whitespace-nowrap">Built by Professionals.</span>
              <br />
              Backed by Transparency.
            </h2>

            <div className="flex flex-wrap gap-[15px] justify-center lg:justify-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              {statImages.map((imageSrc, index) => (
                <img
                  key={index}
                  src={imageSrc}
                  alt={`Stat card ${index + 1}`}
                  className="w-[184px] h-[122.12px]"
                />
              ))}
            </div>

            <p className="w-full max-w-[579px] text-center lg:text-left [font-family:'Cambay',Helvetica] font-medium text-white text-lg tracking-[0.20px] leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              Our team is composed of seasoned tech entrepreneurs and global
              traders, all committed to unwavering transparency and
              professionalism.
            </p>

            <Button className="w-[228px] h-12 rounded-[10px] border border-solid border-[#7a27ef] shadow-[inset_0px_4px_14px_#00000040,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] bg-[linear-gradient(159deg,rgba(246,230,255,1)_0%,rgba(214,146,255,1)_25%,rgba(129,72,237,1)_50%,rgba(72,41,195,1)_75%,rgba(9,4,34,1)_100%)] [text-shadow:0px_2px_4px_#00000040] [font-family:'Cambay',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] hover:opacity-90 transition-opacity translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
              Start your Challenge
              <img
                className="w-[34px] h-[23px] ml-2"
                alt="Arrow"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-144.svg"
              />
            </Button>
          </div>
        </div>

        {/* Card Layout - 4 columns on desktop, 2x2 grid on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 w-full lg:px-24 px-4 mt-12 justify-items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          {placeholderCards.map((_, index) => (
            <Card
              key={index}
              className="w-full max-w-[280px] lg:w-72 h-40 bg-[#a770e04c] rounded-[10px] border border-solid border-[#a770e0]"
            >
              <CardContent className="w-full h-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};