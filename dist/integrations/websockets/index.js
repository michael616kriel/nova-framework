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
exports.WebSocket = void 0;
var socket_io_1 = require("socket.io");
var service_interface_1 = require("../../interfaces/service.interface");
var WebSocket = /** @class */ (function (_super) {
    __extends(WebSocket, _super);
    function WebSocket(config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this) || this;
        _this.server = null;
        _this.config = config;
        return _this;
    }
    WebSocket.prototype.afterStart = function (app, server) {
        this.server = new socket_io_1.Server(server);
        this.server.on("connection", function (socket) {
            console.log("User Connected to Socket");
        });
    };
    return WebSocket;
}(service_interface_1.Service));
exports.WebSocket = WebSocket;
