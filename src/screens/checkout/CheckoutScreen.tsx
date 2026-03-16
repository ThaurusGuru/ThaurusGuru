import { useState } from "react";
import { FooterSection } from "../home/FooterSection";
import { Header } from "../../components/Header/Header";
import { CheckoutHero } from "./CheckoutHero/CheckoutHero";
import { CheckoutContent } from "./CheckoutContent/CheckoutContent";
import { BillingDetails } from "./BillingDetails/BillingDetails";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";
import { CheckoutProvider } from "./CheckoutContext";

export const CheckoutScreen = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [completedStep, setCompletedStep] = useState(0);

  const goToNext = () => {
    setCompletedStep((prev) => Math.max(prev, activeStep));
    setActiveStep((prev) => Math.min(prev + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStepClick = (step: number) => {
    // Only allow navigating to completed steps or the current step
    if (step <= completedStep + 1) {
      setActiveStep(step);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <CheckoutProvider>
      <div className="bg-[#1b092e] w-full lg:min-w-[1440px] relative overflow-x-clip">
        {/* Header */}
        <Header />

        {/* Main content */}
        <main className="relative w-full">
          <CheckoutHero activeStep={activeStep} onStepClick={handleStepClick} completedStep={completedStep} />
          {activeStep === 1 && <CheckoutContent onContinue={goToNext} />}
          {activeStep === 2 && <BillingDetails onContinue={goToNext} />}
          {activeStep === 3 && <PaymentMethod onContinue={goToNext} />}
        </main>

        {/* Footer */}
        <footer className="relative w-full">
          <FooterSection />
        </footer>
      </div>
    </CheckoutProvider>
  );
};
