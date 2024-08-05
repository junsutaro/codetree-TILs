const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const ages = input.split('\n').map(Number);

let sum = 0;
let count = 0;
let index = 0;

while(true) {

    if (index >= ages.length) {
        break; 
    }
    
    const age = ages[index]

    if (age < 20 || age >= 30) {
        break;
    }

    sum += age
    count += 1
    
    index += 1
}

console.log((sum/count).toFixed(2))