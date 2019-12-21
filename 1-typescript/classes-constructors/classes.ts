class Calculator {

    number:number;

    constructor(value:number) {
        console.log('Starting calculator...');
        this.number = value;
        console.log(this.number);
    }

    sum(){
        return this.number + this.number;
    }
}

let calcA = new Calculator(10);
console.log(calcA.sum());

let calcB = new Calculator(15);
console.log(calcB.sum())