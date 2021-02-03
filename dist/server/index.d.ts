/// <reference types="node" />
import { Express } from "express";
import { Server as HttpServer } from "http";
export declare type ServerConfig = {
    port: number;
    host: string;
};
export declare class Server {
    express: Express;
    server: HttpServer;
    config: ServerConfig;
    constructor(config: ServerConfig);
    loadControllers(rootDir: string): Promise<void>;
    listen(): Promise<void>;
}
