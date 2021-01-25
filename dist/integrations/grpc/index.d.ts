import { Server } from "@grpc/grpc-js";
import { PackageDefinition, ProtobufTypeDefinition } from "@grpc/proto-loader";
import { ServiceClientConstructor, GrpcObject } from "@grpc/grpc-js/build/src/make-client";
import { Service } from "../../interfaces/service.interface";
export declare type GRpcConfig = {
    protoPath: string;
};
export declare class GRpcServer extends Service {
    server: Server;
    packageDefinition: PackageDefinition;
    routeguide: ProtobufTypeDefinition | GrpcObject | ServiceClientConstructor;
    constructor({ protoPath }: GRpcConfig);
    afterStart(): Promise<unknown>;
}
