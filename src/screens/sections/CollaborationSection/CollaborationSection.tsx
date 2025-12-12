export const CollaborationSection = () => {
  return (
    <section className="relative w-full pt-70 pb-20 overflow-hidden">
      {/* Background glow effect at center */}
      <img
        src="/collaboration/bg.png"
        alt=""
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-auto opacity-80 pointer-events-none z-0"
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Logos with X separator */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <img
            src="/collaboration/thaurus-logo.svg"
            alt="Thaurus Guru"
            className="w-[354.733px] h-[118.54px]"
            style={{ aspectRatio: '354.73/118.54' }}
          />
          <span className="text-white text-center font-['SF_Pro_Display'] text-[26.739px] font-medium">
            x
          </span>
          <img
            src="/collaboration/scope.svg"
            alt="Scope360"
            className="w-[210.805px] h-[41.758px]"
          />
        </div>

        {/* Heading */}
        <h2 className="w-full max-w-[678px] mx-auto text-[#F7F8F8] text-center font-['Blinker'] text-[48px] font-normal leading-[56px] mb-6">
          The Best Trading Journal
        </h2>

        {/* Description */}
        <p className="w-full max-w-[1086px] mx-auto text-[#F7F8F8] text-center font-['Cambay'] text-xl font-normal leading-7 tracking-[-0.3px] mb-12">
          We've partnered with the Scope360° to provide you with institutional-grade tools for analyzing your trading. Track your performance, manage risk and scale your funding with precision analytics.
        </p>

        {/* Dashboard images */}
        <div className="relative w-full max-w-[1200px] mx-auto">
          {/* Ellipse background effect */}
          <img
            src="/collaboration/Ellipse 5.png"
            alt=""
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-auto pointer-events-none z-0 opacity-100"
          />
          
          {/* Main dashboard image */}
          <img
            src="/collaboration/browser.svg"
            alt="Trading Dashboard"
            className="relative w-full h-auto rounded-lg shadow-2xl z-10"
          />
          
          {/* Scope image - positioned on the right side */}
          <img
            src="/collaboration/scopeelement (1).svg"
            alt="Scope Analytics"
            className="absolute top-[70%] -right-8 -translate-y-1/2 w-[300px] h-auto rounded-lg shadow-2xl z-20"
          />
        </div>
      </div>
    </section>
  );
};
