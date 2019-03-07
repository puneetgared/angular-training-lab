let employee = {
    firstName : 'Mayank',
    lastName : 'Mittal',
    team : 'GDW',
    address : {
        firstLine : 'Lane1'
    }
}

//ES5
// let firstName = employee.firstName
// let lastName = employee.lastName
// console.log(firstName,lastName);

//ES6
let {firstName,lastName} = employee;
let {firstName : firstNameNew} = employee;
console.log(firstName,lastName)
console.log(firstNameNew)