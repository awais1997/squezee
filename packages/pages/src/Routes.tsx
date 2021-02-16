
import * as React from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import {RouteWithLayout} from "./components/RouteWithLayout";
import MinimalLayout from './layouts/Center';
import SqueezePage from './views/SqueezePage';
import NotFoundView from './views/NotFound';

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect
                    exact
                    from="/"
                    to="/not-found"
                />
                <RouteWithLayout
                    component={NotFoundView}
                    exact
                    layout={MinimalLayout}
                    path="/not-found"
                />
                <Route
                    // render={SqueezePage}
                    render={(matchProps: any) => (<SqueezePage {...matchProps} />)}
                    exact
                    path="/:pageSlug"
                />
                <Redirect to="/not-found" />
            </Switch>
        </BrowserRouter>
    );
};