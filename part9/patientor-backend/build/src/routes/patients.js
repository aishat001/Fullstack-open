"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const patientRouter = express_1.default.Router();
patientRouter.get('/', (_req, res) => {
    res.send(patientService_1.default.getNonSensitiveEntries());
});
patientRouter.post('/', (_req, res) => {
    res.send('Saving a new patient!');
});
exports.default = patientRouter;
