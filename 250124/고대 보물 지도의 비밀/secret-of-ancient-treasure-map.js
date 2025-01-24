const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const nums = input[1].trim().split(' ').map(Number);

let maxSum = -Infinity;
let currentSum = 0;
let negativeCount = 0;
let left = 0;

for (let right = 0; right < n; right++) {
    currentSum += nums[right];

    if (nums[right] < 0) negativeCount++;

    while (negativeCount > k) {
        currentSum -= nums[left];
        if (nums[left] < 0) negativeCount--;
        left++;
    }

    maxSum = Math.max(maxSum, currentSum);
}

console.log(maxSum);
