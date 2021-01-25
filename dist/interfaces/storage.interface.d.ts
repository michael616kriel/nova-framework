export interface IStorage {
    readDir: () => void;
    writeFile: () => void;
    readFile: () => void;
    removeFile: () => void;
}
export declare class Storage implements IStorage {
    readDir(): void;
    writeFile(): void;
    readFile(): void;
    removeFile(): void;
}
