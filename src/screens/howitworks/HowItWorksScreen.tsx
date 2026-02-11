import { FooterSection } from "../../screens/home/FooterSection";
import { Header } from "../../components/Header/Header";
import { HowItWorksHero } from "./HowItWorksHero/HowItWorksHero";
import { HowItWorksSteps } from "./HowItWorksSteps/HowItWorksSteps";

export const HowItWorksScreen = () => {
  return (
    <div className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-x-clip">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative w-full">
        <HowItWorksHero />
        <HowItWorksSteps />
      </main>

      {/* Footer */}
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};
