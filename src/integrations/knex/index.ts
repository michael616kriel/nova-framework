import { Client, Config } from "knex";
import { Service } from "../../interfaces/service.interface";

export class Knex extends Service {
  client: Client;
  constructor(config: Config) {
    super();
    this.client = new Client(config);
  }
}
