import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqData = [
  {
    number: "01",
    question: "How Does the Payout System Work?",
    answer: "Payouts at ThaurusGuru are processed directly from your funded account profits. To request a withdrawal, your account must meet the eligibility criteria regarding the timeline and minimum profit.\n1. The First Payout Your first payout is eligible 21 Working Days after executing the first trade on your funded account.\n2. Subsequent Payouts After the first payout is successfully processed, your schedule proceeds as follows:\nStandard Schedule: Every 14 days (Bi-Weekly).\nWith Weekly Payout Add-On: Every 7 days (Weekly).\nGeneral Payout Rules\nMinimum Withdrawal: $100 USD.\nProfit Split: 80% to the Trader / 20% to ThaurusGuru.\nMethods: Payouts are processed via Crypto (USDT, USDC) or Bank Transfer.",
  },
  {
    number: "02",
    question: "WHAT’S THE PROCESS FOR HANDLING A PAYOUT?",
    answer: "The payout process is simple and automated:\nTrade and generate profit on your funded account\n\n\nComplete your minimum trading day requirement\n\n\nSubmit a payout request directly from your client dashboard\n\n\nThe request is reviewed by the Risk Department\n\n\nIf approved, your payout is sent within the official processing window\nPayouts are typically processed quickly, depending on the chosen payment method.",
  },
  {
    number: "03",
    question: "WHEN WILL I RECEIVE MY REGISTRATION FEE REFUND?",
    answer: "Your registration fee is refunded on your first payout, provided you purchased a standard Classic Challenge.\nEligible for refund on 1st payout: Classic 2-Step, Classic 3-Step.\nNot eligible for refund: Pay As You Go.\n\nThe refund is credited alongside your second payout.",
  },
  {
    number: "04",
    question: "WHAT PAYMENT METHODS ARE AVAILABLE FOR PAYOUTS?",
    answer: "Payouts are available through:\nCrypto\nFastest and most reliable option\n\n\nWorks globally\n\n\nIdeal for traders with international banking limitations\n\n\nBank Transfer\nAvailable in regions where international transfers are supported\n\n\nProcessing time depends on your bank\n\n\nIdeal for EU/UK/Middle East traders\n\n\nYour payout method can be selected directly from your dashboard.",
  },
];

export const FAQPayoutsSection = () => {
  return (
    <div className="w-full mt-4">
      <Accordion
        type="single"
        collapsible
        className="flex flex-col"
      >
        {faqData.map((faq, index) => (
          <div key={index}>
            <AccordionItem
              value={`payout-${index}`}
              className={`accordion-item-gradient-border ${index === faqData.length - 1 ? "border-b-0" : ""}`}
            >
              <AccordionTrigger className="group flex items-center justify-between gap-3 md:gap-8 pl-4 md:pl-16 pr-4 md:pr-8 py-4 md:py-6 hover:no-underline [&[data-state=open]_.question-text]:text-[#7A27EF] [&[data-state=open]_.serial-number]:text-[#7A27EF] [&>svg]:hidden">
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-40 flex-1">
                  <span className="serial-number text-[#A0A3BD] font-['Inter'] text-[14px] md:text-[18px] font-semibold leading-[135%] transition-colors">
                    {faq.number}
                  </span>
                  <span className="question-text w-full md:w-[600px] text-white font-['Inter'] text-[14px] md:text-[18px] font-semibold leading-[135%] transition-colors text-left uppercase">
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
                  <div className="flex flex-col md:flex-row gap-3 md:gap-40">
                    <div className="hidden md:block md:w-[18px]" />
                    <p className="flex-1 text-[#88729E] font-['Inter'] text-[12px] md:text-[15px] font-normal leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </p>
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
