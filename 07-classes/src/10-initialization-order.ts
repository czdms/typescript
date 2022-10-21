//初始化顺序


class Base {
    name = 'base'
    constructor() {
        console.log('My name is ' + this.name)
    }
}

class Derived extends Base {
    name = 'derived'
    constructor() {
        super()
        console.log('My name is ' + this.name)
    }
}

const d = new Derived() //new的时候，父类里面的构造函数先初始化，调用，之后子类里的才初始化