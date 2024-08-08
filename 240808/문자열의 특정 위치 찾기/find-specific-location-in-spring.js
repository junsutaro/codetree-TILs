const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const string = input[0];
const char = input[1];

const index = string.indexOf(char);

if (index === -1) {
    console.log('No');
} else {
    console.log(index);
}