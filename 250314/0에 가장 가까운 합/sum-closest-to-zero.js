const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

// Please Write your code here.

numbers.sort((a, b) => a - b);


let j = n-1;
let absSum = Math.abs(numbers[0] + numbers[j]);
for ( let i = 0 ; i < n ; i ++ ) {
  while ( j > i ) {
    j -= 1;
    if ( Math.abs(numbers[i] + numbers[j] < absSum )) {
      break;
    }
  }

  absSum = Math.min(absSum, Math.abs(numbers[i] + numbers[j]));
  j -= 1

  if (i >= j) { break }
}
console.log(absSum);