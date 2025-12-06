import React from "react";
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
    question: "At what stage is the KYC verification required?",
    answer: null,
  },
  {
    id: "item-2",
    number: "02",
    question: "Who can join Thaurus Guru?",
    answer:
      "Anyone aged 18 or older is welcome to join ThaurusGuru, as long as they are not located in a restricted country.\nWe currently do not accept applications from residents of jurisdictions under international sanctions or local regulatory restrictions.",
  },
  {
    id: "item-3",
    number: "03",
    question: "Why should i join Thaurus Guru?",
    answer: null,
  },
  {
    id: "item-4",
    number: "04",
    question: "Is Thaurus Guru a trustworthy company?",
    answer: null,
  },
];

export const FAQsSection = () => {
  return (
    <section className="relative w-full flex flex-col gap-14 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      <h2 className="self-center bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(233,177,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'M_PLUS_2',Helvetica] font-normal text-transparent text-[42px] text-center tracking-[0.42px] leading-[normal]">
        FAQs
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-2"
        className="flex flex-col w-full"
      >
        {faqData.map((faq, index) => (
          <React.Fragment key={faq.id}>
            <AccordionItem
              value={faq.id}
              className="border-none data-[state=open]:rounded-3xl data-[state=open]:[background:radial-gradient(50%_50%_at_50%_50%,rgba(96,32,163,0.43)_0%,rgba(36,12,61,0.43)_100%)]"
            >
              <AccordionTrigger className="flex items-center justify-end gap-5 px-5 py-8 hover:no-underline [&[data-state=open]>div>div:first-child>div]:text-[#7a27ef] [&[data-state=open]>div>div:nth-child(2)]:text-[#7a27ef]">
                <div className="flex flex-col items-start gap-2.5 px-0 py-5 flex-1">
                  <div className="flex items-center justify-between self-stretch w-full">
                    <div className="inline-flex items-start justify-end gap-2.5 pl-0 pr-[3px] py-0">
                      <div className="w-fit mt-[-1.00px] font-display-4-bold font-[number:var(--display-4-bold-font-weight)] text-[#a0a3bd] text-[length:var(--display-4-bold-font-size)] tracking-[var(--display-4-bold-letter-spacing)] leading-[var(--display-4-bold-line-height)] whitespace-nowrap [font-style:var(--display-4-bold-font-style)] transition-colors">
                        {faq.number}
                      </div>
                    </div>

                    <div className="w-[490px] font-display-4-bold font-[number:var(--display-4-bold-font-weight)] text-white text-[length:var(--display-4-bold-font-size)] tracking-[var(--display-4-bold-letter-spacing)] leading-[var(--display-4-bold-line-height)] [font-style:var(--display-4-bold-font-style)] transition-colors">
                      {faq.question}
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              {faq.answer && (
                <AccordionContent className="px-5 pb-8">
                  <div className="flex items-start justify-between w-full">
                    <div className="w-[calc(18px+3px+20px)]" />
                    <div className="flex flex-col items-start gap-6 max-w-[490px] w-[490px]">
                      <p className="font-paragraphs-small-regular font-[number:var(--paragraphs-small-regular-font-weight)] text-[#87729d] text-[length:var(--paragraphs-small-regular-font-size)] tracking-[var(--paragraphs-small-regular-letter-spacing)] leading-[var(--paragraphs-small-regular-line-height)] [font-style:var(--paragraphs-small-regular-font-style)] whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </div>
                    <div className="w-5" />
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>

            {index === 2 && (
              <img
                className="w-full h-px object-cover"
                alt="Divider"
                src="https://c.animaapp.com/mishf4erVkDEuN/img/divider.svg"
              />
            )}
          </React.Fragment>
        ))}
      </Accordion>
    </section>
  );
};
