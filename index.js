const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employeeStore = [];
const employeeCardStore = ``;

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

const employeeInformationPrompt = async () => {
    const prompt = [
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter your employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:'
        }
    ]
    const answers = await inquirer.prompt(prompt);
    //console.log("anwswers in employee prompt function", answers);
    return answers;
}

const managerInformationPrompt = async () => {
    const prompt = [
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter your office number:'
        }
    ]
    const answers = await inquirer.prompt(prompt);
    //console.log("answers in manager prompt function", answers);
    return answers;
}

const initApp = async() => {
    let generalInformation = await employeeInformationPrompt();
    let managerInput = await managerInformationPrompt();
    new Manager(generalInformation, managerInput);
    //console.log('answers returned', generalInformation, managerInput);
}

initApp();