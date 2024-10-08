const car = {
    brand : 'Nissan', 
    model : 'Sunny',
    price: 100,
    getPriceWithTax(){
        return `${this.price + this.price*10 / 100}`
    },
    describeCar(){
        console.log(`The ${this.brand} ${this.model} costs ${this.getPriceWithTax()}`)
    }
}

console.log(car.getPriceWithTax())
car.describeCar()