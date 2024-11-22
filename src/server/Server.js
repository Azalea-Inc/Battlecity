import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
import { InLobyServer } from "./InLobyServer.js";
import { InCreateServer } from "./InCreateServer.js";
import { LogicServer } from "./controllers/LogicServer.js";
import { InGameServer } from "./InGameServer.js";

const app = express();
const httpServer = createServer(app);

class SocketServer {
  constructor() {
    this.io = new Server(httpServer, {
      cors: {
        origin: "*"
      }
    });

    this.logic = new LogicServer();

    this.inCreateServer = new InCreateServer(
      app,
      this.logic.getInCreateController()
    );
    this.inLobyServer = new InLobyServer(app);
    this.inGameServer = new InGameServer(this.io);

    this.init();
  }

  init() {
    this.inCreateServer.start();
    this.inLobyServer.start();
    this.inGameServer.start();
  }

  start() {
    console.log("Server listen on port 3000...");
    httpServer.listen(3000);
  }
}

new SocketServer().start();
