function quiz ( arr ) {
    if ( arr[0] === 1 ) {
        console.log(numbers[arr[1] - 1]);
    }
    else if ( arr[0] === 2 ) {
        let index = -1;
        for ( let i = 0 ; i < n ; i ++ ) {
            if (numbers[i] === arr[1]) {
                index = i;
                break;
            }
        }
        console.log(index + 1);
    }
    else {
        let printedArr = ''
        for ( let i = arr[1] - 1 ; i < arr[2] ; i ++ ) {
            printedArr += numbers[i] + ' '
        }
        console.log(printedArr);
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, q] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

for ( let i = 2 ; i < q + 2 ; i ++ ) {
    quiz(input[i].split(' ').map(Number))
}