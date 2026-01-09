import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import "../../index.css";

export const FAQPage = () => {
  return (
    <div className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden">
      <Header />
      <main className="relative w-full pt-32 pb-20">
        <section className="max-w-[1440px] mx-auto px-6 lg:px-11">
          <h1 className="text-4xl font-bold text-white mb-8">FAQ</h1>
          <p className="text-white/70 text-lg">
            Our frequently asked questions will be implemented here soon.
          </p>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};
