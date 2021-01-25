import { Router } from "express";
export interface IController {
    router: Router;
}
export declare class Controller implements IController {
    router: Router;
    constructor();
}
