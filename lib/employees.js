class Employee {
  constructor(name,email,id) {
    this.name= name;
    this.email= email;
    this.id= id
  }
  getName() {
    return this.name
  }
  getRole() {
    return "Employee"
  }
  getId() {
    return this.id
  }
  getEmail() {
    return this.email
  }}

module.exports = Employee;