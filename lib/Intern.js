const inquirer = require('inquirer');
const Employee = require('./Employee');
let answers = {};

function Intern(employeeInfo) { 
        this.name = employeeInfo.name;
        this.id = employeeInfo.id;
        this.email = employeeInfo.email;
        
        Intern.prototype.internInformationPrompt = async () => {
            const prompt = [
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter name school or university:'
                }
            ]
            answers = await inquirer.prompt(prompt);
            return answers;
        }

        this.school = answers.school;
        this.role = 'Intern';
    

    // getSchool() {

    // }

    // getRole() {
    //     return 'Intern';
    // }
}

module.exports = Intern;