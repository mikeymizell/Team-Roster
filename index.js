const inquirer = require('inquirer');
const fs = require('fs');
const { Console } = require('console');

const employee = {};

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee Name: '
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee Id: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee Email: '
        },
        {
            type: 'list',
            name: 'role',
            message: 'What role is this employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
};

const promptManager = employeeData => {
    console.log(`
-------------------
ADDING MANAGER INFO
-------------------`);

    if(!employeeData.manager){
        employeeData.manager = [];
    };

    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: `Manager's Office Number: `
        }
    ])
    .then(managerData => {
        employeeData.manager.push(managerData);
        return employeeData;
    })
}

const promptEngineer = employeeData => {
    console.log(`
--------------------
ADDING ENGINEER INFO
--------------------`);

    if(!employeeData.engineer){
        employeeData.engineer = [];
    };
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: `Engineer's GitHub Username: `
        }
    ])
    .then(engineerData => {
        employeeData.engineer.push(engineerData);
        return employeeData;
    })
}

const promptIntern = employeeData => {
    console.log(`
------------------
ADDING INTERN INFO
------------------`);

    if(!employeeData.intern){
        employeeData.intern = [];
    };

    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: `Intern's School: `
        }
    ])
    .then(internData => {
        employeeData.intern.push(internData);
        return employeeData;
    })
}


promptEmployee()
    .then(employeeData => {
        if (employeeData.role === 'Manager')
            promptManager(employeeData);
        else if (employeeData.role === 'Engineer')
            promptEngineer(employeeData);
        else if (employeeData.role === 'Intern')
            promptIntern(employeeData);
    })
    .then(employeeData => console.log(employeeData));