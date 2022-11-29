const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];


rl.on('line', (line) => {
    console.log(`Received : ${line}`);
    newLine = line.split(' ').map(elem => {parseInt(elem)});
    input = [...input, newLine];
    console.log(input);
});