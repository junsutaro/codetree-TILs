const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let cnt = 0;

for (i = 0; i < input.length ; i ++ ) {
    const [symptom, temp] = input[i].split(' ');
    if ( symptom == 'Y' && Number(temp) >= 37 ) {
        cnt += 1
    }
}

console.log( cnt >= 2 ? 'E' : 'N' )