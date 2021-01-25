import { Express } from "express";
import { Server } from "http";

export interface IService {
  beforeStart: (app: Express, server: Server) => void;
  afterStart: (app: Express, server: Server) => void;
}

export class Service implements IService {
  beforeStart(app: Express, server: Server) {}
  afterStart(app: Express, server: Server) {}
}
