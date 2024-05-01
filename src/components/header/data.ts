import { phoneNumbers } from "../../data/index";

export const NAVIGATION_ITEMS = [
  {
    path: "/catalog",
    title: "Каталог",
  },
  // {
  //   path: "/actions",
  //   title: "Акції",
  // },
];

export const SUPPORT_ITEMS = [
  {
    number: phoneNumbers[0],
    title: "Оформлення замовлення:",
    time: "9:00 - 21:00",
  },
  {
    number: phoneNumbers[0],
    title: "Служба підтримки:",
    time: "9:00 - 21:00",
  },
];
