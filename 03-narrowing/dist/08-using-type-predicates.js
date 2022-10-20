"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function getSmallPet() {
    let fish = {
        name: 'shark',
        swim: () => {
        }
    };
    let bird = {
        name: 'sparrow',
        fly: () => {
        }
    };
    return true ? bird : fish;
}
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim;
}
else {
    pet.fly;
}
