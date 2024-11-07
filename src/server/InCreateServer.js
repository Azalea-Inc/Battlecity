import { Router } from "express";

export class InCreateServer {
  constructor(app, controller) {
    this.app = app;
    this.router = Router();
    this.controller = controller;
  }

  init() {
    this.router.post("/", (req, res) => {
      res.send("Partida Creada");
    });
  }

  start() {
    this.init();
    this.app.use("/in-create", this.router);
  }
}
