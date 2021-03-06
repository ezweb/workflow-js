"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Comparator_1 = __importDefault(require("./Comparator"));
class Less extends Comparator_1.default {
    constructor() {
        super(...arguments);
        this.name = 'less';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        return childrenValues[0] < childrenValues[1];
    }
    isValid(vars, childrenValues) {
        return this.operands.length !== 2;
    }
    toString() {
        return this.getOperands().join(' < ');
    }
}
exports.default = Less;
