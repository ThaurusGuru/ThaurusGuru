import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

const faqData = [
  {
    number: "01",
    question: "WHAT IS THE SCALING PLAN?",
    answer: "The ThaurusGuru Scaling Plan allows funded traders to gradually increase their account size as they demonstrate consistent, disciplined, and profitable performance. The plan is designed to reward long-term stability rather than short-term luck, creating a realistic path toward managing larger capital.\n\nThe scaling process includes four levels, each with performance requirements and increasing funding allocations.",
  },
  {
    number: "02",
    question: "HOW DOES THE ACCOUNT ALLOCATION GROW?",
    answer: "Your allocation increases each time you complete the scaling requirements for the next level. Using the standard $100,000 account as an example:\n\nLevel 0: $100,000\nLevel 1: $130,000\nLevel 2: $169,000\nLevel 3: $219,700\nLevel 4: $300,000 (maximum allocation)\n\nEach stage represents a structured growth step based on approved scaling coefficients.",
  },
  {
    number: "03",
    question: "WHAT ARE THE REQUIREMENTS TO MOVE TO THE NEXT LEVEL?",
    answer: "To advance through the scaling plan, you must achieve a specific Profit Target while adhering to a Consistency Limit for your current stage:\n\n• Level 1: 10% Profit Target (No consistency limit)\n• Level 2: 15% Profit Target | 30% Consistency Limit\n• Level 3: 20% Profit Target | 25% Consistency Limit\n• Level 4: 30% Profit Target | 20% Consistency Limit\n\nConsistency: This rule ensures your single largest profitable day does not exceed the allowed percentage of your total profits generated during that scaling cycle.",
  },
  {
    number: "04",
    question: "DO I NEED TO PAY FOR THE UPGRADE?",
    answer: "No. Scaling upgrades at ThaurusGuru are completely free. Once you meet the profit and consistency requirements, your funded account is automatically moved to the next allocation level.",
  },
  {
    number: "05",
    question: "ARE THERE ACCOUNT TYPE LIMITATIONS?",
    answer: "Yes. Scaling applies only to: Classic Two-Step, Classic Three-Step.\n\nPay As You Go do not include scaling.",
  },
  {
    number: "06",
    question: "EXAMPLES: HOW DOES SCALING LOOK IN PRACTICE?",
    answer: "Example 1 (Starting with $100,000):\n1. Generate 10% profit → move to $130,000\n2. Generate 15% with 30% consistency → move to $169,000\n3. Generate 20% with 25% consistency → move to $219,700\n4. Generate 30% with 20% consistency → reach $300,000 maximum",
  },
  {
    number: "07",
    question: "WHAT IF I BREAK THE RULES DURING THE SCALING PROCESS?",
    answer: "A rule breach (drawdown, margin, news, etc.) resets the scaling cycle for the current level. You will need to complete the profit + consistency requirements again. However, your existing level is not downgraded unless the breach results in account termination.",
  },
];

export const FAQScalingSection = () => {
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
              value={`scaling-${index}`}
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
