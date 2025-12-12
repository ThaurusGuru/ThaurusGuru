

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
    </section>
  );
};
