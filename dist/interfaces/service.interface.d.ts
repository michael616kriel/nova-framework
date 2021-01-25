/// <reference types="node" />
import { Express } from "express";
import { Server } from "http";
export interface IService {
    beforeStart: (app: Express, server: Server) => void;
    afterStart: (app: Express, server: Server) => void;
}
export declare class Service implements IService {
    beforeStart(app: Express, server: Server): void;
    afterStart(app: Express, server: Server): void;
}
