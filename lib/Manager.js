const Employee = require('./Employee');
const index = require('../index.js');

function Manager(employeeInfo, managerInfo) {
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.email = employeeInfo.email;

        this.officeNumber = managerInfo.officeNumber;
        this.role = 'Manager';

}

module.exports = Manager;