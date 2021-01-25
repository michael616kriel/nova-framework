"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var log = console.log;
var NovaLogger = /** @class */ (function () {
    function NovaLogger() {
    }
    NovaLogger.prototype.welcome = function () {
        log(chalk_1.default.bgWhite(" " + chalk_1.default.black("Welcome to Nova Framework!") + " \n"));
    };
    NovaLogger.prototype.instanceInformation = function (nova) {
        var _a;
        var services = nova.services.map(function (service) {
            return service.constructor.name;
        });
        log(chalk_1.default.green("Services: "));
        for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
            var service = services_1[_i];
            log(chalk_1.default.white(" - " + service));
        }
        log(chalk_1.default.green("\n Storage: "));
        if (nova.storage) {
            log(chalk_1.default.white(" - " + ((_a = nova.storage) === null || _a === void 0 ? void 0 : _a.constructor.name)));
        }
        else {
            log(chalk_1.default.red(" - No storage has been configured."));
        }
        log("\n");
    };
    NovaLogger.prototype.serverStarted = function (message, protocol, host, port) {
        log(chalk_1.default.white(message) + ": " + chalk_1.default.green(protocol + "://" + host + ":" + port));
    };
    return NovaLogger;
}());
exports.default = NovaLogger;
