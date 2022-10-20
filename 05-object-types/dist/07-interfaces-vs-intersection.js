"use strict";
//处理冲突
/* interface Sister {
    name: string
}

interface Sister {
    age: number
}

//定义了两个相同的接口 interface 里面的属性会合并
const sister1: Sister = {
    name: 'sister',
    age: 20
} */
// type不可以定义同名的别名，避免冲突
/* type Sister = {
    name: string
}
type Sister = {

} */
