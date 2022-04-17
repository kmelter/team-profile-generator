const Employee = require('./Employee');

function Engineer(employeeInfo, engineerInfo) {
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.email = employeeInfo.email;
        
        this.github = engineerInfo.github;
        this.role = 'Engineer';

    
}

module.exports = Engineer;