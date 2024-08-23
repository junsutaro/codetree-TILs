const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input.map((line) => line.split(' '));

// console.log(arr);

let ans = 0;

// Is exist that X-axis direction Winner ?

for ( let i = 0 ; i < 15 ; i ++ ) {
    for ( let j = 0 ; j < 19 ; j ++ ) {
        if ( arr[i][j] !== '0' ) {
            if (arr[i][j] === arr[i+1][j] && arr[i+1][j] === arr[i+2][j] && arr[i+2][j] === arr[i+3][j] && arr[i+3][j] === arr[i+4][j]) {
                console.log(Number(arr[i][j]));
                console.log(i+1, j+3)
                return;
            }
        }
    }
}

// Is exist that Y-axis direction Winner ?

for ( let i = 0 ; i < 19 ; i ++ ) {
    for ( let j = 0 ; j < 15 ; j ++ ) {
        if ( arr[i][j] !== '0' ) {
            if (arr[i][j] === arr[i][j+1] && arr[i][j+1] === arr[i][j+2] && arr[i][j+2] === arr[i][j+3] && arr[i][j+3] === arr[i][j+4]) {
                console.log(Number(arr[i][j]));
                console.log(i+1, j+3)
                return;
            }
        }
    }
}



console.log(ans)