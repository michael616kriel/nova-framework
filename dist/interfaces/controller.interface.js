"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var express_1 = require("express");
var Controller = /** @class */ (function () {
    function Controller() {
        this.endpoint = '/';
        this.router = express_1.Router();
    }
    return Controller;
}());
exports.Controller = Controller;
