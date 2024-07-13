/*
Title:Uptime monitoring application
Description:A RESTFULL API to monitor up or down time of user define links
Author:juli jahan tondra
Date:6/25/2024
*/

//dependencies
import http from 'http';
import { handlers } from './helper/handleReqRes.js';
import  environment  from './helper/environment.js';

//app object module-scaffolding
const app={
}



//creat server
app.creatServer=()=>{
    const server=http.createServer(app.handleReqRes)
    server.listen(environment.port,()=>{
        console.log(`listen to port ${environment.port}`)
    })
}

//handle  request response
app.handleReqRes=handlers.handleReqRes;
//server start 
app.creatServer();

