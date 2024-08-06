const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

for (let i = 0; i < n ; i++) {
    let [a, b] = input[i+1].split(' ').map(Number)

    let sum = 1;
    for (let num = a; num <= b; num++) {
        sum *= num;
        }
    console.log(sum);
}