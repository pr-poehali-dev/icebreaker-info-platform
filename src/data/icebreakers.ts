import { IceBreakerProps } from "@/components/IceBreakerCard";

export const featuredIceBreakers: IceBreakerProps[] = [
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
  }
];
