import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import NewsCard from "@/components/NewsCard";
import { latestNews } from "@/data/news";

const NewsSection = () => {
  return (
    <section className="py-16 bg-ice-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Последние новости</h2>
            <p className="text-muted-foreground max-w-2xl">
              Следите за актуальными событиями и достижениями ледокольного флота России
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0" asChild>
            <Link to="/news">
              Все новости
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestNews.map((news) => (
            <NewsCard key={news.id} {...news} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
