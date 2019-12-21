"use strict";
var Calculator = /** @class */ (function () {
    function Calculator(value) {
        console.log('Starting calculator...');
        this.number = value;
        console.log(this.number);
    }
    Calculator.prototype.sum = function () {
        return this.number + this.number;
    };
    return Calculator;
}());
var calcA = new Calculator(10);
console.log(calcA.sum());
var calcB = new Calculator(15);
console.log(calcB.sum());
