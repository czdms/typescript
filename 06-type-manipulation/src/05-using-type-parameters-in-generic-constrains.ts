//在泛型约束中使用类型参数



//Key extends keyof Type 表示 Key属于Type类型中的属性值
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key]
}

let x = {
    a: 1,
    b: 2,
    c: 3
}

getProperty(x,'a')
// getProperty(x,'m')