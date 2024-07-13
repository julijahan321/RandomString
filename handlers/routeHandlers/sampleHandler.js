/*
Title:sample handler
Description:sample handler
Author:juli jahan tondra
Date:6/25/2024
*/

//module scaffolding
const handler={}

handler.sampleHandler=(requestProperty,callBack)=>{
    console.log(requestProperty)
  callBack(200,{
    messege:'this is a sample url'
  });
}
export {handler};