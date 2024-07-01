"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    getSum(num1, num2) {
        return num1 + num2;
    }
    getSub(num1, num2) {
        return num1 - num2;
    }
    getMult(num1, num2) {
        return num1 * num2;
    }
    getDiv(num1, num2) {
        if (num2 != 0)
            return num1 / num2;
        else
            return 0;
    }
}
exports.Calculator = Calculator;
//# sourceMappingURL=Calculator.js.map