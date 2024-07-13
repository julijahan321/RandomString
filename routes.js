/*
Title:routes
Description:Application routes
Author:juli jahan tondra
Date:6/25/2024
*/

//dependency

import { handler } from "./handlers/routeHandlers/sampleHandler.js"

const routes={
    'sample':handler.sampleHandler
}

export {routes}