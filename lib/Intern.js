const Employee = require('./Employee');

function Intern(employeeInfo, internInfo) { 
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.email = employeeInfo.email;
        
        this.school = internInfo.school;
        this.role = 'Intern';
    
}

module.exports = Intern;