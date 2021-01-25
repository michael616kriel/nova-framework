import {
  ApolloServer,
  gql,
  ApolloServerExpressConfig,
  PubSub 
} from "apollo-server-express";
import { Express } from "express";
import { Server } from "http";
import { Service } from "../../interfaces/service.interface";
export const pubsub = new PubSub();
export class Graphql extends Service {
  server: ApolloServer | null;
  config: ApolloServerExpressConfig;
  constructor(config: ApolloServerExpressConfig) {
    super();
    this.server = null;
    this.config = config;
  }
  beforeStart(app: Express, server: Server) {
    this.server = new ApolloServer({
      ...this.config,
      typeDefs: gql`
        ${this.config.typeDefs}
      `,
    });
    this.server.installSubscriptionHandlers(server);
    this.server.applyMiddleware({ app });
  }
}
