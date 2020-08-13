"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Comparator_1 = require("./Comparator");
class Not extends Comparator_1.Comparator {
    constructor() {
        super(...arguments);
        this.name = 'lessOrEqual';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        return !childrenValues[0];
    }
    isValid(vars, childrenValues) {
        return this.operands.length !== 2;
    }
}
exports.Not = Not;