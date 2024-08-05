const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();


const N = Number(input);
let sum = 0;

for ( i = 1 ; i < N ; i ++ ) {
    if (N % i === 0) {
        sum += i
    }
}


console.log(sum === N ? 'P' : 'N')