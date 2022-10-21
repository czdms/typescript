// 泛型类

class Box<Type> {
    contents: Type
    
    constructor(value: Type) {
        this.contents = value
    }

    //静态成员无法使用泛型
    // static test: Type
}

const b: Box<string> = new Box('hello')
const c = new Box<number>(100)
// b.contents = 0