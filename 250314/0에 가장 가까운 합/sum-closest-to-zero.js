const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);

// Please Write your code here.

numbers.sort((a, b) => a - b);

let left = 0;
let right = n - 1;
let best = Infinity;  

while (left < right) {
  const sum = numbers[left] + numbers[right];
  // 더 좋은 해를 찾으면 갱신
  if (Math.abs(sum) < Math.abs(best)) {
    best = sum;
  }

  if (sum > 0) {
    right--;
  } else {
    left++;
  }
}

console.log(Math.abs(best));