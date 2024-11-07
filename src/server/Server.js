import { Server } from "socket.io";
import { createServer } from "http";
import express from "express";
import { InLobyServer } from "./InLobyServer.js";
import { InCreateServer } from "./InCreateServer.js";
import { LogicServer } from "./controllers/LogicServer.js";

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
    this.init();
  }

  init() {
    this.inCreateServer.start();
    this.inLobyServer.start();

    this.io.on("connection", (socket) => {
      console.log("a user connected with id " + socket.id);

      socket.on("disconnect", () => {
        console.log("a user disconnected with id " + socket.id);
      });
    });
  }

  start() {
    console.log("Server listen on port 3000...");
    httpServer.listen(3000);
  }
}

new SocketServer().start();
