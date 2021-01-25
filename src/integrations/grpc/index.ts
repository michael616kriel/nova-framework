import {
  Server,
  loadPackageDefinition,
  status,
  ServerCredentials,
} from "@grpc/grpc-js";
import {
  PackageDefinition,
  ProtobufTypeDefinition,
  loadSync,
} from "@grpc/proto-loader";
import {
  ServiceClientConstructor,
  GrpcObject,
} from "@grpc/grpc-js/build/src/make-client";
import NovaLogger from "../../nova-factory/logger";
import { Service } from "../../interfaces/service.interface";

const logger = new NovaLogger();

export type GRpcConfig = {
  protoPath: string;
};

export class GRpcServer extends Service {
  server: Server;
  packageDefinition: PackageDefinition;
  routeguide: ProtobufTypeDefinition | GrpcObject | ServiceClientConstructor;
  constructor({ protoPath }: GRpcConfig) {
    super();
    this.packageDefinition = loadSync(protoPath, {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    });
    this.routeguide = loadPackageDefinition(this.packageDefinition);
    this.server = new Server();
  }

  async afterStart() {
    const { server } = this;
    return new Promise(async (resolve, reject) => {
      try {
        await server.bindAsync(
          `127.0.0.1:${process.env.PORT || 4000}`,
          ServerCredentials.createInsecure(),
          async (err, port) => {
            await server.start();
            resolve({ err, port });
            logger.serverStarted(
              "GRpc Server Started",
              "http",
              "0.0.0.0",
              port
            );
          }
        );
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  }
}
