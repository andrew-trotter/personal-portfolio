"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = require("node:path");
const projects_1 = __importDefault(require("./routes/projects"));
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use(express_1.default.static((0, node_path_1.join)(__dirname, '..', 'dist')));
server.use(express_1.default.static((0, node_path_1.join)(__dirname, 'public')));
server.use('/api/v1/projects', projects_1.default);
exports.default = server;
