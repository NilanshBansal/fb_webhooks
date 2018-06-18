/* import "./insta_methods";
import "./fb_methods";
import {Pages} from "../../api/pages"; */
import url from 'url';
import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";

Meteor.startup(()=>{
    WebApp.connectHandlers.use('/callback_url/',(req,res,next)=>{
        

        var body = "";
        req.on('data', Meteor.bindEnvironment(function (data) {
          body += data;
        }));
        res.writeHead(200);
        req.on('end', Meteor.bindEnvironment(function () {
            if(req.url && req.url.split('=')[1]){
                res.end(req.url.split('=')[2].split('&')[0]);
            }     
            console.log(body);
            console.log(JSON.parse(body).entry[0].changes[0].field);
            
            
            


            next();
        }));
        
    })
   
    
})