"use strict";
/* //getters-setters


class C {
    _length = 0

    get length() {
        return this._length
    }

    //如果未设置set,则length是只读的
    //若未设置set的返回值类型，则会从get的返回值类型推断
    set length(value) {
        this._length = value
    }
}

let c: C = new C()

console.log(c.length) //不需要c.length()
c.length = 100
// c.length = 'jj'
console.log(c.length) */
class Thing {
    constructor() {
        this._size = 0;
    }
    get size() {
        return this._size;
    }
    set size(value) {
        let num = Number(value);
        //Number.isFinite(num) 判断num是否是一个可除尽的数字
        if (!Number.isFinite(num)) {
            this._size = 0;
            return;
        }
        this._size = num;
    }
}
let t = new Thing();
console.log(t.size);
