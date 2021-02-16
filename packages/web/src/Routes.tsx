
import * as React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import RouteWithLayout from "./components/RouteWithLayout";
import MainLayout from './layouts/Main';
import MinimalLayout from './layouts/Minimal';

import DashboardView from './views/Dashboard';
import AccountView from './views/Account';
import {SignInView, SignUpView} from './views/Authentication'
import NotFoundView from './views/NotFound';
import SqueezePages from "./views/SqueezePages";
import CreateSqueezePage from "./views/SqueezePages/CreatePage";
import UpdateSqueezePage from "./views/SqueezePages/UpdatePage";
export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect
                    exact
                    from="/"
                    to="/dashboard"
                />
                <RouteWithLayout
                    protect
                    component={DashboardView}
                    exact
                    layout={MainLayout}
                    path="/dashboard"
                />
                <RouteWithLayout
                    protect
                    component={AccountView}
                    exact
                    layout={MainLayout}
                    path="/account"
                />

                {/* Routing reference: https://www.react-most-wanted.com/tasks/create */}   
                <RouteWithLayout
                    protect
                    component={SqueezePages}
                    exact
                    layout={MainLayout}
                    path="/pages"
                />    
                <RouteWithLayout
                    protect
                    component={CreateSqueezePage}
                    exact
                    layout={MainLayout}
                    path="/pages/create"
                />  
                <RouteWithLayout
                    protect
                    component={UpdateSqueezePage}
                    exact
                    layout={MainLayout}
                    path="/pages/:pageId"
                />
                <RouteWithLayout
                    component={SignUpView}
                    exact
                    layout={MinimalLayout}
                    path="/sign-up"
                />
                <RouteWithLayout
                    component={SignInView}
                    exact
                    layout={MinimalLayout}
                    path="/sign-in"
                />
                <RouteWithLayout
                    component={NotFoundView}
                    exact
                    layout={MinimalLayout}
                    path="/not-found"
                />
                <Redirect to="/not-found" />
            </Switch>
        </BrowserRouter>
    );
};