"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var connect_1 = __importDefault(require("./database/connect"));
(0, connect_1.default)();
var server = (0, express_1.default)();
var PORT = process.env.PORT;
server.listen(PORT, function () {
    console.log("Server running in http://localhost:".concat(PORT, " \uD83D\uDE80"));
});
