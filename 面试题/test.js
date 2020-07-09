function Person(name,age){
    this.name = name;
    this.age = age;
    this.say = function(){console.log('Hello world')}
}
Person.prototype.setAge = function(age){
    this.age = age;
}

function Student(name,age,price){
    Person.call(this,name,age);
    this.price = price;
    this.setScore = function(){}
}

Student.prototype = Object.create(Person.prototype) //核心代码
Student.prototype.constructor = Student //核心代码
var s1 = new Student('Tom',20,500);
console.log(s1 instanceof Student, s1 instanceof Person) // true true
console.log(s1.constructor) //Student
console.log(s1)