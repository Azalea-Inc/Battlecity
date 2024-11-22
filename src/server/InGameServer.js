export class InGameServer {
  constructor(io, controller) {
    this.io = io;
    this.controller = controller;
  }

  start() {
    this.io.on("connection", (socket) => {
      console.log("a user connected with id " + socket.id);

      socket.on("join", () => {
        const player = this.controller.addPlayer(socket.id);
        socket.emit("welcome", player);
        socket.broadcast.emit("player-added", player);
      });

      socket.on("init", (player) => {
        socket.emit(
          "inGamePlayers",
          this.controller.getPlayers().filter((e) => e.id != player.id)
        );
      });

      socket.on("move-left", ({ id }) => {
        this.controller.moveLeft(id);
        socket.broadcast.emit("move-left", { id });
      });

      socket.on("move-right", ({ id }) => {
        this.controller.moveRight(id);
        socket.broadcast.emit("move-right", { id });
      });

      socket.on("move-down", ({ id }) => {
        socket.broadcast.emit("move-down", { id });
      });

      socket.on("move-up", ({ id }) => {
        socket.broadcast.emit("move-up", { id });
      });

      socket.on("rotate-left", ({ id }) => {
        socket.broadcast.emit("rotate-left", { id });
      });

      socket.on("rotate-right", ({ id }) => {
        socket.broadcast.emit("rotate-right", { id });
      });

      socket.on("shoot", ({ id }) => {
        socket.broadcast.emit("shoot", { id });
      });

      socket.on("disconnect", () => {
        console.log("a user disconnected with id " + socket.id);
        this.controller.removePlayer(socket.id);
        socket.broadcast.emit("player-disconnected", socket.id);
      });
    });
  }
}
