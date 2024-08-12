const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
let arr = []

for ( let i = 1 ; i <= n ; i ++ ) {
    arr.push(input[i])
}

// console.log(arr)
arr.sort();
for ( let elem of arr ){ 
    console.log(elem)
}