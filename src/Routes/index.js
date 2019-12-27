import React from "react";
import { Route } from "react-router-dom";
import SplashPage from "../Components/SplashPage";
import DesignSystem from "../Components/DesignSystem";
import Dashboard from "../Components/DashboardComponents/Dashboard";
import EditorTemplates from "../Components/EditorComponents/EditorTemplates";
import EditorDeploy from "../Components/EditorComponents/EditorDeploy";
import EditorInfo from "../Components/EditorComponents/EditorInfo";
import EditorPayments from "../Components/EditorComponents/EditorPayments";
import ATemplate1 from "../Components/Templates/ATemplate1";
import ATemplate2 from "../Components/Templates/ATemplate2";
// import JTemplate1 from "../Components/Templates/JTemplate1";

export const routes = [
  {
    path: "/",
    exact: true,
    component: SplashPage
  },
  {
    path: "/design-system",
    exact: true,
    component: DesignSystem
  },
  {
    path: "/editor/templates",
    exact: true,
    component: EditorTemplates
  },
  {
    path: "/editor/info",
    exact: true,
    component: EditorInfo
  },
  {
    path: "/editor/payments",
    exact: true,
    component: EditorPayments
  },
  {
    path: "/editor/deploy",
    exact: true,
    component: EditorDeploy
  },
  {
    path: "/dashboard",
    exact: true,
    component: Dashboard
  },
  {
    path: "/Templates/ATemplate1",
    exact: true,
    component: ATemplate1
  },
  {
    path: "/Templates/ATemplate2",
    exact: true,
    components: ATemplate2
  }
  // {
  //   path: "/Templates/JTemplate1",
  //   exact: true,
  //   components: JTemplate1
  // }
];

// Create auth routes and render if authorized in the home page
export const authRoutes = [
  {
    path: "/",
    exact: true
  },
  {
    path: "/design-system",
    exact: true,
    component: DesignSystem
  },
  {
    path: "/editor/templates",
    exact: true,
    component: EditorTemplates
  }
];

const Routes = () => {
  return (
    <>
      {routes.map((route, i) => (
        <Route
          key={`global_routes_${i}`}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </>
  );
};

export default Routes;
