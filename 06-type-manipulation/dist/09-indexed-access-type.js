"use strict";
// //索引访问类型
// /* type Person = {
//     age: number
//     name: string
//     alive: boolean
// }
// type Age = Person['age'] //类型为Person里age的类型
// let age: Age = 90 */
// interface Person {
//     age: number
//     name: string
//     alive: boolean
// }
// //I1: string | number
// type I1 = Person['age' | 'name']
// //type I2: string | number | boolean
// type I2 = Person[keyof Person]
// type AliveOrName = 'alive' | 'name'
// type I3 = Person[AliveOrName] //即Person['alive' | 'name']
const Myarray = [
    { name: 'aa', age: 11 },
    { name: 'bb', age: 22 },
    { name: 'cc', age: 33 }
];
const p = {
    name: 'dd',
    age: 44,
    // alive: true
};
const age = 11;
const age2 = 77;
const test = { sex: 15, height: '180' };
const tt = { sex: 222, height: 'ewf' };
