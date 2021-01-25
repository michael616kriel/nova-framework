import { Server } from "../integrations";
import { Service } from "../interfaces/service.interface";
import { Storage } from "../interfaces/storage.interface";
import NovaLogger from "./logger";
import { FileManager } from "../utils/file-manager";
import { join, dirname } from "path";

export type NovaConfig = {
  rootDir:string
  services?: Service[];
  storage?: Storage;
};

const logger = new NovaLogger();

export class Nova {
  rootDir:string;
  server: Server;
  services: Service[];
  storage: Storage | null;

  constructor({ services, storage, rootDir }: NovaConfig) {
    this.server = new Server({
      port: 3000,
      host: "0.0.0.0",
    });
    this.rootDir = rootDir
    this.services = services ? [...services] : [];
    this.storage = storage ? storage : null;
  }

  getService(serviceName: string): Service {
    return this.services.find((service) => {
      return service.constructor.name === serviceName;
    }) as Service;
  }

  addService(service: Service) {
    this.services.push(service);
  }

  async loadControllers() {
    const files = new FileManager();
    return await files.loadControllers(
      join(this.rootDir, `./controllers`)
    );
  }

  private async beforeStart() {
    await this.loadControllers();
    await Promise.all(
      this.services.map(
        async (service) =>
          await service.beforeStart(this.server.express, this.server.server)
      )
    );
  }

  private async afterStart() {
    return await Promise.all(
      this.services.map(
        async (service) =>
          await service.afterStart(this.server.express, this.server.server)
      )
    );
  }

  async listen() {
    await this.beforeStart();
    await this.server.listen();
    logger.welcome();
    logger.instanceInformation(this);
    logger.serverStarted("Server Started", "http", "0.0.0.0", 3000);
    await this.afterStart();
  }
}
export default Nova;
