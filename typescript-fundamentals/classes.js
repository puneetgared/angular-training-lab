import { drawPoint } from './interfaces';
class Pointer {
    constructor(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    draw() {
        console.log(`Drawing Point point x:  ${this._x} point y : ${this._y}`);
    }
    get x() {
        return this._x;
    }
    set x(x) {
        if (x < 0)
            throw Error('Value should not less then 0');
        this._x = x;
    }
}
// let pointer : Pointer = new Pointer(10,20);
// pointer.x = 200
// console.log(pointer.x)
// pointer.draw()
drawPoint({
    x: 10,
    y: 20
});
