// //拓展属性


// interface BasicAddress {
//     name?: string
//     street: string
//     city: string
//     country: string
// }

// // interface AddressWithUnit {
// //     name?: string
// //     street: string
// //     city: string
// //     countr: string
// //     unit: string
// // }


// interface AddressWithUnit extends BasicAddress {
//     //extends 令 AddressWithUnit 继承了 BasicAdress 的全部属性
//     unit: string
// }

// let awu: AddressWithUnit = {
//     unit: '3单元',
//     street: 'windy',
//     city: 'NewYork',
//     country: 'USA'
// }

// interface Colorful {
//     color: string
// }
// interface Circle {
//     radius: number
// }

// interface ColorCircle extends Colorful, Circle {
//     //ColorCircle 继承了 Colorful, Circle
// }
// const cc: ColorCircle = {
//     color: 'pink',
//     radius: 4
// }