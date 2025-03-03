const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0]);
const segments = [];

for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    segments.push([a, b]);
}

segments.sort((a, b) => a[0] - b[0]);


let ans = 0;
let [start, temp] = segments[0];  

for (let i = 1; i < n; i++) {
    const [x1, x2] = segments[i];

    if (x1 > temp) { 
 
        ans += (temp - start); 
        [start, temp] = [x1, x2]; 
    } else { 

        temp = Math.max(temp, x2);
    }
}

ans += (temp - start);

console.log(ans);
