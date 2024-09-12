const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const people = [];

for (let i = 1; i <= n; i++) {
    const [poss, charr] = input[i].split(' ');
    people.push({ pos: Number(poss), char: charr });
}

people.sort((a, b) => a.pos - b.pos);

let ans = 0;

for (let i = 0; i < people.length; i++) {
    for (let j = i + 1; j < people.length; j++) {
        let cntG = 0;
        let cntH = 0;

        for (let k = i; k <= j; k++) {
            if (people[k].char === 'G') {
                cntG++;
            } else if (people[k].char === 'H') {
                cntH++;
            }
        }

        if (cntG + cntH <= 1) continue;

        if (cntG === cntH || cntG === 0 || cntH === 0) {
            ans = Math.max(ans, people[j].pos - people[i].pos);
        }
    }
}

console.log(ans);