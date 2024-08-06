const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);

let countArr = Array(b).fill(0);

let temp = a

while ( temp > 1 ) {
    countArr[temp % b] += 1;
    temp = parseInt(temp / b);
}

let ans = 0;

for ( elem of countArr ) {
    ans += elem * elem;
}

console.log(ans)