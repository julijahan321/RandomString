/*
Title:environment 
Description:handle all environment related things
Author:juli jahan tondra
Date:6/26/2024
*/
//dependency


//module scaffolding
const environment={}

environment.staging={
    port:3000,
    envName:'staging'
}
environment.production={
    port:5000,
    envName:'production' 
}

//determine which environment was passed
const currentEnvironment=typeof(process.env.Node_ENV)==='String' ?process.env.Node_ENV:'staging';
const environmentToExport=typeof(environment[currentEnvironment])==='object'? environment[currentEnvironment]:environment.staging
//export module
export default environmentToExport;