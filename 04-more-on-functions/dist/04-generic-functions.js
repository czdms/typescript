"use strict";
// function firstElement(arr: any[]) {
//     return 100
// }
Object.defineProperty(exports, "__esModule", { value: true });
// firstElement(['a','c','v'])
// function firstElement<Type>(arr: Type[]): Type | undefined {
//     return arr[0]
// }
// // firstElement(['a','v','s'])
// firstElement([1,23,3])
// firstElement([])
function map(arr, func) {
    return arr.map(func);
}
const parsed = map(['1', '2', '3'], (n) => { parseInt(n); });
