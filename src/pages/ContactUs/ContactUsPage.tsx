import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { useTranslation } from "react-i18next";
import "../../index.css";

export const ContactUsPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden">
      <Header />
      <main className="relative w-full pt-32 pb-20">
        <section className="max-w-[1440px] mx-auto px-6 lg:px-11">
          <h1 className="text-4xl font-bold text-white mb-8">{t('contact.title')}</h1>
          <p className="text-white/70 text-lg">
            {t('contact.subtitle')}
          </p>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};
