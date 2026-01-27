import { useState } from "react";
import { InfoIcon } from "lucide-react";

// Tooltip Component
const InfoTooltip = ({ content }: { content: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <InfoIcon 
        className="w-4 h-4 text-white flex-shrink-0 cursor-help" 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
      {isVisible && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 w-max max-w-[250px] px-3 py-2 bg-[#2a0f4a] border border-[#9d62d9] rounded-lg shadow-lg">
          <div className="text-white text-xs font-['Poppins',Helvetica] whitespace-pre-line leading-relaxed">
            {content}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#9d62d9]"></div>
        </div>
      )}
    </div>
  );
};

export const TradingRulesContent = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Challenge Overview" },
    { id: "allowed", label: "What is allowed?" },
    { id: "prohibited", label: "What is prohibited?" }
  ];

  // Table rows for Challenge Overview
  const tableRows = [
    { label: "Profit Target", tooltip: "See targets by account type below" },
    { label: "Max Daily Drawdown", tooltip: "Protects from excessive daily losses" },
    { label: "Max Overall Drawdown", tooltip: "Total limit for losses" },
    { label: "Minimum Trading Days", tooltip: "Required trading days" },
  ];

  return (
    <div className="relative w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1160px] mx-auto">
        {/* Tabs */}
        <div className="w-full relative flex items-center justify-between pt-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-[-4px]">
          {tabs.map((tab, index) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center justify-center gap-3 py-5.5 cursor-pointer flex-shrink-0
                ${activeTab === tab.id
                  ? `text-white bg-[#1a0a2e] border-t border-l border-r border-[#DAB6FF] rounded-t-[20px] px-18 translate-y-[-2.9px] pb-[calc(1.375rem+3.4px)] z-10`
                  : 'text-white bg-transparent px-8'
              }`}
            >
              <span className="font-['Blinker',Helvetica] font-semibold text-[26px] tracking-[0] leading-[normal] whitespace-nowrap">
                {tab.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bordered Table Container */}
        <div
          className={`w-full border border-[#DAB6FF] bg-[#1a0a2e] p-8
            ${activeTab === "overview" ? 'rounded-tl-none rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]' : ''}
            ${activeTab === "allowed" ? 'rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[20px]' : ''}
            ${activeTab === "prohibited" ? 'rounded-tl-[20px] rounded-tr-none rounded-bl-[20px] rounded-br-[20px]' : ''}`}
        >
          {/* Challenge Overview Tab Content */}
          {activeTab === "overview" && (
            <div>
              {/* Description */}
              <p className="w-[980px] mx-auto text-white font-['Poppins'] text-[16px] font-normal leading-[26px] text-center mb-10 mt-8">
                This section outlines the technical parameters, profit targets, and loss limits applicable to our evaluation and instant funding models.
              </p>

              {/* Profit Targets Section */}
              <div className="w-[1050px] mx-auto rounded-[20px] border border-[#4A1C7A] p-[44px] mb-12">
                <h3 className="text-white font-['Poppins'] text-[26px] font-normal leading-[40px] text-left mb-3">
                  Profit Targets
                </h3>
                <p className="w-[960px] text-white font-['Poppins'] text-[16px] font-normal leading-[26px]">
                  <span className="font-bold">The Profit Target</span> is the amount of profit you must achieve in a specific phase to progress to the next level. <span className="font-bold">Important:</span> The Profit Target is calculated based on closed positions only. Floating profit (open trades) does not count toward the target.
                </p>
              </div>

              {/* Targets by Account Type */}
              <div className="w-[1050px] mx-auto mb-12">
                <p className="text-[#A96CFF] font-['Poppins'] text-[16px] font-semibold leading-[40px]">
                  Targets by Account Type:
                </p>
                <ul className="text-white font-['Poppins'] text-[16px] font-normal leading-[40px] list-none pl-0">
                  <li>Classic 1-Step: 8%.</li>
                  <li>Classic 2-Step: Phase 1: 8% | Phase 2: 4%.</li>
                  <li>Classic 3-Step: Phase 1: 6% | Phase 2: 4% | Phase 3: 2%.</li>
                  <li>PRO 1-Step: 9%.</li>
                  <li>PRO 2-Step: Phase 1: 10% | Phase 2: 4%.</li>
                  <li>Pay As You Go: Phase 1: 2% | Phase 2: 4% | Phase 3: 6%.</li>
                </ul>
              </div>

              {/* Daily Loss Limit Section */}
              <div className="w-[1050px] mx-auto rounded-[20px] border border-[#4A1C7A] p-[44px] mb-12">
                <h3 className="text-white font-['Poppins'] text-[26px] font-normal leading-[40px] text-left mb-3">
                  Daily Loss Limit
                </h3>
                <div className="w-[960px] text-white font-['Poppins'] text-[16px] font-normal leading-[40px]">
                  <p className="mb-4">
                    The Daily Loss Limit protects the account from excessive daily drawdown. It resets every 24 hours at 00:00 CET.
                  </p>
                  <ul className="list-none pl-0 space-y-2">
                    <li>Classic & Pay As You Go: 4% of the start-of-day balance/equity.</li>
                    <li>Instant (Standard): 3% of the start-of-day balance/equity.</li>
                  </ul>
                  <p className="mt-4">
                    <span className="font-bold">How it is calculated:</span> The limit is calculated based on the Balance or Equity at the start of the trading day, whichever is higher. If your equity drops below this limit at any moment during the day, it is a violation.
                  </p>
                </div>
              </div>

              {/* Maximum Loss (Max Drawdown) Section */}
              <div className="w-[1050px] mx-auto mb-12">
                <h3 className="text-white font-['Poppins'] text-[26px] font-normal leading-[40px] text-left mb-4">
                  Maximum Loss (Max Drawdown)
                </h3>
                <p className="text-white font-['Poppins'] text-[16px] font-normal leading-[26px] mb-6">
                  This is the total limit for losses allowed on the account. The calculation method varies directly by account type.
                </p>

                {/* Two Column Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Static Drawdown Column */}
                  <div className="rounded-[20px] border border-[#4A1C7A] p-[30px]">
                    <h4 className="text-white font-['Poppins'] text-[20px] font-normal leading-[30px] mb-4">
                      Static Drawdown (Fixed)
                    </h4>
                    <div className="text-white font-['Poppins'] text-[14px] font-normal leading-[24px] space-y-4">
                      <p>
                        <span className="font-semibold text-[#A96CFF]">Applicable to:</span> Classic (Quality) 1-Step, 2-Step, 3-Step & PRO (Aggressive) Pass 1-Step/2-Step.
                      </p>
                      <p>
                        <span className="font-semibold">Limit:</span> 8% of the initial account balance.
                      </p>
                      <p>
                        <span className="font-semibold">Non-Moving:</span> The limit does not move. It is always calculated from the initial equity (e.g. 8% of $100k account, the limit is always $92,000).
                      </p>
                      <p>
                        <span className="font-semibold">Calculation:</span> Based on your account's Balance or Equity, whichever is higher. If your balance or equity falls below this fixed percentage at any time, it's a breach.
                      </p>
                    </div>
                  </div>

                  {/* Trailing Drawdown Column */}
                  <div className="rounded-[20px] border border-[#4A1C7A] p-[30px]">
                    <h4 className="text-white font-['Poppins'] text-[20px] font-normal leading-[30px] mb-4">
                      Trailing Drawdown (Continuous)
                    </h4>
                    <div className="text-white font-['Poppins'] text-[14px] font-normal leading-[24px] space-y-4">
                      <p>
                        <span className="font-semibold text-[#A96CFF]">Applicable to:</span> PRO (Quality) & Instant funding.
                      </p>
                      <p>
                        <span className="font-semibold">Limit:</span>
                      </p>
                      <ul className="list-none pl-4 space-y-1">
                        <li>• PRO 1-Step & 2-Step: 5%</li>
                        <li>• PRO 3-Step: 6%</li>
                        <li>• Instant (Standard): 4%</li>
                      </ul>
                      <p>
                        <span className="font-semibold">Trailing Drawdown is calculated based on the highest simulated balance you've achieved.</span> As your balance grows, the trailing percentage "follows" or trails behind on the initial balance (if active if your profits exceed the threshold).
                      </p>
                      <p>
                        Once you make profit equal to or more than the initial drawdown in total your profit is inviolable. As soon as it grows past that threshold, the trailing drawdown begins to trail on your highest equity peak.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* What is allowed? Tab Content */}
          {activeTab === "allowed" && (
            <div>
              {/* Description */}
              <p className="w-[980px] mx-auto text-white font-['Poppins'] text-[16px] font-normal leading-[26px] text-center mb-10 mt-8">
                This section outlines the technical parameters, profit targets, and loss limits applicable to our evaluation and instant funding models.
              </p>

              {/* Trading during news Section */}
              <div className="w-[1050px] mx-auto rounded-[20px] border border-[#4A1C7A] p-[44px] mb-12">
                <h3 className="text-white font-['Poppins'] text-[26px] font-normal leading-[40px] text-left mb-6">
                  Trading during news
                </h3>
                <p className="text-white font-['Poppins'] text-[16px] font-normal leading-[26px] mb-6">
                  Our policy provides trading discretion on whether you hold the News Trading Add-on on selected account type equips you with more trading freedom.
                </p>

                {/* Two Column Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Column 1: With News Trading Add-on */}
                  <div>
                    <h4 className="text-white font-['Poppins'] text-[18px] font-semibold leading-[28px] mb-4">
                      1. With "News Trading" Add-on (Available for Accounts Only)
                    </h4>
                    <p className="text-white font-['Poppins'] text-[14px] font-normal leading-[24px] mb-4">
                      If you purchased the News Trading Add-on for your account, you can trade freely before and after news events:
                    </p>
                    <ul className="text-white font-['Poppins'] text-[14px] font-normal leading-[24px] space-y-2 list-disc pl-5">
                      <li>You can open and close trades during high-impact news.</li>
                      <li>You may hold positions through the news event.</li>
                      <li>Note: This add-on applies to the Challenge and Verification phases, not your Funded Account.</li>
                    </ul>
                  </div>

                  {/* Column 2: Standard Rules */}
                  <div>
                    <h4 className="text-white font-['Poppins'] text-[18px] font-semibold leading-[28px] mb-4">
                      2. Standard Rules (Without Add-on)
                    </h4>
                    <p className="text-white font-['Poppins'] text-[14px] font-normal leading-[24px] mb-4">
                      If you do not have the News Trading Add-on enabled or if it does not cover, the following rules apply during high-impact News events:
                    </p>
                    <ul className="text-white font-['Poppins'] text-[14px] font-normal leading-[24px] space-y-2 list-disc pl-5">
                      <li>Closed: After news occurs, you shall not trade 2 mins before and until 2 mins after the publication of High Impact News.</li>
                      <li>Order is maintained 9 minutes before and 1 minute after a news release for high impact events.</li>
                      <li>Do not execute trades within the window; you can place pending orders outside this timeframe.</li>
                      <li>To UN announce info/data window may be managed/news.</li>
                      <li>Trading is not under a moratorium during soft or medium impact news release.</li>
                      <li>permitted to be open trade during news release permitted.</li>
                      <li>It is also permitted to close existing trades immediately prior to a high impact News release. The timescale restriction is mandatory for opening new position/trades.</li>
                    </ul>
                  </div>
                </div>

                <p className="text-white font-['Poppins'] text-[14px] font-normal leading-[24px] mt-6 italic">
                  Definition: High-impact News relates to events marked in red (High impact) on the economic calendar.
                </p>
              </div>

              {/* Weekend Holding Section */}
              <div className="w-[1050px] mx-auto rounded-[20px] border border-[#4A1C7A] p-[44px] mb-12">
                <h3 className="text-white font-['Poppins'] text-[26px] font-normal leading-[40px] text-left mb-4">
                  Weekend Holding
                </h3>
                <ul className="text-white font-['Poppins'] text-[16px] font-normal leading-[28px] space-y-3 list-disc pl-5">
                  <li>With "Weekend Holding" Add-on:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>You may permittedly keep positions open over the weekend (from Friday market close to Monday market open).</li>
                    </ul>
                  </li>
                  <li>Standard Rules (Without Add-on):
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Weekend holding is not allowed.</li>
                      <li>All trades must be closed before the market closes on Friday.</li>
                      <li>You're welcome to enter new positions on Monday.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* What is prohibited? Tab Content */}
          {activeTab === "prohibited" && (
            <div>
              {/* Description */}
              <p className="w-[980px] mx-auto text-white font-['Poppins'] text-[16px] font-normal leading-[26px] text-center mb-10 mt-8">
                All ThaurusGuru will treat prohibited traders and it's associated illegal Thaurus-Guru platform/rules activities as an egregious operating as an operation the a in operating and a activity prohibited.
              </p>

              <p className="w-[980px] mx-auto text-white font-['Poppins'] text-[16px] font-semibold leading-[26px] text-center mb-12">
                Violation of these rules will result in immediate account termination.
              </p>

              {/* Gambling Practices Section */}
              <div className="w-[1050px] mx-auto rounded-[20px] border border-[#4A1C7A] p-[44px] mb-12">
                <h3 className="text-white font-['Poppins'] text-[26px] font-normal leading-[40px] text-left mb-4">
                  Gambling Practices
                </h3>
                <p className="text-white font-['Poppins'] text-[16px] font-normal leading-[26px] mb-4">
                  We distinguish between "trading at risk" and "gambling." This following behaviors constitute a lack of strategy and are not permitted:
                </p>
                <ul className="text-white font-['Poppins'] text-[16px] font-normal leading-[28px] space-y-2 list-disc pl-5">
                  <li>Martingale Strategy: Opening limits drawn from a lot to lot size (using after of a predictive / "revenge trading" kind) is of excessive gambling in simulated account.</li>
                  <li>Account betting: Deploying one extremely large position (5+ lots) without reason on low cap stocks, randomly only trading random currency pairs without history reasoning to lot size decisions.</li>
                  <li>Heavy Lot Trading: Trading unusually high lot sizes or account large in an account Martingale/greed of lot low-to-low/lot,and or a specific method to somewhere his can all in one trade. Violation in connection into operation.</li>
                </ul>
              </div>

              {/* Cheating & Exploits Section */}
              <div className="w-[1050px] mx-auto rounded-[20px] border border-[#4A1C7A] p-[44px] mb-12">
                <h3 className="text-white font-['Poppins'] text-[26px] font-normal leading-[40px] text-left mb-4">
                  Cheating & Exploits (Forbidden Strategies)
                </h3>
                <p className="text-white font-['Poppins'] text-[16px] font-normal leading-[26px] mb-4">
                  Any attempt to circumvent the risk limits or exploit the system is strictly prohibited. Examples include (but are not limited to) with a number of 'forbidden' practices are strictly prohibited.
                </p>
                <ul className="text-white font-['Poppins'] text-[16px] font-normal leading-[28px] space-y-2 list-disc pl-5">
                  <li>High Frequency Trading (HFT): Executing a large number of trades (e.g., 50+ trades in under 10 seconds on the platform).</li>
                  <li>Latency Arbitrage / Tick Scalping: Exploiting a broker's delayed quotes or latency to take advantage of stale prices.</li>
                  <li>Hedge-on-Hedging: Opening opposing positions (buy and sell on the same currency pair) to circumvent risk rules, intentionally passing drawdown challenges of high total leverage, using leverage accounts, manipulating accounts.</li>
                  <li>Double-Dipping: Using one account to intentionally fail then using realized data from strategy to profit on another account; or benefiting from insider knowledge of price movement via external sources.</li>
                  <li>Copy-Trading or Group Collaboration: Using several accounts to copy trades directly, or coordinating at different timeframes / Using pending or closely spaced 'split' lots from the same signal.</li>
                </ul>
              </div>

              {/* Account Integrity & Third Parties Section */}
              <div className="w-[1050px] mx-auto rounded-[20px] border border-[#4A1C7A] p-[44px] mb-12">
                <h3 className="text-white font-['Poppins'] text-[26px] font-normal leading-[40px] text-left mb-4">
                  Account Integrity & Third Parties
                </h3>
                <p className="text-white font-['Poppins'] text-[16px] font-normal leading-[26px] mb-4">
                  To preserve a fair one and your personal data:
                </p>
                <ul className="text-white font-['Poppins'] text-[16px] font-normal leading-[28px] space-y-2 list-disc pl-5">
                  <li>No IP Sharing / Location: You may not access an active trading account via VPN, proxy servers, etc. (unless verified and authorized).</li>
                  <li>No Third-Party Logins: Allowing others, including family members (other than primary account owner), access to your trading account is prohibited.</li>
                  <li>Limit: Trading Accounts from Unmatched/Random IP: Each account should use secure trading platform or use third-party funds to fund/access account.</li>
                  <li>Excessive Account Creation or Referrals: Excessive account creation (outside account policy) to attempt profit farming or "sidestepping" expectation is prohibited.</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
