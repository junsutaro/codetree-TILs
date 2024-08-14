const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M, K] = input[0].split(' ').map(Number);
const students = input.slice(1).map(Number);

const checked = Array(N + 1).fill(0);

let criminal = -1;

for ( let student of students ) {
    checked[student] += 1;
    if ( checked[student] >= K ) {
        criminal = student;
        break;
    }
}

console.log(criminal)