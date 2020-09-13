import { Express } from "express";
import { SERVER_PORT } from "../global/enviroment";

const express = require('express')

export class Server {

  public app: any;
  public port: number;

  constructor() {
    this.app = express();
    this.port = SERVER_PORT
  }

  start(callback: Function) {
    this.app.listen(this.port, callback);
  }


}