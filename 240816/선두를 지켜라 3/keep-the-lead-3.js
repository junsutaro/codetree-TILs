const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const MAX_POS = 1000000;
const posA = Array(MAX_POS + 1).fill(0);
const posB = Array(MAX_POS + 1).fill(0);

let timeA = 0;
for ( let i = 1; i <= n; i ++ ) {
    const [vel, time] = input[i].split(' ').map(Number);
    for ( let i = 0; i < time ; i ++ ) {
        timeA += 1;
        posA[timeA] = posA[timeA - 1] + vel;
    }
}

let timeB = 0;
for ( let i = n + 1; i <= n + m; i ++ ) {
    const [vel, time] = input[i].split(' ').map(Number);
    for ( let i = 0; i < time ; i ++ ) {
        timeB += 1;
        posB[timeB] = posB[timeB - 1] + vel;
    }
}

let first = ''
let temp = ''

let maxTime = timeA > timeB ? timeA : timeB;

count = 0;

for ( let i = 1 ; i <= maxTime ; i ++ ) {
    if ( posA[i] - posB[i] > 0 ) {
        temp = 'A';
    } else if ( posA[i] === posB[i] ) {
        temp = 'AB';
    } else {
        temp = 'B'
    }

    if ( temp !== first ) {
        count += 1;
        first = temp;
    }
}

console.log(count)