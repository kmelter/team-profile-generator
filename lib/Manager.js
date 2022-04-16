const Employee = require('./Employee');
const index = require('../index.js');

class Manager {
    constructor(employeeInfo, managerInfo) {
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.email = employeeInfo.email;

        this.officeNumber = managerInfo.officeNumber;
        this.role = 'Manager';
    }
    
    //TODO: Employee properties and methods


    // getRole() {
    //     const managerRole = 'Manager';
    //     return managerRole;
    // };
}

module.exports = Manager;