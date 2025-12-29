import { Button } from "../../../components/ui/button";

const locations = [
  {
    name: "Nigeria",
    top: "top-[52%] lg:top-[282px]",
    left: "left-[11%] lg:left-[61px]",
    flagSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/image-2.png",
    vectorSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/vector-3-2.svg",
  },
  {
    name: "Slovakia",
    top: "top-[32%] lg:top-[167px]",
    left: "left-[21%] lg:left-[168px]",
    flagSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/image-2-1.png",
    vectorSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/vector-3.svg",
  },
  {
    name: "Mauritius",
    top: "top-[62%] lg:top-[457px]",
    left: "left-[48%] lg:left-[312px]",
    flagSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/image-2-2.png",
    vectorSrc: "https://c.animaapp.com/mishf4erVkDEuN/img/vector-3-1.svg",
  },
];

const statImages = [
  "/build-section/card-1.svg",
  "/build-section/card-2.svg",
  "/build-section/card-3.svg",
];

export const BuildSection = () => {
  return (
    <section className="relative w-full -mt-24 md:mt-0 pb-4 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 md:gap-12 items-start">
          {/* Map Section - Centered on Mobile */}
          <div className="relative w-full max-w-[650px] h-[600px] lg:ml-12 mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <img
              className="absolute top-0 left-0 w-full h-full object-contain"
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
            <h2 className="w-full lg:max-w-[590px] text-center lg:text-left -mt-8 md:mt-0 bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[30px] md:text-[42px] tracking-[0] leading-[40px] md:leading-[58px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Built by Professionals.
              <br />
              Backed by Transparency.
            </h2>

            <div className="flex gap-[11px] justify-center lg:justify-start lg:gap-[15px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              {statImages.map((imageSrc, index) => (
                <img
                  key={index}
                  src={imageSrc}
                  alt={`Stat card ${index + 1}`}
                  className="w-[105.35px] lg:w-[184px] h-auto"
                />
              ))}
            </div>

            <p className="w-full max-w-[346px] lg:max-w-[579px] text-center lg:text-left [font-family:'Cambay',Helvetica] font-normal lg:font-medium text-white text-[12px] lg:text-lg tracking-[0.12px] lg:tracking-[0.20px] leading-[16px] lg:leading-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
              Our team is composed of seasoned tech entrepreneurs and global
              traders, all committed to unwavering transparency and
              professionalism.
            </p>

            <Button className="flex w-[196px] lg:w-[228px] h-[40px] lg:h-[50px] px-[30px] justify-center items-center gap-[-18px] lg:gap-[10px] rounded-[6px] lg:rounded-[10px]
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px] lg:gap-6 w-full lg:px-24 px-4 mt-12 justify-items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-[163px] lg:w-72 h-[97px] lg:h-40 rounded-[10px] border border-solid border-[#a770e0] overflow-hidden"
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
    </section>
  );
};