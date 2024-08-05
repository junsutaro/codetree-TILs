const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b] = input.split(' ').map(Number);

ans = 0;
for ( let i = a ; i <= b ; i ++ ) {
    if ( 1920 % i === 0 && 2880 % i === 0 ) {
        ans = 1;
        break;
    } 
}
console.log(ans)