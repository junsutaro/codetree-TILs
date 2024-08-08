const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [initialString, q] = input[0].split(' ');
let str = initialString;
const requests = input.slice(1);

for (const request of requests) {
    if (request === '1') {
        str = str.slice(1) + str[0];
    } else if (request === '2') {
        str = str[str.length - 1] + str.slice(0, -1);
    } else if (request === '3') {
        str = str.split('').reverse().join('');
    }
    console.log(str); 
}