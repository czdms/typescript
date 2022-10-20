"use strict";
// 交叉类型
// 通过 type & ，ColorCicle 有 Colorful  Circle 全部属性
const cc = {
    color: 'pink',
    radius: 1000
};
function draw(circle) {
    console.log(circle.color);
    console.log(circle.radius);
}
draw({
    color: 'red',
    radius: 100
});
