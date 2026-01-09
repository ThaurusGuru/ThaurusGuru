import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AffiliatePage } from "./pages/Affiliate";
import { AboutUsPage } from "./pages/AboutUs";
import { ScalingPlanPage } from "./pages/ScalingPlan";
import { ContactUsPage } from "./pages/ContactUs";
import { BlogsPage } from "./pages/Blogs";
import { FAQPage } from "./pages/FAQ";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/affiliate" element={<AffiliatePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/scaling-plan" element={<ScalingPlanPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
