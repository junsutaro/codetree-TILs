const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// n개 밭 T번 이상, H 높이로
const [n, h, t] = input[0].split(' ').map(Number);
const fields = input[1].split(' ').map(Number);

let ans = Number.MAX_SAFE_INTEGER;

for ( let i = 0 ; i < n - t + 1 ; i ++ ) {
    let diffSum = 0;
    for ( let j = i ; j < i + t ; j ++ ) {
        diffSum += Math.abs(fields[j] - h)
    }
    ans = Math.min(ans, diffSum)
}

console.log(ans)