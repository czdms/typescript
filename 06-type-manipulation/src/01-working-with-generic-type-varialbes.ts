//使用通用类型变量



function loggingIdentity<Type>(arg: Array<Type>): Type[] {
    //Array<Type> Type类型的数组
    console.log(arg.length)
    return arg
}

loggingIdentity([100,200])