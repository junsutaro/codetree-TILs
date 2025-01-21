const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].trim().split(' ').map(Number);

// const n = 6
// const nums = [4, 1, 1, 2, 4, 5];

nums.sort((a, b) => b - a);

const total = nums.reduce((acc, num) => acc + num, 0);

const dp = Array.from({length : total + 1}, () => false);
dp[0] = [];

for ( const num of nums ) {
    for ( let i = total ; i >= num ; i -- ) {
        if ( dp[i-num] === false ) continue
        dp[i] = [...dp[i-num]];
        dp[i].push(num);    
    }
}
let ans = 0;

for ( const lst of dp ) {
    if ( lst === false ) continue
    const lstTotal = lst.reduce((acc, num) => acc + num, 0);
    // 여기 lst 에서 true 체크  dp 사용 후 , total - lstTotal 값(A lst의 총합)이 나오면 Okay~
    const aTotal = total - lstTotal;
    const dp2 = Array(lstTotal+1).fill(false);
    dp2[0] = true;
    


    for ( const num of lst ) {
        for ( let i = lstTotal ; i >= num ; i -- ) {
            dp2[i] = dp2[i-num] || dp2[i];
        }
    }

    // console.log(lst);
    // console.log(dp2);
    // console.log(aTotal)

    if ( dp2[aTotal] ) {
        ans = Math.max(aTotal, ans);
    }
}

console.log(ans);