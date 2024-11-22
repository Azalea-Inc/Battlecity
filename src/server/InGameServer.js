export class InGameServer {
  constructor(io) {
    this.io = io;
  }

  start() {
    this.io.on("connection", (socket) => {
      console.log("a user connected with id " + socket.id);

      socket.on("start", ({ id }) => {
        socket.broadcast.emit("player-added", { id });
      });

      socket.on("move-left", ({ id }) => {
        socket.broadcast.emit("move-left", { id });
      });

      socket.on("move-right", ({ id }) => {
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
      });
    });
  }
}
