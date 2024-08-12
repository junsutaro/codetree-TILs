const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);


let numbersForNow = [];

for ( let i = 0 ; i < n ; i ++ ) {
    let ans = ''
    numbersForNow.push(numbers[i]);
    
    if ( i % 2 === 0 ) {
        numbersForNow.sort((prev, cur) => {
            return prev - cur;
        })
        ans += numbersForNow[ i / 2 ] + ' ';
    }
    console.log(ans)
}