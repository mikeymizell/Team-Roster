const fs = require('fs');

const managerCard = manager => {
    return `
        <div class="tile is-parent">
            <div class="tile is-child">
                <p class="title">${manager.getName()}</p>
                <p class="subtitle">${manager.getRole()}</p>
                <p>${manager.getId()}</p>
                <p>${manager.getEmail()}</p>
            </div>
        </div>`;
}

const engineerCard = engineers => {
    let engineerData = ``;

    engineers.forEach(employee => {
        engineerData += `
            <div class="tile is-parent">
                <div class="tile is-child is-info">
                    <p class="title">${employee.getName()}</p>
                    <p class="subtitle">${employee.getRole()}</p>
                    <p>${employee.getId()}</p>
                    <p>${employee.getGithub()}</p>
                </div>
            </div>`;
    });

    return engineerData;
}

const internCard = interns => {
    let internData = ``;

    interns.forEach(employee => {
        internData += `
            <div class="tile is-parent">
                <div class="tile is-child is-info">
                    <p class="title">${employee.getName()}</p>
                    <p class="subtitle">${employee.getRole()}</p>
                    <p>${employee.getId()}</p>
                    <p>${employee.getSchool()}</p>
                </div>
            </div>`;
    });

    return internData;
}

const htmlData = employees => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Roster</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

    <header class="hero is-success is medium">
        <div class="hero-body">
            <div class="container has-text-centered">
                <p class="title">My Team</p>
            </div>
        </div>
    </header>
</head>

<body>
    <section class="tile is-ancestor">
        ${managerCard(employees.manager)}
        ${engineerCard(employees.engineers)}
        ${internCard(employees.interns)}
    </section>
</body>
</html>
`
}

module.exports = employees => {
    console.log(employees);
    fs.writeFile('./dist/index.html', htmlData(employees), err => {
        if (err) throw err;

        console.log('Html generated');
    });
}