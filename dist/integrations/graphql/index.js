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
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphql = exports.pubsub = void 0;
var apollo_server_express_1 = require("apollo-server-express");
var service_interface_1 = require("../../interfaces/service.interface");
exports.pubsub = new apollo_server_express_1.PubSub();
var Graphql = /** @class */ (function (_super) {
    __extends(Graphql, _super);
    function Graphql(config) {
        var _this = _super.call(this) || this;
        _this.server = null;
        _this.config = config;
        return _this;
    }
    Graphql.prototype.beforeStart = function (app, server) {
        this.server = new apollo_server_express_1.ApolloServer(__assign(__assign({}, this.config), { typeDefs: apollo_server_express_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        ", "\n      "], ["\n        ", "\n      "])), this.config.typeDefs) }));
        this.server.installSubscriptionHandlers(server);
        this.server.applyMiddleware({ app: app });
    };
    return Graphql;
}(service_interface_1.Service));
exports.Graphql = Graphql;
var templateObject_1;
