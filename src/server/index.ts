import express, { Express } from "express";
import { Server as HttpServer } from "http";
import { Controller } from "../interfaces/controller.interface";
import { FileManager } from "../utils/file-manager";
import { join } from "path";

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
    this.express.get("/", (req, res) => {
      res.send("Welcome to Nova!");
    });
  }

  async loadControllers(rootDir: string) {
    const { express } = this;
    const files = new FileManager();
    const controllers: Controller[] = await files.loadControllers(
      join(rootDir, `./controllers`)
    );
    controllers.forEach((ctlr: Controller) => {
      // @ts-ignore figure out how to instatiate class properly
      const controller = new ctlr();
      express.use(controller.endpoint, controller.router);
    });
  }

  async listen() {
    const {
      server,
      config: { port, host },
    } = this;
    await server.listen(port, host);
  }
}
