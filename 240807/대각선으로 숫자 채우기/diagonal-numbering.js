const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [n, m] = input.split(' ').map(Number);

// const [n, m] = [6, 4]
let arr2d = Array(n).fill(0).map(() => Array(m).fill(0));

let temp = 1;

for ( let k = 0 ; k < n + m - 1 ; k ++ ) {
    if ( k < n ) {
        for ( let i = 0 ; i <= k ; i ++ ) {
            if ( k - i < m ) { 
                arr2d[i][k-i] = temp;
                temp += 1
            }
        }
    }

    else {
        for ( let i = k - m + 1 ; i < n ; i ++ ) {
            if ( i < n && 0 <= k - i < m ) {
                arr2d[i][k-i] = temp;
                temp += 1
            }
        }
    }


}



for ( let elem of arr2d ) {
    console.log(elem.join(' '))
}