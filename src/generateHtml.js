const fs = require('fs');

const managerCard = manager => {
    return `
        <div class="column is-3">
            <div class="box is-2">
                <p class="title">${manager.getName()}</p>
                <p class="subtitle">${manager.getRole()}</p>
                <p><strong>Id:</strong> ${manager.getId()}</p>
                <p><strong>Email:</strong> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                <p><strong>Office #:</strong> ${manager.getOfficeNumber()}</p>
            </div>
        </div>`;
}

const engineerCard = engineer => {
    const engineerData = `
        <div class="column is-3">
            <div class="box is-2">
                <p class="title">${engineer.getName()}</p>
                <p class="subtitle">${engineer.getRole()}</p>
                <p><strong>Id:</strong> ${engineer.getId()}</p>
                <p><strong>Email:</strong> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                <p><strong>GitHub:</strong> <a href="www.github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
            </div>
        </div>`;

    return engineerData;
}

const internCard = intern => {
    const internData = `
        <div class="column is-3">
            <div class="box is-2">
                <p class="title">${intern.getName()}</p>
                <p class="subtitle">${intern.getRole()}</p>
                <p><strong>Id:</strong> ${intern.getId()}</p>
                <p><strong>Email:</strong> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                <p><strong>School:</strong> ${intern.getSchool()}</p>
            </div>
        </div>`;
    return internData;
}

const cardTemplate = employees => {
    let cardCount = 0;
    let cardTemplate = `<section class="columns is-centered cards">`;

    let cards = `${cardTemplate}`;

    cards += managerCard(employees.manager);

    cardCount++;

    employees.engineers.forEach(employee => {
        cards += engineerCard(employee);
        cardCount++;

        if(cardCount === 4) {
            cards += `
            </section>
            ${cardTemplate}`;
            cardCount = 0;
        }
    });

    employees.interns.forEach(employee => {
        cards += internCard(employee);
        cardCount++;

        if(cardCount === 4) {
            cards += `
            </section>
            ${cardTemplate}`;
            cardCount = 0;
        }
    });

    cards += `
    </section>`;

    return cards;
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
    <link rel="stylesheet" href="./stylesheet.css">

    <header class="hero is-success is medium">
        <div class="hero-body">
            <div class="container has-text-centered">
                <p class="title">My Team</p>
            </div>
        </div>
    </header>
</head>

<body>
    ${cardTemplate(employees)}
</body>
</html>
`
}

module.exports = employees => {
    //console.log(employees);
    fs.writeFile('./dist/index.html', htmlData(employees), err => {
        if (err) throw err;

        console.log('Html generated');
    });
}