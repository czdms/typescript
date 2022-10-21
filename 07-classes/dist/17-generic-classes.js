"use strict";
// 泛型类
class Box {
    constructor(value) {
        this.contents = value;
    }
}
const b = new Box('hello');
const c = new Box(100);
// b.contents = 0
