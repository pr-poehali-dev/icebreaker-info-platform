import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import IceBreakerCard from "@/components/IceBreakerCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ship, Search, Filter } from "lucide-react";

const Fleet = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const iceBreakers = [
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
    },
    {
      id: "yamal",
      name: "Ямал",
      type: "Атомный ледокол",
      year: 1992,
      displacement: "23 000 тонн",
      power: "55 МВт",
      iceClass: "ЛК-60Я",
      image: "https://images.unsplash.com/photo-1589465885857-44edb59bbff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      active: true
    },
    {
      id: "taimyr",
      name: "Таймыр",
      type: "Атомный ледокол",
      year: 1989,
      displacement: "21 100 тонн",
      power: "50 МВт",
      iceClass: "ЛК-50Я",
      image: "https://images.unsplash.com/photo-1574472374272-26e91165e036?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      active: true
    },
    {
      id: "victor-chernomyrdin",
      name: "Виктор Черномырдин",
      type: "Дизель-электрический ледокол",
      year: 2020,
      displacement: "22 000 тонн",
      power: "25 МВт",
      iceClass: "ЛК-25Д",
      image: "https://images.unsplash.com/photo-1580400557998-bc0a71a37d3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      active: true
    },
    {
      id: "lenin",
      name: "Ленин",
      type: "Атомный ледокол",
      year: 1959,
      displacement: "16 000 тонн",
      power: "44 МВт",
      iceClass: "ЛЛ-44А",
      image: "https://images.unsplash.com/photo-1583032015879-e5845633f592?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      active: false
    },
    {
      id: "krasin",
      name: "Красин",
      type: "Дизель-электрический ледокол",
      year: 1976,
      displacement: "12 000 тонн",
      power: "22 МВт",
      iceClass: "ЛЛ-22",
      image: "https://images.unsplash.com/photo-1595859703065-2259982784bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      active: true
    },
    {
      id: "50-let-pobedy",
      name: "50 лет Победы",
      type: "Атомный ледокол",
      year: 2007,
      displacement: "25 000 тонн",
      power: "55 МВт",
      iceClass: "ЛК-60Я",
      image: "https://images.unsplash.com/photo-1590267691077-3643631de1e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      active: true
    }
  ];

  const filteredIceBreakers = iceBreakers.filter(icebreaker => 
    icebreaker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    icebreaker.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    icebreaker.iceClass.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-ice-50 py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <Ship className="h-16 w-16 text-primary mb-4" />
            <h1 className="text-4xl font-bold mb-4">Ледокольный флот России</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Самый мощный ледокольный флот в мире, обеспечивающий навигацию в арктических морях
              и устойчивое функционирование Северного морского пути
            </p>
          </div>
        </div>
      </section>
      
      {/* Fleet Listing */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <TabsList>
                  <TabsTrigger value="all">Все ледоколы</TabsTrigger>
                  <TabsTrigger value="atomic">Атомные</TabsTrigger>
                  <TabsTrigger value="diesel">Дизель-электрические</TabsTrigger>
                  <TabsTrigger value="active">Активные</TabsTrigger>
                </TabsList>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Поиск по названию или классу..." 
                    className="pl-10 w-full md:w-80"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredIceBreakers.map((icebreaker) => (
                    <IceBreakerCard key={icebreaker.id} {...icebreaker} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="atomic">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredIceBreakers
                    .filter(icebreaker => icebreaker.type.includes("Атомный"))
                    .map((icebreaker) => (
                      <IceBreakerCard key={icebreaker.id} {...icebreaker} />
                    ))
                  }
                </div>
              </TabsContent>
              
              <TabsContent value="diesel">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredIceBreakers
                    .filter(icebreaker => icebreaker.type.includes("Дизель"))
                    .map((icebreaker) => (
                      <IceBreakerCard key={icebreaker.id} {...icebreaker} />
                    ))
                  }
                </div>
              </TabsContent>
              
              <TabsContent value="active">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredIceBreakers
                    .filter(icebreaker => icebreaker.active)
                    .map((icebreaker) => (
                      <IceBreakerCard key={icebreaker.id} {...icebreaker} />
                    ))
                  }
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-ice-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Статистика ледокольного флота</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg border text-center">
              <p className="text-4xl font-bold text-primary mb-2">{iceBreakers.filter(i => i.active).length}</p>
              <p className="text-muted-foreground">Действующих ледоколов</p>
            </div>
            <div className="bg-white p-8 rounded-lg border text-center">
              <p className="text-4xl font-bold text-primary mb-2">
                {iceBreakers.filter(i => i.type.includes("Атомный")).length}
              </p>
              <p className="text-muted-foreground">Атомных ледоколов</p>
            </div>
            <div className="bg-white p-8 rounded-lg border text-center">
              <p className="text-4xl font-bold text-primary mb-2">60 МВт</p>
              <p className="text-muted-foreground">Максимальная мощность</p>
            </div>
            <div className="bg-white p-8 rounded-lg border text-center">
              <p className="text-4xl font-bold text-primary mb-2">1959</p>
              <p className="text-muted-foreground">Год первого атомного ледокола</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Fleet History */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">История ледокольного флота</h2>
              <p className="text-muted-foreground mb-4">
                История российского ледокольного флота началась в конце XIX века, когда в 1899 году был 
                построен первый в мире арктический ледокол «Ермак», созданный по проекту адмирала С.О. Макарова.
              </p>
              <p className="text-muted-foreground mb-4">
                В 1959 году в строй вступил первый в мире атомный ледокол «Ленин», открывший новую эру в
                полярном мореплавании. Сегодня Россия располагает самым мощным ледокольным флотом в мире, 
                включая уникальные атомные ледоколы проекта 22220.
              </p>
              <Button className="mt-4" asChild>
                <a href="/fleet/history">Подробнее об истории</a>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1601996709994-fc60791ea3fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Исторический ледокол"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Fleet;
