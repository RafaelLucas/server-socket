import { Express } from "express";
import { SERVER_PORT } from "../global/enviroment";
import socketIO from "socket.io";
import http from 'http'

import * as sockets from '../sockets/sockets'

const express = require('express')
export class Server {

  private static _instance: Server;
  public app: any;
  public port: number;
  public io: socketIO.Server;
  private httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT
    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);
    this.listenSockets();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private listenSockets() {
    this.io.on('connection', client => {
      //console.log(client.handshake);
      console.log(`client connect with ip : ${client.handshake.address}, connect-hour : ${client.handshake.time}`);

      //message
      sockets.message(client, this.io)

      //disconnect
      sockets.disconnect(client)

    })
  }

  start() {
    this.httpServer.listen(this.port);
  }
}