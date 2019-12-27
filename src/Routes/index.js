import React from "react";
import { Route } from "react-router-dom";
import SplashPage from "../Components/SplashPage";
import DesignSystem from "../Components/DesignSystem";
import EditorTemplates from "../Components/EditorComponents/EditorTemplates";
import EditorDeploy from "../Components/EditorComponents/EditorDeploy";
import EditorInfo from "../Components/EditorComponents/EditorInfo";
import EditorPayments from "../Components/EditorComponents/EditorPayments";
import ATemplate1 from "../Components/Templates/ATemplate1";
import ATemplate2 from "../Components/Templates/ATemplate2";
import JTemplate1 from "../Components/Templates/JTemplate1/JHome1/JHome1";
import JTemplate1About1 from "../Components/Templates/JTemplate1/JAbout1";
import JTemplate1Portfolio1 from "../Components/Templates/JTemplate1/JPortfolio1";
import JTemplate1Resume1 from "../Components/Templates/JTemplate1/JResume1";
import JTemplate1Contact1 from "../Components/Templates/JTemplate1/JContact1";

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
    path: "/Templates/ATemplate1",
    exact: true,
    component: ATemplate1
  },
  {
    path: "/Templates/ATemplate2",
    exact: true,
    component: ATemplate2
  },
  {
    path: "/Templates/JTemplate1",
    exact: true,
    component: JTemplate1
  },
  {
    path: "/Templates/JTemplate1/JAbout1",
    exact: true,
    component: JTemplate1About1
  },
  {
    path: "/Templates/JTemplate1/JPortfolio1",
    exact: true,
    component: JTemplate1Portfolio1
  },
  {
    path: "/Templates/JTemplate1/JResume1",
    exact: true,
    component: JTemplate1Resume1
  },
  {
    path: "/Templates/JTemplate1/JContact1",
    exact: true,
    component: JTemplate1Contact1
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
