const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

let j = 0;
const map = new Map();
let ans = Infinity;

for ( let i = 0 ; i < n ; i ++ ) {
    while ( j < n && map.get(1) !== k ) {
        if ( !map.get(arr[j]) ) { map.set(arr[j], 0) }
        map.set(arr[j], map.get(arr[j]) + 1)
        j += 1
    }

    if ( map.get(arr[j]) >= k ) {
        ans = Math.min(ans, j - i - 1)
    }

    map.set(arr[i], map.get(arr[i]) - 1)
}

console.log(ans);