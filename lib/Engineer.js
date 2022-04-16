const Employee = require('./Employee');

class Engineer {
    constructor() {
        this.github = getGitHub();
    }
    //TODO: Employee properties and methods

    getGitHub() {
        
    }

    getRole() {
        return 'Engineer';
    }
    
}

module.exports = Engineer;