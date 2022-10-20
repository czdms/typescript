"use strict";
function doSomething(fn) {
    console.log(fn.descripttion + 'returned' + fn(6));
}
function fn1(n) {
    console.log(n);
    return true;
}
fn1.descripttion = 'hello';
doSomething(fn1);
