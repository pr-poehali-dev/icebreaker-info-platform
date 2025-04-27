import React from "react";
import { Link } from "react-router-dom";
import { AnchorIcon, Ship } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Ship className="h-8 w-8 text-primary" />
          <Link to="/" className="text-2xl font-bold text-primary">
            Ледокольный Флот
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>О флоте</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem 
                    title="История" 
                    href="/fleet/history"
                    description="История развития ледокольного флота России"
                  />
                  <ListItem 
                    title="Технические характеристики" 
                    href="/fleet/specifications"
                    description="Подробные данные о судах ледокольного флота"
                  />
                  <ListItem 
                    title="Атомные ледоколы" 
                    href="/fleet/atomic"
                    description="Информация об атомных ледоколах России"
                  />
                  <ListItem 
                    title="Дизель-электрические ледоколы" 
                    href="/fleet/diesel"
                    description="Дизель-электрические суда ледокольного флота"
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/news" className={navigationMenuTriggerStyle()}>
                Новости
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Услуги</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem 
                    title="Проводка судов" 
                    href="/services/escort"
                    description="Услуги по ледокольной проводке судов"
                  />
                  <ListItem 
                    title="Арктические экспедиции" 
                    href="/services/expeditions"
                    description="Организация арктических экспедиций"
                  />
                  <ListItem 
                    title="Северный морской путь" 
                    href="/services/northern-route"
                    description="Обеспечение навигации по Северному морскому пути"
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contacts" className={navigationMenuTriggerStyle()}>
                Контакты
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline">
            <AnchorIcon className="mr-2 h-4 w-4" />
            Для поставщиков
          </Button>
          <Button>
            Подать заявку
          </Button>
        </div>

        <Button variant="outline" size="icon" className="md:hidden">
          <span className="sr-only">Меню</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;