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

export class Repo implements IRepo {
  find() {}
  findOne() {}
  count() {}
  create() {}
  update() {}
  delete() {}
}

export class Database implements IDatabase {
  connect() {}
  disconnect() {}
}
