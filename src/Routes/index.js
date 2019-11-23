import React from "react";
import { Route } from "react-router-dom";
import SplashPage from '../Components/SplashPage';
import DesignSystem from '../Components/DesignSystem';
import Editor from '../Components/Editor';
import Dashboard from "../Components/Dashboard";

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
    }
]

// Create auth routes and render if authorized in the home page
export const authRoutes = [
    {
        path: '/',
        exact: true,
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