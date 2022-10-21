"use strict";
//在泛型中使用类类型 ??????????????????????????????????????????????????????????????????????
// function create<Type>(c: {new (): Type}): Type {
//     return new c()
// }
class BeeKeeper {
    constructor() {
        this.hasMask = true;
    }
}
class ZooKeeper {
    constructor() {
        this.nametag = 'Mikle';
    }
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Bee extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new BeeKeeper();
    }
}
// console.log(Bee.keeper)
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.keeper = new ZooKeeper();
    }
}
//传入的泛型必须是Animal类型或Animal的实例
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
// createInstance(BeeKeeper)
