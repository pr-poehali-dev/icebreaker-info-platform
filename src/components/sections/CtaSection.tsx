import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
