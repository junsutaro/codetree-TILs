function distance([a, b]) {
    return Math.abs(a) + Math.abs(b);
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);

const points = []
for ( let i = 1; i <= N ; i ++ ) {
    points.push([distance(input[i].split(' ')), i])
}

points.sort((a, b) => {
    return a[0] - b[0];
})

for (let i = 0 ; i < N ; i ++ ) {
    console.log(points[i][1])
}