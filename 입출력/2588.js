const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputArr = [];
let inputA = 0;
let inputB = 0;

rl.on('line', (line) => {
    inputArr = [...inputArr, line];
    if  (inputArr.length == 2) {
        rl.close();
    }
}).on('close', () => {
    // inputArr = inputArr.map(elem => +elem);
    inputA = inputArr[0];
    inputB = inputArr[1];
    console.log(+inputA * +inputB[2]);
    console.log(+inputA * +inputB[1]);
    console.log(+inputA * +inputB[0]);
    console.log(+inputA * +inputB);
});