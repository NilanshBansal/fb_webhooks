import React from "react";
import {Router,Route,browserHistory} from "react-router";
import App from "../../ui/app";

export const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>
) 