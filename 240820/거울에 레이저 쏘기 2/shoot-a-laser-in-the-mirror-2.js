const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const startPoint = Number(input[n+1]);

const mirror = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

for (let i = 1; i <= n; i++) {
    for (let j = 0; j < n; j++) {
        mirror[i][j + 1] = input[i][j];
    }
}

let curDir = Math.floor((startPoint - 1) / n);
let curX, curY;

if (curDir === 0) {
    curX = 1;
    curY = startPoint % n || n;
} else if (curDir === 1) {
    curX = startPoint % n || n;
    curY = n;
} else if (curDir === 2) {
    curX = n;
    curY = n + 1 - (startPoint % n || n);
} else {
    curX = n + 1 - (startPoint % n || n);
    curY = 1;
}

// Directions: down, left, up, right
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

let count = 0;
let x = curX, y = curY;

while (x > 0 && x <= n && y > 0 && y <= n) {
    count++;
    const curMirror = mirror[x][y];
    if (curMirror === '\\') {
        curDir = curDir ^ 1; // toggle between horizontal (0,2) and vertical (1,3)
    } else if (curMirror === '/') {
        curDir = (curDir + 3) % 4; // toggle in the opposite way
    }
    x += dx[curDir];
    y += dy[curDir];
}

console.log(count);