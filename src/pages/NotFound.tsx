import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Ship } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16">
        <div className="container max-w-3xl text-center">
          <div className="animate-float mb-8">
            <Ship className="mx-auto h-24 w-24 text-primary/60" />
          </div>
          
          <h1 className="text-5xl font-bold mb-6">404</h1>
          <h2 className="text-3xl font-bold mb-4">Страница не найдена</h2>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Похоже, страница, которую вы ищете, затерялась во льдах. Вернитесь на главную или воспользуйтесь навигацией.
          </p>
          
          <Button size="lg" asChild>
            <Link to="/">
              Вернуться на главную
            </Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
