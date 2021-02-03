import { Server } from "../integrations";
import { Service } from "../interfaces/service.interface";
import { Storage } from "../interfaces/storage.interface";
export declare type NovaConfig = {
    rootDir: string;
    services?: Service[];
    storage?: Storage;
};
export declare class Nova {
    rootDir: string;
    server: Server;
    services: Service[];
    storage: Storage | null;
    constructor({ services, storage, rootDir }: NovaConfig);
    getService(serviceName: string): Service;
    addService(service: Service): void;
    private beforeStart;
    private afterStart;
    listen(): Promise<void>;
}
export default Nova;
