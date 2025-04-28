import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Ship, AnchorIcon } from "lucide-react";

const HeroSection = () => {
  return (
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
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur text-white border-white/20 hover:bg-white/20" 
              asChild
            >
              <Link to="/services">
                <AnchorIcon className="mr-2 h-5 w-5" />
                Наши услуги
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
