"use strict";
// function len(s: string): number
// function len(arr: any[]): number
// function len(x: any) {
//     return x.length
// }
function len(x) {
    return x.length;
}
len('hello');
len([1, 2, 3]);
len(Math.random() > 0.5 ? 'hello' : [4, 56, 6]);
