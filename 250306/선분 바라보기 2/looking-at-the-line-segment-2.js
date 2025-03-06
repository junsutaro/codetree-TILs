const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0].trim());
let segments = input.slice(1, n + 1).map(line => {
    const [y, x1, x2] = line.trim().split(" ").map(Number);
    return { y, x1, x2 };
});

// Please Write your code here.

let max = 0;
segments.sort((a, b) => a.y - b.y || a.x1 - b.x1 || a.x2 - b.x2 );
segments.forEach((elem, index) => {
    segments[index] = [elem.x1, elem.x2];
    max = Math.max(max, elem.x2);
})

let ans = 0;
const canvas = [];
canvas.push(segments[0])
for ( let i = 1 ; i < n ; i ++ ) {
    const [x1, x2] = segments[i];
    let [nx1, nx2] = [x1, x2]
    
    for ( const line of canvas ) {
        if ( line[0] < x1 && x1 < line[1] ) {
            nx1 = line[1];
        }
        if ( line[0] < x2 && x2 < line[1]) {
            nx2 = line[0];
        }
    }
    
    canvas.push([nx1, nx2])
}

const uniqueSet = new Set(canvas.map(pair => JSON.stringify(pair)));
const uniquecanvas = Array.from(uniqueSet, JSON.parse);

console.log(uniquecanvas.length); 
