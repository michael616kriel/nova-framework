import { IStorage } from "../interfaces/storage.interface";
declare class S3Storage implements IStorage {
    constructor();
    readDir(): void;
    writeFile(): void;
    readFile(): void;
    removeFile(): void;
}
export default S3Storage;
