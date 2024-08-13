const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 첫 번째 줄에서 N과 K를 읽어옵니다.
const n = Number(input[0]);
const arr = []

for ( let i = 1 ; i <= n ; i ++ ) {
    const [start, end] = input[i].split(' ').map(Number);
    for ( j = start ; j < end ; j ++ ) {
        if ( arr[j] ) {
            arr[j] += 1
        } else {
            arr[j] = 1;
        }
    }
}

let ans = 0;
for ( let elem of arr ) {
    if ( elem >= 2 ) {
        ans += 1
    }
}

console.log(ans)