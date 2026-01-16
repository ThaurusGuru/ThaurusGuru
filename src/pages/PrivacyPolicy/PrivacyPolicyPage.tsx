import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { PrivacyPolicyContent } from "../../screens/privacypolicy/PrivacyPolicyContent/PrivacyPolicyContent";
import "../../index.css";

export const PrivacyPolicyPage = () => {
  return (
    <div className="bg-[#1b082e] w-full min-h-screen relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <img
          src="/bg2.png"
          alt=""
          className="absolute top-0 left-0 w-full h-auto opacity-30"
        />
      </div>

      <Header />

      <main className="relative z-10 pt-20">
        <PrivacyPolicyContent />
      </main>

      <footer className="relative z-10">
        <FooterSection />
      </footer>
    </div>
  );
};
