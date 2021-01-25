import { Server } from "../integrations";
import { Service } from "../interfaces/service.interface";
import { Storage } from "../interfaces/storage.interface";
export declare type NovaConfig = {
    services?: Service[];
    storage?: Storage;
};
export declare class Nova {
    server: Server;
    services: Service[];
    storage: Storage | null;
    constructor({ services, storage }: NovaConfig);
    getService(serviceName: string): Service;
    addService(service: Service): void;
    loadControllers(): Promise<import("..").Controller[]>;
    private beforeStart;
    private afterStart;
    listen(): Promise<void>;
}
export default Nova;
