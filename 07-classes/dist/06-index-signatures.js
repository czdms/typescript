"use strict";
//类中的索引签名
class MyClass {
    constructor() {
        this.x = true;
    }
    check(s) {
        return this[s];
    }
}
