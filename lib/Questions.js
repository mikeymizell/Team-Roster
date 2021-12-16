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
    let managerName = '';
    let managerId = 00000;
    let managerEmail = '';
    let managerOfficeNumber = 0000000000;

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
            console.log(this.employees);
        });

    // inquirer
    //     .prompt({
    //         type: 'input',
    //         name: 'id',
    //         message: "What is the team manager's id?",
    //         default: 12245
    //     })
    //     .then(({id}) => {
    //         managerId = id;
    //         console.log(managerId);
    //     });

    // inquirer
    //     .prompt({
    //         type: 'input',
    //         name: 'email',
    //         message: "What is the team manager's email?",
    //         default: 'dannyphantom@gmail.com'
    //     })
    //     .then(({email}) => {
    //         managerEmail = email;
    //         console.log(managerEmail);
    //     });

    // inquirer
    //     .prompt({
    //         type: 'input',
    //         name: 'officeNumber',
    //         message: "What is the team manager's office number?",
    //         default: 9254206969
    //     })
    //     .then(({officeNumber}) => {
    //         managerOfficeNumber = officeNumber;
    //         console.log(managerOfficeNumber);
    //     })
    //     .then(() => {
    //         this.employees.managers.push(new Manager(managerName, managerId, managerEmail, managerOfficeNumber));
    //         console.log(this.employees);
    //     });
}

module.exports = Question;