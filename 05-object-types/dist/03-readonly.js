"use strict";
function doSomething(obj) {
    console.log(obj.prop);
    // obj.prop = 'hello'  //readonly “不可修改”
}
function visitdeepenobj(home) {
    console.log(home.resdient.name);
    home.resdient.age++; //readonly 对象中的属性可以修改
}
function evict(home) {
    // home.resdient = {
    //     name: 'Felix',
    //     age: 18
    // }
    // readonly对象不可修改
}
let writablePerson = {
    name: 'nmcb',
    age: 18
};
let readonlyPerson = writablePerson;
// readonly可以被覆盖？
console.log(readonlyPerson.age);
writablePerson.age++;
console.log(readonlyPerson.age);
