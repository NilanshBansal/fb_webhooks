import React, { Component } from "react";

import { Link } from 'react-router';
import {browserHistory} from "react-router";

export default class App extends Component {
    constructor(props) {
        super(props);

    }

    setSDK() {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '318287555375156',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.12'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount() {
        this.setSDK();
    }

   
    render() {
        return (
            <div> 
                <h1>Welcome</h1>
                <Link to="/login" className="btn btn-success btn-lg">Login Page</Link>
            </div>
            );
    }
}



