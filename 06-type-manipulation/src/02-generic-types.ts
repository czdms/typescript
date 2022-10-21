//泛型类型



function identity<Type>(arg: Type): Type {
    return arg
}

// let myIndentity: <Type>(arg: Type) => Type = identity
// let myIndentity: <Input>(arg: Input) => Input = identity
// let myIndentity: {<Type>(arg: Type): Type} = identity


//泛型接口
// interface GenericIdentityFn {
//     <Type>(arg: Type): Type
   
// }
// let myIndentity: GenericIdentityFn = identity

interface GenericIdentityFn<Type> {
    (arg: Type): Type
}
let myIndentity: GenericIdentityFn<string> = identity