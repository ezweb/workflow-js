"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionFunction = exports.Pow = exports.Times = exports.Plus = exports.Modulo = exports.Minus = exports.Divide = void 0;
const Divide_1 = __importDefault(require("./Arithmetics/Divide"));
exports.Divide = Divide_1.default;
const Minus_1 = __importDefault(require("./Arithmetics/Minus"));
exports.Minus = Minus_1.default;
const Modulo_1 = __importDefault(require("./Arithmetics/Modulo"));
exports.Modulo = Modulo_1.default;
const Times_1 = __importDefault(require("./Arithmetics/Times"));
exports.Times = Times_1.default;
const Plus_1 = __importDefault(require("./Arithmetics/Plus"));
exports.Plus = Plus_1.default;
const Pow_1 = __importDefault(require("./Arithmetics/Pow"));
exports.Pow = Pow_1.default;
const ActionFunction_1 = __importDefault(require("./ActionFunction"));
exports.ActionFunction = ActionFunction_1.default;