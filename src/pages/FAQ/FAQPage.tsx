import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { FAQWhySection } from "../../screens/faq/FAQWhySection";
import { FAQFundingSection } from "../../screens/faq/FAQFundingSection";
import { FAQRulesSection } from "../../screens/faq/FAQRulesSection";
import { FAQPaymentSection } from "../../screens/faq/FAQPaymentSection";
import { FAQAffiliateSection } from "../../screens/faq/FAQAffiliateSection";
import { FAQPayoutsSection } from "../../screens/faq/FAQPayoutsSection";
import { FAQScalingSection } from "../../screens/faq/FAQScalingSection";
import "../../index.css";

export const FAQPage = () => {
  return (
    <div className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden">
      <Header />
      <main className="relative w-full pb-20">
        <FAQWhySection />
        <FAQFundingSection />
        <FAQRulesSection />
        <FAQPaymentSection />
        <FAQAffiliateSection />
        <FAQPayoutsSection />
        <FAQScalingSection />
      </main>
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};
