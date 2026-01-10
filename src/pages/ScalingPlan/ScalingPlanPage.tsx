import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { ScalingPlanHero } from "../../screens/scalingplan/ScalingPlanHero";
import { ScalingPlanHowItWorks } from "../../screens/scalingplan/ScalingPlanHowItWorks";
import { ScalingPlanAccountLimitations } from "../../screens/scalingplan/ScalingPlanAccountLimitations";
import { ScalingPlanExample } from "../../screens/scalingplan/ScalingPlanExample";
import "../../index.css";

export const ScalingPlanPage = () => {
  return (
    <div className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden">
      <Header />
      <main className="relative w-full">
        <ScalingPlanHero />
        <ScalingPlanHowItWorks />
        <ScalingPlanAccountLimitations />
        <ScalingPlanExample />
      </main>
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};
