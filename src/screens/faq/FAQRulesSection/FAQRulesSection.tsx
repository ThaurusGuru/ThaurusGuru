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
    answer: "Grid Trading involves placing a network of contrary buy/sell orders at specific intervals to overwhelm the server or manipulate market execution. This practice is strictly prohibited as it relies on market noise rather than a strategic edge.\nExample of Prohibited Behavior: A trader sets up a grid strategy on EUR/USD without a clear risk management plan:\nBuy Orders: Placed at every 20 pips upwards (e.g., Buying at 1.0800, 1.0820, 1.0840).\nSell Orders: Placed at every 20 pips downwards (e.g., Selling at 1.0780, 1.0760, 1.0740).\nThis creates a dense \"grid\" of open positions intended to capture small movements in any direction, often ignoring market conditions. Such activity is considered abusive and will lead to account termination.",
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
    answer: "To ensure fair trading and account security, ThaurusGuru monitors IP addresses and device activity. We enforce the following protocols:\n1. Allowed Devices & Convenience We understand that modern traders need flexibility. You are permitted to use multiple devices for your convenience (e.g., trading on your Desktop PC and monitoring positions via your Mobile Phone). As long as the activity clearly belongs to you, this is fully acceptable.\n2. VPS Usage Using a Virtual Private Server (VPS) is allowed, provided it is a private server with a dedicated IP address used exclusively by you. Shared or public VPS services are not recommended due to security risks.\n3. VPN & Proxies VPNs, Proxies, and Anonymizers are strictly prohibited. Accessing the platform through masked locations or rotating IP addresses interferes with our monitoring systems and may result in immediate account suspension.\n4. Account Management Trading must be conducted solely by the account owner. Third-party account management or \"pass-your-challenge\" services are strictly prohibited.\n5. Travel & IP Changes We support traders who travel! However, drastic or sudden changes in your IP location (e.g., logging in from a different country within a short timeframe) may trigger a security flag.\nVerification: To protect your account from unauthorized access, ThaurusGuru reserves the right to request proof of travel if suspicious IP jumps occur.\nRequired Proof: This may include flight tickets, train tickets, bus tickets, or passport stamps that confirm your physical movement to the new location.\nFailure to provide valid proof upon request may lead to account investigation or termination.",
  },
  {
    number: "12",
    question: "WHAT DOES “PROFITABLE DAYS” MEAN?",
    answer: "A “Profitable Day” is a day in which a trader generates more than 0.5% of the starting balance in profit. This metric is used to measure consistency and ensure performance is stable over time rather than dependent on a single oversized winning day.",
  },
  {
    number: "13",
    question: "WHAT IS PROHIBITED FOR MY TRADING?",
    answer: "At ThaurusGuru, we seek profitable traders with a sustainable edge. Any practice that exploits technical inefficiencies, relies on pure luck (gambling), or manipulates the trading environment is strictly prohibited.\nEngaging in any of the following activities will result in disqualification or account termination:\n1. Time-Based Restrictions\nTick Scalping (The 4-Minute Rule): Strategies reliant on closing trades too quickly are prohibited. We recommend holding trades for at least 4 minutes. Closing positions under 3 minutes and 59 seconds is considered a violation.\nHigh-Frequency Trading (HFT): Executing a large number of trades in seconds or trading with a duration of less than 30 seconds is strictly prohibited.\n2. Gambling & Risk Management Violations\nWe distinguish between professional risk-taking and gambling. The following behaviors indicate a lack of strategy:\nPosition Stacking Limits: To ensure proper risk distribution, strict limits apply to open positions:\nSame Asset: Maximum 4 simultaneous positions (e.g., 4 trades on EURUSD).\nTotal Account: Maximum 7 simultaneous positions across all assets combined.\nViolation: Opening 5+ positions on one asset, 8+ total positions, or splitting orders into smaller chunks to bypass lot limits is prohibited.\nReverse Hand Trading (Chasing Losses): Immediately entering an opposite trade after a loss to \"revenge trade\" is prohibited. You must wait at least 5 minutes after a losing trade before opening a new position in the opposite direction on the same asset.\nOne-Sided Betting: Using large margin (>40%) in a single direction, hoping for a lucky breakout without a plan.\nMartingale: Doubling down on losing positions (increasing volume after a loss) to aggressively recover drawdown.\nGrid Trading: Placing a network of contrary buy/sell orders at intervals (e.g., every 20 pips) to manipulate execution.\nAccount Rolling: Continuously purchasing new accounts to \"gamble\" on different directions.\nExcessive Lot Size Spikes: A sudden, massive increase in lot size compared to your average trading history, solely to pass a challenge or recover a loss.\n3. Arbitrage & Manipulation\nAll forms of arbitrage and technical exploitation are banned:\nLatency Arbitrage: Exploiting data feed delays.\nHedge Arbitrage: Offsetting trades across different accounts to minimize risk artificially.\nReverse & Long-Short Arbitrage: Betting on both directions simultaneously across multiple accounts.\nGap Trading: Deliberately trading to exploit weekend or session gaps.\nServer Manipulation: Using emulators or software to delay feeds or spam the server with orders.\nNews Manipulation: Placing abusive orders specifically designed to exploit freeze times or feed delays during high-impact news.\nToxic Order Flow: Strategies that generate orders aimed at clogging the engine or exploiting technical flaws rather than market movements.\n4. Account Integrity & Third Parties\nThe evaluation is for you and your personal skills.\nGroup Trading: You are not allowed to use public signals, join \"group trading\" schemes, or coordinate trades with other users.\nCopy Trading (External): Copying trades from another individual or public signals is strictly prohibited. (Note: Copying your own external personal account is permitted).\nAccount Management: You cannot let a third party trade your account.\nFully Automated Bots: While EAs are allowed as assistants, using a bot that trades 100% autonomously without your supervision is prohibited.",
  },
  {
    number: "14",
    question: "INACTIVITY POLICY",
    answer: "If no trades are opened or closed for 30 consecutive days, the account may be closed due to inactivity. This applies to both evaluation and funded accounts.",
  },
  {
    number: "15",
    question: "SWAP POLICY",
    answer: "ThaurusGuru uses realistic swap and rollover fees consistent with live market conditions. Swaps apply to positions held through the rollover time (23:59 platform time). Triple swaps apply on Wednesdays.",
  },
  {
    number: "16",
    question: "SLIPPAGE AND REAL MARKET CONDITIONS",
    answer: "All accounts operate under real-market simulation: live pricing, real spreads, positive/negative slippage, and variable execution conditions. Slippage is a normal part of market behavior, especially during volatility. ThaurusGuru does not manipulate fills or artificially adjust execution.",
  },
  {
    number: "17",
    question: "RISK MANAGEMENT GUIDELINES",
    answer: "Challenge Accounts: Maximum 2% risk per trade.\nFunded Accounts: Maximum 1% risk per trade.\n\nWarning: These limits are critical for long-term consistency. Any violation of this rule may result in the immediate closure of your account.",
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
