const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let j = 0;
const map = new Map();
let ans = Infinity;
map.set(1, 0);
map.set(2, 0);

for ( let i = 0 ; i < n ; i ++ ) {
    while ( j < n && map.get(1) < k ) {
        map.set(arr[j], map.get(arr[j]) + 1)
        j += 1
    }

    if ( map.get(1) >= k ) {
        ans = Math.min(ans, j - i - 1)
    }

    map.set(arr[i], map.get(arr[i]) - 1)
}

console.log(ans);