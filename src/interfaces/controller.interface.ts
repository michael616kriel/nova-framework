import { Router } from "express";

export interface IController {
    router: Router
}

export class Controller implements IController {
    router: Router
    endpoint:string
    constructor(){
        this.endpoint = '/'
        this.router = Router();
    }
}
