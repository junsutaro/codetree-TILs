const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = input[0].split(' ').map(Number);
const stones = Array.from({length : 4}, () => Array(n+1).fill(0));

input.slice(1, n+1).map((elem, idx) => {
    const [group, num] = [Number(elem), idx + 1]
    stones[group][num] = 1;
})

const prefixSums = Array.from({length : 4}, () => Array(n+1).fill(0));

for ( let k = 1 ; k <= 3 ; k ++ ) {
    for ( let i = 1 ; i <= n ; i ++ ) {
        prefixSums[k][i] = prefixSums[k][i-1] + stones[k][i];
    }
}


input.slice(n+1).map(elem => {
    const [s, e] = elem.split(' ').map(Number);
    const ans = [];
    for ( let i = 1 ; i <= 3 ; i ++ ) {
        const score = prefixSums[i][e] - prefixSums[i][s-1];
        ans.push(score)
    }
    console.log(ans.join(' '));
})