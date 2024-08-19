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


let findAns = false;

for ( let i = 1; i <= n ; i ++ ) {
    const dir = input[i].split(' ')[0];
    const curDir = dirMapping[dir];
    const dist = Number(input[i].split(' ')[1]);
    
    for ( let j = 0 ; j < dist ; j ++ ) {
        time += 1;
        x += dx[curDir];
        y += dy[curDir];
        if ( x === 0 && y === 0) {
            console.log(time);
            findAns = true;
            break
        }
    }
    if (findAns === false) {
        break
    }
} 

if (!findAns) {
    console.log(-1)
    }