import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { AboutUsHeroSection } from "../../screens/aboutus/AboutUsHeroSection";
import { AboutUsWhoWeAre } from "../../screens/aboutus/AboutUsWhoWeAre";
import { AboutUsOurVision } from "../../screens/aboutus/AboutUsOurVision";
import { AboutUsWhyChoose } from "../../screens/aboutus/AboutUsWhyChoose";
import { AboutUsOurTeam } from "../../screens/aboutus/AboutUsOurTeam";
import "../../index.css";

export const AboutUsPage = () => {
  return (
    <div
      className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden"
    >
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="relative w-full">
        <AboutUsHeroSection />
        <AboutUsWhoWeAre />
        <AboutUsOurVision />
        <AboutUsWhyChoose />
        {/* Background effect from middle of Why Choose to Our Team */}
        <img 
          src="/AboutUs/bg-effectt.png" 
          alt="Background Effect" 
          className="absolute right-0 top-[700px] w-full h-auto pointer-events-none z-0"
        />
        <AboutUsOurTeam />
        
        {/* Add more About Us sections here as needed */}
      </main>

      {/* Footer */}
      <footer className="relative w-full">
        <FooterSection />
      </footer>
    </div>
  );
};
