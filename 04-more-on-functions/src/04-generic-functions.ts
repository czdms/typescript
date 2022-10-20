// function firstElement(arr: any[]) {
//     return 100
// }

import { parseIsolatedEntityName } from "typescript"

// firstElement(['a','c','v'])

// function firstElement<Type>(arr: Type[]): Type | undefined {
//     return arr[0]
// }

// // firstElement(['a','v','s'])
// firstElement([1,23,3])
// firstElement([])

function map<I, O>(arr: I[], func: (arg: I) => O): O[] {
    return arr.map(func)
}

const parsed = map(['1','2','3'], (n) => {parseInt(n)})