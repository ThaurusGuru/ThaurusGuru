import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqData = [
  {
    number: "01",
    question: "What is the ThaurusGuru Affiliate Program?",
    answer: "The ThaurusGuru Affiliate Program allows partners to earn rewards by referring new traders to the platform. Affiliates gain access to a professional tracking dashboard, exclusive giveaways, high commission potential, and long-term collaboration opportunities.\n\nThe program is designed to support both new creators and large influencers through multiple earning models.",
  },
  {
    number: "02",
    question: "Why partner with ThaurusGuru?",
    answer: "ThaurusGuru provides a sustainable, transparent, and performance-driven affiliate ecosystem. Partners benefit from:\n• High and scalable commissions\n• Long-term cooperation instead of short-term hype\n• A professional prop trading brand backed by Thaurus LTD (licensed broker)\n• Exclusive affiliate rewards and giveaways\n• Design support and personal communication with the affiliate team\n• Advanced tracking and fair, transparent conditions",
  },
  {
    number: "03",
    question: "What commission models are available?",
    answer: "ThaurusGuru offers two flexible commission models so partners can choose the option that fits their style, audience, and content strategy.\nAffiliate Model — Tier System\nThis model is perfect for creators of any size. As your audience grows, you naturally progress through multiple tiers that unlock higher earning potential and additional benefits. You don't need to meet any strict requirements — you simply grow through results, at your own pace.\nInfluencer Model\nDesigned for creators with an established audience. This model provides even higher earning opportunities, additional perks, personalized support, and exclusive creative tools to help you scale.\nBoth models work long-term, offer strong earning potential, and allow you to build sustainable income while promoting ThaurusGuru in a way that feels natural to your content and community.",
  },
  {
    number: "04",
    question: "How do I start as an affiliate?",
    answer: "The onboarding process consists of four simple steps:\n\n1. Activate Your Affiliate Account: Contact support to verify and enable affiliate access.\n2. Promote Your Link: Share your unique referral link across any platform or channel.\n3. Track Performance: Monitor clicks, purchases, and earnings through your dashboard.\n4. Claim Rewards: Request payouts directly from the rewards page once eligible.",
  },
  {
    number: "05",
    question: "How does the tier system work?",
    answer: "As you refer more users, you progress through higher tiers. Each tier provides:\n• Increased commission levels\n• Higher-value giveaways\n• Enhanced promotional support\n\nProgression depends solely on the number of active users referred.",
  },
  {
    number: "06",
    question: "What is the influencer model?",
    answer: "The influencer model is a premium collaboration tier for larger creators. It provides:\n• Higher lifetime commissions\n• Personal arrangements\n• Monthly giveaways\n• Support from the design team\n\nInfluencers must meet engagement and follower requirements before joining.",
  },
  {
    number: "07",
    question: "Does ThaurusGuru offer a Sub-IB program?",
    answer: "Yes. The Sub-IB Program allows you to earn not only from your direct referrals but also from affiliates you bring into the system. Every time your sub-affiliate refers a new client, you earn additional income.",
  },
  {
    number: "08",
    question: "When are commissions paid?",
    answer: "Commissions are paid after the referred user opens their first trade on a funded account.",
  },
  {
    number: "09",
    question: "How are my referrals tracked?",
    answer: "Every affiliate receives a unique referral link. All registrations and purchases made through that link are automatically tracked inside the dashboard.",
  },
];

export const FAQAffiliateSection = () => {
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
              value={`affiliate-${index}`}
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
