import { useState } from "react";
import { Cpu, Newspaper, Calendar, Monitor, Dices, Zap, Shield } from "lucide-react";

export const TradingRulesContent = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Challenge Overview" },
    { id: "allowed", label: "What is allowed?" },
    { id: "prohibited", label: "What is prohibited?" }
  ];

  const RuleContainerStyle = "w-full lg:w-[1050px] mx-auto rounded-[20px] border border-[#4A1C7A] bg-[#7a27ef]/10 p-6 lg:p-[53px] mb-8 relative flex flex-col lg:flex-row justify-between min-h-[310px]";
  const RuleHeadingStyle = "text-white font-['Poppins'] text-[26px] font-normal leading-[40px] text-left mb-[10px]";
  const RuleBodyStyle = "w-full text-white font-['Poppins'] text-[16px] font-normal leading-[26px] mb-[10px]";
  const RuleItemStyle = "text-white font-['Poppins'] text-[16px] leading-[40px]";
  const RuleLabelStyle = "font-semibold";

  const AllowedContainerStyle = "w-full lg:w-[1050px] mx-auto rounded-[20px] border border-[#7D00FF] bg-[#7a27ef]/10 pt-[51px] pl-[45px] pr-[45px] pb-[51px] mb-8 relative min-h-[250px]";
  const AllowedIconWrapperStyle = "flex items-center justify-center w-[50px] h-[50px] p-[13px] rounded-[25px] bg-[#B982FB]/10 mr-[10px]";
  const AllowedHeadingStyle = "text-white font-['Poppins'] text-[26px] font-normal leading-[40px]";
  const AllowedBodyStyle = "w-full text-white font-['Poppins'] text-[16px] leading-[26px] mt-[25px]";

  return (
    <div className="relative w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1160px] mx-auto">
        {/* Tabs */}
        <div className="w-full relative flex items-center justify-between pt-1 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden mb-[-4px]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center justify-center gap-3 py-5.5 cursor-pointer shrink-0
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
              <p className="w-full lg:w-[980px] mx-auto text-white font-['Poppins'] text-[16px] font-normal leading-[26px] text-center mb-[39px] mt-8">
                This section outlines the technical parameters, profit targets, and loss limits applicable to our evaluation models.
              </p>

              {/* Profit Targets Section */}
              <div className={RuleContainerStyle}>
                <div className="flex-1">
                  <h3 className={RuleHeadingStyle}>Profit Targets</h3>
                  <div className={RuleBodyStyle}>
                    The Profit Target is the net profit you must achieve in a specific phase to progress.
                  </div>
                  <div className="space-y-0">
                    <p className={RuleItemStyle}>
                      <span className={RuleLabelStyle}>Classic Two-Step:</span> Phase 1: 8% | Phase 2: 5%
                    </p>
                    <p className={RuleItemStyle}>
                      <span className={RuleLabelStyle}>Classic Three-Step:</span> Phase 1: 6% | Phase 2: 6% | Phase 3: 6%
                    </p>
                    <p className={RuleItemStyle}>
                      <span className={RuleLabelStyle}>Pay As You Go:</span> Phase 1: 8% | Phase 2: 5%
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-end" style={{ width: '147px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="147" height="228" viewBox="0 0 147 228" fill="none">
                    <path d="M60.5979 195.47H86.6197V45.4101H103.452L73.6089 0L43.7656 45.4101H60.5979V195.47Z" fill="url(#paint0_linear_up)"/>
                    <path opacity="0.3" d="M11.8619 209.812H30.1996V104.063H42.0617L21.0308 72.0616L0 104.063H11.8619V209.812Z" fill="url(#paint1_linear_up)"/>
                    <path opacity="0.3" d="M116.498 227.871H134.836V122.122H146.698L125.667 90.1213L104.637 122.122H116.498V227.871Z" fill="url(#paint2_linear_up)"/>
                    <defs>
                      <linearGradient id="paint0_linear_up" x1="74" y1="195" x2="73.6088" y2="30.0063" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#30085C"/>
                        <stop offset="1" stop-color="#6A00FF"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_up" x1="21.0308" y1="199.58" x2="21.0308" y2="93.2074" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2A0A4D"/>
                        <stop offset="1" stop-color="#6A00FF"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_up" x1="125.667" y1="217.64" x2="125.667" y2="111.267" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#270B46"/>
                        <stop offset="1" stop-color="#6A00FF"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Daily Loss Limit Section */}
              <div className={RuleContainerStyle}>
                <div className="flex-1">
                  <h3 className={RuleHeadingStyle}>Daily Loss Limit</h3>
                  <div className={RuleBodyStyle}>
                    The limit protects the account from excessive daily drawdown. <br />
                    It resets every 24 hours at 00:00 CET.
                  </div>
                  <div className="space-y-0">
                    <p className={RuleItemStyle}>
                      <span className={RuleLabelStyle}>Classic Two-Step & Pay As You Go:</span> 5% of the start-of-day balance/equity.
                    </p>
                    <p className={RuleItemStyle}>
                      <span className={RuleLabelStyle}>Classic Three-Step:</span> 0% (None). There is no daily pause in this model.
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-end" style={{ width: '147px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="147" height="229" viewBox="0 0 147 229" fill="none">
                    <path d="M86.2684 32.4665L60.1939 32.4665L60.1939 182.829L43.3273 182.829L73.2311 228.331L103.135 182.829L86.2684 182.829L86.2684 32.4665Z" fill="url(#paint0_linear_down)"/>
                    <path opacity="0.3" d="M135.112 18.0962L116.737 18.0962L116.737 124.059L104.851 124.059L125.925 156.124L146.998 124.059L135.112 124.059L135.112 18.0962Z" fill="url(#paint1_linear_down)"/>
                    <path opacity="0.3" d="M30.2608 -1.62979e-05L11.8859 -1.79043e-05L11.8859 105.962L-0.000241337 105.962L21.0731 138.028L42.1465 105.962L30.2608 105.962L30.2608 -1.62979e-05Z" fill="url(#paint2_linear_down)"/>
                    <defs>
                      <linearGradient id="paint0_linear_down" x1="73.002" y1="31.9998" x2="73.2311" y2="198.264" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2E0956"/>
                        <stop offset="1" stop-color="#6A00FF"/>
                      </linearGradient>
                      <linearGradient id="paint1_linear_down" x1="125.925" y1="28.3482" x2="125.925" y2="134.936" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#280B48"/>
                        <stop offset="1" stop-color="#6A00FF"/>
                      </linearGradient>
                      <linearGradient id="paint2_linear_down" x1="21.0732" y1="10.2519" x2="21.0732" y2="116.839" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#270C45"/>
                        <stop offset="1" stop-color="#6A00FF"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Maximum Loss Section */}
              <div className={RuleContainerStyle}>
                <div className="flex-1">
                  <h3 className={RuleHeadingStyle}>Maximum Loss (Overall Drawdown)</h3>
                  <div className="space-y-0 mt-4">
                    <p className={RuleItemStyle}>
                      <span className={RuleLabelStyle}>Classic Two-Step & Pay As You Go:</span> 10% (Static).
                    </p>
                    <p className={RuleItemStyle}>
                      <span className={RuleLabelStyle}>Classic Three-Step:</span> 5% (Static).
                    </p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-end" style={{ width: '200px' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="160" height="80" viewBox="0 0 160 80" fill="none">
                    <path d="M10 20L40 50L70 30L100 60L130 40L150 70" stroke="url(#paint0_linear_zigzag)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M140 70H150V60" stroke="url(#paint0_linear_zigzag)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear_zigzag" x1="10" y1="45" x2="150" y2="45" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#30085C"/>
                        <stop offset="1" stopColor="#6A00FF"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          )}

          {/* What is allowed? Tab Content */}
          {activeTab === "allowed" && (
            <div>
              {/* Expert Advisors (EAs) & Bots */}
              <div className={AllowedContainerStyle}>
                <div className="flex items-center mb-4">
                  <div className={AllowedIconWrapperStyle}>
                    <Cpu className="text-[#B982FB]" size={24} />
                  </div>
                  <h3 className={AllowedHeadingStyle}>Expert Advisors (EAs) & Bots</h3>
                </div>
                <div className={AllowedBodyStyle}>
                  <p className={`${RuleItemStyle} mb-2`}>
                    <span className="font-semibold">With "EA & Scripting" Add-On:</span> You are permitted to use Expert Advisors (EAs) and scripts.
                  </p>
                  <p className={RuleItemStyle}>
                    <span className="font-semibold">Condition:</span> These must be used as assistants for semi-automated trading or risk management. Fully autonomous "set-and-forget" bots that trade without human supervision are not permitted.
                  </p>
                </div>
              </div>

              {/* Trading During News */}
              <div className={AllowedContainerStyle}>
                <div className="flex items-center mb-4">
                  <div className={AllowedIconWrapperStyle}>
                    <Newspaper className="text-[#B982FB]" size={24} />
                  </div>
                  <h3 className={AllowedHeadingStyle}>Trading During News</h3>
                </div>
                <div className={AllowedBodyStyle}>
                  <p className={`${RuleItemStyle} mb-2`}>
                    <span className="font-semibold">With "News Trading" Add-On:</span> You can trade freely during high-impact news events.
                  </p>
                  <p className={`${RuleItemStyle} mb-2`}>
                    <span className="font-semibold">Standard Rules (Without Add-On):</span> Trading is restricted 5 minutes before and 5 minutes after a high-impact news event.
                  </p>
                  <p className={RuleItemStyle}>
                    <span className="font-semibold">Includes:</span> Opening trades, closing trades, and SL/TP execution.
                  </p>
                </div>
              </div>

              {/* Weekend Holding */}
              <div className={AllowedContainerStyle}>
                <div className="flex items-center mb-4">
                  <div className={AllowedIconWrapperStyle}>
                    <Calendar className="text-[#B982FB]" size={24} />
                  </div>
                  <h3 className={AllowedHeadingStyle}>Weekend Holding</h3>
                </div>
                <div className={AllowedBodyStyle}>
                  <p className={`${RuleItemStyle} mb-2`}>
                    <span className="font-semibold">With "Weekend Holding" Add-On:</span> You may keep positions open over the weekend (from Friday close to Monday open).
                  </p>
                  <p className={RuleItemStyle}>
                    <span className="font-semibold">Standard Rules (Without Add-On):</span> All trades must be closed before the market closes on Friday.
                  </p>
                </div>
              </div>

              {/* Devices & VPS */}
              <div className={AllowedContainerStyle}>
                <div className="flex items-center mb-4">
                  <div className={AllowedIconWrapperStyle}>
                    <Monitor className="text-[#B982FB]" size={24} />
                  </div>
                  <h3 className={AllowedHeadingStyle}>Devices & VPS</h3>
                </div>
                <div className={AllowedBodyStyle}>
                  <p className={`${RuleItemStyle} mb-2`}>
                    <span className="font-semibold">Multiple Devices:</span> For your convenience, you are allowed to trade using multiple devices (e.g., PC and Mobile Phone) simultaneously.
                  </p>
                  <p className={RuleItemStyle}>
                    <span className="font-semibold">VPS:</span> Using a Private VPS is allowed, provided it is used exclusively by you.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* What is prohibited? Tab Content */}
          {activeTab === "prohibited" && (
            <div>
              {/* Termination Notice */}
              <p className="w-full lg:w-[1050px] mx-auto text-white font-['Poppins'] text-[16px] font-normal leading-[26px] text-left mb-[39px] mt-8">
                Violation of these rules will result in immediate account termination.
              </p>

              {/* Gambling Practices */}
              <div className={AllowedContainerStyle}>
                <div className="flex items-center mb-4">
                  <div className={AllowedIconWrapperStyle}>
                    <Dices className="text-[#B982FB]" size={24} />
                  </div>
                  <h3 className={AllowedHeadingStyle}>Gambling Practices</h3>
                </div>
                <div className={AllowedBodyStyle}>
                  <p className={`${RuleBodyStyle} mb-4`}>
                    We distinguish between "trading at risk" and "gambling." The following constitute a lack of strategy:
                  </p>
                  <ul className="space-y-3 list-disc pl-5">
                    <li className={RuleItemStyle}><span className="font-semibold">One-Sided Betting:</span> Using large margin (&gt;40%) in a single direction without a plan.</li>
                    <li className={RuleItemStyle}><span className="font-semibold">Martingale:</span> Doubling down on losing positions to aggressively recover losses.</li>
                    <li className={RuleItemStyle}><span className="font-semibold">Grid Trading:</span> Placing a network of contrary buy/sell orders at fixed intervals to manipulate execution.</li>
                    <li className={RuleItemStyle}><span className="font-semibold">Position Stacking:</span> Exceeding 4 positions on a single asset or 7 positions total across the account.</li>
                    <li className={RuleItemStyle}><span className="font-semibold">Reverse Hand:</span> Entering an opposite trade less than 5 minutes after closing a losing position on the same asset.</li>
                  </ul>
                </div>
              </div>

              {/* Cheating & Exploits (Forbidden Strategies) */}
              <div className={AllowedContainerStyle}>
                <div className="flex items-center mb-4">
                  <div className={AllowedIconWrapperStyle}>
                    <Zap className="text-[#B982FB]" size={24} />
                  </div>
                  <h3 className={AllowedHeadingStyle}>Cheating & Exploits (Forbidden Strategies)</h3>
                </div>
                <div className={AllowedBodyStyle}>
                  <p className={`${RuleBodyStyle} mb-4`}>
                    Any attempt to circumvent risk limits or exploit the system is strictly prohibited:
                  </p>
                  <ul className="space-y-3 list-disc pl-5 mb-4">
                    <li className={RuleItemStyle}><span className="font-semibold">Time-Based Restrictions:</span></li>
                    <li className={`${RuleItemStyle} list-none ml-4 text-[#B982FB]`}>Tick Scalping: Closing positions under 4 minutes is a violation.</li>
                    <li className={`${RuleItemStyle} list-none ml-4 text-[#B982FB]`}>HFT: Trading durations under 30 seconds are banned.</li>
                    <li className={RuleItemStyle}><span className="font-semibold">Arbitrage:</span> Latency arbitrage, hedge arbitrage, and long-short arbitrage across accounts.</li>
                    <li className={RuleItemStyle}><span className="font-semibold">Gap Trading:</span> Deliberately trading to exploit weekend or session gaps.</li>
                    <li className={RuleItemStyle}><span className="font-semibold">News Manipulation:</span> Placing abusive orders to exploit feed delays during news freeze times.</li>
                  </ul>
                </div>
              </div>

              {/* Account Integrity & Security */}
              <div className={AllowedContainerStyle}>
                <div className="flex items-center mb-4">
                  <div className={AllowedIconWrapperStyle}>
                    <Shield className="text-[#B982FB]" size={24} />
                  </div>
                  <h3 className={AllowedHeadingStyle}>Account Integrity & Security</h3>
                </div>
                <div className={AllowedBodyStyle}>
                  <ul className="space-y-3 list-disc pl-5">
                    <li className={RuleItemStyle}><span className="font-semibold">Copy Trading:</span> Copying trades from external signals or other individuals is prohibited. (Copying your own external account is allowed).</li>
                    <li className={RuleItemStyle}><span className="font-semibold">Account Management:</span> You are the only person allowed to trade your account. Third-party trading is banned.</li>
                    <li className={RuleItemStyle}><span className="font-semibold">VPN/Proxy:</span> Accessing via masked IPs or rotating proxies is not allowed.</li>
                    <li className={RuleItemStyle}><span className="font-semibold">IP Changes:</span> Sudden, drastic IP changes (e.g. different countries) may trigger a security check. We reserve the right to request proof of travel (tickets/passport stamps) to verify your location.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
