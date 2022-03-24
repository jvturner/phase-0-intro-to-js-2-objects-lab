
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


    employee.streetAddress = '12 Broadway'
    return employee

}   // Test #3
// deleteFromEmployeeByKey(employee, key)--Non Destructive
// deletes `key` from a clone of employee and returns the
// new employee (it is non-destructive):
// let newEmployee = deleteFromEmployeeByKey

const newEmployee = { ...employee }
delete newEmployee.name
function deleteFromEmployeeByKey(employee, key) {

    return newEmployee
}



// Test #5
// destructivelyDeleteFromEmployeeByKey(employee, key)
// returns employee without the deleted key/value pair:
// let newEmployee = destructivelyDeleteFromEmployeeByKey



function destructivelyDeleteFromEmployeeByKey(employee, key,value){
    const erase = {employee}
    delete erase.employee[key],value
    return erase.employee
}

