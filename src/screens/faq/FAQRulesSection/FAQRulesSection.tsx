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
    answer: "YES. A Stop Loss is mandatory. Every position you open must have a valid Stop Loss attached immediately upon execution. This rule applies strictly to all account types (Challenge, Instant, and Funded).\n\nWhy? This ensures proper risk management and capital protection.\nConsequence: Executing a trade without a Stop Loss is a direct violation of the trading rules.",
  },
  {
    number: "02",
    question: "MARGIN USAGE LIMIT (IMPORTANT)",
    answer: "What is the maximum margin I can use? All accounts at ThaurusGuru follow a strict margin exposure limit. You may use up to 40% of your available margin at any time.\n\nExample: If you have $100,000 in equity, used margin cannot exceed $40,000.\nConsequence: Exceeding the 40% threshold is treated as a Hard Breach and will result in account termination, regardless of your current PnL or drawdown.",
  },
  {
    number: "03",
    question: "CAN I TRADE DURING NEWS?",
    answer: "Restrictions depend on your account type:\n\n1. Challenge Accounts (Classic & Pay As You Go)\nTrading is restricted 5 minutes before and 5 minutes after a high-impact news event. (Exception: Restriction is lifted if you purchased the News Trading Add-On).\n\nWhat counts as \"Trading\"? This includes opening new positions, closing existing positions (manually or via TP/SL), and placing pending orders. Any execution within the restricted window is a violation.",
  },
  {
    number: "04",
    question: "CAN I HOLD TRADES OVER THE WEEKEND?",
    answer: "No. By default, holding trades over the weekend is prohibited. All positions must be closed before the market closes on Friday.\n\nException: Weekend holding is permitted only if the Weekend Holding Add-On is active on your account.",
  },
  {
    number: "05",
    question: "WHAT ARE THE MINIMUM TRADE DURATION RULES?",
    answer: "To ensure legitimate trading, ThaurusGuru prohibits \"Tick Scalping\" and ultra-short-term strategies.\n\nThe 4-Minute Rule: We recommend holding trades for at least 4 minutes. Closing positions under 4 minutes (3 minutes 59 seconds or less) is classified as a violation.\n\nHFT: High-Frequency Trading (duration under 30 seconds) is strictly banned.",
  },
  {
    number: "06",
    question: "WHAT IS CONSIDERED \"GAMBLING\"?",
    answer: "We distinguish between professional risk-taking and gambling. The following behaviors indicate a lack of strategy and are prohibited:\n\nOne-Sided Betting: Using large margin (>40%) in a single direction hoping for a lucky breakout without a plan.\nMartingale: Doubling down on losing positions (increasing volume after a loss) to recover aggressively (\"recover or lose it all\").\nAccount Rolling: Continuously buying new accounts to gamble on different directions.\nGrid Trading: Placing a network of contrary buy/sell orders to manipulate execution.",
  },
  {
    number: "07",
    question: "WHAT IS GRID TRADING?",
    answer: "Grid Trading involves placing a network of contrary buy/sell orders at specific intervals to overwhelm the server or manipulate market execution. This practice is strictly prohibited as it relies on market noise rather than a strategic edge.\n\nExample of Prohibited Behavior:\nA trader sets up a grid strategy on EUR/USD: Placing buy orders at every 20 pips upwards and sell orders at every 20 pips downwards. This creates a dense \"grid\" intended to capture small movements in any direction, often ignoring market conditions. Such activity is considered abusive and will lead to account termination.",
  },
  {
    number: "08",
    question: "ARE BOTS AND EAs ALLOWED?",
    answer: "Semi-Automated Only.\n\nAllowed: You may use Expert Advisors (EAs) and scripts as assistants for risk management or semi-automated execution (where you make the decision).\n\nProhibited: Fully automated \"set-and-forget\" bots that trade 100% autonomously without your supervision are not allowed.",
  },
  {
    number: "09",
    question: "CAN I COPY TRADE?",
    answer: "Copying Others: Strictly Prohibited. You cannot use copy-trading services, public signals, or mirror trades from other individuals.\n\nCopying Yourself: Permitted. You are allowed to copy trades from your own external personal accounts to ThaurusGuru.",
  },
  {
    number: "10",
    question: "PROHIBITED STRATEGIES",
    answer: "Engaging in any of the following will result in immediate termination:\n• Gap Trading: Exploiting weekend or session gaps.\n• Arbitrage: Latency, hedge, or long-short arbitrage across accounts.\n• Server Manipulation: Spamming orders or using emulators to delay feeds.\n• Group Trading: Coordinating trades with other users.\n• Tick Scalping: Exploiting price feed errors or closing trades under 4 minutes.",
  },
  {
    number: "11",
    question: "WHAT IS THE IP RULE (VPS, VPN & DEVICES)?",
    answer: "1. Allowed Devices: You may use multiple devices (Desktop/Mobile) for your convenience.\n2. VPS Usage: Private servers with a dedicated IP used exclusively by you are allowed.\n3. VPN & Proxies: Strictly prohibited. Accessing via masked locations may result in account suspension.\n4. Account Management: Third-party management or \"pass-your-challenge\" services are strictly prohibited.\n5. Travel: Drastic IP changes (e.g., logging from a different country) may trigger a security flag. Proof of travel (tickets, etc.) may be requested for verification.",
  },
  {
    number: "12",
    question: "WHAT DOES “PROFITABLE DAYS” MEAN?",
    answer: "A “Profitable Day” is a day in which a trader generates more than 0.5% of the starting balance in profit. This metric is used to measure consistency and ensure performance is stable over time.",
  },
  {
    number: "13",
    question: "INACTIVITY POLICY",
    answer: "If no trades are opened or closed for 30 consecutive days, the account may be closed due to inactivity. This applies to both evaluation and funded accounts.",
  },
  {
    number: "14",
    question: "SWAP POLICY",
    answer: "ThaurusGuru uses realistic swap and rollover fees consistent with live market conditions. Swaps apply to positions held through the rollover time (23:59 platform time). Triple swaps apply on Wednesdays.",
  },
  {
    number: "15",
    question: "SLIPPAGE AND REAL MARKET CONDITIONS",
    answer: "All accounts operate under real-market simulation: live pricing, real spreads, positive/negative slippage, and variable execution conditions. Slippage is a normal part of market behavior, especially during volatility.",
  },
  {
    number: "16",
    question: "RISK MANAGEMENT GUIDELINES",
    answer: "Challenge Accounts: Maximum 2% risk per trade.\nFunded Accounts: Maximum 1% risk per trade.\n\nWarning: Any violation of this rule may result in the immediate closure of your account.",
  },
];

export const FAQRulesSection = () => {
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
  );
};
