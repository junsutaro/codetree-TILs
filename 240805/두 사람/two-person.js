const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [age1, gender1] = input[0].split(' ');
const [age2, gender2] = input[1].split(' ');

const isEligible = (parseInt(age1) >= 19 && gender1 === 'M') || (parseInt(age2) >= 19 && gender2 === 'M');

console.log(isEligible ? 1 : 0);