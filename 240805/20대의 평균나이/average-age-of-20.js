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
    
    if (ages[index] < 20 || ages[index] >= 30) {
        break;
    }

    sum += ages[index]
    count += 1
    
    index += 1
}

console.log((sum/count).toFixed(2))