let Person = (function(){
    let _name = new WeakMap();//* 私有属性
    function Person(name){
        _name.set(this,name);
    }
    Person.prototype.getName = function(){
        return _name.get(this);
    }
    return Person;
}());

let p1 = new Person('SONGJIE');
console.log(p1._name);
console.log(p1.getName());