/*
Title:Not found handler
Description:404 not found handler
Author:juli jahan tondra
Date:6/25/2024
*/

//module scaffolding
const handler={}

handler.notFoundHandler=(requestProperty,callBack)=>{
    callBack(404,{
        messege:'ypur requested url was not found'
    })
   

}
export {handler};