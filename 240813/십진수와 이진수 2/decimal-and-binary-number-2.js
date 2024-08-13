const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arrN = input[0].split('');

let value = 0;
for ( let i = 0 ; i < arrN.length ; i ++ ) {
    value = value * 2 + (arrN[i] === '1' ? 1 : 0 ) 
}

value = value * 17;

let ans = []
while (true) {
    if (value < 2 ) {
        ans.push(value);
        break;  
    }

    ans.push(value % 2);
    value = parseInt(value / 2);
}

console.log(ans.reverse().join(''))