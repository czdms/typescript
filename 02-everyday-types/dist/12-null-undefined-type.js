"use strict";
let x1 = undefined;
let y1 = null;
function doSomething(x) {
    if (x === null) {
    }
    else {
        console.log('Hello, ' + x.toUpperCase());
    }
}
function liveDangerously(x) {
    console.log(x.toFixed());
}
