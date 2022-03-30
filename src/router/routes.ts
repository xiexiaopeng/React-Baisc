import { lazy } from "react";

const Index = lazy(() => import("../pages/index"));
const Home = lazy(() => import("../pages/home"));

const routes = [
  {
    path: "/",
    component: Index,
    exact: true,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
  },
];

export default routes;
