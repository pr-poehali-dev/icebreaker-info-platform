import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Ship, Anchor, MapPin } from "lucide-react";
import IceBreakerCard from "@/components/IceBreakerCard";
import { featuredIceBreakers } from "@/data/icebreakers";

const FleetCategoryCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  link: string; 
}) => (
  <div className="bg-ice-50 p-8 rounded-lg border border-ice-100 flex flex-col items-center text-center">
    <div className="bg-ice-100 p-4 rounded-full mb-4">
      <Icon className="h-8 w-8 text-ice-600" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <Button variant="outline" className="mt-auto" asChild>
      <Link to={link}>Подробнее</Link>
    </Button>
  </div>
);

const FleetOverviewSection = () => {
  const fleetCategories = [
    {
      icon: Ship,
      title: "Атомные ледоколы",
      description: "Самые мощные суда для работы в тяжелых ледовых условиях Арктики",
      link: "/fleet/atomic"
    },
    {
      icon: Anchor,
      title: "Дизель-электрические ледоколы",
      description: "Надежные суда для работы в замерзающих морях и портах",
      link: "/fleet/diesel"
    },
    {
      icon: MapPin,
      title: "Северный морской путь",
      description: "Кратчайший морской путь между европейской частью России и Дальним Востоком",
      link: "/services/northern-route"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Ледокольный флот России</h2>
            <p className="text-muted-foreground max-w-2xl">
              Самый мощный ледокольный флот в мире, обеспечивающий навигацию в арктических морях 
              и устойчивое функционирование Северного морского пути
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
          {fleetCategories.map((category, index) => (
            <FleetCategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetOverviewSection;
