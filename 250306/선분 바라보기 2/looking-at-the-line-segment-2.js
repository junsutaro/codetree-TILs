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
const canvas = Array(max + 1).fill(0);
segments.forEach((elem, index) => {
    const [x1, x2] = elem;
    let canDraw = false;

    for ( let i = x1 ; i <= x2 ; i ++ ) {
        if ( canvas[i] ) continue;
        canDraw = true;
        canvas[i] = 1;
    }
    if ( canDraw ) { ans += 1 }
})

console.log(ans);