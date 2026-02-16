import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const horizontalLines = [
  { top: "top-[60px]" },
  { top: "top-[119px]" },
  { top: "top-[178px]" },
  { top: "top-[237px]" },
  { top: "top-[296px]" },
  { top: "top-[355px]" },
];

const verticalLines = [
  { left: "left-0" },
  { left: "left-[60px]" },
  { left: "left-[120px]" },
  { left: "left-[180px]" },
  { left: "left-[240px]" },
  { left: "left-[300px]" },
  { left: "left-[360px]" },
  { left: "left-[420px]" },
  { left: "left-[480px]" },
  { left: "left-[540px]" },
  { left: "left-[600px]" },
  { left: "left-[660px]" },
  { left: "left-[720px]" },
  { left: "left-[780px]" },
  { left: "left-[840px]" },
  { left: "left-[900px]" },
  { left: "left-[960px]" },
  { left: "left-[1020px]" },
  { left: "left-[1080px]" },
  { left: "left-[1140px]" },
];

const certificateImages = Array.from({ length: 23 }, (_, i) => ({
  src: `/payouts/payouts/payout-${i + 1}.png`,
}));

const payoutData = [
  { name: "Tunde Balogun", amount: "3,217.60", date: "04.12.2025", country: "NG" },
  { name: "Angelina Kruglenko", amount: "1,112.00", date: "30.10.2025", country: "UA" },
  { name: "Sade Adeniyi", amount: "608.83", date: "13.11.2025", country: "NG" },
  { name: "Arjun Malhotra", amount: "307.20", date: "17.12.2025", country: "IN" },
  { name: "Daria Kerchanova", amount: "3,012.78", date: "13.11.2025", country: "UA" },
  { name: "Zdenek Samoroc", amount: "402.40", date: "30.10.2025", country: "CZ" },
  { name: "Sadiq Abubakar", amount: "1,164.80", date: "17.12.2025", country: "NG" },
  { name: "FUNDEAD FX", amount: "16,508.00", date: "09.10.2025", country: "US" },
  { name: "Chikamso Nwaneri", amount: "1,880.00", date: "02.12.2025", country: "NG" },
  { name: "Oleksandr Shevchenko", amount: "2,728.00", date: "10.11.2025", country: "UA" },
  { name: "Olamide Adetayo", amount: "832.00", date: "09.01.2026", country: "NG" },
  { name: "Aisha Verma", amount: "153.60", date: "08.01.2026", country: "IN" },
  { name: "Diya Gupta", amount: "2,150.40", date: "12.01.2026", country: "IN" },
  { name: "Ishaan Iyer", amount: "4,268.80", date: "12.01.2026", country: "IN" },
  { name: "Femi Bankole", amount: "4,211.20", date: "12.01.2026", country: "NG" },
  { name: "Chima Nwafor", amount: "204.80", date: "09.01.2026", country: "NG" },
  { name: "Blessing Okonwo", amount: "7,717.60", date: "13.11.2025", country: "NG" },
  { name: "Sefora Kambale", amount: "64.00", date: "09.01.2026", country: "CD" },
  { name: "Carlos García", amount: "3,626.40", date: "24.10.2025", country: "ES" },
  { name: "Jade Olamame", amount: "1,344.00", date: "08.01.2026", country: "NG" },
  { name: "Maryam Abdullahi", amount: "404.00", date: "13.10.2025", country: "NG" },
  { name: "Angelina Kruglenko", amount: "1,112.00", date: "11.11.2025", country: "UA" },
  { name: "Matteo Rossi", amount: "3,701.56", date: "20.10.2025", country: "IT" },
];

const desktopSlots = [
  { top: "top-[379px]", left: "left-[578px]", rotation: "rotate-[-15deg]" },
  { top: "top-[363px]", left: "-left-11", rotation: "rotate-[15deg]" },
  { top: "top-[62px]", left: "left-[5px]", rotation: "rotate-[-22deg]" },
  { top: "top-[86px]", left: "left-[1068px]", rotation: "rotate-[15deg]" },
];

const mobileSlots = [
  { top: "top-[200px]", left: "left-[10px]", rotation: "rotate-[-15deg]" },
  { top: "top-[150px]", left: "right-[10px]", rotation: "rotate-[12deg]" },
  { top: "top-[450px]", left: "left-[20px]", rotation: "rotate-[-18deg]" },
  { top: "top-[460px]", left: "right-[20px]", rotation: "rotate-[15deg]" },
];

const NotificationCard = ({ data, slot, isMobile = false }: { data: typeof payoutData[0], slot: any, isMobile?: boolean }) => {
  const [currentData, setCurrentData] = useState(data);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // When data changes, start the pop-out animation
    setIsVisible(false);
    
    // After half the animation cycle, update the data and pop back in
    const timer = setTimeout(() => {
      setCurrentData(data);
      setIsVisible(true);
    }, 400); // Wait for fade-out/scale-down to complete partially

    return () => clearTimeout(timer);
  }, [data]);

  const width = isMobile ? "w-[160px]" : "w-[240px]";
  const height = isMobile ? "h-[54px]" : "h-[70px]";
  const padding = isMobile ? "p-2" : "p-4"; // Uniform padding
  const nameSize = isMobile ? "text-[11px]" : "text-sm";
  const amountSize = isMobile ? "text-[11px]" : "text-sm";
  const dateSize = isMobile ? "text-[9px]" : "text-[10px]";

  return (
    <div
      className={`absolute ${slot.top} ${slot.left} flex ${width} ${height} flex-col justify-center items-center rounded-[14px] ${slot.rotation} transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) z-20 overflow-hidden ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-2'}`}
      style={{
        padding: padding,
        background: 'rgba(27, 9, 46, 0.6)',
        boxShadow: isVisible 
          ? '10px 10px 16px 0 rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.40), inset 1px 0 0 rgba(255, 255, 255, 0.32), inset 0 -1px 1px rgba(0, 0, 0, 0.13), inset -1px 0 1px rgba(0, 0, 0, 0.11)'
          : 'none',
        backdropFilter: 'blur(2.0px) brightness(110%)',
        WebkitBackdropFilter: 'blur(2.0px) brightness(110%)',
      }}
    >
      <div className="flex flex-col gap-1 w-full items-center">
        <div className="flex items-center justify-center gap-x-2 w-full">
          <div className="flex items-center gap-1 overflow-hidden shrink-0">
            <span className={`font-['Blinker',Helvetica] font-semibold text-[#cfa8ff] ${nameSize} tracking-[0.02em] leading-none truncate`}>
              {currentData.name}
            </span>
            <span className="font-['Amiri_Quran_Colored-Regular',Helvetica] font-normal text-[#b982fb] text-[9px] tracking-[0] leading-none shrink-0 opacity-80">
              {currentData.country}
            </span>
          </div>
          <div className={`font-['Blinker',Helvetica] font-normal text-[#9c9c9c] ${dateSize} tracking-[0] leading-none whitespace-nowrap`}>
            {currentData.date}
          </div>
        </div>
        <div className={`font-['Poppins',Helvetica] font-medium text-white ${amountSize} tracking-[0.01em] leading-none flex items-center justify-center gap-1`}>
          <span className="opacity-70 font-normal">Just got paid</span>
          <span className="text-white font-semibold">${currentData.amount}</span>
        </div>
      </div>
    </div>
  );
};

const CertificatesCarousel = ({ isMobile = false }: { isMobile?: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificateImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[310px] flex justify-center items-center overflow-hidden">
      {certificateImages.map((img, index) => {
        const isCenter = index === currentIndex;
        const isLeft = index === (currentIndex - 1 + certificateImages.length) % certificateImages.length;
        const isRight = index === (currentIndex + 1) % certificateImages.length;

        // On mobile, we still render neighbors to allow sliding animation
        if (!isCenter && !isLeft && !isRight) return null;

        let position = "opacity-0 scale-75 z-0";
        
        if (isMobile) {
          // Mobile: Slide in/out logic
          const sizeClasses = "w-[340px]";
          if (isCenter) {
            position = "opacity-100 scale-100 translate-x-0 z-20";
          } else if (isLeft) {
            position = "opacity-0 scale-90 -translate-x-full z-10";
          } else if (isRight) {
            position = "opacity-0 scale-90 translate-x-full z-10";
          }
          
          return (
            <img
              key={img.src}
              src={img.src}
              alt="Certificate"
              className={`absolute ${sizeClasses} h-auto transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${position}`}
            />
          );
        } else {
          // Desktop: Original 3-item view
          if (isCenter) position = "opacity-100 scale-100 translate-x-0 z-20";
          if (isLeft) position = "opacity-40 scale-75 -translate-x-[60%] md:-translate-x-[80%] z-10";
          if (isRight) position = "opacity-40 scale-75 translate-x-[60%] md:translate-x-[80%] z-10";

          return (
            <img
              key={img.src}
              src={img.src}
              alt="Certificate"
              className={`absolute w-[280px] md:w-[421px] h-auto transition-all duration-1000 ease-in-out ${position}`}
            />
          );
        }
      })}
    </div>
  );
};

export const PayoutsSection = () => {
  const { t } = useTranslation();
  const [indices, setIndices] = useState([0, 6, 12, 18]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndices(prev => prev.map(idx => (idx + 1) % payoutData.length));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative w-full pt-12 pb-4 md:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: 'url(/payouts/payouts-bg.png)' }}
    >
      <div className="absolute top-0 left-0 w-full h-[150px] bg-linear-to-b from-[#1b082e] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-[150px] bg-linear-to-t from-[#1b082e] to-transparent pointer-events-none z-10" />

      <div className="hidden md:block relative mx-auto max-w-[1316px] h-[592px]">
        <div className="absolute top-[116px] left-[calc(50.00%-658px)] w-[1316px] h-[360px] flex flex-col gap-[59px]">
          {horizontalLines.map((line, index) => (
            <img
              key={`horizontal-line-${index}`}
              className={`w-[1316px] h-px object-cover ${line.top}`}
              alt="Line"
              src="/payouts/line-41.svg"
            />
          ))}
        </div>

        <div className="absolute top-2.5 left-[calc(50.00%-570px)] w-[1140px] h-[582px]">
          {verticalLines.map((line, index) => (
            <img
              key={`vertical-line-${index}`}
              className={`absolute top-0 ${line.left} w-px h-[582px] object-cover`}
              alt="Line"
              src={index < 7 ? "/payouts/line-50.svg" : "/payouts/line-43.svg"}
            />
          ))}

          {desktopSlots.slice(0, 3).map((slot, i) => (
            <NotificationCard key={`desktop-notif-${i}`} data={payoutData[(indices[i]) % payoutData.length]} slot={slot} />
          ))}
        </div>

        <NotificationCard data={payoutData[(indices[3]) % payoutData.length]} slot={desktopSlots[3]} />

        <h2 className="absolute top-[60px] left-0 right-0 text-center bg-linear-to-b from-white to-[#e9b1ff] bg-clip-text text-transparent font-['M_PLUS_2',Helvetica] font-normal text-[42px] tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {t('payouts.title')}
        </h2>

        <div className="absolute top-[140px] left-0 right-0">
          <CertificatesCarousel />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden relative mx-auto w-full min-h-[700px] mb-20 overflow-hidden">
        {/* Static Background Image for Mobile */}
        <div className="absolute top-[80px] inset-0 w-full h-full pointer-events-none">
          <img 
            src="/payouts/payoutmobpng.png" 
            alt="Mobile Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="relative text-center mt-12 mb-10 bg-linear-to-b from-white to-[#e9b1ff] bg-clip-text text-transparent font-['M_PLUS_2',Helvetica] font-normal text-3xl tracking-[0] leading-[normal] z-20">
          {t('payouts.title')}
        </h2>

        <div className="relative w-full z-10 px-4">
          <div className="relative pt-38 pb-20">
            <CertificatesCarousel isMobile />
          </div>

          {mobileSlots.map((slot, i) => (
            <NotificationCard key={`mobile-notif-${i}`} data={payoutData[(indices[i]) % payoutData.length]} slot={slot} isMobile />
          ))}
        </div>
      </div>
    </section>
  );
};
