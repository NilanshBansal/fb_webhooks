import url from 'url';
import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import "./fb_methods";

Meteor.startup(()=>{
    WebApp.connectHandlers.use('/callback_url/',(req,res,next)=>{
        var body = "";
        req.on('data', Meteor.bindEnvironment(function (data) {
          body += data;
        }));
        req.on('end', Meteor.bindEnvironment(function () {
            if(req.url && req.url.split('=')[1]){
                res.writeHead(200);
                res.end(req.url.split('=')[2].split('&')[0]);
            }     
            console.log(body);
            console.log((JSON.parse(body)).entry[0].changes[0].field);
            next();
        }));
        
    })
})