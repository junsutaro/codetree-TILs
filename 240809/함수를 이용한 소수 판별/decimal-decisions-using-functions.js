const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);


function isPrimeNumber(n) {
    if ( n < 2 ) {
        return false 
    }

    if ( n === 2 ) {
        return true
    }

    for ( let i = 2 ; i * i <= n ; i ++) {
        if ( n % i === 0 ){ 
            return false;
        }
    }

    return true;
}



let ans = 0;
for ( i = a ; i <= b ; i ++ ) {
    if ( isPrimeNumber(i) === true ) {
        ans += i
    }
}


console.log(ans)