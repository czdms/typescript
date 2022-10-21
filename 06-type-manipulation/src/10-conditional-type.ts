//条件类型



/* interface Animal {
    live(): void
}

interface Dog extends Animal {
    woof(): void
}

//type Example1 = number
type Example1 = Dog extends Animal ? number : string */

interface IdLable {
    id: number
}
interface NameLabel {
    name: string
}

// function createLabel(id: number): IdLable
// function createLabel(name: string): NameLabel
// function createLabel(nameOrId: string | number): IdLable | NameLabel
// function createLabel(nameOrId: string | number): IdLable | NameLabel {
//     throw ''
// }


type NameOrId<T extends number | string> = T extends number ? IdLable : NameLabel

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw ''
}


//cao 不想看了，已经疯了

//P75-78 未看
//上了贼船了，下不了了，以后再也不会碰千峰的视频了,黑马，尚硅谷，我对不起你们


