"use strict";
function multiply(n, ...m) {
    return m.map(x => n * x);
}
const a = multiply(10, 1, 23, 4, 5);
console.log(a);
