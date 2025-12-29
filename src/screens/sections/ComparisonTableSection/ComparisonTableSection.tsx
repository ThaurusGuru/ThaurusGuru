import { Card, CardContent } from "../../../components/ui/card";

const tableData = [
  {
    feature: "Profit Share",
    values: [
      "80%",
      "50% (up to 100%)",
      "80% (up to 95%)",
      "80% (up to 100%)",
      "80%",
      "80% (up to 90%)",
    ],
  },
  {
    feature: "Profit Target",
    values: [
      "8%/4%",
      "10% (1-step)",
      "8%/5%",
      "8%/5%",
      "8%/5%",
      "10% (1-step)",
    ],
  },
  {
    feature: "Salary",
    values: ["No", "No", "No", "No", "No", "No"],
  },
  {
    feature: "Drawdown",
    values: [
      "Balance (4% daily/ 10% max)",
      "Balance (4% daily / 6% max)",
      "Balance (5% daily/ 10% max)",
      "Balance (5% daily/ 10% max)",
      "Equity - Dynamic (5% daily / 10% max)",
      "Balance (4% daily / 6% max)",
    ],
  },
  {
    feature: "Competitions",
    values: ["No", "Yes", "Yes", "No", "No", "Yes"],
  },
  {
    feature: "News Trading",
    values: ["No (5 min buffer)", "Yes", "Yes", "Yes", "Yes", "Yes"],
  },
  {
    feature: "Weekend Trading on MT4/MT5",
    values: ["Yes (add-on)", "Yes", "Yes", "Yes", "No (cTrader only)", "Yes"],
  },
  {
    feature: "Locations",
    values: [
      "Global (Slovakia/ Mauritius)",
      "Global",
      "Global (UAE)",
      "Global (UAE)",
      "Global (UK)",
      "Global",
    ],
  },
  {
    feature: "Free Refund",
    values: [
      "After 2nd payout",
      "100% upon passing",
      "1st withdrawal",
      "4th withdrawal",
      "No",
      "100% upon passing",
    ],
  },
];

export const ComparisonTableSection = () => {
  return (
    <section className="relative w-full py-12 md:py-16 translate-y-[-1rem] animate-fade-in opacity-0 overflow-hidden">
      <div className="container mx-auto px-4 max-w-[1160px] pt-16 md:pt-24 relative z-10">
        <h2 className="w-full max-w-[240px] md:max-w-none mx-auto text-center bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-[24px] md:text-[42px] leading-[35px] md:leading-[78px] mb-20 md:mb-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          Compare. Evaluate. Choose Smarter.
        </h2>

        {/* Mobile: Horizontal scroll wrapper - MORE ZOOMED */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <Card className="relative rounded-[20px] shadow-[0px_4px_55px_#00000040] [background:radial-gradient(50%_50%_at_50%_50%,rgba(96,32,163,0.43)_0%,rgba(36,12,61,0.43)_100%)] border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] min-w-[1100px]">
            <CardContent className="p-0">
              {/* Table Header */}
              <div className="grid grid-cols-7 rounded-tl-[20px] rounded-tr-[20px] overflow-hidden">
                {/* Feature Column Header - Purple */}
                <div className="px-5 py-5 flex items-center justify-center bg-[#1a0a2e]">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-[#c8a2ef] text-base">
                    Feature
                  </span>
                </div>
                
                {/* THAURUS GURU Header - Professional Purple with Elegant Glow */}
                <div className="px-5 py-4 flex items-center justify-center bg-[linear-gradient(180deg,rgba(59,15,105,0.95)_0%,rgba(36,12,61,1)_100%)] border-l-2 border-[#b882fb] shadow-[0_0_40px_rgba(184,130,251,0.6),inset_0_0_20px_rgba(184,130,251,0.15)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 z-0" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,130,251,0.25)_0%,transparent_70%)] z-[1]" />
                  <img
                    className="w-32 h-11 object-contain filter brightness-150 contrast-125 drop-shadow-[0_0_25px_rgba(255,255,255,1)] saturate-110 relative z-10"
                    alt="THAURUS GURU"
                    src="/Thaurus-logo.png"
                  />
                </div>

                {/* 5%ers Header */}
                <div className="px-5 py-4 flex items-center justify-center bg-[#0a0515]">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                    5%ers
                  </span>
                </div>

                {/* FundedNext Header */}
                <div className="px-5 py-4 flex items-center justify-center bg-[#1a0a2e]">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                    FundedNext
                  </span>
                </div>

                {/* Funding Pips Header */}
                <div className="px-5 py-4 flex items-center justify-center bg-[#0a0515]">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                    Funding Pips
                  </span>
                </div>

                {/* Alpha Capital Group Header */}
                <div className="px-5 py-4 flex items-center justify-center bg-[#1a0a2e]">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                    Alpha Capital Group
                  </span>
                </div>

                {/* FXIFY Header */}
                <div className="px-5 py-4 flex items-center justify-center bg-[#0a0515]">
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                    FXIFY
                  </span>
                </div>
              </div>

              {/* Table Body */}
              <div className="grid grid-cols-7 rounded-bl-[20px] rounded-br-[20px] overflow-hidden">
                {/* Feature Column */}
                <div className="bg-[linear-gradient(180deg,rgba(50,8,94,0.31)_0%,rgba(33,11,58,0.71)_100%)]">
                  {tableData.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="px-5 py-5 h-[76px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-[#c8a2ef] text-[15px] text-center"
                    >
                      {row.feature}
                    </div>
                  ))}
                </div>

                {/* THAURUS GURU Column */}
                <div className="shadow-[inset_0px_0px_40px_#e8b0ff80,0_0_50px_rgba(184,130,251,0.5),0_0_100px_rgba(123,39,239,0.3)] bg-[linear-gradient(180deg,rgba(123,39,239,0.4)_0%,rgba(98,0,255,0.35)_30%,rgba(123,39,239,0.25)_70%,rgba(184,130,251,0.2)_100%)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,130,251,0.3)_0%,transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(123,39,239,0.2)_0%,transparent_50%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(184,130,251,0.15)_0%,rgba(123,39,239,0.1)_50%,rgba(184,130,251,0.15)_100%)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(233,177,255,0.15)_50%,transparent_60%)] bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
                  
                  {tableData.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="px-5 py-5 h-[76px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-[13px] text-center relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                    >
                      {row.values[0]}
                    </div>
                  ))}
                </div>

                {/* Other Company Columns */}
                {[1, 2, 3, 4, 5].map((colIndex) => (
                  <div 
                    key={colIndex}
                    className={colIndex % 2 === 1 
                      ? "bg-[linear-gradient(180deg,rgba(98,0,255,0.15)_0%,rgba(233,177,255,0.05)_100%)]"
                      : "bg-[linear-gradient(180deg,rgba(50,8,94,0.31)_0%,rgba(33,11,58,0.71)_100%)]"
                    }
                  >
                    {tableData.map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="px-5 py-5 h-[76px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-light text-[#c7a2ef] text-[13px] text-center"
                      >
                        {row.values[colIndex]}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Desktop Table - same as before */}
        <Card className="hidden md:block relative rounded-[20px] shadow-[0px_4px_55px_#00000040] [background:radial-gradient(50%_50%_at_50%_50%,rgba(96,32,163,0.43)_0%,rgba(36,12,61,0.43)_100%)] border-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <CardContent className="p-0">
            {/* Table Header */}
            <div className="grid grid-cols-7 rounded-tl-[20px] rounded-tr-[20px] overflow-hidden">
              {/* Feature Column Header - Purple */}
              <div className="px-4 py-6 flex items-center justify-center bg-[#1a0a2e]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[#c8a2ef] text-base">
                  Feature
                </span>
              </div>
              
              {/* THAURUS GURU Header - Professional Purple with Elegant Glow */}
              <div className="px-4 py-3 flex items-center justify-center bg-[linear-gradient(180deg,rgba(59,15,105,0.95)_0%,rgba(36,12,61,1)_100%)] border-l-2 border-[#b882fb] shadow-[0_0_40px_rgba(184,130,251,0.6),inset_0_0_20px_rgba(184,130,251,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,130,251,0.25)_0%,transparent_70%)] z-[1]" />
                <img
                  className="w-32 h-11 object-contain filter brightness-150 contrast-125 drop-shadow-[0_0_25px_rgba(255,255,255,1)] saturate-110 relative z-10"
                  alt="THAURUS GURU"
                  src="/Thaurus-logo.png"
                />
              </div>

              {/* 5%ers Header */}
              <div className="px-4 py-3 flex items-center justify-center bg-[#0a0515]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                  5%ers
                </span>
              </div>

              {/* FundedNext Header */}
              <div className="px-4 py-3 flex items-center justify-center bg-[#1a0a2e]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                  FundedNext
                </span>
              </div>

              {/* Funding Pips Header */}
              <div className="px-4 py-3 flex items-center justify-center bg-[#0a0515]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                  Funding Pips
                </span>
              </div>

              {/* Alpha Capital Group Header */}
              <div className="px-4 py-3 flex items-center justify-center bg-[#1a0a2e]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                  Alpha Capital Group
                </span>
              </div>

              {/* FXIFY Header */}
              <div className="px-4 py-3 flex items-center justify-center bg-[#0a0515]">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-base text-center">
                  FXIFY
                </span>
              </div>
            </div>

            {/* Table Body */}
            <div className="grid grid-cols-7 rounded-bl-[20px] rounded-br-[20px] overflow-hidden">
              {/* Feature Column */}
              <div className="bg-[linear-gradient(180deg,rgba(50,8,94,0.31)_0%,rgba(33,11,58,0.71)_100%)]">
                {tableData.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="px-4 py-5 h-[76px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-[#c8a2ef] text-base text-center"
                  >
                    {row.feature}
                  </div>
                ))}
              </div>

              {/* THAURUS GURU Column - Fully Immersive Elegant Glow */}
              <div className="shadow-[inset_0px_0px_40px_#e8b0ff80,0_0_50px_rgba(184,130,251,0.5),0_0_100px_rgba(123,39,239,0.3)] bg-[linear-gradient(180deg,rgba(123,39,239,0.4)_0%,rgba(98,0,255,0.35)_30%,rgba(123,39,239,0.25)_70%,rgba(184,130,251,0.2)_100%)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(184,130,251,0.3)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(123,39,239,0.2)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(184,130,251,0.15)_0%,rgba(123,39,239,0.1)_50%,rgba(184,130,251,0.15)_100%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(233,177,255,0.15)_50%,transparent_60%)] bg-[length:200%_100%] animate-[shimmer_3s_ease-in-out_infinite]" />
                
                {tableData.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="px-4 py-5 h-[76px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-medium text-white text-[13px] text-center relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                  >
                    {row.values[0]}
                  </div>
                ))}
              </div>

              {/* Other Company Columns */}
              {[1, 2, 3, 4, 5].map((colIndex) => (
                <div 
                  key={colIndex}
                  className={colIndex % 2 === 1 
                    ? "bg-[linear-gradient(180deg,rgba(98,0,255,0.15)_0%,rgba(233,177,255,0.05)_100%)]"
                    : "bg-[linear-gradient(180deg,rgba(50,8,94,0.31)_0%,rgba(33,11,58,0.71)_100%)]"
                  }
                >
                  {tableData.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="px-4 py-5 h-[76px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-light text-[#c7a2ef] text-[13px] text-center"
                    >
                      {row.values[colIndex]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};