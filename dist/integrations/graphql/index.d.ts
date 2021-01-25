/// <reference types="node" />
import { ApolloServer, ApolloServerExpressConfig, PubSub } from "apollo-server-express";
import { Express } from "express";
import { Server } from "http";
import { Service } from "../../interfaces/service.interface";
export declare const pubsub: PubSub;
export declare class Graphql extends Service {
    server: ApolloServer | null;
    config: ApolloServerExpressConfig;
    constructor(config: ApolloServerExpressConfig);
    beforeStart(app: Express, server: Server): void;
}
