// 交叉类型



interface Colorful {
    color: string
}

interface Circle {
    radius: number
}

type ColorCircle = Colorful & Circle
// 通过 type & ，ColorCicle 有 Colorful  Circle 全部属性

const cc: ColorCircle = {
    color: 'pink',
    radius: 1000
}

function draw(circle: Colorful & Circle) {
    console.log(circle.color)
    console.log(circle.radius)
}
draw({
    color: 'red',
    radius: 100
})