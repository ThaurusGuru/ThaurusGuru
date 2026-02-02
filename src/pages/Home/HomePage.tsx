import { Header } from "../../components/Header";
import { BuildSection } from "../../screens/home/BuildSection";
import { CalculatorSection } from "../../screens/home/CalculatorSection";
import { CappedSection } from "../../screens/home/CappedSection";
import { CollaborationSection } from "../../screens/home/CollaborationSection";
import { ComparisonTableSection } from "../../screens/home/ComparisonTableSection";
import { DiscordSection } from "../../screens/home/DiscordSection";
import { FAQsSection } from "../../screens/home/FAQsSection";
import { FooterSection } from "../../screens/home/FooterSection";
import { HeroSection } from "../../screens/home/HeroSection";
import { HowItWorksSection } from "../../screens/home/HowItWorksSection";
import { MainContentSection } from "../../screens/home/MainContentSection";
import { MediaSection } from "../../screens/home/MediaSection";
import { PayoutsSection } from "../../screens/home/PayoutsSection";
import { PricingSection } from "../../screens/home/PricingSection";
import { SponsorSection } from "../../screens/home/SponsorSection";
import "../../index.css";

export const HomePage = () => {
  return (
    <div
      className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden"
      data-model-id="264:7829"
    >
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative w-full">
        <section className="relative w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:200ms]">
          <HeroSection />
        </section>

        <section className="relative w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:400ms]">
          <MainContentSection />
        </section>

        <section id="how-it-works" className="relative w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:600ms] z-10">
          <HowItWorksSection />
        </section>

        {/* Background image between How It Works and Pricing */}
        <div className="relative w-full h-0">
          <img
            src="/bg2.png"
            alt=""
            className="absolute -top-[400px] left-0 w-auto h-[1200px] pointer-events-none z-0"
          />
        </div>

        <section id="trading-rules" className="relative w-full -translate-y-4 animate-fade-in opacity-0 [--animation-delay:800ms] z-10">
          <PricingSection />
        </section>

        <section id="reward" className="relative w-full">
          <PayoutsSection />
        </section>

        <section className="relative w-full">
          <BuildSection />
        </section>

        {/* Background effect spanning between BuildSection and CalculatorSection */}
        <div className="relative w-full h-0">
          <img
            src="/calculator-section/bg-effectt.svg"
            alt=""
            className="absolute -top-[1100px] right-0 w-[1500px] h-auto opacity-100 pointer-events-none z-10"
          />
        </div>

        <section className="relative w-full">
          <CalculatorSection />
        </section>

        {/* <section className="relative w-full">
          <CappedSection />
        </section> */}

        {/* Background decoration for Comparison section */}
        <div className="relative w-full h-0">
          <img
            className="absolute top-[-300px] md:top-[-700px] left-1/2 -translate-x-1/2 w-[1400px] md:w-[1200px] h-[800px] md:h-[1452px] pointer-events-none opacity-90 md:opacity-100 z-0 object-cover"
            alt="Background decoration"
            src="/bg5.png"
          />
        </div>

        {/* <section className="relative w-full">
          <ComparisonTableSection />
        </section> */}

        <section className="relative w-full">
          <SponsorSection />
        </section>

        {/* Background decoration between Sponsor and Collaboration */}
        <div className="relative w-full h-0">
          <img
            src="/bg6.png"
            alt=""
            className="absolute -top-[350px] left-1/2 -translate-x-1/2 w-full h-auto pointer-events-none z-0"
            style={{ mixBlendMode: 'lighten', opacity: 0.95 }}
          />
        </div>

        <section className="relative w-full -mb-12 md:-mb-16 mt-12 md:mt-20">
          <CollaborationSection />
        </section>

        <section className="relative w-full mt-8 md:mt-12">
          <DiscordSection />
        </section>

        <section className="relative w-full">
          <MediaSection />
        </section>

        <section className="relative w-full">
          <FAQsSection />
        </section>

        <footer className="relative w-full">
          <FooterSection />
        </footer>
      </main>
    </div>
  );
};
