const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

// Please Write your code here.

numbers.sort((a, b) => a - b);

let j = n-1;
let absSum = Infinity;
for ( let i = 0 ; i < n ; i ++ ) {
  while ( j > i && Math.abs(numbers[i] + numbers[j]) >= absSum ) {
    j -= 1;
  }

  if ( i < j ) {
    absSum = Math.min(absSum, Math.abs(numbers[i] + numbers[j]));
  }

}
console.log(absSum);