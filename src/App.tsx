import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { HomePage } from "./pages/Home";
import { AffiliatePage } from "./pages/Affiliate";
import { AboutUsPage } from "./pages/AboutUs";
import { ScalingPlanPage } from "./pages/ScalingPlan";
import { ContactUsPage } from "./pages/ContactUs";
import { BlogsPage } from "./pages/Blogs";
import { BlogArticlePage } from "./pages/BlogArticle";
import { FAQPage } from "./pages/FAQ";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";
import { TermsAndConditionsPage } from "./pages/TermsAndConditions";
import { CookiesPolicyPage } from "./pages/CookiesPolicy";
import { HowItWorksPage } from "./pages/HowItWorks";
import { TradingRulesPage } from "./pages/TradingRules";
import { RewardPage } from "./pages/Reward";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/trading-rules" element={<TradingRulesPage />} />
        <Route path="/reward" element={<RewardPage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/scaling-plan" element={<ScalingPlanPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blog/:id" element={<BlogArticlePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
        <Route path="/cookies-policy" element={<CookiesPolicyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
