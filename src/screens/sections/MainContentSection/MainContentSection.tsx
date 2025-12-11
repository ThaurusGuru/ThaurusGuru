


const statsData = [
  {
    value: "$440k+",
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
    <section className="w-full py-12 relative">
      <div className="container mx-auto px-4">
        <img 
          src="/hero/Horizontal-line.jpg" 
          alt="Horizontal line" 
          className="w-full h-[3px] mb-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] object-cover"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {statsData.map((stat, index) => (
            <>
              <div
                key={index}
                className={`flex flex-col items-center justify-center px-6 translate-y-[-1rem] animate-fade-in opacity-0 ${
                  index === 0
                    ? "[--animation-delay:200ms]"
                    : index === 1
                      ? "[--animation-delay:400ms]"
                      : index === 2
                        ? "[--animation-delay:600ms]"
                        : "[--animation-delay:800ms]"
                }`}
              >
                <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-normal mb-2">
                  {stat.value}
                </h3>
                <p className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xl text-center tracking-[0] leading-normal">
                  {stat.label}
                </p>
              </div>
              
              {/* Vertical line images between stats */}
              {index === 0 && (
                <img
                  src="/hero/vertical-line-1.png"
                  alt="Vertical line 1"
                  className="hidden lg:block absolute left-1/4 -top-32 h-80 w-auto object-cover"
                  style={{ transform: 'translateX(-50%)' }}
                />
              )}
              {index === 1 && (
                <img
                  src="/hero/vertical-line-2.jpg"
                  alt="Vertical line 2"
                  className="hidden lg:block absolute left-1/2 -top-40 h-80 w-auto object-cover"
                  style={{ transform: 'translateX(-50%)' }}
                />
              )}
              {index === 2 && (
                <img
                  src="/hero/vertical-line-3.jpg"
                  alt="Vertical line 3"
                  className="hidden lg:block absolute left-3/4 -top-16 h-80 w-auto object-cover"
                  style={{ transform: 'translateX(-50%)' }}
                />
              )}
            </>
          ))}
        </div>

        <img 
          src="/hero/Horizontal-line.jpg" 
          alt="Horizontal line" 
          className="w-full h-[3px] mt-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] object-cover"
        />
      </div>
    </section>
  );
};
