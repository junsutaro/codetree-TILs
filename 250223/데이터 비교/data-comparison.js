const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
const m = Number(input[2])

const arr1 = input[1].split(' ').map(Number)
const arr2 = input[3].split(' ').map(Number)

const set1 = new Set(arr1);


let ans = '';
for ( const num of arr2 ) {
    if ( !set1.has(num)) {
        ans += 0 + ' '
    } else { 
        ans += 1 + ' '
    }
}

console.log(ans.trim())