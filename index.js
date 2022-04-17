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

//prompt user for team information
    //ask for generic user information (ie. name, etc)
    //determine user type
    //ask questions for user type
//create user object
    //reference the object of data returned with if else to determine which object should be made
    //call constructor/pass arguments to constructor
    //push user to employeeStore
    //prompt to determine if user wants to add another employee or create HTML
        //IF user wants another employee, call initial prompt
        //ELSE run createHTML function
//inject information into an HTML template
    //use for loop to create cards from employeeStore
    //have a separate template for the cards
    //concat template into employeeCardStore
//write HTML template into HTML file
    //ensure the template has employeeCardStore
    //call fs.writeFile() after the for loop
    //ensure classes are present in HTML template and in cards (bootstrap)

    const generateTemplate = async (employeeStore) => {
        for (let i = 0; i < employeeStore.length; i++) {
            let cardTemplate = `
            <div class="col">
                <div class="p-3 bg-primary text-white">
                    <div class="text-white">${employeeStore[i].name}</div>
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

        let engineerTemp = `<div>GitHub: ${employeeStore[employeeStore.length - 1].github}</div>`;
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
    
    // let generalInformation = await employeeInformationPrompt();
    // let managerInput = await managerInformationPrompt();
    // let firstManager = new Manager(generalInformation, managerInput);
    // employeeStore.push(firstManager);
    // console.log(employeeStore);
    
}

initApp();

