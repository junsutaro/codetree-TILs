const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();


const [ a, b, c, d ] = input.split(' ').map(Number);

function calculateMinutes(a, b, c, d) {
    const startTotalMinutes = 2 * 60 + 5;
    const endTotalMinutes = 4 * 60 + 1;

    const elapsedTime = endTotalMinutes - startTotalMinutes;
    return elapsedTime;
}

const ans = calculateMinutes(a, b, c, d);

console.log(ans)