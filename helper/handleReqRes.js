/*
Title:Handle Request Response
Description:Handle Request And Response
Author:juli jahan tondra
Date:6/25/2024
*/
//dependency 
import url from 'url';
import { StringDecoder } from 'string_decoder';
import { routes } from '../routes.js';
import { handler } from '../handlers/routeHandlers/notFoundHandler.js';
// module scaffolding
const handlers={}

handlers.handleReqRes=(req,res)=>{
    //req handling
    //get  the url and parsed it
    const parsedUrl=url.parse(req.url,true)
    const path=parsedUrl.pathname;
    const trimmedPath=path.replace(/^\/+|\/+$/g,'')
    const method=req.method.toLowerCase();
    const queryStringObject=parsedUrl.query;
    const headersObject=req.headers;
    //console.log(headersObject)
    const requestProperty={
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject
    }


    const decoder=new StringDecoder('utf-8')
    let realData=''
    const choosenHandler=routes[trimmedPath] ? routes[trimmedPath]:handler.notFoundHandler;

   
    req.on('data',(buffer)=>{
        realData+=decoder.write(buffer)
    })
    req.on('end',()=>{
        
        realData+=decoder.end()
        choosenHandler(requestProperty,(statusCode,payload)=>{
            statusCode=typeof(statusCode)==='number'?statusCode:500
            payload=typeof(payload)==='object'?payload:{};
            const payloadString=JSON.stringify(payload)
            //return the final response
            res.writeHead(statusCode)
            res.end(payloadString)
        })
     
        res.end("hellow world this is me juli jahan")
    })
    //res handle
}

export { handlers };