//var const let
function printNumbers(){
    let j=10;
    const maxLimit = 5;
    // maxLimit = 20;
    for(let i=0;i<maxLimit;i++){
        console.log(i)
    }
    // console.log(i)
}

const employee = {
    firstName : 'Mayank',
    lastName : 'Mittal'
};
employee.firstName = 'Puneet';
console.log(employee);

printNumbers()