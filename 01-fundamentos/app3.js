const fs = require('fs');  
const content = fs.readFileSync('../README.md', 'utf8');
const words = content.split(' ');
const helloWorldCount = content.match(/hello/gi ?? []).length;

console.log('Palabras:', words);
console.log('Palabras hello:', helloWorldCount);