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
        return res;
    },

    "get_page_access_token"(longToken){
        let baseURL = "https://graph.facebook.com/v2.12/";
        let pagePath = `me?fields=accounts`;
        let apiURL = `${baseURL}${pagePath}&access_token=${longToken}`;
        let res = HTTP.call("get", apiURL);
        let access_token=res.data.accounts.data[0].access_token;
        let pageId=res.data.accounts.data[0].id;

        try{
            let response=Meteor.call("subscribed_apps",pageId,access_token);
            return response;
        }
        catch(error){
            throw new Meteor.Error("Get Page Access Token Eror");
        }
    },

    "subscribed_apps"(pageId,access_token){
        let baseURL = "https://graph.facebook.com/v2.12/";
        let pagePath = `${pageId}/subscribed_apps`;
        let apiURL = `${baseURL}${pagePath}`;
        let res = HTTP.post( apiURL ,{data:{access_token}});

        try{
            let response=Meteor.call("subscriptions");
            return response;
        }
        catch(error){
            throw new Meteor.Error("subscriptions Eror");
        }
    },

    "subscriptions"(){
        let app_access_token="318287555375156|_0QGV9yhdjr6IUsrl-CsQhCEX44";
        let appId="318287555375156";
        let baseURL = "https://graph.facebook.com/v2.12/";
        let apiURL = `${baseURL}${appId}/subscriptions`;

        let res = HTTP.post( apiURL ,{data:{
            access_token:app_access_token,
            callback_url: 'https://b92c34bb.ngrok.io/callback_url',
            object: "page",
            verify_token: "Hello",
            fields: "feed"
        }});
        return res;
    }
})


