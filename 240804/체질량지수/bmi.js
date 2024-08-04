const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [h, w] = input.split(' ').map(Number)
const BMI = (10000 * w) / h**2 ;

console.log(parseInt(BMI))

if (parseInt(BMI) >= 25) {
    console.log('Obesity')
}