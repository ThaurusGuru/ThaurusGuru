import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { BlogHero } from "../../screens/blogs/BlogHero";
// import { BlogFeatured } from "../../screens/blogs/BlogFeatured";
import "../../index.css";

export const BlogsPage = () => {
  
  return (
    <div className="bg-[#1b082e] w-full min-w-0 relative overflow-hidden">
      <Header />
      <main className="relative w-full">
        <BlogHero />
        {/* <BlogFeatured /> */}
        
      </main>
      <FooterSection />
    </div>
  );
};
