import { RedisClient, createClient, ClientOpts } from "redis";
import { promisify } from "util";
import { Express } from "express";
import { Server } from "http";
import { Service } from "../../interfaces/service.interface";
/*
    // new Redis({
    //   port: 6379,
    //   host: "120.0.0.1",
    //   password: "your password",
    // }),
*/
export class Redis extends Service {
  client: RedisClient | null;
  config: ClientOpts;
  constructor(config: ClientOpts) {
    super();
    this.client = null;
    this.config = config;
  }
  beforeStart(app: Express, server: Server) {
    this.client = createClient(this.config);
    this.client.on("error", (error) => {
      console.error(error);
    });
  }
  get() {
    if (this.client) {
      return promisify(this.client.get).bind(this.client);
    }
  }
  set() {
    if (this.client) {
      return promisify(this.client.set).bind(this.client);
    }
  }
}
