import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { AffiliateHeroSection } from "../../screens/affiliate/AffiliateHeroSection";
import { AffiliatePartnerSection } from "../../screens/affiliate/AffiliatePartnerSection";
import "../../index.css";

export const AffiliatePage = () => {
  return (
    <div
      className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden"
    >
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative w-full">
        <AffiliateHeroSection />
        <AffiliatePartnerSection />
      </main>

      {/* Footer */}
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};