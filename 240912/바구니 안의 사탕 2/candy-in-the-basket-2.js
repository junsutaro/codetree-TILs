const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);

const candies = Array(101).fill(0);
for ( i = 1 ; i <= n ; i ++ ) {
    const candy = input[i].split(' ').map(Number)
    candies[candy[1]] += Number(candy[0])
}

let ans = 0;
let maxVal = 0;

for ( let i = 1 ; i <= 100 ; i ++ ) {
    const left = Math.max(i - k, 0);
    const right = Math.min(i + k, 100);
    let val = 0;

    for ( let j = left ; j <= right ; j ++ ) {
        val += candies[j];
    }  

    if ( val > maxVal ) {
        ans = i;
        maxVal = val;
    }
    ans = Math.max(ans, maxVal)

}

console.log(ans)