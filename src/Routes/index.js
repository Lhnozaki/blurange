import React from "react";
import { Route } from "react-router-dom";
import SplashPage from '../Components/SplashPage';
import DesignSystem from '../Components/DesignSystem';

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
    }
]


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
    )
}

export default Routes;