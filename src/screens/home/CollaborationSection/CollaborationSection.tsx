export const CollaborationSection = () => {
  return (
    <section className="relative w-full pt-12 md:pt-20 pb-12 md:pb-20 overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Logos with X separator - LARGER on mobile */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          <img
            src="/collaboration/thaurus-logo.svg"
            alt="Thaurus Guru"
            className="w-[180px] md:w-[354.733px] h-auto"
          />
          <img
            src="/collaboration/X.svg"
            alt="X"
            className="h-[16.739px] md:h-[20.739px] w-auto"
          />
          <a href="https://scope360.io/" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:opacity-80 transition-opacity">
            <img
              src="/collaboration/scope.svg"
              alt="Scope360"
              className="w-[180px] md:w-[312.733px] h-auto"
            />
          </a>
        </div>

        {/* Heading - LARGER on mobile */}
        <h2 className="w-full max-w-[320px] md:max-w-[678px] mx-auto text-[#F7F8F8] text-center font-['Blinker'] text-2xl md:text-[48px] font-normal leading-9 md:leading-[56px] mb-4 md:mb-6">
          The Best Trading Journal
        </h2>

        {/* Description */}
        <p className="w-full max-w-[290px] md:max-w-[1086px] mx-auto text-[#F7F8F8] text-center font-['Cambay'] text-sm md:text-xl font-normal leading-6 md:leading-7 tracking-[-0.3px] mb-8 md:mb-12">
          We've partnered with the Scope360° to provide you with institutional-grade tools for analyzing your trading. Track your performance, manage risk and scale your funding with precision analytics.
        </p>

        {/* Dashboard images */}
        <div className="relative w-full max-w-[290px] md:max-w-[1200px] mx-auto">
          {/* Ellipse background effect */}
          <img
            src="/collaboration/Ellipse 5.png"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[1200px] h-auto pointer-events-none z-0 opacity-100"
          />
          
          {/* Main dashboard image */}
          <img
            src="/collaboration/browser.svg"
            alt="Trading Dashboard"
            className="relative w-[238.834px] md:w-full h-[153.817px] md:h-auto rounded-lg shadow-2xl z-10 mx-auto"
          />
          
          {/* Scope image - positioned on the right side */}
          <img
            src="/collaboration/scopeelement (1).svg"
            alt="Scope Analytics"
            className="absolute top-[70%] -right-2 md:-right-8 -translate-y-1/2 w-[74.412px] md:w-[300px] h-[106.781px] md:h-auto rounded-lg shadow-2xl z-20"
          />
        </div>
      </div>
    </section>
  );
};