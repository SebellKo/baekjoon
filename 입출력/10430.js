
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = 0;
let inputArr = [];

rl.on('line', (line) => {
    input = line;
    rl.close();
}).on('close', () => {
    inputArr = input.split(' ').map(elem => +elem);
    let A = inputArr[0];
    let B = inputArr[1];
    let C = inputArr[2];

    console.log((A+B)%C);
    console.log(((A%C) + (B%C))%C);
    console.log((A*B)%C);
    console.log((((A%C) * (B%C))%C));
})