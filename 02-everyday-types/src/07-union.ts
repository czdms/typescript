// function printId(id: number | string){
//     // console.log(id)
//     if (typeof id === 'string'){
//         console.log(id.toUpperCase())
//     } else {
//         console.log(id)
//     }
// }

// printId(111)
// printId('22')

// function welcomePeople(x: string[] | string){
//    if(Array.isArray(x)){
//     console.log('hello' + x.join('and'))
//    } else {
//     console.log('welcome' + x)
//    }
// }

// welcomePeople('A')
// welcomePeople(['a','b'])


// function getFirstThree(x: number[] | string) {
//     return x.slice(0,3)
// }

// console.log(getFirstThree('abcdefg'))
// console.log(getFirstThree([2,3,4,5,6]))