import { useState } from "react";
import { FooterSection } from "../home/FooterSection";
import { Header } from "../../components/Header/Header";
import { CheckoutHero } from "./CheckoutHero/CheckoutHero";
import { CheckoutContent } from "./CheckoutContent/CheckoutContent";
import { BillingDetails } from "./BillingDetails/BillingDetails";
import { PaymentMethod } from "./PaymentMethod/PaymentMethod";

export const CheckoutScreen = () => {
  const [activeStep, setActiveStep] = useState(1);

  const goToNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, 3));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#1b092e] w-full lg:min-w-[1440px] relative overflow-x-clip">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative w-full">
        <CheckoutHero activeStep={activeStep} onStepClick={setActiveStep} />
        {activeStep === 1 && <CheckoutContent onContinue={goToNext} />}
        {activeStep === 2 && <BillingDetails onContinue={goToNext} />}
        {activeStep === 3 && <PaymentMethod onContinue={goToNext} />}
      </main>

      {/* Footer */}
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};
