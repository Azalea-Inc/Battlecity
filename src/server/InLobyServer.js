import { Router } from "express";

export class InLobyServer {
  constructor(app) {
    this.app = app;
    this.router = Router();
  }

  init() {}

  start() {
    this.init();
    this.app.use("/in-loby", this.router);
  }
}
