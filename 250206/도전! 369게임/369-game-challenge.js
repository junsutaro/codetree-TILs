const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

function find123(num) {
    while (num > 0) {
        if (num % 10 === 3 || num % 10 === 6 || num % 10 === 9) {
            return true
        }
        num = Math.floor(num / 10);
    }
}


function judge(num) {
    
    if ( find123(num) ) {
        return true;
    }
    else if ( num % 3 === 0 ) {
        return true;
    }

}

let ans = 0;
for ( let i = 1 ; i <= n ; i ++ ) {
    if (judge(i)) {
        ans += 1;
    }
}

console.log(ans % (10 ** 9 + 7))