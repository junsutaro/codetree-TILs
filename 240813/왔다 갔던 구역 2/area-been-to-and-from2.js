const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const visited = {};

let index = 0; 

for (let i = 1; i <= n; i++) {

    const [x, dir] = input[i].split(' ');
    const dist = Number(x);

    const start = index;
    const end = dir === 'R' ? index + dist : index - dist;

    for (let j = Math.min(start, end); j < Math.max(start, end); j++) {
        visited[j] = (visited[j] || 0) + 1;
    }

    index = end;
    // console.log(visited)
}

let cnt = 0;

for (let key in visited) {
    if (visited[key] > 1) cnt++;
}

console.log(cnt);