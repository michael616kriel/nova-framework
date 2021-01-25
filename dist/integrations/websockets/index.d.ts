/// <reference types="node" />
import { Server as SocketServer } from "socket.io";
import { Server } from "http";
import { Express } from "express";
import { Service } from "../../interfaces/service.interface";
declare type WebSocketConfig = {};
export declare class WebSocket extends Service {
    server: SocketServer | null;
    config: WebSocketConfig;
    constructor(config?: WebSocketConfig);
    afterStart(app: Express, server: Server): void;
}
export {};
