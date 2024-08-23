const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = Array(10001).fill(null);

for (let i = 1; i <= n; i++) {
    const [pos, letter] = input[i].split(' ');
    people[Number(pos)] = letter;
}

let maxScore = 0;

for (let start = 1; start <= 10000; start++) {
    let score = 0;
    for (let end = start; end <= start + k && end <= 10000; end++) {
        if (people[end] === 'G') score += 1;
        else if (people[end] === 'H') score += 2;
    }
    maxScore = Math.max(maxScore, score);
}

console.log(maxScore);