const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, d] = input[0].split(" ").map(Number);
const points = [];
for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    points.push({ x, y });
}

class MaxHeap {
    constructor() {
        this.arr = [];
    }
}
// Please Write your code here.
points.sort((a, b) => a.x - b.x)
console.log(points)

let j = 0;
let [max, min] = [-Infinity, Infinity];
let ans = Infinity; 

for ( let i = 0 ; i < n ; i ++ ) {
    while ( j < n && max - min < d ) 
}