const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

function Employee(answers) {
    this.name = answers.name;
    this.id = answers.id;
    this.email = answers.email;

    

}

module.exports = Employee;