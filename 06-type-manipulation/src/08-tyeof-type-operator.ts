//typeof 类型操作符



// //js原生typeof
// console.log(typeof 'hello')

/* let s = 'hello'
let n: typeof s
n = 'ed'
n = 34 */

//ReturnType<T> 获取函数返回值类型  T是函数类型 

/* type Predicate = (x: unknown) => boolean
type K = ReturnType<Predicate>

const c: K = true

function f() {
    return {
        x: 10,
        y: 3
    }
}
type P = ReturnType<typeof f>
// const p: P = 100 */
function msgbox() {}
//typeof只能修饰某个变量或某个对象里面的属性
// let shouldContinue2: typeof msgbox() 错误
let shouldContinue: typeof msgbox //类型为()=>void
// shouldContinue = 100