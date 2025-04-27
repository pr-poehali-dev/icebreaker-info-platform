import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnchorIcon, Info } from "lucide-react";

export interface IceBreakerProps {
  id: string;
  name: string;
  type: string;
  year: number;
  displacement: string;
  power: string;
  iceClass: string;
  image: string;
  active?: boolean;
  className?: string;
}

const IceBreakerCard = ({
  id,
  name,
  type,
  year,
  displacement,
  power,
  iceClass,
  image,
  active = true,
  className,
}: IceBreakerProps) => {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-lg", 
      active ? "" : "opacity-70", 
      className
    )}>
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-primary">{name}</CardTitle>
            <CardDescription>{type}</CardDescription>
          </div>
          {active && (
            <div className="flex items-center text-xs rounded-full px-2 py-1 bg-green-100 text-green-800">
              <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
              В эксплуатации
            </div>
          )}
          {!active && (
            <div className="flex items-center text-xs rounded-full px-2 py-1 bg-gray-100 text-gray-800">
              <span className="h-2 w-2 rounded-full bg-gray-500 mr-1"></span>
              В резерве
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-2 text-sm">
        <div className="flex flex-col">
          <span className="text-muted-foreground">Год постройки</span>
          <span className="font-medium">{year}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground">Водоизмещение</span>
          <span className="font-medium">{displacement}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground">Мощность</span>
          <span className="font-medium">{power}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground">Ледовый класс</span>
          <span className="font-medium">{iceClass}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href={`/fleet/${id}`}>
            <Info className="mr-2 h-4 w-4" />
            Подробнее
          </a>
        </Button>
        <Button size="sm" className="w-full">
          <AnchorIcon className="mr-2 h-4 w-4" />
          Текущий маршрут
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IceBreakerCard;
