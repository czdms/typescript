"use strict";
//泛型约束
//arg必须要有从LengthWise中继承的length属性
function logginIdentity(arg) {
    arg.length;
    return arg;
}
logginIdentity('wefwef');
