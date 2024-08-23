const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number)
const numbers = input[1].split(' ').map(Number)


let ans = 0;

for ( let i = 0 ; i <= n - k ; i ++ ) {
    let tempSum = 0;
    for ( let j = 0; j < k ; j ++ ) {
        tempSum += numbers[i + j]
    }
    ans = Math.max(tempSum, ans)
}

console.log(ans)