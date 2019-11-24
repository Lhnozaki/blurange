import React from 'react';
import { Route } from 'react-router-dom';
import SplashPage from '../Components/SplashPage';
import DesignSystem from '../Components/DesignSystem';
import TemplatesList from '../Components/TemplatesList';
import JTemplate1 from '../Components/Templates/JTemplate1';

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
    path: '/jtemplate1',
    exact: true,
    component: JTemplate1
  },
  {
    path: '/templates',
    exact: true,
    component: TemplatesList
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
