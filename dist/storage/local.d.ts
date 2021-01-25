import { IStorage } from "../interfaces/storage.interface";
declare class LocalStorage implements IStorage {
    constructor();
    readDir(): void;
    writeFile(): void;
    readFile(): void;
    removeFile(): void;
}
export default LocalStorage;
