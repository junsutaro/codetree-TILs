const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [gridSize, steps] = input[0].split(' ').map(Number);
const [sx, sy, startDir] = input[1].split(' ');

let x = parseInt(sx, 10);
let y = parseInt(sy, 10);


const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

const dirMapping  = {
    'R': 0,
    'U': 1,
    'L': 2,
    'D': 3
}

let curDIr = dirMapping[startDir];


for ( let i = 0 ; i < steps ; i ++ ) {
    let nx = x + dx[curDIr];
    let ny = y + dy[curDIr];

    if ( nx >= 1 && nx < gridSize + 1 && ny >= 1 && ny < gridSize + 1){
        x = nx;
        y = ny;
    } else {
        curDIr = ( curDIr + 2 ) % 4;
    }                            
    // console.log(`${i+1}초 일 때,${curDIr}방향 ${x} ${y}`)
}

console.log(x, y);