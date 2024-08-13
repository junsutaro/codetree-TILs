const num_of_days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();


const [ a, b, c, d ] = input.split(' ').map(Number);

function calculateDates( a, b, c, d ) {

    let elapsedDate = num_of_days[a] - b + 1;

    for ( let i = a + 1 ; i < c ; i ++ ) {
        elapsedDate += num_of_days[i]
    }

    elapsedDate += d
    
    return elapsedDate
    
}

const result = calculateDates(a, b, c, d);

console.log(result)