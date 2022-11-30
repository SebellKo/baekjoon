const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = [1, 1, 2, 2, 2, 8];

let input = 0;
let inputArr = [];
let outputStr = ``;

rl.on('line', (line) => {
    input = line;
    rl.close();
}).on('close', () => {
    inputArr = input.split(' ').map(elem => +elem);
    for (let i = 0; i < 6; i++) {
        outputStr += (total[i] - inputArr[i] + ` `);  
    };
    console.log(outputStr);
});