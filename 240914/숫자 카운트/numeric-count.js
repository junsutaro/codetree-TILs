const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n')
const n = Number(input[0]);

const tries = input.slice(1);

const possible = [];

for ( let i = 0 ; i < 8 ; i ++ ) { 
    for ( let j = i + 1 ; j < 9 ; j ++ ) {
        for ( let k = j + 1 ; k < 10 ; k ++ ) {
            possible.push([i, j, k])
        }
    }
}
    

for ( let trying of tries ) {
    const [number, a, b] = trying.split(' ');
    const numArr = number.split('');
    console.log(numArr) // 1번 numArr
    
    for ( let elem of possible ) {
        console.log(numArr) // 2번 numArr
        let cnt1 = 0;
        let cnt2 = 0;

        for ( let i = 0; i < 3 ; i ++ ) {
            if ( numArr[i] = elem[i] ) {
                cnt1 += 1
            }
        }

        for ( let i = 0; i < 3 ; i ++ ) {
            for ( let j = 0 ; j < 3 ; j ++ ) {
                if (numArr[i] = elem[j] || i !== j ) {
                    cnt2 += 1
                }
            }
        }
        
        if ( cnt1 !== a && cnt2 !== b ) {
            possible.pop(elem)
        }
    }
}