import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, AnchorIcon, Newspaper, Users } from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, link }: ServiceCardProps) => (
  <div className="bg-white p-8 rounded-lg border hover:shadow-md transition-all">
    <Icon className="h-10 w-10 text-primary mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <Button variant="link" className="px-0" asChild>
      <Link to={link}>
        Подробнее
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </Button>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: AnchorIcon,
      title: "Ледокольная проводка",
      description: "Обеспечение безопасного прохода судов через льды в Арктике и замерзающих морях",
      link: "/services/escort"
    },
    {
      icon: Newspaper,
      title: "Арктические экспедиции",
      description: "Организация и проведение научно-исследовательских экспедиций в Арктике",
      link: "/services/expeditions"
    },
    {
      icon: Users,
      title: "Обучение специалистов",
      description: "Подготовка квалифицированных кадров для работы на судах ледокольного флота",
      link: "/services/training"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Широкий спектр услуг для обеспечения безопасной навигации в ледовых условиях
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
