interface Point {
    x: number
    y: number
}
function printCoord(pt: Point){

}
printCoord({
    x:100,
    y:200
})

// 扩展接口
/*interface Animal {
    name: string

}
interface Bear extends Animal {
    honey: boolean
}
const bear: Bear = {
    name: 'winie',
    honey: true
}

console.log(bear.name)
console.log(bear.honey)*/

// type Animal = {
//     name: string
// }
// type Bear = Animal & {
//     honey: boolean
// }
// const bear: Bear = {
//     name: 'winnie',
//     honey: true
// }

//向现有的类型添加字段
// interface MyWinid {
//     count: number
// }
// interface MyWinid {
//     title: string
// }

// const w: MyWinid = {
//     title: 'nmcb',
//     count: 100
// }


//类型创造以后是不能更改的
type MyWinid = {
    title: string
}