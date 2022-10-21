//泛型对象类型




/* interface Box {
    //对contents不限制类型，不好
    contents: any
}

let box: Box = {
    contents: 'hello'
} */

/* interface Box {
    contents: unknown
}

let x: Box = {
    contents: 'hello world'
}

//  类型缩小
if(typeof x.contents === 'string') {
    console.log(x.contents.toLowerCase())
}

console.log((x.contents as string).toLowerCase) */


//函数重载  麻烦
/* interface NumberBox {
    contents: number
}
interface StringBox {
    contents: string
}
interface BooleanBox {
    contents: boolean
}

function setContents(box: StringBox, newContents: string): void
function setContents(box: NumberBox, newContents: number): void
function setContents(box: BooleanBox, newContents: boolean): void
function setContents(box: {contents: string | number | boolean}, newContents: any) {
    box.contents = newContents
} */


/* interface Box<Type> {
    contents: Type
}

interface StringBox {
    contents: string
}

let boxA: Box<string> = {
    contents: 'hello'
}

let boxB: StringBox = {
    contents: 100
} */

/* interface Box<Type> {
    contents: Type
}

interface Apple {

}

let a: Apple = {}

type AppleBox = Box<Apple>
let ab: AppleBox = {
    contents: a
} */

type Box<Type> = {
    contents: Type
}

type OrNull<Type> = Type | null
type OneOrMany<Type> = Type | Type[]
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>
// OrNull<OneOrMany<Type>>  <OneOrMany<Type>> | null    <Type | Type[]>  | null

type OneOrManyOrNullString = OneOrManyOrNull<string>
