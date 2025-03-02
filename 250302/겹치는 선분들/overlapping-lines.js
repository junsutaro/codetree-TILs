const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const segmentsInput = [];

for (let i = 1; i <= n; i++) {
    const [dist, dir] = input[i].split(" ");
    segmentsInput.push({ distance: Number(dist), direction: dir });
}

// Please Write your code here.
let tempIdx = 0;

const segments = [];

for ( const seg of segmentsInput ) {
    const dir = seg.direction;
    const dist = seg.distance;
    let newTempIdx = tempIdx;

    if ( dir === 'R' ) {
        newTempIdx += dist;
        segments.push([tempIdx, 1]);
        segments.push([newTempIdx, -1]);
    } else {
        newTempIdx -= dist;
        segments.push([tempIdx, -1])
        segments.push([newTempIdx, 1]);
    }

    tempIdx = newTempIdx;

} 
segments.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

let ans = 0;
let temp = 0;

for (let i = 1; i < segments.length; i++) {
    temp += segments[i - 1][1];

    // 어차피 같은위치면 0 +니까 
    if (temp >= k) {
        ans += (segments[i][0] - segments[i - 1][0]);
    }
}

console.log(ans);