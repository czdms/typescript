type DescribableFunction = {
    descripttion: string
    (someArg: number): boolean
}

function doSomething(fn: DescribableFunction){
    console.log(fn.descripttion + 'returned' + fn(6))
}

function fn1(n: number) {
    console.log(n)
    return true
}
fn1.descripttion = 'hello'

doSomething(fn1)

