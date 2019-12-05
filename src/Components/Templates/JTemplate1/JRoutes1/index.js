import React from 'react';
import { Route } from 'react-router-dom';
import JHome1 from '../JHome1';
import JAbout1 from '../JAbout1';

export const routes = [
  {
    path: '/',
    exact: true,
    component: JHome1
  },
  {
    path: '/about',
    exact: true,
    component: JAbout1
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
