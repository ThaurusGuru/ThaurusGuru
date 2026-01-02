import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Separator } from "../../../components/ui/separator";

const footerColumns = [
  {
    title: "Contact",
    links: ["Support", "Chat", "Contact", "FAQs"],
  },
  {
    title: "Quick Links",
    links: ["About Us", "Career", "Purchase Assessment"],
  },
  {
    title: "Trading",
    links: [
      "How it Works",
      "One step",
      "Two step",
      "Three step",
      "Instant Funding",
      "Try Pay as you go",
    ],
  },
  {
    title: "Community",
    links: ["Join Discord", "Instagram Community"],
  },
];

export const FooterSection = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((section) => section !== title)
        : [...prev, title]
    );
  };

  return (
    <footer className="relative w-full bg-transparent flex justify-center md:pt-20">
      {/* Background Image - Full width, extended upward */}
      <div 
        className="absolute -top-24 md:-top-48 left-0 right-0 bottom-0 w-full pointer-events-none"
        style={{
          backgroundImage: 'url(/footer/footer-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Container */}
      <div className="relative w-full max-w-[386px] md:max-w-[1314px] mx-auto">
        {/* SVG Border - Desktop only */}
        <svg 
          className="hidden md:block absolute inset-0 w-full h-full pointer-events-none" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1315 566" 
          fill="none"
          preserveAspectRatio="none"
        >
          <path 
            d="M0.5 50.5V565.5M1314.5 565.5V50.5C1314.5 22.8858 1292.11 0.5 1264.5 0.5H50.5C22.8858 0.5 0.5 22.8858 0.5 50.5" 
            stroke="#B784FF"
            strokeWidth="1"
            fill="none"
          />
        </svg>

        {/* Content */}
        <div className="relative px-6 md:px-8 lg:px-20 md:pt-16 md:pb-8 mt-0 md:mt-8">
          <div className="max-w-7xl mx-auto">
            {/* Mobile: Card with border and rounded corners */}
            <div className="md:hidden border border-[#B784FF] rounded-[40px] p-4 translate-y-5 -mb-5 animate-fade-in opacity-0 [--animation-delay:200ms]">
              {/* Logo - Left aligned */}
              <div className="flex flex-col items-start mb-6 mt-6 ml-6">
                <img
                  className="w-[120px] object-cover mb-4"
                  alt="Company logo"
                  src="/footer/thaurus-logo.svg"
                />

                <img
                  className="w-[200px] h-auto"
                  alt="Social media links"
                  src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-181.svg"
                />
              </div>

              {/* Accordion sections */}
              <div className="flex flex-col mb-4 ml-6">
                {footerColumns.map((column) => (
                  <div key={column.title}>
                    {/* Section header - Clickable */}
                    <button
                      onClick={() => toggleSection(column.title)}
                      className="w-full flex items-center gap-2 py-3 text-left group"
                    >
                      <h3 className="[font-family:'Cambay',Helvetica] font-normal text-white text-[16px] tracking-[0.16px] leading-normal">
                        {column.title}
                      </h3>
                      <ChevronRight 
                        className={`w-4 h-4 text-white transition-transform duration-300 ${
                          openSections.includes(column.title) ? 'rotate-90' : ''
                        }`}
                      />
                    </button>

                    {/* Section content - Expandable */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openSections.includes(column.title) 
                          ? 'max-h-[500px] opacity-100 mb-2' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className="flex flex-col gap-2 pl-0 pb-2">
                        {column.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href="#"
                              className="[font-family:'Poppins',Helvetica] font-normal text-[#b882fb] text-xs tracking-[0.12px] leading-normal hover:text-white transition-colors"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Disclaimer - Inside mobile card */}
              <Separator className="bg-white/20 mb-4" />
              <div className="max-w-[321px]">
                <h4 className="[font-family:'Poppins',Helvetica] font-light text-[#b982fb] text-[8px] tracking-[0.08px] leading-normal opacity-[0.57] mb-2" style={{ fontWeight: 300 }}>
                  Disclaimer
                </h4>
                <p className="[font-family:'Poppins',Helvetica] text-[#b982fb] text-[8px] tracking-[0.08px] leading-normal opacity-[0.57] pb-4" style={{ fontWeight: 300 }}>
                  Thaurusguru is a trading education and evaluation company that
                  does not in any way collect customer deposits or offer any
                  financial services to customers. Thaurusguru only provides
                  services of simulated trading and educational tools for traders.
                  All trading accounts provided to customers are part of a virtual
                  demo environment using purely virtual money. The information on
                  this site is not directed at residents in any country or
                  jurisdiction where such distribution or use would be contrary to
                  local laws or regulations. All information on this website is
                  solely for educational purposes related to trading on financial
                  markets. Any opinions, news, research, analysis, prices, or other
                  information contained on this website is provided as general
                  market commentary and does not constitute any investment advice.
                  Thaurusguru does not provide any investment recommendation,
                  business recommendation, investment opportunity analysis or
                  similar general recommendation regarding the trading of investment
                  instruments. The offered technical solution for the Thaurusguru
                  platforms and data feed is powered by Thaurus Ltd, a licensed
                  investment broker. Certain restrictions for access to services
                  shall apply to Customers being residents or nationals of the
                  United States of America, North Korea, Iran, Russia and others,
                  depending on the actual list of acceptable jurisdictions. Please
                  check the updated list.
                </p>
              </div>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <div className="lg:col-span-1">
                <img
                  className="object-cover mb-6"
                  alt="Company logo"
                  src="/footer/thaurus-logo.svg"
                />

                <img
                  className="w-[258px] h-[31px]"
                  alt="Social media links"
                  src="https://c.animaapp.com/mishf4erVkDEuN/img/frame-181.svg"
                />
              </div>

              {footerColumns.map((column, index) => (
                <nav
                  key={column.title}
                  className="flex flex-col gap-2 translate-y-[-1rem] animate-fade-in opacity-0 md:ml-16"
                  style={
                    {
                      "--animation-delay": `${400 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <h3 className="[font-family:'Cambay',Helvetica] font-normal text-white text-[22px] tracking-[0.22px] leading-normal mb-2">
                    {column.title}
                  </h3>
                  <ul className="flex flex-col gap-1">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="[font-family:'Poppins',Helvetica] font-normal text-[#b882fb] text-sm tracking-[0.14px] leading-normal hover:text-white transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <Separator className="bg-white/20 mb-4 md:mb-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]" />

            <div className="hidden md:block translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
              <h4 className="[font-family:'Poppins',Helvetica] font-light text-[#b982fb] text-[10px] md:text-xs tracking-[0.1px] md:tracking-[0.12px] leading-normal opacity-[0.57] mb-2">
                Disclaimer
              </h4>
              <p className="[font-family:'Poppins',Helvetica] font-light text-[#b982fb] text-[10px] md:text-xs tracking-[0.1px] md:tracking-[0.12px] leading-[1.5] md:leading-normal opacity-[0.57]">
                Thaurusguru is a trading education and evaluation company that
                does not in any way collect customer deposits or offer any
                financial services to customers. Thaurusguru only provides
                services of simulated trading and educational tools for traders.
                All trading accounts provided to customers are part of a virtual
                demo environment using purely virtual money. The information on
                this site is not directed at residents in any country or
                jurisdiction where such distribution or use would be contrary to
                local laws or regulations. All information on this website is
                solely for educational purposes related to trading on financial
                markets. Any opinions, news, research, analysis, prices, or other
                information contained on this website is provided as general
                market commentary and does not constitute any investment advice.
                Thaurusguru does not provide any investment recommendation,
                business recommendation, investment opportunity analysis or
                similar general recommendation regarding the trading of investment
                instruments. The offered technical solution for the Thaurusguru
                platforms and data feed is powered by Thaurus Ltd, a licensed
                investment broker. Certain restrictions for access to services
                shall apply to Customers being residents or nationals of the
                United States of America, North Korea, Iran, Russia and others,
                depending on the actual list of acceptable jurisdictions. Please
                check the updated list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};