import { Router } from "express";

export interface IController {
    router: Router
}

export class Controller implements IController {
    router: Router
    constructor(){
        this.router = Router();
    }
}
