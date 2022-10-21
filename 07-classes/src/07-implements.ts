// 继承 - implements子句



/* interface Pingable {
    ping(): void
}

class Sonar implements Pingable {
    ping() {
        console.log('Ping')
    }
}

class Ball implements Pingable {
    ping() {

    }

    pang() {

    }
} */

/* interface A {}
interface B {}

class C implements A, B {

} */

/* interface Checkable {
    check(name: string): boolean
}

class NameChecker implements Checkable {
    check(s: string | number) {
        // return s.toLowerCase() === 'ok'
        return true
    }
} */

interface A {
    x: number
    y?: number
}

class C implements A {
    x = 0
}

// const c = new C()
// console.log(c.x)