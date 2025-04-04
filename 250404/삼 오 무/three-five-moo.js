const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
// Please Write your code here.

// 이 숫자까지 moo가 몇개?
function numOfMoo(num) {
    let cnt = 0;
    cnt += (num % 15) * 7;
    num = num % 15
    if ( num > 12 ) { cnt += 6 }
    else if ( num > 10 ) { cnt += 5 }
    else if ( num > 6 ) { cnt += 3 }
    else if ( num > 3 ) { cnt += 1}
}