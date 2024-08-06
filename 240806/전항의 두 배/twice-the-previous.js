const fs = require('fs');
const input = fs.readFileSync(0).toString();

const [a, b] = input.split(' ').map(Number);

let temp = 0;
let [pp, p] = [a, b];

let arr = `${a} ${b} `

for ( let i = 2; i < 10; i ++ ) {
    temp = p + 2 * pp;
    arr += temp + ' ';
    pp = p;
    p = temp;
}

console.log(arr)