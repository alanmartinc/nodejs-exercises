const fs = require('fs');
const data = fs.readFileSync('../README.md', 'utf8');
const newData = data.replace(/Hello World/ig, 'Hola Mundo');

fs.writeFileSync('../README2.md', newData);

console.log(data);
