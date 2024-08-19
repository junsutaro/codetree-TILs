const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const dirMapping = {
    'N': 3,
    'E': 0,
    'S': 1,
    'W': 2
}

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let x = 0, y = 0;
let time = 0;


for (let i = 1; i <= n; i++) {
    const [dir, dist] = input[i].split(' ');
    const curDir = dirMapping[dir];
    const distance = Number(dist);
    
    for ( let j = 0 ; j < distance ; j ++ ) {
        time += 1;
        x += dx[curDir];
        y += dy[curDir];
        if ( x === 0 && y === 0) {
            console.log(time);
            return;
        }
    }
} 

console.log(-1)