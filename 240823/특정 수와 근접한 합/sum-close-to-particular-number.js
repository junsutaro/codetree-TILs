const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, s] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number)

const sumOfNumbers = numbers.reduce((acc, current) => acc + current, 0);
const MAX_NUM = Number.MAX_SAFE_INTEGER
let ans = MAX_NUM;


for ( let i = 0 ; i < n - 1 ; i ++ ) {
    for ( let j = i + 1 ; j < n ; j ++ ) {
        ans = Math.min(ans, Math.abs((sumOfNumbers - numbers[i] - numbers[j]) - s ))
    }
}

console.log(ans)