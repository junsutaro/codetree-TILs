const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();


const [ a, b, c ] = input.split(' ').map(Number);

function calculateMinutes(a, b, c) {

    const startTotalMinutes = 11 * 60 * 24 + 11 * 60 + 11;
    const endTotalMinutes = a * 60 * 24 + b  * 60 + c;

    const elapsedTime = endTotalMinutes - startTotalMinutes;
    if ( elapsedTime >= 0 ) {
        return elapsedTime;
    } else {
        return -1
    }
}

const result = calculateMinutes(a, b, c)

console.log(result)