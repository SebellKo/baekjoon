const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputArr = [];
let input;


rl.on('line', (line) => {
    input = line;
    rl.close();
}).on('close', () => {
    inputArr = input.split(' ').map(elem => parseInt(elem));
    console.log(inputArr[0] / inputArr[1]);
});

