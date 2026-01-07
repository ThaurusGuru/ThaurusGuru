const statsData = [
  {
    value: "$400k+",
    label: "Paid to traders",
  },
  {
    value: "600+",
    label: "Traders",
  },
  {
    value: "130+",
    label: "Countries Served",
  },
  {
    value: "2023",
    label: "Established",
  },
];

export const MainContentSection = () => {
  return (
    <section className="w-full py-8 md:py-12 relative">
      {/* Top Horizontal Line - Full width */}
      <div className="relative w-full h-[3px] mb-2 md:mb-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <img 
          src="/hero/Horizontal-line.jpg" 
          alt="Horizontal line" 
          className="w-full h-full object-cover mix-blend-screen"
          style={{ opacity: 0.8 }}
        />
        {/* Gradient fade on edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b082e] via-transparent to-[#1b082e]" style={{ width: '100%' }} />
      </div>

      <div className="container mx-auto px-4 lg:max-w-[1300px]">
        {/* Stats Grid Container */}
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-0 py-2 lg:py-0 pt-4 md:pt-0">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center justify-center 
                px-4 py-4 md:py-7 lg:px-6
                ${index % 2 === 0 ? "ml-12 lg:ml-0" : "mr-12 lg:mr-0"}
                translate-y-[-1rem] animate-fade-in opacity-0
                ${index === 0 ? "[--animation-delay:200ms]" : ""}
                ${index === 1 ? "[--animation-delay:400ms]" : ""}
                ${index === 2 ? "[--animation-delay:600ms]" : ""}
                ${index === 3 ? "[--animation-delay:800ms]" : ""}
              `}
            >
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                tracking-[0] leading-normal mb-1 md:mb-2">
                {stat.value}
              </h3>
              <p className="[font-family:'Montserrat',Helvetica] font-medium text-white/80 
                text-xs sm:text-sm md:text-base lg:text-xl 
                text-center tracking-[0] leading-normal">
                {stat.label}
              </p>
            </div>
          ))}

          {/* Mobile/Tablet: Middle Horizontal line between rows */}
          <img
            src="/hero/Horizontal-line.jpg"
            alt="Horizontal line middle"
            className="block lg:hidden absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-[2px] object-cover pointer-events-none z-10"
          />

          {/* Mobile/Tablet: Left Vertical line - Extended beyond horizontal lines */}
          <img
            src="/hero/vertical-line-2.jpg"
            alt="Vertical line left"
            className="block lg:hidden absolute left-[56px] top-1/2 -translate-y-1/2 w-auto h-[calc(100%+60px)] object-cover pointer-events-none z-20"
          />

          {/* Mobile/Tablet: Middle Vertical line between columns - Extended beyond horizontal lines */}
          <img
            src="/hero/vertical-line-2.jpg"
            alt="Vertical line middle"
            className="block lg:hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[calc(50%-20px)] w-auto h-[calc(100%+60px)] object-cover pointer-events-none z-20"
          />

          {/* Mobile/Tablet: Right Vertical line - Extended beyond horizontal lines */}
          <img
            src="/hero/vertical-line-2.jpg"
            alt="Vertical line right"
            className="block lg:hidden absolute right-[56px] top-1/2 -translate-y-1/2 w-auto h-[calc(100%+60px)] object-cover pointer-events-none z-20"
          />

          {/* Desktop: Vertical line images between stats */}
          <img
            src="/hero/vertical-line-1.png"
            alt="Vertical line 1"
            className="hidden lg:block absolute left-1/4 -top-32 h-96 w-auto object-cover pointer-events-none"
            style={{ transform: 'translateX(-50%)' }}
          />
          <img
            src="/hero/vertical-line-2.jpg"
            alt="Vertical line 2"
            className="hidden lg:block absolute left-1/2 -top-40 h-92 w-auto object-cover pointer-events-none"
            style={{ transform: 'translateX(-50%)' }}
          />
          <img
            src="/hero/vertical-line-2.jpg"
            alt="Vertical line 3"
            className="hidden lg:block absolute left-3/4 -top-16 h-98 w-auto object-cover pointer-events-none"
            style={{ transform: 'translateX(-50%)' }}
          />
        </div>
      </div>

      {/* Bottom Horizontal Line - Full width */}
      <div className="relative w-full h-[3px] mt-2 md:mt-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
        <img 
          src="/hero/Horizontal-line.jpg" 
          alt="Horizontal line" 
          className="w-full h-full object-cover mix-blend-screen"
          style={{ opacity: 0.8 }}
        />
        {/* Gradient fade on edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1b082e] via-transparent to-[#1b082e]" style={{ width: '100%' }} />
      </div>
    </section>
  );
};