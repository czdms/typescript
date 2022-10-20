let x1 = undefined
let y1 = null

function doSomething(x: string | null){
    if(x === null) {

    } else {
        console.log('Hello, ' + x.toUpperCase())
    }
}

function liveDangerously(x?: number | null){
    console.log(x!.toFixed())
}