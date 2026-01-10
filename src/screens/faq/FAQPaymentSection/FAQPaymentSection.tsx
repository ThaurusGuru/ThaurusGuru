import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqData = [
  {
    number: "01",
    question: "Crypto (USDC, BTC, ETH and others via Confirmo)",
    answer: "Crypto is the primary global payment method and the recommended option for most traders. Payments are processed through Confirmo, a secure crypto gateway.\n\nBest for: All regions worldwide, Traders using USDT, BTC, ETH and other major coins, Fast and reliable transactions.\n\nAdvantages:\n• Instant confirmation\n• No bank restrictions\n• Works in countries where card payments fail\n• Low fees and high availability\n\nCrypto (via Confirmo) is the most universal, stable, and accessible method for all traders.",
  },
  {
    number: "02",
    question: "Bank Transfer",
    answer: "Available in regions that support international bank payments.\n\nBest for: Europe, UK, Middle East.\n\nNotes:\n• Processing time: 1–5 business days\n• May include additional bank fees\n• Currency exchange handled by your bank\n\nBank transfer is recommended for traders who prefer traditional financial channels.",
  },
  {
    number: "03",
    question: "Card Payments (Debit & Credit)",
    answer: "Supported worldwide depending on issuing bank restrictions.\n\nBest for: Europe, Asia, Middle East.\n\nNotes:\n• Requires 3D Secure verification in many regions\n• Some banks may decline international transactions\n• Fastest non-crypto alternative\n\nCard payments are convenient but may fail in countries with strict financial regulations.",
  },
  {
    number: "04",
    question: "UPI (India)",
    answer: "Available exclusively for India-based clients. Best for PhonePe, Google Pay, and Paytm.\n\nUPI is the most convenient payment option for Indian traders.",
  },
  {
    number: "05",
    question: "Flutterwave (Africa)",
    answer: "Built specifically for African regions (Nigeria, South Africa, etc.).\n\nFlutterwave ensures Africa-based traders can pay quickly and reliably without needing international cards.",
  },
  {
    number: "06",
    question: "Which Method Should You Choose?",
    answer: "Europe / UK: Crypto (Confirmo), Card, Bank Transfer\nIndia: UPI, Crypto (Confirmo)\nAfrica: Flutterwave, Crypto (Confirmo)\nMiddle East: Crypto (Confirmo), Card",
  },
];

export const FAQPaymentSection = () => {
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
            Available Payment
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
        </div>
      </div>
    </section>
  );
};
