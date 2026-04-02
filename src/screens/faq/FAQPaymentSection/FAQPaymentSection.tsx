import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqData = [
  {
    number: "01",
    question: "WHAT PAYMENT METHODS ARE AVAILABLE?",
    answer: "We support four payment methods to make sure traders from every region can get started without hassle.\n\nKoraPay, TransactPay — NGN Bank Transfer: Designed for African traders. Allows local bank transfers without needing an international card. Best for Nigeria and other supported African regions.\nCrypto — via Confirmo (Recommended): The most reliable option regardless of where you are. Supports BTC, ETH, USDC and other major coins. Instant, low fees, no bank restrictions.\nCard — including Apple Pay & Google Pay: Quick and familiar. Works in most countries, though some banks may block international transactions. Best for Europe, Asia and the Middle East.\nUPI — India: The most convenient option for Indian traders. Supports PhonePe, Google Pay and Paytm. Fast and easy local payments without needing an international card.\n\nNot sure which to pick?\nEurope / UK — Card, Crypto\nAfrica — Kora Pay, Transact Pay, Crypto\nIndia — UPI, Crypto\nMiddle East — Card, Crypto\nEverywhere else — Crypto",
  },
];

export const FAQPaymentSection = () => {
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
              value={`payment-${index}`}
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
