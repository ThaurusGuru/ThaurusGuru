import { Header } from "../../components/Header";
import { FooterSection } from "../../screens/home/FooterSection";
import { BlogArticle } from "../../screens/blogs/BlogArticle";
import "../../index.css";

export const BlogArticlePage = () => {
  
  return (
    <div className="bg-[#1b082e] w-full min-w-0 lg:min-w-[1440px] relative overflow-hidden">
      <Header />
      
      <main className="relative w-full">
        <BlogArticle />
      </main>
      
      <FooterSection />
    </div>
  );
};
