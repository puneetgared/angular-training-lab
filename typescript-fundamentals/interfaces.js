export function drawPoint(point) {
    const logMessage = `Drawing Point point x:  ${point.x}point y : ${point.y}`;
    console.log(logMessage);
    console.log('Drawing Point', point.x, point.y);
}
let point = {
    x: 10,
    y: 20
};
drawPoint({
    x: 10,
    y: 20
});
