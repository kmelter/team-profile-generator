const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { ChildProcess } = require('child_process');
const employee = new Employee();
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

    


const initApp = async() => {
    console.log('Enter manager information:');
    employee.employeeInformationPrompt();
    
    // let generalInformation = await employeeInformationPrompt();
    // let managerInput = await managerInformationPrompt();
    // let firstManager = new Manager(generalInformation, managerInput);
    // employeeStore.push(firstManager);
    // console.log(employeeStore);
    
}

initApp();