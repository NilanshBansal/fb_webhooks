import {Meteor} from "meteor/meteor";
import {HTTP} from "meteor/http";

Meteor.methods({
    "get_fb_long_token"(shortToken){
        let baseURL = "https://graph.facebook.com/v2.12/";
        let path = "oauth/access_token?grant_type=fb_exchange_token";
        let clientId = "318287555375156";
        let clientSecret = "909d9c8f0ff5b82086b1b5ae279641db";
        let apiURL = `${baseURL}${path}&client_id=${clientId}&client_secret=${clientSecret}&fb_exchange_token=${shortToken}`;
        let res = HTTP.call("get", apiURL);
        console.log("res : ", res);
        return res;
    },
   
})