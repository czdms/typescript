"use strict";
//初始化顺序
class Base {
    constructor() {
        this.name = 'base';
        console.log('My name is ' + this.name);
    }
}
class Derived extends Base {
    constructor() {
        super();
        this.name = 'derived';
        console.log('My name is ' + this.name);
    }
}
const d = new Derived(); //new的时候，父类里面的构造函数先初始化，调用，之后子类里的才初始化
