"use strict";
//使用通用类型变量
function loggingIdentity(arg) {
    //Array<Type> Type类型的数组
    console.log(arg.length);
    return arg;
}
loggingIdentity([100, 200]);
