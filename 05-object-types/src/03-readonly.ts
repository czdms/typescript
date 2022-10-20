interface SomeType {
    readonly prop: string
}

function doSomething(obj: SomeType) {
    console.log(obj.prop)
    // obj.prop = 'hello'  //readonly “不可修改”
}


interface Home {
    readonly resdient: {
        name: string
        age: number
    }
}

function visitdeepenobj(home: Home) {
    console.log(home.resdient.name)
    home.resdient.age++ //readonly 对象中的属性可以修改
}

function evict(home: Home) {
    // home.resdient = {
    //     name: 'Felix',
    //     age: 18
    // }
    // readonly对象不可修改
}



interface Person {
    name: string
    age: number
}

interface ReadonlyPerson {
    readonly name: string
    readonly age: number
}

let writablePerson: Person = {
    name: 'nmcb',
    age: 18
}

let readonlyPerson: ReadonlyPerson = writablePerson
// readonly可以被覆盖？

console.log(readonlyPerson.age)
writablePerson.age++
console.log(readonlyPerson.age)