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
    question: "WHO CAN JOIN THAURUSGURU?",
    answer: "Anyone aged 18 or older can join ThaurusGuru, as long as they are not located in a restricted or sanctioned jurisdiction. We welcome traders from around the world — beginners, intermediate traders, and experienced professionals — who want to grow under a structured and transparent prop trading model.",
  },
  {
    id: "item-2",
    number: "02",
    question: "WHY SHOULD I JOIN THAURUSGURU?",
    answer: "ThaurusGuru is designed for traders who want real structure, real rules, and real payouts.\nHere’s why thousands of traders choose our platform:\nTransparent Evaluation Models – Our challenges are built to measure skill, not luck. Rules are clear and fully documented.\n\n\nBacked by a Licensed Broker – All trading infrastructure runs through our regulated partner Thaurus LTD, ensuring safety, compliance, and stable execution.\n\n\nFast, Reliable Payouts – Funded traders earn up to 95% profit split, with bi-weekly or weekly payouts depending on the add-on.\n\n\nScaling Opportunities – Consistent traders grow their accounts up to $300,000 through our Scaling Plan.\nIf you want a trustworthy, long-term prop trading environment, ThaurusGuru is built for you.",
  },
  {
    id: "item-3",
    number: "03",
    question: "IS THAURUSGURU A TRUSTWORTHY COMPANY?",
    answer: "Yes. ThaurusGuru operates in partnership with Thaurus Ltd., a licensed and regulated broker supervised by the Financial Services Commission (FSC) of Mauritius.\n This means:\nAll trading is executed on regulated infrastructure\n\nMarket data and pricing come from real liquidity providers\n\nYour evaluations and funded accounts are monitored under strict compliance requirements\n\nWe are legally registered in the EU (Slovakia) and operate with full transparency.",
  },
  {
    id: "item-4",
    number: "04",
    question: "AT WHAT STAGE IS THE KYC VERIFICATION REQUIRED?",
    answer: "KYC is required before receiving your funded account.\nTo avoid delays, we recommend completing KYC immediately after purchasing a challenge.\n The process includes:\nID Verification (passport or national ID) – required before trading begins\n\nProof of Address – required before your first payout\nYou may submit these steps separately. All data is handled securely and in line with regulatory standards.",
  },
  {
    id: "item-5",
    number: "05",
    question: "HOW DOES THE FUNDING PROCESS WORK?",
    answer: "Choose your evaluation model and trade within the rules.\n\nReach the profit target and complete the minimum trading days.\n\nAfter approval, you receive a funded account and can request real payouts.",
  },
  {
    id: "item-6",
    number: "06",
    question: "DO TRADERS USE REAL MONEY?",
    answer: "All trading at ThaurusGuru uses virtual capital, not real deposited funds. This allows you to trade safely, practice your strategy, and earn real payouts without risking your own money.",
  },
];

export const FAQWhySection = () => {
  return (
    <div className="w-full mt-4">
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
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-64 flex-1">
                  <span className="serial-number text-[#A0A3BD] font-['Inter'] text-[14px] md:text-[18px] font-semibold leading-[135%] transition-colors">
                    {faq.number}
                  </span>
                  <span className="question-text w-full md:w-[490px] md:min-w-[490px] md:max-w-[490px] text-white font-['Inter'] text-[14px] md:text-[18px] font-semibold leading-[135%] transition-colors text-left uppercase">
                    {faq.question}
                  </span>
                </div>
                
                <div className="shrink-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                  <span className="text-white text-xl md:text-2xl font-light leading-none group-data-[state=open]:hidden">+</span>
                  <span className="text-white text-xl md:text-2xl font-light leading-none hidden group-data-[state=open]:block">×</span>
                </div>
              </AccordionTrigger>

              {faq.answer && (
                <AccordionContent className="pl-4 md:pl-16 pr-4 md:pr-8 pb-4 md:pb-6">
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
            
            {index < faqData.length - 1 && (
              <div className="w-full flex justify-center my-0">
                <div 
                  className="w-full md:w-[1160px] h-px"
                  style={{ background: 'linear-gradient(90deg, #1B092E 0%, #9368C8 50%, #1B092E 100%)' }}
                />
              </div>
            )}
          </div>
        ))}
      </Accordion>
    </div>
  );
};
