//keyof类型操作符




/* type Point = {
    x: number
    y: number
}

//P 的类型是Point的key(属性名)的联合类型 P: 'x' | 'y'
type P = keyof Point

const p1: P = 'x'
const p2: P = 'y'
const p3: P = 'z'
 */
type Arrayish = {
    [n: number]: unknown
}
type A = keyof Arrayish
const a: A = 2

type Mapish = {
    [k: string]: boolean
}

//js会把[1]转化为['1'],所以M既可以是number,也可以说string,即number | string
type M = keyof Mapish
const m1: M = 's'
const m2: M = 3
// const m4: M = true
