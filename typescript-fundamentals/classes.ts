import { drawPoint } from './interfaces';
import myPoint from './interfaces';

class Pointer {
        
    constructor(private _x:number,private  _y:number){
    }

    draw(){
        console.log(`Drawing Point point x:  ${this._x} point y : ${this._y}`)
    }

    get x(){
        return this._x;
    }

    set x(x: number){
        if(x < 0) throw Error('Value should not less then 0');
        this._x = x;
    }
}

// let pointer : Pointer = new Pointer(10,20);
// pointer.x = 200
// console.log(pointer.x)
// pointer.draw()
drawPoint({
    x: 10,
    y:20
});
