const scores = [10,20,50,6,90]

//ES5
const greaterThan20 = scores.filter(function(score) {
    return score > 20
});

console.log(greaterThan20)

const es6GreaterThan20 = scores.filter(score => score > 20);
console.log(es6GreaterThan20);

const log = (message) => {
    console.log('Logging :',message )
}
log('printing');