const fs = require('fs');

const cssSheet = () => {
    return `
    .cards {
        margin-top: 50px;
        margin-left: 20px;
        margin-right: 20px;
    }
    `;
}

module.exports = () => {
    fs.writeFile('./dist/stylesheet.css', cssSheet(), err => {
        if (err) throw err;

        console.log('CSS generate');
    });
}