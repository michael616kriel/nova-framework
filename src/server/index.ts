import express, { Express } from "express";
import { Server as HttpServer } from "http";

export type ServerConfig = {
  port: number;
  host: string;
};

export class Server {
  express: Express;
  server: HttpServer;
  config: ServerConfig;
  constructor(config: ServerConfig) {
    this.config = config;
    this.express = express();
    this.server = new HttpServer(this.express);
    this.express.get('/', (req, res) => {
      res.send("Welcome to Nova!")
    })
  }
  async listen() {
    const {
      server,
      config: { port, host },
    } = this;
    await server.listen(port, host);
  }
}
