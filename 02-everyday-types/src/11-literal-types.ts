let testString = 'Hello World'
testString = 'nmcb'

const consrString = 'Hello World'
//consrString = ''

let tt: 'hello' = 'hello'
//tt = 'world'

function printText(s: string, aligment: 'left' | 'right' | 'center'){

}
printText('hello','left')
printText('hello2','center')

function compare(a: string, b: string): -1 | 0| 1 {
    return a===b ? 0 : a>b ? 1 : -1
}

interface Options {
    width: number
}
function configure(x: Options | 'auto'){

}
configure(
    {
        width: 100
    }
)
configure('auto')
// configure('automatic')

let b1: true = true
let b2: false = false


const obje = {
    count: 0
}
if(true) {
    obje.count = 1
}


function handelRequest(url: string, method: 'GET' | 'POST' | 'GUESS'){

}
const req = {
    url: 'http://example.com',
    method: 'GET'
} as const
handelRequest(req.url, req.method)