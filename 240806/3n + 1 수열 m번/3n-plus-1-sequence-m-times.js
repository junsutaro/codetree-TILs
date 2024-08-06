const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const m = Number(input[0]);
for ( let i = 0; i < m ; i ++ ) {
    let n = input[i+1];
    


    let cnt = 0;
    while ( n !== 1 ) {
        if ( n === 1 ) {
            console.log(0);
            break
        }
        if ( n % 2 === 0 ) {
            n = n / 2
            cnt +=1
        }
        else {
            n = n * 3 + 1
            cnt += 1
        }
    }
    console.log(cnt)
}