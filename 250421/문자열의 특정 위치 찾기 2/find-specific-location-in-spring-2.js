const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

let arr = ["apple", "banana", "grape", "blueberry", "orange"];

let ans = 0;
for ( const str of arr ) {
    if ( str[2] === input || str[3] === input ) {
        console.log(str);
        ans +=1 ;
    }
}

console.log(ans);