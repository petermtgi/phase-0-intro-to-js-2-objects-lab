// Write your solution in this file!
// Define the employee object globally
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
  // Non-destructive: Returns a new object with an updated key-value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  }
  
  // Destructive: Updates the employee object directly
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // Non-destructive: Deletes a key from a copy of employee and returns new object
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Destructive: Deletes a key directly from the employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  