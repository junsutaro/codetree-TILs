class Point {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }

    getManhattanDistance() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
}

function cmp(a, b) {
    distA = a.getManhattanDistance();
    distB = b.getManhattanDistance();

    if (distA !== distB) {
        return distA - distB;
    }

    return a.index - b.index;
}

let points = []

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

for ( let i = 1 ; i <= N ; i ++ ) {
    const [x, y] = input[i].split(' ').map(Number);

    points.push(new Point(x, y, i))
}

points.sort(cmp);

for (let point of points) {
    console.log(point.index);
}