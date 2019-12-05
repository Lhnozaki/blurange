import React from 'react';
import { Route } from 'react-router-dom';
import SplashPage from '../Components/SplashPage';
import DesignSystem from '../Components/DesignSystem';
import Editor from '../Components/EditorComponents/Editor';
import Dashboard from "../Components/DashboardComponents/Dashboard";
import TemplatesList from '../Components/TemplatesList';
import JHome1 from '../Components/Templates/JTemplate1/JHome1';
import JAbout1 from '../Components/Templates/JTemplate1/JAbout1';
import JPortfolio1 from '../Components/Templates/JTemplate1/JPortfolio1';
import JResume1 from '../Components/Templates/JTemplate1/JResume1';
import JContact1 from '../Components/Templates/JTemplate1/JContact1';

export const routes = [
  {
    path: '/',
    exact: true,
    component: SplashPage
  },
  {
    path: '/design-system',
    exact: true,
    component: DesignSystem
  },
  {
    path: '/editor',
    exact: true,
    component: Editor
  },
  {
    path: '/dashboard',
    exact: true,
    component: Dashboard
  },
  {
    path: '/templates/jtemplate1',
    exact: true,
    component: JHome1
  },
  {
    path: '/templates/jtemplate1/about',
    exact: true,
    component: JAbout1
  },
  {
    path: '/templates/jtemplate1/portfolio',
    exact: true,
    component: JPortfolio1
  },
  {
    path: '/templates/jtemplate1/resume',
    exact: true,
    component: JResume1
  },
  {
    path: '/templates/jtemplate1/contact',
    exact: true,
    component: JContact1
  },
  {
    path: "/atemplate1",
    exact: true,
    component: ATemplate1
  },
  {
    path: "/atemplate2",
    exact: true,
    component: ATemplate2
  },
  {
    path: "/templates",
    exact: true,
    component: TemplatesList
  }
];

// Create auth routes and render if authorized in the home page
export const authRoutes = [
  {
    path: '/',
    exact: true
  },
  {
    path: '/design-system',
    exact: true,
    component: DesignSystem
  },
  {
    path: '/editor',
    exact: true,
    component: Editor
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
