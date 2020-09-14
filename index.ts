import Router from "express";
import { Server } from "./classes/server";
import { SERVER_PORT } from "./global/enviroment";
import { router } from "./routes/router";
import cors from "cors";


const bodyParser = require('body-parser')
const server = Server.instance;

//Config bodyParser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

//Config CORS
server.app.use(cors({ origin: true, credentials: true }))

//Rutas de servicios
server.app.use('/', router)

server.start(() => {
  console.log(`Servidor Funcionando Correctamente en el puerto ${server.port}`);
});
