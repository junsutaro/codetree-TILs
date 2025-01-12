const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

// const n = 5;

const dp1 = Array(20).fill(0);
const dp2 = Array(20).fill(0);

dp1[1] = 1;
dp1[2] = 2;
dp2[1] = 0;
dp2[2] = 1;

for ( let i = 3 ; i < n ; i ++ ) {
    let plus = 1;
    for ( j = 1 ; j <= i - 2 ; j ++ ) {
        plus *= j;
    }
    dp2[i] = dp2[i-1] * 3 + plus;
}


for ( let i = 3 ; i <= n ; i ++ ) {
    dp1[i] = dp1[i-1] * 2 + dp2[i-1];
    
}

console.log(dp1[n]);