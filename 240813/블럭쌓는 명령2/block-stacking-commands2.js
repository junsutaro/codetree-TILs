const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

const blocks = Array(N).fill(0);

for ( let i = 1; i <= K ; i ++ ) {
    [ start, end ] = input[i].split(' ').map(Number);
    for ( let j = start - 1 ; j < end ; j ++ ) {
        blocks[j] += 1;
    }
}

const maxBlocks = Math.max(...blocks);
console.log(maxBlocks)