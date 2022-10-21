//继承内置属性



class MsgError extends Error {
    constructor(m: string) {
        super(m)
    }

    sayHello() {
        return 'hello' + this.message
    }
}

const msgError = new MsgError('m') 
console.log(msgError.sayHello())