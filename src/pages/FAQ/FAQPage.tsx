import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { FAQWhySection } from "../../screens/faq/FAQWhySection";
import { FAQFundingSection } from "../../screens/faq/FAQFundingSection";
import { FAQRulesSection } from "../../screens/faq/FAQRulesSection";
import { FAQPaymentSection } from "../../screens/faq/FAQPaymentSection";
import { FAQAffiliateSection } from "../../screens/faq/FAQAffiliateSection";
import { FAQPayoutsSection } from "../../screens/faq/FAQPayoutsSection";
import { FAQScalingSection } from "../../screens/faq/FAQScalingSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import "../../index.css";

const faqSections = [
  { 
    title: "WHY THAURUSGURU", 
    description: "About the company, trust, legal structure, and mission",
    Component: FAQWhySection 
  },
  { title: "Funding Models", Component: FAQFundingSection },
  { title: "Trading Rules", Component: FAQRulesSection },
  { title: "Available Payment", Component: FAQPaymentSection },
  { title: "Affiliate", Component: FAQAffiliateSection },
  { title: "Payouts", Component: FAQPayoutsSection },
  { title: "Scaling Plan", Component: FAQScalingSection },
];

export const FAQPage = () => {
  return (
    <div className="bg-[#1b082e] w-full min-h-screen relative overflow-hidden">
      <Header />
      <main className="relative w-full flex flex-col items-center pb-20 px-4">
        {/* Main Hero Header */}
        <h1 
          className="font-['M_PLUS_2',Helvetica] animate-fade-in opacity-0 [--animation-delay:200ms]"
          style={{
            marginTop: '180px',
            textAlign: 'center',
            width: '100%',
            fontSize: '42px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '60px',
            background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '60px'
          }}
        >
          Frequently Asked Questions
        </h1>

        <div className="w-full max-w-[1100px] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {/* Master Accordion for all categories */}
          <Accordion type="multiple" className="flex flex-col gap-6">
            {faqSections.map((section, index) => (
              <AccordionItem
                key={index}
                value={`category-${index}`}
                className="border-b border-[#34006B]/40"
              >
                <div className="flex flex-col items-start w-full">
                  <AccordionTrigger className="group flex items-center justify-start gap-4 py-6 px-4 md:px-16 hover:no-underline [&[data-state=open]_.cat-title]:text-[#E9B1FF] transition-all [&>svg]:hidden">
                    <div className="flex flex-col items-start gap-1">
                      <span className="cat-title text-white font-['M_PLUS_2',Helvetica] text-[24px] md:text-[32px] font-normal text-left tracking-wide">
                        {index + 1}. {section.title}
                      </span>
                      {section.description && (
                        <span className="text-[#A0A3BD] font-['Inter'] text-[14px] md:text-[16px] font-normal opacity-70">
                          {section.description}
                        </span>
                      )}
                    </div>
                    <div className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90 ml-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="#E9B1FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="w-full pb-10">
                    <section.Component />
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};
