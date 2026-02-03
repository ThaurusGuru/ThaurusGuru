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
        {/* Mid-page background decoration */}
        <div className="absolute top-[40%] left-0 w-full h-0 pointer-events-none z-0">
          <img
            src="/Scaling-plan-mid bg.png"
            alt=""
            className="absolute -top-[300px] left-0 w-auto h-[1000px] opacity-100"
          />
        </div>

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
