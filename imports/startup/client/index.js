import ReactDOM from "react-dom";
import React from "react";
import {routes} from "./routes";

Meteor.startup(()=>{
    ReactDOM.render(routes,document.querySelector(".render-target"));
});