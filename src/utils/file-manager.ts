import { readdirSync } from "fs";
import { join } from "path";
import { Controller } from "../interfaces/controller.interface";

export class FileManager {
  controllers: Controller[];

  constructor() {
    this.controllers = [];
  }

  async loadControllers(srcPath: string) {
    const apis = await readdirSync(srcPath);
    this.controllers = apis.map(
      (dir) => require(join(srcPath, dir)).default as Controller
    );
    return this.controllers;
  }
}
