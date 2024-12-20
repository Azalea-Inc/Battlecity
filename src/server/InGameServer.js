export class InGameServer {
  constructor(io, controller) {
    this.io = io;
    this.controller = controller;
    this.sockets = [];
  }

  start() {
    this.io.on("connection", (socket) => {
      console.log("a user connected with id " + socket.id);

      socket.on("join", () => {
        try {
          const player = this.controller.addPlayer(socket.id);
          socket.emit("welcome", player);
          socket.broadcast.emit("player-added", player);
        } catch (error) {
          console.log(error.message);
        }
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
        socket.emit("set-position", this.controller.getPlayer(id));
      });

      socket.on("move-right", ({ id }) => {
        this.controller.moveRight(id);
        socket.broadcast.emit("move-right", { id });
        socket.emit("set-position", this.controller.getPlayer(id));
      });

      socket.on("move-down", ({ id }) => {
        this.controller.moveDown(id);
        socket.broadcast.emit("move-down", { id });
        socket.emit("set-position", this.controller.getPlayer(id));
      });

      socket.on("move-up", ({ id }) => {
        this.controller.moveUp(id);
        socket.broadcast.emit("move-up", { id });
        socket.emit("set-position", this.controller.getPlayer(id));
      });

      socket.on("rotate-left", ({ id }) => {
        this.controller.rotateLeft(id);
        socket.broadcast.emit("rotate-left", { id });
        socket.emit("set-position", this.controller.getPlayer(id));
      });

      socket.on("rotate-right", ({ id }) => {
        this.controller.rotateRight(id);
        socket.broadcast.emit("rotate-right", { id });
        socket.emit("set-position", this.controller.getPlayer(id));
      });

      socket.on("shoot", ({ id }) => {
        socket.broadcast.emit("shoot", { id });
      });

      socket.on("disconnect", () => {
        console.log("a user disconnected with id " + socket.id);
        this.controller.removePlayer(socket.id);
        socket.broadcast.emit("player-disconnected", socket.id);
        this.sockets = this.sockets.filter((e) => e != socket.id);
      });
    });
  }
}
