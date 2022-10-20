function multiply(n: number, ...m: number[]) {
    return m.map(x => n * x)
}

const a = multiply(10,1,23,4,5)

console.log(a)