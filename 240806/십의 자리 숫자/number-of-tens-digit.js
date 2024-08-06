const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const inputArr = input.split(' ').map(Number);


let countArr = Array(10).fill(0);

for ( elem of inputArr ) {
    countArr[parseInt(elem/10)] += 1
}

for ( let i = 1 ; i < 10 ; i ++ ) {
    console.log(`${i} - ${countArr[i]}`)
}