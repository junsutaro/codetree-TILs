const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const startPoint = Number(input[n+1])

const mirror = [...Array(n+2)].map(() => Array(n+2).fill(0));

for ( let i = 1; i <= n ; i ++ ) {
    for ( let j = 0; j < n ; j ++ ) {
        mirror[i][j+1] = input[i][j]
    }
}


let curDir = parseInt(startPoint / n);

let curX;
let curY;
if (curDir === 0) {
    curX = 1;
    curY = startPoint % n === 0 ? n : startPoint % n; 
} else if ( curDir === 1 ) {
    curX = startPoint % n === 0 ? n : startPoint % n; 
    curY = n;
} else if ( curDir === 2 ) {
    curX = n;
    curY = startPoint % n === 0 ? 1 : n + 1 - (startPoint % n) 
} else {
    curX = startPoint % n === 0 ? 1 : n + 1 - (startPoint % n) 
    curY = 1;
}

//       down right up left
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

let count = 0;
let x = curX, y = curY;

// console.log(curDir)
while (x > 0 && x <= n && y > 0 && y <= n) {
    const curMirror = mirror[x][y] 
    count += 1;
    if ( curMirror === '\\') {
        if ( curDir === 0 || curDir === 2 ) {
            curDir = ( curDir + 1 ) % 4;
        } else {
            curDir = ( curDir + 3 )% 4;
        }
    } else if ( curMirror === '/') {
        if ( curDir === 0 || curDir === 2 ) {
            curDir = ( curDir + 3 ) % 4;
        } else {
            curDir = ( curDir + 1 ) % 4;
        }
    }
    x += dx[curDir];
    y += dy[curDir];
    // console.log(curDir)
}

console.log(count)