export default interface IPoint {
    x: number,
    y: number
}

export function drawPoint(point : IPoint){
    const logMessage = `Drawing Point point x:  ${point.x}point y : ${point.y}`;
    console.log(logMessage)
    console.log('Drawing Point',point.x,point.y);
}



let point : IPoint = {
    x: 10,
    y:20
};
drawPoint(<IPoint>{
    x: 10,
    y:20
})