"use strict";
//重写方法
/* class Base {
    greet() {
        console.log('hello')
    }
}

class Drived extends Base {

    greet(name?: string) {
        //如果没有传name,则调用父类的greet方法
        if (!name) {
            super.greet()
            //如果有传name,则调用自己的方法
        } else {
            console.log(name.toUpperCase())
        }
    }
} */
/* class Drived extends Base {

    greet(name: string) {
        //如果没有传name,则调用父类的greet方法
        
            console.log(name.toUpperCase())
        }
    
} */
/* const d = new Drived()
d.greet()
d.greet('eferf')

const b: Base = d
b.greet() */ 
