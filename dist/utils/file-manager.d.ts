import { Controller } from "../interfaces/controller.interface";
export declare class FileManager {
    controllers: Controller[];
    constructor();
    loadControllers(srcPath: string): Promise<Controller[]>;
}
