import {
  BiCategoryAlt,
  BiUserPin,
  BiPackage,
  BiCart,
  BiBarChartAlt,
  BiListOl,
  BiGift,
  BiStoreAlt,
  BiCog,
} from "react-icons/bi";

export const sidebar_routes = [
  {
    display_name: "Dashboard",
    route: "/",
    icon: <BiCategoryAlt />,
  },
  {
    display_name: "Customers",
    route: "customers",
    icon: <BiUserPin />,
  },
  {
    display_name: "Products",
    route: "products",
    icon: <BiPackage />,
  },
  {
    display_name: "Orders",
    route: "orders",
    icon: <BiCart />,
  },
  {
    display_name: "Analytics",
    route: "analytics",
    icon: <BiBarChartAlt />,
  },
  {
    display_name: "categories",
    route: "categories",
    icon: <BiListOl />,
  },
  {
    display_name: "discount",
    route: "discount",
    icon: <BiGift />,
  },
  {
    display_name: "inventory",
    route: "inventory",
    icon: <BiStoreAlt />,
  },
  {
    display_name: "settings",
    route: "settings",
    icon: <BiCog />,
  },
];
