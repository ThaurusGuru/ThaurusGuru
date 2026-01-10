import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqData = [
  {
    number: "01",
    question: "HOW DOES THE PAYOUT SYSTEM WORK FOR A THAURUSGURU ACCOUNT?",
    answer: "Payouts at ThaurusGuru are processed directly from your funded account profits. Once you reach your first eligible payout date, you can request a withdrawal from your dashboard.\n\nThere are two payout schedules:\n• Standard Payout: every 14 days\n• Weekly Payout: available only if you selected the Weekly Payout Add-On\n\nYou keep your share of the profit according to your account type, and the payout is sent via Crypto or Bank Transfer.",
  },
  {
    number: "02",
    question: "WHAT’S THE PROCESS FOR HANDLING A PAYOUT?",
    answer: "The payout process is simple and automated:\n1. Generate profit and meet minimum trading days (if applicable).\n2. Submit request from client dashboard.\n3. Risk Department review.\n4. Approved payout is sent within the official window.\n\nProcessing speeds depend on the selected payment method.",
  },
  {
    number: "03",
    question: "WHEN WILL I RECEIVE MY REGISTRATION FEE REFUND?",
    answer: "Your registration fee is refunded on your second payout for standard Classic Challenges. The refund is credited alongside your second payout.\n\nEligible for refund: Classic 1-Step, 2-Step, 3-Step.\nNot eligible: Instant Funding, Pay As You Go, PRO Challenges.",
  },
  {
    number: "04",
    question: "WHAT PAYMENT METHODS ARE AVAILABLE FOR PAYOUTS?",
    answer: "Payouts are available through:\n\nCrypto: Fastest global option, ideal for international banking limitations.\n\nBank Transfer: Available in supported regions (ideal for EU/UK/Middle East).\n\nYour payout method can be selected directly from your dashboard.",
  },
];

export const FAQPayoutsSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center overflow-visible px-4 mb-20">
      <div className="relative w-full max-w-[1440px] flex flex-col items-center px-0">
        <div className="flex flex-col items-start w-full max-w-[1100px]">
          {/* Category Heading */}
          <h2 
            className="font-['M_PLUS_2',Helvetica] pl-4 md:pl-16"
            style={{
              marginTop: '80px',
              textAlign: 'left',
              width: '100%',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '50px',
              background: 'linear-gradient(180deg, #FFF 0%, #E9B1FF 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Payouts
          </h2>

          <div className="w-full mt-10">
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
        </div>
      </div>
    </section>
  );
};
