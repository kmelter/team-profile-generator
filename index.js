const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { ChildProcess } = require('child_process');
const generateHTML = require('./src/generateHTML');
const employeeStore = [];
const roleStore = [];
let employeeCardStore = ``;


    const generateTemplate = async (employeeStore) => {
        for (let i = 0; i < employeeStore.length; i++) {
            let cardTemplate = `
            <div class="col">
                <div class="p-3 bg-primary text-white">
                    <div class="text-white h5">${employeeStore[i].name}</div>
                    <div class="text-white">${employeeStore[i].role}</div>
                </div>
                <div>
                    <div class="p-3 border bg-light">ID: ${employeeStore[i].id}</div>
                    <div class="p-3 border bg-light">Email: ${employeeStore[i].email}</div>
                    <div class="p-3 border bg-light">${roleStore[i]}</div>
                </div>
              </div>
            `

            employeeCardStore = employeeCardStore.concat(` `, cardTemplate);
        }

        fs.writeFile('./dist/index.html', await generateHTML(employeeCardStore), err => 
            err ? console.log(err) : console.log('Success! Go to the dist folder to see your completed index.html file.')
        );
    }


const managerInformationPrompt = async () => {
    const prompt = [
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number:'
        }
    ]
    const answers = await inquirer.prompt(prompt);
    return answers;
}

const engineerInformationPrompt = async () => {
    const prompt = [
        {
            type: 'input',
            name: 'github',
            message: 'Enter github username:'
        }
    ]
    const answers = await inquirer.prompt(prompt);
    return answers;
}

const internInformationPrompt = async () => {
    const prompt = [
        {
            type: 'input',
            name: 'school',
            message: 'Enter name school or university:'
        }
    ]
    const answers = await inquirer.prompt(prompt);
    return answers;
}
    
const employeeInformationPrompt = async () => {
    const prompt = [
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter employee email:'
        },
        {
            type: 'list',
            name: 'userType',
            message: 'Choose which to add:',
            choices: ['Intern', 'Engineer', 'Manager']
        }
    ]

    const answers = await inquirer.prompt(prompt);
    
    if (answers.userType === 'Manager') {
        let managerInput = await managerInformationPrompt();
        let newManager = new Manager(answers, managerInput);
        employeeStore.push(newManager);

        let managerTemp = `<div>Office Number: ${employeeStore[employeeStore.length - 1].officeNumber}</div>`;
        roleStore.push(managerTemp);
        
        const prompt = [
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add a new employee?'
            }
        ]
        const answer = await inquirer.prompt(prompt);
        if (answer.addEmployee === true) {
            employeeInformationPrompt();
        } else {
            generateTemplate(employeeStore);
        }
    }
    else if (answers.userType === 'Intern') {
        let internInput = await internInformationPrompt();
        let newIntern = new Intern(answers, internInput);
        employeeStore.push(newIntern);

        let internTemp = `<div>School: ${employeeStore[employeeStore.length - 1].school}</div>`;
        roleStore.push(internTemp);

        const prompt = [
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add a new employee?'
            }
        ]
        const answer = await inquirer.prompt(prompt);
        if (answer.addEmployee === true) {
            employeeInformationPrompt();
        } else {
            generateTemplate(employeeStore);
        }
    }
    else if (answers.userType === 'Engineer') {
        let engineerInput = await engineerInformationPrompt();
        let newEngineer = new Engineer(answers, engineerInput);
        employeeStore.push(newEngineer);

        let engineerTemp = `<div class="d-inline">GitHub: </div> <a href="http://github.com/${employeeStore[employeeStore.length - 1].github}" target="_blank">${employeeStore[employeeStore.length - 1].github}</a>`;
        roleStore.push(engineerTemp);

        const prompt = [
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add a new employee?'
            }
        ]
        const answer = await inquirer.prompt(prompt);
        if (answer.addEmployee === true) {
            employeeInformationPrompt();
        } else {
            generateTemplate(employeeStore);
        }
    }
    return answers;
}



const initApp = async() => {
    console.log('Enter manager information:');
    employeeInformationPrompt();    
}

initApp();

