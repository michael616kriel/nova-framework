export interface IDatabase {
    connect: () => void;
    disconnect: () => void;
}
export interface IRepo {
    find: () => void;
    findOne: () => void;
    count: () => void;
    create: () => void;
    update: () => void;
    delete: () => void;
}
export declare class Repo implements IRepo {
    find(): void;
    findOne(): void;
    count(): void;
    create(): void;
    update(): void;
    delete(): void;
}
export declare class Database implements IDatabase {
    connect(): void;
    disconnect(): void;
}
