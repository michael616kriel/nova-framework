import { Server as SocketServer } from "socket.io";
import { Server } from "http";
import { Express } from "express";
import { Service } from "../../interfaces/service.interface";

type WebSocketConfig = {};

export class WebSocket extends Service {
  server: SocketServer | null;
  config: WebSocketConfig;
  constructor(config: WebSocketConfig = {}) {
    super();
    this.server = null;
    this.config = config;
  }
  afterStart(app: Express, server: Server) {
    this.server = new SocketServer(server);
    this.server.on("connection", (socket) => {
      console.log("User Connected to Socket");
    });
  }
}
