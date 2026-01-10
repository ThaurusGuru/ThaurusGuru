import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const fundingData = [
  {
    category: "General Evaluation",
    items: [
      {
        number: "01",
        question: "WHAT IF I FAIL?",
        answer: "If you fail your evaluation at ThaurusGuru, nothing is permanently lost except the fee for that specific challenge.\nThere are no penalties, no restrictions, and no limits on how many times you can try again.\n\nFailing usually happens because of:\n• Exceeding daily or overall drawdown\n• Violating a news or weekend rule\n• Hitting margin usage limits\n• Breaking forbidden strategy rules\n\nYou can immediately restart the same model or switch to a different one.\nThis flexibility ensures traders can learn, improve, and continue progressing toward a funded account.",
      },
      {
        number: "02",
        question: "HOW LONG DOES IT TAKE TO GET FUNDED WITH THAURUSGURU?",
        answer: "The time required depends entirely on your chosen challenge:\n• Instant Funding: Immediately after purchase\n• One-Step Classic: Minimum 4 days\n• Two-Step Classic: Minimum 3 days per phase\n• Three-Step Classic: Minimum 3 days per phase\n• Pay As You Go: Minimum 4 days per phase\n• PRO Models: Minimum 4 days (1-step) or 3 per phase (2-step)\n\nHowever, the real timeline depends on how quickly you can reach the profit target without breaking any rules. Some traders complete challenges in a few days; others take more time depending on market conditions and strategy.",
      },
      {
        number: "03",
        question: "IS THERE A MINIMUM OR MAXIMUM NUMBER OF TRADING DAYS DURING THE EVALUATION WITH THAURUSGURU?",
        answer: "Yes. Minimum trading days ensure consistent performance, not accidental one-day luck.\n\nMinimum trading days:\n• Instant: None\n• Classic 1-Step: 4 days\n• Classic 2-Step: 3 days per phase\n• Classic 3-Step: 3 days per phase\n• Pay As You Go: 4 days per phase\n• PRO 1-Step: 4 days\n• PRO 2-Step: 3 days per phase\n\nMaximum time limits:\n• Classic 3-Step: 30 days per phase\n• PRO Models: 30 days per phase\n• Other models: No maximum time limit\n\nThese rules ensure structured progress and controlled evaluation pacing.",
      },
      {
        number: "04",
        question: "WHAT ARE ADD-ONS AND HOW DO THEY WORK?",
        answer: "Add-ons are optional upgrades allowing traders to unlock additional flexibility during the challenge.\n\nAvailable add-ons (depending on model):\n• News Trading: Allows full trading during high-impact news\n• Weekend Holding: Allows holding positions over the weekend\n• Weekly Payout: Allows payouts every 7 days instead of every 14 days\n• Minimum Trading Days Removal: Removes mandatory minimum trading days (only for applicable models)\n\nAdd-ons apply only to the specific challenge account. Once you become funded, only the Weekly Payout Add-On continues to apply — all other add-ons reset to default funded rules.",
      },
      {
        number: "05",
        question: "WHAT IS PROHIBITED FOR MY TRADING?",
        answer: "ThaurusGuru prohibits any trading style that artificially manipulates performance or exploits execution mechanics.\n\nProhibited practices include:\n• ultra-low time scalping (<30 seconds)\n• toxic or unnatural order flow\n• latency or arbitrage trading\n• news exploitation without add-ons\n• hedging or mirrored trading across accounts\n• copy trading or signal mirroring\n• bot/EAs without explicit approval\n• long–short, reverse, or tick arbitrage\n• exploiting price feed delays or slippage\n• any unfair or unrealistic trading behavior\n\nThese rules maintain a fair evaluation environment and protect funded capital.",
      },
      {
        number: "06",
        question: "IS A STOP LOSS REQUIRED?",
        answer: "No, stop loss is not mandatory. However, traders must stay inside drawdown limits at all times — with or without SL.\nTrading without a stop loss increases the risk of breaching daily or overall drawdown, so using SL is strongly recommended for risk management.",
      },
      {
        number: "07",
        question: "CAN I TRADE DURING NEWS?",
        answer: "Trading around high-impact economic news is restricted at ThaurusGuru unless you have the News Trading Add-On.\nThe exact restricted window depends on the type of account you are using.\n\nChallenge Accounts (Classic, PRO, Pay As You Go):\nNews trading is not allowed in the following time window: 5 minutes before and 5 minutes after a high-impact news event. This restriction applies to opening positions, closing positions, Stop Loss activation, Take Profit activation, and partial closures. Violations may result in the challenge being failed.\n\nInstant Accounts:\nInstant accounts follow a stricter rule: 10 minutes before and 10 minutes after a high-impact news event. Violations may result in immediate account deactivation.\n\nNews Add-On:\nIf you purchase the News Trading Add-On, you may trade during, before, and after the news without time restrictions (challenge accounts only).\n\nNote: The News Add-On does not apply to funded accounts unless specified. Instant accounts cannot bypass the 10-minute rule.",
      },
      {
        number: "08",
        question: "CAN I HOLD TRADES DURING NEWS RELEASES OR OVER THE WEEKEND WITH THAURUSGURU? (FUNDED ACCOUNT)",
        answer: "Funded accounts follow stricter rules than challenges.\n\nDefault funded restrictions:\n• No weekend holding\n• No trading 10 minutes before/after major news\n• No closing/opening trades during restricted windows\n\nOnly the Weekly Payout Add-On affects payout frequency — all other funded restrictions remain default.",
      },
      {
        number: "09",
        question: "WHAT ARE THE FORBIDDEN STRATEGIES?",
        answer: "Forbidden strategies include:\n• gap trading\n• HFT\n• server manipulation\n• latency arbitrage\n• hedging between accounts\n• long–short arbitrage\n• reverse arbitrage\n• tick scalping\n• toxic flow\n• instant-buy/sell manipulation\n• copying signals\n• EA/bot usage without approval\n• correlated trading across multiple accounts\n• exploiting technical limitations\n\nThese strategies compromise fairness and violate professional trading standards.",
      },
      {
        number: "10",
        question: "WHAT IS THE MAXIMUM CAPITAL I CAN MANAGE AT THAURUSGURU?",
        answer: "During the evaluation, the maximum account size you can purchase is $100,000.\nHowever, through the Scaling Plan, traders who demonstrate consistency and maintain rule compliance can grow their funded accounts up to $300,000 total managed capital. The scaling system increases account size in steps as the trader meets profit and consistency milestones.",
      },
    ],
  },
  {
    category: "Instant Funding",
    items: [
      {
        number: "01",
        question: "INSTANT ACCOUNT MODEL OVERVIEW",
        answer: "The Instant Account gives you immediate access to virtual trading capital without passing an evaluation. You start trading as soon as your purchase is confirmed, following strict professional risk rules designed to simulate real capital management.\n\nAccount Parameters:\n• Account Sizes: $5,000 / $10,000 / $25,000 / $50,000 / $100,000\n• Max Daily Drawdown: 3%\n• Max Trailing Drawdown: 5%\n• Min Trading Days for Payout: 7\n• Payout Split: 80% / 20% (Bi-Weekly)\n• Consistency Rule: 20% max per best day\n• Weekend Trading: Not allowed\n• Leverage: FX 1:30, Metals/Energies 1:10, Indices 1:10, Crypto 1:1\n• Margin Usage: Max 40% at any time\n• News Trading: Not allowed — 5 min before & 5 min after high-impact news\n• Fee Refund: None (non-refundable)",
      },
      {
        number: "02",
        question: "TRADING RULES & DRAWDOWN",
        answer: "Maximum Daily Drawdown — 3%: Your equity cannot fall by more than 3% from the start-of-day balance/equity. A breach instantly terminates the account.\n\nMaximum Trailing Drawdown — 5%: A fully trailing drawdown follows your equity upward until the full 5% buffer is reached.\nExample: Starting balance: $100,000 | Trailing level: $95,000. If you grow to $102,000 → trailing level rises to $97,000. Equity can never fall below the trailing level.\n\nMargin Usage Limit — 40%: You may use up to 40% of your available margin. Exceeding this limit is a hard breach.",
      },
      {
        number: "03",
        question: "CONSISTENCY & NEWS RULES",
        answer: "Consistency Rule — 20%: Your best trading day cannot represent more than 20% of the total profit in the payout cycle. This prevents oversized trades and ensures stable performance.\n\nNews Trading Rules: High-impact news trading is strictly prohibited. You cannot open positions, close positions, or have SL/TP triggered during the restricted window (10 minutes before and 10 minutes after). Violations result in account deactivation.",
      },
      {
        number: "04",
        question: "WEEKEND & FORBIDDEN STRATEGIES",
        answer: "Weekend Rules: Holding trades over the weekend is not allowed. All positions must be closed before the market closes on Friday. Any violation results in a hard breach.\n\nForbidden Strategies: Gap trading, HFT, server manipulation, latency arbitrage, toxic flow, scalping under 30s, hedging between accounts, signal mirroring, etc., lead to immediate termination without payout.",
      },
    ],
  },
  {
    category: "1-Step Classic",
    items: [
      {
        number: "01",
        question: "ONE-STEP CHALLENGE OVERVIEW",
        answer: "The Classic One-Step Challenge is a straightforward evaluation model with one goal: prove your consistency and risk management in a single phase. Receive a funded account and start earning real payouts after meeting requirements.\n\nPhase Requirements:\n• Profit Target: 8%\n• Minimum Trading Days: 4 separate days\n• Risk Rules: Max Daily Drawdown 4%, Max Overall Drawdown 10%\n• Margin Usage Limit: 40% (hard rule)",
      },
      {
        number: "02",
        question: "ADD-ONS & TRADING POLICIES",
        answer: "Optional Add-Ons: News Trading, Weekend Holding, and Weekly Payout (reduces cycle from 14 to 7 days). These apply only to the challenge phase unless specified.\n\nNews Trading Rules (Default): No trading 5 mins before/after high-impact news. This applies to opening, closing, and SL/TP triggers.\n\nWeekend Policy: Must close all trades before market close on Friday unless the Weekend Add-On is active.",
      },
      {
        number: "03",
        question: "FORBIDDEN STRATEGIES & RISK",
        answer: "Forbidden Strategies: Gap trading, latency arbitrage, server manipulation, scalping <30s, hedging across accounts, opposite trading, etc., result in immediate disqualification.\n\nRisk Recommendation: Keep risk per trade within 1–2% to avoid accidental breaches.",
      },
      {
        number: "04",
        question: "FUNDED ACCOUNT RULES (1-STEP)",
        answer: "Payout Schedule: every 14 days (7 days with Weekly Add-On). Profit Split: 80% to trader, 20% to ThaurusGuru.\n\nConsistency Rule: Largest winning day must not exceed 35% of total profit.\n\nLeverage: Forex 1:50, Indices/Metals/Energies 1:10, Crypto 1:1.",
      },
    ],
  },
  {
    category: "2-Step Classic",
    items: [
      {
        number: "01",
        question: "TWO-STEP CHALLENGE OVERVIEW",
        answer: "The Classic Two-Step Challenge validates consistency over two phases before funding.\n\nPhase Requirements:\n• Profit Target: (Calculated per Phase)\n• Risk Rules: Max Daily Drawdown 4%, Max Overall Drawdown 10%\n• Margin Limit: 40% (hard rule)\n\nAdd-Ons available for News, Weekend Holding, and Weekly Payouts.",
      },
      {
        number: "02",
        question: "RULES & FUNDING",
        answer: "Follows standard Classic news and weekend policies. Once objectives are met across both phases, the account undergoes review and a funded account is issued. Standard profit split of 80/20 applies.",
      },
    ],
  },
  {
    category: "3-Step Classic",
    items: [
      {
        number: "01",
        question: "THREE-STEP CHALLENGE OVERVIEW",
        answer: "The Classic Three-Step Challenge offers gradual progression with reduced targets across three phases.\n\nPhase 1: 6% Profit Target, 3 days min\nPhase 2: 4% Profit Target, 3 days min\nPhase 3: 2% Profit Target, 3 days min\n\nRisk Rules: 4% Daily Drawdown, 10% Overall Drawdown, 40% Margin Limit. Time limit of 30 days per phase.",
      },
      {
        number: "02",
        question: "ADD-ONS & NEWS (3-STEP)",
        answer: "Add-Ons: News Trading, Weekend Holding, Weekly Payout, and Minimum Days Removal (unique to multi-phase). Default news restriction: 5 mins before/after. Default weekend: no holding.",
      },
      {
        number: "03",
        question: "FUNDED ACCOUNT RULES (3-STEP)",
        answer: "Standard 14-day cycle (7 days with Add-On). Profit split 80/20. Leverage: Forex 1:100, Indices 1:20, Commodities 1:30, Energies 1:10, Crypto 1:5.",
      },
    ],
  },
  {
    category: "Pay As You Go",
    items: [
      {
        number: "01",
        question: "HOW IT WORKS & RECOVERY",
        answer: "A three-phase evaluation where you pay separately for each phase instead of the full challenge upfront.\n\nProcess: Pay Ph1 → Pass Ph1 → Pay Ph2 → Pass Ph2 → Pay Ph3 → Pass Ph3 → Funded. Retina retries are available by repurchasing the specific phase.",
      },
      {
        number: "02",
        question: "PHASE REQUIREMENTS (PAY AS YOU GO)",
        answer: "Phase 1: 2% Target | Phase 2: 4% Target | Phase 3: 6% Target\nRules: 4% Daily Drawdown, 10% Overall Drawdown, 4 separate min days per phase. Add-ons are NOT available for this model.",
      },
      {
        number: "03",
        question: "FUNDED ACCOUNT (PAY AS YOU GO)",
        answer: "Payout every 14 days (Weekly not available). Profit split 80/20. Consistency Rule: Largest day cannot exceed 20% of total profit cycle. Leverage matches 3-Step Classic.",
      },
    ],
  },
  {
    category: "Funded Classic",
    items: [
      {
        number: "01",
        question: "FUNDED PARAMETERS & PAYOUTS",
        answer: "Type: Funded (Classic) | Sizes: $5k to $100k. Max Daily Drawdown 4%, Max Overall Drawdown 10%. Payouts every 14 days (7 days with Add-On). Profit split 80/20.",
      },
      {
        number: "02",
        question: "CONSISTENCY & TRADING RULES",
        answer: "Consistency Rule: Largest day < 20% of total profit. News Restriction: 5 mins before/after restricted. Weekend Holding: strictly prohibited. Leverage: FX 1:40, Others 1:10, Crypto 1:1.",
      },
    ],
  },
  {
    category: "1-Step Pro",
    items: [
      {
        number: "01",
        question: "PRO ONE-STEP OVERVIEW",
        answer: "A high-performance evaluation for experienced traders with stricter trailing drawdown mechanics.\n\nEvaluation Requirements:\n• Profit Target: 9%\n• Max Daily Drawdown: 3%\n• Max Trailing Drawdown: 5%\n• Min Days: 4, Time Limit: 30 days.",
      },
      {
        number: "02",
        question: "TRAILING DRAWDOWN & ADD-ONS",
        answer: "The trailing drawdown follows equity movement until the buffer is used. Add-ons available for News, Weekend, and Weekly Payouts. Default news: 5 mins before/after. Default weekend: no holding.",
      },
      {
        number: "03",
        question: "PRO FUNDED ACCOUNT (1-STEP)",
        answer: "Maintains 5% trailing drawdown on funded phase. Payout cycle 14/7 days. Profit split 80/20. Consistency: Largest day < 35% of profits. Leverage matches 1-Step Classic.",
      },
    ],
  },
  {
    category: "2-Step Pro",
    items: [
      {
        number: "01",
        question: "PRO TWO-STEP OVERVIEW",
        answer: "Two-phase PRO evaluation with higher targets and trailing drawdown.\n\nPhase 1: 10% Profit Target | Phase 2: 4% Profit Target\nRules: 3% Daily Drawdown, 5% Trailing Drawdown, 3 days min per phase. Includes standard PRO news and weekend restrictions.",
      },
      {
        number: "02",
        question: "FUNDED PRO (2-STEP)",
        answer: "Maintains 5% trailing drawdown. Payout cycle 14/7 days. Profit split 80/20. Consistency: Largest day < 35% of profits. Leverage: Forex 1:100, Indices 1:20, Commodities 1:30, Energies 1:10, Crypto 1:5.",
      },
    ],
  },
  {
    category: "Funded Pro",
    items: [
      {
        number: "01",
        question: "FUNDED PARAMETERS (PRO)",
        answer: "Sizes: $5k to $100k. Max Daily Drawdown 3%, Max Trailing Overall Drawdown 5% (fully trailing at all times). Consistency: Largest day < 35% of profit cycle.",
      },
      {
        number: "02",
        question: "TRADING & NEWS RULES (PRO)",
        answer: "Payout cycle 14/7 days. Profit split 80/20. News Restriction: 5 mins before/after. Weekend holding not allowed. Leverage matches Funded Classic.",
      },
    ],
  },
  {
    category: "Evaluation Fee and Refund Policy",
    items: [
      {
        number: "01",
        question: "REFUND ON SECOND PAYOUT",
        answer: "ThaurusGuru refunds the full evaluation fee once a trader receives their second funded payout.\nEligible: Classic 1-Step, 2-Step, 3-Step.\nNot Eligible: Instant Accounts, Pay As You Go, PRO Challenges.",
      },
      {
        number: "02",
        question: "STANDARD REFUND & BREACHES",
        answer: "Standard Refund: Only if no trades were opened. Once a trade is executed, fee is non-refundable. No refunds for breaches, failed challenges, or misunderstanding of rules.",
      },
    ],
  },
];

export const FAQFundingSection = () => {
  return (
    <div className="w-full mt-4">
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        {fundingData.map((category, catIndex) => (
          <AccordionItem
            key={catIndex}
            value={`category-${catIndex}`}
            className="border-b border-[#34006B]/40"
          >
            <AccordionTrigger className="group flex items-center justify-start gap-4 py-6 px-4 md:px-16 hover:no-underline [&[data-state=open]_.cat-title]:text-[#E9B1FF] transition-all [&>svg]:hidden">
              <span className="cat-title text-white font-['Inter'] text-[20px] md:text-[24px] font-bold text-left tracking-wide">
                {category.category}
              </span>
              <div className="shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-90">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#E9B1FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-8 bg-[#240742]/10">
              <Accordion type="single" collapsible className="flex flex-col">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <AccordionItem
                      value={`item-${itemIndex}`}
                      className={`accordion-item-gradient-border ${itemIndex === category.items.length - 1 ? "border-b-0" : ""}`}
                    >
                      <AccordionTrigger className="group flex items-center justify-between gap-3 md:gap-8 pl-4 md:pl-16 pr-4 md:pr-8 py-5 md:py-6 hover:no-underline [&[data-state=open]_.question-text]:text-[#7A27EF] [&[data-state=open]_.serial-num]:text-[#7A27EF] [&>svg]:hidden">
                        <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-40 flex-1">
                          <span className="serial-num text-[#A0A3BD] font-['Inter'] text-[14px] md:text-[18px] font-semibold leading-[135%] transition-colors">
                            {item.number}
                          </span>
                          <span className="question-text w-full md:w-[600px] text-white font-['Inter'] text-[14px] md:text-[18px] font-semibold leading-[135%] transition-colors text-left uppercase">
                            {item.question}
                          </span>
                        </div>
                        
                        <div className="shrink-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                          <span className="text-white text-xl md:text-2xl font-light leading-none group-data-[state=open]:hidden">+</span>
                          <span className="text-white text-xl md:text-2xl font-light leading-none hidden group-data-[state=open]:block">×</span>
                        </div>
                      </AccordionTrigger>

                      {item.answer && (
                        <AccordionContent className="pl-4 md:pl-16 pr-4 md:pr-8 pb-4 md:pb-6">
                          <div className="flex flex-col md:flex-row gap-3 md:gap-40">
                            <div className="hidden md:block md:w-[18px]" />
                            <p className="flex-1 text-[#88729E] font-['Inter'] text-[12px] md:text-[15px] font-normal leading-relaxed whitespace-pre-line">
                              {item.answer}
                            </p>
                          </div>
                        </AccordionContent>
                      )}
                    </AccordionItem>
                    
                    {itemIndex < category.items.length - 1 && (
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
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
