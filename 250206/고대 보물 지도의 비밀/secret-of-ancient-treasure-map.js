const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const nums = input[1].split(' ').map(Number);

// console.log(nums);

// row = 보물 갯수 col = 음의 숫자 갯수

const dp = Array(n).fill(0);

// console.log(dp);

let ans = 0;

for ( let i = 0 ; i < n ; i ++ ) {
    let cnt = 0;
    let temp = 0;
    for ( let j = i ; j < n ; j ++ ) {
        // console.log('i, j', i, j)
        temp += nums[j];
        ans = Math.max(temp, ans);
        // console.log(temp);
        if ( nums[j] < 0 ) { cnt += 1 };
        if ( cnt > k ) { break }
    }
}

console.log(ans);