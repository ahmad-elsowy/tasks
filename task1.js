const person = {
    name:"ahmed",
    age : 30,
    greet : function(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}

console.log(person.greet())