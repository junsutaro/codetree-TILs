const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let A = input[0];
const B = input[1];

while (true) {
    const index = A.indexOf(B); 

    if (index === -1) {
        break;
    }

    A = A.slice(0, index) + A.slice(index + B.length);
}

console.log(A);