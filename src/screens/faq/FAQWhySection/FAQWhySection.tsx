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
    answer: "Anyone aged 18 or older can join ThaurusGuru, as long as they are not located in a restricted or sanctioned jurisdiction.\n\nWe welcome traders from around the world — beginners, intermediate traders, and experienced professionals — who want to grow under a structured and transparent prop trading model.",
  },
  {
    id: "item-2",
    number: "02",
    question: "WHY SHOULD I JOIN THAURUSGURU?",
    answer: "ThaurusGuru is designed for traders who want real structure, real rules, and real payouts.\n\nHere’s why thousands of traders choose our platform:\n\n• Transparent Evaluation Models – Our challenges are built to measure skill, not luck. Rules are clear and fully documented.\n\n• Backed by a Licensed Broker – All trading infrastructure runs through our regulated partner, ensuring safety, compliance, and stable execution.\n\n• Fast, Reliable Payouts – Funded traders earn up to 95% profit split, with bi-weekly or weekly payouts depending on the add-on.\n\n• No Hidden Fees – No commissions per lot, no surprise charges.\n\n• AI-Powered Tools – Our proprietary AI systems support your learning, analysis, and trading routine.\n\n• Scaling Opportunities – Consistent traders grow their accounts up to $300,000 through our Scaling Plan.\n\nIf you want a trustworthy, long-term prop trading environment, ThaurusGuru is built for you.",
  },
  {
    id: "item-3",
    number: "03",
    question: "IS THAURUSGURU A TRUSTWORTHY COMPANY?",
    answer: "Yes. ThaurusGuru operates in partnership with Thaurus Ltd., a licensed and regulated broker supervised by the Financial Services Commission (FSC) of Mauritius.\n\nThis means:\n\n• All trading is executed on regulated infrastructure\n\n• Market data and pricing come from real liquidity providers\n\n• Your evaluations and funded accounts are monitored under strict compliance requirements\n\nWe are legally registered in the EU (Slovakia) and operate with full transparency.",
  },
  {
    id: "item-4",
    number: "04",
    question: "AT WHAT STAGE IS THE KYC VERIFICATION REQUIRED?",
    answer: "KYC is required before receiving your funded account.\n\nTo avoid delays, we recommend completing KYC immediately after purchasing a challenge.\n\nThe process includes:\n\n1. ID Verification (passport or national ID) – required before trading begins\n\n2. Proof of Address – required before your first payout\n\nYou may submit these steps separately. All data is handled securely and in line with regulatory standards.",
  },
  {
    id: "item-5",
    number: "05",
    question: "HOW DOES THE FUNDING PROCESS WORK?",
    answer: "1. Choose your evaluation model and trade within the rules.\n\n2. Reach the profit target and complete the minimum trading days.\n\n3. After approval, you receive a funded account and can request real payouts.",
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
    <section className="relative w-full flex flex-col items-center overflow-visible px-4 mb-20 animate-fade-in opacity-0 [--animation-delay:200ms]">
      <div className="relative w-full max-w-[1440px] flex flex-col items-center px-0">
        <div className="flex flex-col items-start w-full max-w-[1100px]">
          {/* Main Hero Header */}
          <h1 
            className="font-['M_PLUS_2',Helvetica]"
            style={{
              marginTop: '245px',
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
            }}
          >
            Frequently Asked Questions
          </h1>

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
            Why Thaurus Guru?
          </h2>

          <div className="w-full mt-10">
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
        </div>
      </div>
    </section>
  );
};
