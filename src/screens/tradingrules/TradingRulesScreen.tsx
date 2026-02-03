import { FooterSection } from "../../screens/home/FooterSection";
import { Header } from "../../components/Header/Header";
import { TradingRulesOurRules } from "./TradingRulesOurRules/TradingRulesOurRules";
import { TradingRulesContent } from "./TradingRulesContent/TradingRulesContent";

export const TradingRulesScreen = () => {
  return (
    <div className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main 
        className="relative w-full"
        style={{
          backgroundImage: 'url(/How-it-wors-bg.png)',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <TradingRulesOurRules />
        <TradingRulesContent />
      </main>

      {/* Footer */}
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};
