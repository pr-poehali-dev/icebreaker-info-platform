import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export interface NewsItemProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  className?: string;
}

const NewsCard = ({
  id,
  title,
  excerpt,
  date,
  image,
  category,
  className,
}: NewsItemProps) => {
  const formattedDate = format(new Date(date), "d MMMM yyyy", { locale: ru });

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex items-center space-x-1 text-sm text-muted-foreground mb-2">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
        </div>
        <div className="mb-2">
          <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
            {category}
          </span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3 mt-2">
          {excerpt}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="ghost" className="group ml-auto" asChild>
          <a href={`/news/${id}`}>
            Читать дальше
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;
