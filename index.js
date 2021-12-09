const inquirer = require('inquirer');
const fs = require('fs');

const employeeObj = [];

let i = 0;

const promptEmployee = employeeData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Employee Name: ',
            default: 'Danny Miller'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Employee Id: ',
            default: '13345'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee Email: ',
            default: 'dannyslayer@gmail.com'
        },
        {
            type: 'list',
            name: 'role',
            message: 'What role is this employee?',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ]);
};

const promptManager = employeeData => {
    console.log(`
-------------------
ADDING MANAGER INFO
-------------------
`);

    if(!employeeObj.manager){
        employeeObj.manager = [];
    };

    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: `Manager's Office Number: `,
            default: '9255973603'
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee?'
        }
    ])
    // .then(managerData => {
    //     employeeObj.manager.push(managerData);
    //     console.log("From within manager");
    //     console.log(employeeObj);
    //     if(managerData.confirmAdd)
    //         promptEmployee();
    //     else
    //         return employeeObj;
    // });
};

const promptEngineer = employeeData => {
    console.log(`
--------------------
ADDING ENGINEER INFO
--------------------
`);

    if(!employeeData.engineer){
        employeeData.engineer = [];
    };
    
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: `Engineer's GitHub Username: `,
            default: 'danksterdump'
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee?'
        }
    ])
    .then(engineerData => {
        employeeData.engineer.push(engineerData);
        console.log(employeeData);
        if(engineerData.confirmAdd)
            promptEmployee(employeeData);
        else
            return employeeData;
    });
};

const promptIntern = employeeData => {
    console.log(`
------------------
ADDING INTERN INFO
------------------
`);

    if(!employeeData.intern){
        employeeData.intern = [];
    };

    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: `Intern's School: `,
            default: 'School of Rock'
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee?'
        }
    ])
    .then(internData => {
        employeeData.intern.push(internData);
        console.log(employeeData);
        if(internData.confirmAdd)
            promptEmployee(employeeData);
        else
            return employeeData;
    });
};


promptEmployee()
    .then(employeeData => {
        employeeObj.push(employeeData);
        if (employeeData.role === 'Manager') {
            console.log("I am reaching here");
            return promptManager(employeeObj)
                //.then(employeeData => console.log(employeeData));
                .then(managerData => {
                    employeeObj.manager.push(managerData);
                    console.log("From within manager");
                    console.log(employeeObj);
                    i++;
                    console.log(i);
                    if(managerData.confirmAdd)
                        return promptEmployee(employeeObj);
                    else
                        return employeeObj;
                });
        }
        else if (employeeData.role === 'Engineer') { 
            promptEngineer(employeeData)
                .then(employeeData => console.log(employeeData));
        }
        else if (employeeData.role === 'Intern') {
            promptIntern(employeeData)
                .then(employeeData => console.log(employeeData));
        }
    });