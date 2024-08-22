const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);


let count = 0;
for ( let i = 0 ; i < n - 2 ; i ++ ) {
    for ( let j = i + 1 ; j < n - 1 ; j ++ ) {
        for ( let k = j + 1 ; k < n ; k ++ ) {
            if (numbers[i] <= numbers[j] && numbers[j] <= numbers[k]) {
                count += 1;
            }
        }
    }
}

console.log(count)