const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const arr = Array(100).fill(0);

for ( let i = 1; i <= n ; i ++ ) {
    const [start, end] = input[i].split(' ').map(Number);

    for ( let j = start ; j <= end ; j ++ ) {
        arr[j] += 1;
    }

}

console.log(Math.max(...arr))