const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [N, B] = input[0].split(' ').map(Number);

const digit = []
while (true) {
    if ( N < B ) {
        digit.push(N);
        break;
    }

    digit.push(N % 4);
    N = parseInt(N / 4)

}


console.log(digit.reverse().join(''))