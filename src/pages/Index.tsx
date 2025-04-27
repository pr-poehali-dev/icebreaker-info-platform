import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IceBreakerCard from "@/components/IceBreakerCard";
import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, AnchorIcon, Ship, Newspaper, Anchor, Users, MapPin } from "lucide-react";

const Index = () => {
  const featuredIceBreakers = [
    {
      id: "arktika",
      name: "Арктика",
      type: "Атомный ледокол",
      year: 2020,
      displacement: "33 540 тонн",
      power: "60 МВт",
      iceClass: "ЛК-60Я",
      image: "https://images.unsplash.com/photo-1599577180758-3a195d8b439b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      active: true
    },
    {
      id: "sibir",
      name: "Сибирь",
      type: "Атомный ледокол",
      year: 2021,
      displacement: "33 530 тонн",
      power: "60 МВт",
      iceClass: "ЛК-60Я",
      image: "https://images.unsplash.com/photo-1574109670101-347da06a63ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      active: true
    },
    {
      id: "moscow",
      name: "Москва",
      type: "Дизель-электрический ледокол",
      year: 2008,
      displacement: "14 000 тонн",
      power: "16 МВт",
      iceClass: "ЛК-18",
      image: "https://images.unsplash.com/photo-1581088676211-75a55e3e7817?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      active: true
    }
  ];

  const latestNews = [
    {
      id: "news-1",
      title: "Новый атомный ледокол «Урал» вошел в состав флота",
      excerpt: "22 ноября 2022 года состоялась торжественная церемония подъема государственного флага на атомном ледоколе «Урал» проекта 22220, построенном на Балтийском заводе в Санкт-Петербурге.",
      date: "2022-11-22T10:00:00",
      image: "https://images.unsplash.com/photo-1581593291902-7137da5f4e1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Официально"
    },
    {
      id: "news-2",
      title: "Завершена экспедиция к Северному полюсу",
      excerpt: "Атомный ледокол «Арктика» успешно завершил научно-исследовательскую экспедицию к Северному полюсу, которая продолжалась 32 дня. Ученые собрали уникальные данные о состоянии ледового покрова.",
      date: "2023-08-15T14:30:00",
      image: "https://images.unsplash.com/photo-1582821798143-1afd626e1a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Экспедиции"
    },
    {
      id: "news-3",
      title: "Грузооборот по Северному морскому пути достиг рекордных показателей",
      excerpt: "Объем грузоперевозок по Северному морскому пути в 2023 году превысил 35 млн тонн. Это рекордный показатель за всю историю использования данного маршрута.",
      date: "2023-12-20T09:15:00",
      image: "https://images.unsplash.com/photo-1562525525-13fec8a34d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Северный морской путь"
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat h-[600px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/20"></div>
          <div className="container relative h-full flex flex-col justify-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold max-w-2xl mb-6 drop-shadow-md">
              Цифровой портал ледокольного флота России
            </h1>
            <p className="text-xl max-w-xl mb-8 drop-shadow-md">
              Единая информационная платформа, объединяющая все типы ледоколов страны
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link to="/fleet">
                  <Ship className="mr-2 h-5 w-5" />
                  Исследовать флот
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20" asChild>
                <Link to="/services">
                  <AnchorIcon className="mr-2 h-5 w-5" />
                  Наши услуги
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fleet Overview */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Ледокольный флот России</h2>
              <p className="text-muted-foreground max-w-2xl">
                Самый мощный ледокольный флот в мире, обеспечивающий навигацию в арктических морях и устойчивое функционирование Северного морского пути
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0" asChild>
              <Link to="/fleet">
                Весь флот
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredIceBreakers.map((icebreaker) => (
              <IceBreakerCard key={icebreaker.id} {...icebreaker} />
            ))}
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-ice-50 p-8 rounded-lg border border-ice-100 flex flex-col items-center text-center">
              <div className="bg-ice-100 p-4 rounded-full mb-4">
                <Ship className="h-8 w-8 text-ice-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Атомные ледоколы</h3>
              <p className="text-muted-foreground mb-4">
                Самые мощные суда для работы в тяжелых ледовых условиях Арктики
              </p>
              <Button variant="outline" className="mt-auto" asChild>
                <Link to="/fleet/atomic">Подробнее</Link>
              </Button>
            </div>
            
            <div className="bg-ice-50 p-8 rounded-lg border border-ice-100 flex flex-col items-center text-center">
              <div className="bg-ice-100 p-4 rounded-full mb-4">
                <Anchor className="h-8 w-8 text-ice-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Дизель-электрические ледоколы</h3>
              <p className="text-muted-foreground mb-4">
                Надежные суда для работы в замерзающих морях и портах
              </p>
              <Button variant="outline" className="mt-auto" asChild>
                <Link to="/fleet/diesel">Подробнее</Link>
              </Button>
            </div>
            
            <div className="bg-ice-50 p-8 rounded-lg border border-ice-100 flex flex-col items-center text-center">
              <div className="bg-ice-100 p-4 rounded-full mb-4">
                <MapPin className="h-8 w-8 text-ice-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Северный морской путь</h3>
              <p className="text-muted-foreground mb-4">
                Кратчайший морской путь между европейской частью России и Дальним Востоком
              </p>
              <Button variant="outline" className="mt-auto" asChild>
                <Link to="/services/northern-route">Подробнее</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest News */}
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
      
      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр услуг для обеспечения безопасной навигации в ледовых условиях
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border hover:shadow-md transition-all">
              <AnchorIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Ледокольная проводка</h3>
              <p className="text-muted-foreground mb-4">
                Обеспечение безопасного прохода судов через льды в Арктике и замерзающих морях
              </p>
              <Button variant="link" className="px-0" asChild>
                <Link to="/services/escort">
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg border hover:shadow-md transition-all">
              <Newspaper className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Арктические экспедиции</h3>
              <p className="text-muted-foreground mb-4">
                Организация и проведение научно-исследовательских экспедиций в Арктике
              </p>
              <Button variant="link" className="px-0" asChild>
                <Link to="/services/expeditions">
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="bg-white p-8 rounded-lg border hover:shadow-md transition-all">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Обучение специалистов</h3>
              <p className="text-muted-foreground mb-4">
                Подготовка квалифицированных кадров для работы на судах ледокольного флота
              </p>
              <Button variant="link" className="px-0" asChild>
                <Link to="/services/training">
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:max-w-md mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Готовы к сотрудничеству?</h2>
              <p className="opacity-90">
                Оставьте заявку, и наши специалисты свяжутся с вами для обсуждения деталей
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/contacts">
                  Связаться с нами
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10" asChild>
                <Link to="/partners">
                  Для поставщиков
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
