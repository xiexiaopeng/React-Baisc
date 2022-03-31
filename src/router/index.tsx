import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { createBrowserHistory } from "history";
import routes from "./routes";
// import Index from "../pages/index";
// import Home from "../pages/home";
interface IRoute {
  path: string;
  component: any;
  exact: boolean;
}
const RouteConfig: FC = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route: IRoute, index: number) => {
        const { path } = route;
        return <Route key={index} path={path} element={<route.component />} />;
      })}
    </Routes>
  </BrowserRouter>
);
export default RouteConfig;
