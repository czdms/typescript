"use strict";
function myForeach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        // callback(arr[i],i)
        callback(arr[i]);
    }
}
// myForeach([1,2,3],(a) => console.log(a))
// myForeach([1,3,4],(a,i) => console.log(a,i))
// myForeach([1,2,3], (a, i) => {
//      {
//         console.log(i.toFixed())
//     }
// })
