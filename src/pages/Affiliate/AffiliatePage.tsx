import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { AffiliateHeroSection } from "../../screens/affiliate/AffiliateHeroSection";
import { AffiliatePartnerSection } from "../../screens/affiliate/AffiliatePartnerSection";
import "../../index.css";
import { AffiliateHowItWorks } from "../../screens/affiliate/Affiliate-How-it-works";
import { AffiliateInfluencerPartnership } from "../../screens/affiliate/Affiliate-Influencer-Partnership";
import { AffiliateSubAffiliate } from "../../screens/affiliate/Affiliate-Sub-Affiliate";

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
        
        {/* Background Image 2 */}
        <img
          src="/Affiliate/Bg2.png"
          alt="Background"
          className="absolute right-0 pointer-events-none"
          style={{ 
            top: '1460px',
            zIndex: 0 
          }}
        />
        <AffiliateHowItWorks/>
        <AffiliateInfluencerPartnership />
        <AffiliateSubAffiliate />
      </main>

      {/* Footer */}
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};