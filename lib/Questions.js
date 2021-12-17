const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Question() {
    this.employees = {};
    this.employees.managers = [];
    this.employees.engineers = [];
    this.employees.interns = [];
}

Question.prototype.startQuestions = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?",
                default: 'Danny'
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the team manager's id?",
                default: 12245
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the team manager's email?",
                default: 'dannyphantom@gmail.com'
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the team manager's office number?",
                default: 9254206969
            }
        ])
        .then(({name, id, email, officeNumber}) => {
            this.employees.managers.push(new Manager(name, id, email, officeNumber));
            this.newEmployee();
        });
}

Question.prototype.newEmployee = function() {
    inquirer    
        .prompt({
            type: 'list',
            name: 'employeeRole',
            message: 'Which role is the new employee?',
            choices: ['1 - Engineer', '2 - Intern']
        })
        .then(({employeeRole}) => {
            if (employeeRole === '1 - Engineer') {
                return this.addEngineer();
            }
            this.addIntern();
        });
}

Question.prototype.addEngineer = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
                default: 'Linda'
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id?",
                default: 44256
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?",
                default: 'lindaforshort@gmail.com'
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                default: 'lindaCodesALot'
            },
            {
                type: 'confirm',
                name: 'addNewConfirm',
                message: 'Would you like to add another employee to this project?'
            }
        ])
        .then(({name, id, email, github, addNewConfirm}) => {
            this.employees.engineers.push(new Engineer(name, id, email, github));
            console.log(this.employees);

            if (addNewConfirm) {
                return this.newEmployee();
            }
        });
}

Question.prototype.addIntern = function() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
                default: 'Dalton'
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id?",
                default: 72592
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?",
                default: 'akrunner@hotmail.com'
            },
            {
                type: 'input',
                name: 'school',
                message: "Where did this intern go to school?",
                default: 'College of Cthulhu'
            },
            {
                type: 'confirm',
                name: 'addNewConfirm',
                message: 'Would you like to add another employee to this project?'
            }
        ])
        .then(({name, id, email, school, addNewConfirm}) => {
            this.employees.interns.push(new Intern(name, id, email, school));
            console.log(this.employees);

            if (addNewConfirm) {
                return this.newEmployee();
            }
        });
}

module.exports = Question;