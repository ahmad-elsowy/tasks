const student = {
    firstName : "ahmed",
    lastName : "gamal",
    age : 30,
    grades : [10, 20, 30],
    fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    calculateAverage(){
      return `${this.grades.reduce((a,c)=>a+c,0) / this.grades.length}`  
    },
    getStudentInfo(){
        return `Student: ${this.fullName()}, Age: ${this.age}, Average Grade: ${this.calculateAverage()}.`
       
    }
}

console.log(student.fullName())
console.log(student.calculateAverage()) // (10+20+30) / 3
console.log(student.getStudentInfo())