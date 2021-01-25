"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Redis = void 0;
var redis_1 = require("redis");
var util_1 = require("util");
var service_interface_1 = require("../../interfaces/service.interface");
/*
    // new Redis({
    //   port: 6379,
    //   host: "120.0.0.1",
    //   password: "your password",
    // }),
*/
var Redis = /** @class */ (function (_super) {
    __extends(Redis, _super);
    function Redis(config) {
        var _this = _super.call(this) || this;
        _this.client = null;
        _this.config = config;
        return _this;
    }
    Redis.prototype.beforeStart = function (app, server) {
        this.client = redis_1.createClient(this.config);
        this.client.on("error", function (error) {
            console.error(error);
        });
    };
    Redis.prototype.get = function () {
        if (this.client) {
            return util_1.promisify(this.client.get).bind(this.client);
        }
    };
    Redis.prototype.set = function () {
        if (this.client) {
            return util_1.promisify(this.client.set).bind(this.client);
        }
    };
    return Redis;
}(service_interface_1.Service));
exports.Redis = Redis;
