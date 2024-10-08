const calculator = {
    num1 : 3,
    num2 : 4,
    sum(){
        return this.num1 + this.num2
    },
    describeSum(){
        return `The sum of ${this.num1} and ${this.num2} is ${this.sum()}`
    }

}

console.log(calculator.sum())
console.log(calculator.describeSum())