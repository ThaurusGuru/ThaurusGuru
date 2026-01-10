import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqData = [
  {
    number: "01",
    question: "IS A STOP LOSS REQUIRED?",
    answer: "A Stop Loss is not mandatory, but all traders must remain within the allowed daily and overall drawdown limits at all times. Trading without a Stop Loss significantly increases the risk of a breach, especially during volatile market periods.\n\nFor consistency, risk management, and rule compliance, using a Stop Loss is strongly recommended.",
  },
  {
    number: "02",
    question: "CAN I HOLD TRADES DURING NEWS OR OVER THE WEEKEND?",
    answer: "News Events:\nChallenge Accounts: Restricted 5 minutes before and 5 minutes after high-impact news (unless the News Add-On is active).\nInstant Accounts: Restricted 10 minutes before and 10 minutes after high-impact news.\n\nThis applies to opening, closing, partial closures, and SL/TP triggers. Any execution within the restricted window may result in a violation.\n\nWeekend Holding:\nBy default, trades cannot remain open over the weekend on funded accounts, Instant accounts, or challenge accounts without the Weekend Add-On. All positions must be closed before the market closes on Friday.",
  },
  {
    number: "03",
    question: "WHAT DOES “PROFITABLE DAYS” MEAN?",
    answer: "A “Profitable Day” is a day in which a trader generates more than 0.5% of the starting balance in profit. This metric is used to measure consistency and to determine whether performance is stable over time rather than dependent on a single oversized winning day.",
  },
  {
    number: "04",
    question: "WHAT IS PROHIBITED FOR MY TRADING?",
    answer: "Prohibited trading refers to any activity that manipulates execution, exploits technical limitations, or artificially boosts results. This includes:\n• ultra-short scalping (under 30 seconds)\n• toxic or unrealistic order flow\n• latency or arbitrage trading\n• hedging or mirrored trading across accounts\n• copy-trading or signal mirroring\n• excessive lot size spikes\n• using bots/EAs without approval\n• news manipulation\n• exploiting price feed delays or server behaviour\n\nAny prohibited activity will result in disqualification.",
  },
  {
    number: "05",
    question: "WHAT ARE THE FORBIDDEN STRATEGIES?",
    answer: "ThaurusGuru strictly prohibits:\n• gap trading\n• high-frequency trading (HFT)\n• latency arbitrage\n• reverse and long–short arbitrage\n• tick scalping\n• hedging across multiple accounts\n• opposite-direction correlation between accounts\n• server exploitation or delay manipulation\n• copy trading and signal mirroring\n• EA/bot usage without explicit approval\n• any unfair, abusive, or unrealistic strategy\n• exploiting spreads, slippage, or execution delays\n\nThese rules ensure fair, honest, and sustainable trading practices for all.",
  },
  {
    number: "06",
    question: "DAILY LOSS RULES AT THAURUSGURU",
    answer: "Your account breaches the daily loss rule when your equity drops more than the allowed percentage from the start-of-day balance/equity:\n• Classic Challenges: 4%\n• PRO Models: 3%\n• Instant Accounts: 3%\n\nBoth floating and closed losses count. Even a temporary drop below the threshold constitutes a violation.",
  },
  {
    number: "07",
    question: "MARGIN USAGE RULES",
    answer: "All accounts at ThaurusGuru must follow a strict margin exposure limit. You may use up to 40% of available margin at any time.\n\nExceeding this threshold is treated as a hard breach, regardless of your drawdown level. This rule prevents over-leveraging and protects traders from catastrophic losses.",
  },
  {
    number: "08",
    question: "INACTIVITY POLICY",
    answer: "If no trades are opened or closed for 30 consecutive days, the account may be closed due to inactivity. This applies to both evaluation and funded accounts. Staying active ensures accurate performance monitoring and account integrity.",
  },
  {
    number: "09",
    question: "WHAT IS THE IP RULE (CAN WE USE A VPS OR VPN)?",
    answer: "IP Monitoring: Unusual IP changes or suspicious access patterns may trigger an investigation.\n\nVPS: Using a VPS is allowed, but it must be used by you only and must not be shared with other traders.\n\nVPN: VPNs, proxies, and anonymizers are not allowed. Accessing the platform through rotating IPs or masked locations may result in account suspension.",
  },
  {
    number: "10",
    question: "SWAP POLICY",
    answer: "ThaurusGuru uses realistic swap and rollover fees consistent with live market conditions. Swaps apply to all positions held through the rollover time (typically 23:59 platform time). Triple swaps apply on Wednesdays to account for the weekend rollover.",
  },
  {
    number: "11",
    question: "SLIPPAGE AND REAL MARKET CONDITIONS",
    answer: "All accounts operate under real-market simulation:\n• live pricing\n• real spreads\n• positive and negative slippage\n• variable execution conditions\n\nSlippage is a normal part of market behaviour, especially during volatility. ThaurusGuru does not manipulate fills or artificially adjust execution.",
  },
  {
    number: "12",
    question: "ADD-ONS",
    answer: "• News Trading Add-On: Unrestricted news trading for challenges.\n• Weekend Holding Add-On: Positions remain open over the weekend during challenge.\n• Weekly Payout Add-On: Payouts every 7 days instead of 14 once funded.\n\nAdd-ons do not transfer automatically. Only Weekly Payout applies to funded accounts.",
  },
  {
    number: "13",
    question: "CONSISTENCY RULES (INSTANT + SCALING + PAYOUT)",
    answer: "Instant Accounts: Largest profitable day < 20% of total profit.\n\nScaling Plan:\n• Level 2: max 30%\n• Level 3: max 25%\n• Level 4: max 20%\n\nConsistency violations may lead to payout adjustments or disqualification.",
  },
];

export const FAQRulesSection = () => {
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
            Trading Rules
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
                    value={`rule-${index}`}
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
