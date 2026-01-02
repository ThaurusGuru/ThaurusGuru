import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import "../../index.css";

export const AffiliatePage = () => {
  return (
    <div
      className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden min-h-screen"
    >
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative w-full flex items-center justify-center min-h-screen">
        <div className="relative z-10 text-center pt-32">
          <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-[42px] md:text-[62px] tracking-[0] leading-[normal]">
            Affiliate
          </h1>
          <p className="[font-family:'Cambay',Helvetica] font-normal text-[#c193f1] text-lg mt-6">
            Coming soon...
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};
