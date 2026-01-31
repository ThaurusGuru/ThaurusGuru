import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { RewardSection } from "../../screens/home/RewardSection";
import "../../index.css";

export const RewardPage = () => {
  return (
    <div className="bg-[#1b082e] w-full min-h-screen relative overflow-hidden">
      <Header />
      <main className="relative w-full">
        <RewardSection />
      </main>
      <FooterSection />
    </div>
  );
};
