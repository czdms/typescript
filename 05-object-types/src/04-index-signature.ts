//索引签名


interface StringArray {
    //index可以是任何值 number代表属性名可以通过number找到，属性名的类型可以是数组，string代表属性值的类型是string
    [index: number]: string
}

const myArray: StringArray = ['a','b']
const secondItem = myArray[0]

interface TestString {
    //props可以是任何值 string代表属性名可以通过string找到，属性名的类型是string，对象的属性名是string,number代表属性值的类型是number
    [props: string]: number
}

let testString: TestString = {
    x:100,
    y:200,
    // aa:'aaa'
}

interface Animal {
    name: string
}

interface Dog extends Animal {
    breed: string
}

interface NotOkay {
    [index: string]: number | string
    length: number
    name: string
}

let notOkay: NotOkay = {
    x: 100,
    length:100,
    name:'felix'
}

interface ReadonlyStringArray {
    readonly[index: number]: string //给索引签名添加一个readonly
}

let myArr: ReadonlyStringArray = ['a','b']
// myArr[0] = 'c' //myArr是readonly的，无法修改