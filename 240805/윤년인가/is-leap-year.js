const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const year = Number(input);

console.log( year % 400 == 0 ? true : ( year % 4 == 0 ?   (year % 100 == 0 ? false : true) :  true ) )