import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import routes from "./routes";

interface IRoute {
  path: string;
  component: any;
  exact: boolean;
}
const history = createBrowserHistory();
const RouteConfig = () => (
  <Router basename={window.location.pathname}>
    <Suspense fallback={"loading..."}>
      <Routes>
        {routes.map((route: IRoute, index: number) => {
          const { path } = route;
          return (
            <Route
              key={index}
              path={path}
              element={<route.component history={history} />}
            />
          );
        })}
      </Routes>
    </Suspense>
  </Router>
);
export default RouteConfig;
