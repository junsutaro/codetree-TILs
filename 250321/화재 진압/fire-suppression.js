const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(" ").map(Number);
const fires = input[1].split(" ").map(Number).sort((a, b) => a - b);
const stations = input[2].split(" ").map(Number).sort((a, b) => a - b);

// Please Write your code here.

let j = 0;
let ans = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    let temp = Math.abs(fires[i] - stations[j])
    while ( j + 1 < m && fires[i] <= stations[j+1] ) {
        j += 1;
        temp = Math.min(temp, Math.abs(fires[i] - stations[j]))
    }
    ans = Math.max(ans, temp);
}

console.log(ans);
