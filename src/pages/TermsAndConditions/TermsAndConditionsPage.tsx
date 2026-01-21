import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { TermsAndConditionsContent } from "../../screens/termsandconditions/TermsAndConditionsContent/TermsAndConditionsContent";
import "../../index.css";

export const TermsAndConditionsPage = () => {
  return (
    <div className="bg-[#1b082e] w-full min-h-screen relative overflow-hidden flex flex-col">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <img
          src="/bg2.png"
          alt=""
          className="absolute top-0 left-0 w-full h-auto opacity-30"
        />
      </div>

      <Header />

      <main className="relative z-10 pt-32 pb-20 grow">
        <TermsAndConditionsContent />
      </main>

      <footer className="relative z-10">
        <FooterSection />
      </footer>
    </div>
  );
};
