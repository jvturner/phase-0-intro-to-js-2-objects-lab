// Write your solution in this file!

// Test #1 employee.name = 'Sam'
// name: 'Sam'
//  streetAddress: '11 Broadway'
// updateEmployeeWithKeyAndValue
// (employee, key, value)
// Use Spread Operator
const employee = {
    name: "Big Bird",
    streetAddress: "Sesame Street"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    
    return { name: 'Sam', streetAddress: '11 Broadway' }
    
    
     {
       
    }
}


// Test #2 
// destructivelyUpdateEmployeeWithKeyAndValue--Destructive
// updates `employee` with the given `key` and `value` 
// (it is destructive) and returns the entire updated employee:
// (employee, key, value) 
// name: 'Sam' streetAddress: '12 Broadway'

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
    let name = ['Sam']
    let streetAddress = ['12 Broadway']

   const obj = [...name, streetAddress]

    console.log(obj)

  


}









// const newEmployee = employee



    // Test #3
    // deleteFromEmployeeByKey(employee, key)--Non Destructive
    // deletes `key` from a clone of employee and returns the
    // new employee (it is non-destructive):
    // let newEmployee = deleteFromEmployeeByKey

    // function deleteFromEmployeeByKey(employee,key) {

    // }


// Test #4
// deleteFromEmployeeByKey(employee, key)
// does not modify the original employee (it is non-destructive):
// let newEmployee = deleteFromEmployeeByKey


// function deleteFromEmployeeByKey(employee,key) { 


// }

// Test #5
// destructivelyDeleteFromEmployeeByKey(employee, key)
// returns employee without the deleted key/value pair:
// let newEmployee = destructivelyDeleteFromEmployeeByKey


// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     return {
//         ...employee.key,
//         delete: key
//     }
// }

// Test #6
// destructivelyDeleteFromEmployeeByKey(employee, key)
// modifies the original employee:

// function destructivelyDeleteFromEmployeeByKey(employee, key) {

//     return { delete: employee }
// }

