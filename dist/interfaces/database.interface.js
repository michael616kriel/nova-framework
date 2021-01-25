"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.Repo = void 0;
var Repo = /** @class */ (function () {
    function Repo() {
    }
    Repo.prototype.find = function () { };
    Repo.prototype.findOne = function () { };
    Repo.prototype.count = function () { };
    Repo.prototype.create = function () { };
    Repo.prototype.update = function () { };
    Repo.prototype.delete = function () { };
    return Repo;
}());
exports.Repo = Repo;
var Database = /** @class */ (function () {
    function Database() {
    }
    Database.prototype.connect = function () { };
    Database.prototype.disconnect = function () { };
    return Database;
}());
exports.Database = Database;
