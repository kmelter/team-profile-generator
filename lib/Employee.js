const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Employee {
    constructor() {
        this.name = getName();
        this.id = getId();
        this.email = getEmail();
    }

    getName() {
        inquirer
            .prompt()
    }
        
    getId() {

    }

    getEmail() {

    }

    getRole() {
       return 'Employee';
    }

    
}

module.exports = Employee;