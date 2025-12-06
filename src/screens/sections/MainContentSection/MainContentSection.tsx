
import { Separator } from "../../../components/ui/separator";

const statsData = [
  {
    value: "$1.9M+",
    label: "Paid to traders",
  },
  {
    value: "6K+",
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
        <Separator className="bg-white/20 h-[3px] mb-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {statsData.map((stat, index) => (
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
              } ${
                index < statsData.length - 1
                  ? "lg:border-r lg:border-white/20"
                  : ""
              }`}
            >
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-normal mb-2">
                {stat.value}
              </h3>
              <p className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xl text-center tracking-[0] leading-normal">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <Separator className="bg-white/20 h-[3px] mt-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]" />
      </div>
    </section>
  );
};
