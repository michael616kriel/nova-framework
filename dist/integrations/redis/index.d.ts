/// <reference types="node" />
import { RedisClient, ClientOpts } from "redis";
import { Express } from "express";
import { Server } from "http";
import { Service } from "../../interfaces/service.interface";
export declare class Redis extends Service {
    client: RedisClient | null;
    config: ClientOpts;
    constructor(config: ClientOpts);
    beforeStart(app: Express, server: Server): void;
    get(): ((arg1: string) => Promise<string | null>) | undefined;
    set(): ((arg1: string, arg2: string) => Promise<unknown>) | undefined;
}
