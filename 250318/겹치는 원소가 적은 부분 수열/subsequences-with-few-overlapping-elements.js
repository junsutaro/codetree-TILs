const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.

const map = new Map();

function inc(val) {
    map.set(val, (map.get(val) || 0) + 1 );
}

function dec(val) {
    if ( !map.has(val) ) return undefined;
    if ( map.get(val) === 1 ) { map.delete(val) }
    map.set(val, map.get(val) - 1);
}

let j = 0;
let ans = 0;

for ( let i = 0 ; i < n ; i ++ ) {
    while ( j < n && (!map.has(arr[j]) || map.get(arr[j]) < k) ) {
        inc(arr[j])
        j += 1;
    }
    const current = j - i;
    ans = Math.max(current, ans);
    dec(arr[i]);

}

console.log(ans);