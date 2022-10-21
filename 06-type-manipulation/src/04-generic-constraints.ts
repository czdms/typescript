//泛型约束



interface LengthWise {
    length: number
}

//arg必须要有从LengthWise中继承的length属性
function logginIdentity<Type extends LengthWise>(arg: Type): Type {
    arg.length
    return arg
}

logginIdentity('wefwef')

