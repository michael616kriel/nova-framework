import { Client, Config } from "knex";
import { Service } from "../../interfaces/service.interface";
export declare class Knex extends Service {
    client: Client;
    constructor(config: Config);
}
