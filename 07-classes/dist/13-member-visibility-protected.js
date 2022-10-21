"use strict";
//procted 仅可在类的内部与子类中使用,实例中不可使用
//private 不允许从子类中访问
class Greeter {
    greet() {
        console.log(this.getName());
    }
    getName() {
        return 'hello';
    }
}
class Special extends Greeter {
    howdy() {
        console.log(this.getName());
    }
}
const g = new Special();
g.greet();
g.howdy();
// g.getName()
