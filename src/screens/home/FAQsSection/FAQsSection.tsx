import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqData = [
  {
    id: "item-1",
    number: "01",
    question: "At what stage is the KYC verification required?",
    answer:
      "KYC verification is required when you request your first payout. You'll need to provide valid identification documents and proof of address to complete the verification process. This is a one-time requirement to ensure compliance with financial regulations.",
  },
  {
    id: "item-2",
    number: "02",
    question: "Who can join Thaurus Guru?",
    answer:
      "Anyone aged 18 or older is welcome to join ThaurusGuru, as long as they are not located in a restricted country.\nWe currently do not accept applications from residents of jurisdictions under international sanctions or local regulatory restrictions.",
  },
  {
    id: "item-3",
    number: "03",
    question: "Why should i join Thaurus Guru?",
    answer:
      "Thaurus Guru offers professional trading opportunities with institutional-grade tools, transparent profit sharing, and flexible account sizes. You'll benefit from our comprehensive support system, advanced analytics, and a thriving community of traders worldwide.",
  },
  {
    id: "item-4",
    number: "04",
    question: "Is Thaurus Guru a trustworthy company?",
    answer:
      "Yes, Thaurus Guru is built on transparency and professionalism. We provide regular payouts, maintain clear trading rules, and offer full support to our traders. Our track record and community testimonials demonstrate our commitment to trader success.",
  },
];

export const FAQsSection = () => {
  return (
    <section className="relative w-full flex flex-col gap-8 md:gap-14 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] px-4 py-12 md:py-20">
      {/* Heading - Responsive */}
      <h2 className="self-center bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[24px] md:text-[42px] text-center tracking-[0.24px] md:tracking-[0.42px] leading-[normal]">
        FAQs
      </h2>

      <div className="max-w-[390px] md:max-w-[1100px] mx-auto w-full">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-2"
          className="flex flex-col"
        >
          {faqData.map((faq, index) => (
            <div key={faq.id}>
              <AccordionItem
                value={faq.id}
                className={`accordion-item-gradient-border ${index === faqData.length - 1 ? "border-b-0" : ""}`}
              >
                <AccordionTrigger className="group flex items-center justify-between gap-3 md:gap-8 pl-4 md:pl-16 pr-4 md:pr-8 py-4 md:py-6 hover:no-underline [&[data-state=open]_.question-text]:text-[#7A27EF] [&[data-state=open]_.serial-number]:text-[#7A27EF] [&>svg]:hidden">
                  {/* Mobile: Vertical layout, Desktop: Horizontal layout */}
                  <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-64 flex-1">
                    <span className="serial-number text-[#A0A3BD] font-['Inter'] text-[14px] md:text-[18px] font-semibold leading-[135%] transition-colors">
                      {faq.number}
                    </span>
                    <span className="question-text w-full md:w-[490px] md:min-w-[490px] md:max-w-[490px] text-white font-['Inter'] text-[14px] md:text-[18px] font-semibold leading-[135%] transition-colors text-left">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Custom icon */}
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                    <span className="text-white text-xl md:text-2xl font-light leading-none group-data-[state=open]:hidden">+</span>
                    <span className="text-white text-xl md:text-2xl font-light leading-none hidden group-data-[state=open]:block">×</span>
                  </div>
                </AccordionTrigger>

                {faq.answer && (
                  <AccordionContent className="pl-4 md:pl-16 pr-4 md:pr-8 pb-4 md:pb-6">
                    {/* Mobile: No left spacing, Desktop: Maintains alignment */}
                    <div className="flex flex-col md:flex-row gap-3 md:gap-64">
                      <div className="hidden md:block md:w-[18px]" />
                      <p className="flex-1 text-[#88729E] font-['Inter'] text-[12px] md:text-[14px] font-normal leading-[150%] whitespace-pre-line">
                        {faq.answer}
                      </p>
                      <div className="hidden md:block md:w-6" />
                    </div>
                  </AccordionContent>
                )}
              </AccordionItem>
              
              {/* Gradient divider line - Responsive width */}
              {index < faqData.length - 1 && (
                <div className="w-full flex justify-center my-0">
                  <div 
                    className="w-full md:w-[1160px] h-[1px]"
                    style={{ background: 'linear-gradient(90deg, #1B092E 0%, #9368C8 50%, #1B092E 100%)' }}
                  />
                </div>
              )}
            </div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};