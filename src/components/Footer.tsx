import { Link } from "react-router-dom";
import { Ship } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Ship className="h-8 w-8" />
              <span className="text-2xl font-bold">Ледокольный Флот</span>
            </div>
            <p className="text-primary-foreground/80 max-w-xs">
              Цифровой портал ледокольного флота России — единая информационная платформа о флоте, его технических характеристиках и корпоративной информации.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Разделы</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fleet" className="text-primary-foreground/80 hover:text-primary-foreground">
                  О флоте
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Карьера
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Для поставщиков
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Контакты
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Пресс-центр
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-primary-foreground/80 hover:text-primary-foreground">
                  Часто задаваемые вопросы
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">
                Москва, ул. Морская, 123
              </li>
              <li>
                <a href="tel:+78001234567" className="text-primary-foreground/80 hover:text-primary-foreground">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:info@icebreakers.ru" className="text-primary-foreground/80 hover:text-primary-foreground">
                  info@icebreakers.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Ледокольный флот России. Все права защищены.
            </p>
            <div className="flex space-x-4">
              <Link to="/privacy" className="text-primary-foreground/60 text-sm hover:text-primary-foreground">
                Политика конфиденциальности
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 text-sm hover:text-primary-foreground">
                Условия использования
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
