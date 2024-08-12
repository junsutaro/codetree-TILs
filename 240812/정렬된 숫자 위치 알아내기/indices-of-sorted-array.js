const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

const indexedArr = arr.map((value, index) => ({value, index}))

function cmp(a, b) {
    if ( a.value !== b.value ) {
        return a.value - b.value
    }

    return a.index - b.index
}

indexedArr.sort(cmp);

const result = []

for ( let i = 0; i < n ; i ++ ) {
    result[indexedArr[i].index] = i + 1
}


console.log(result.join(' '))