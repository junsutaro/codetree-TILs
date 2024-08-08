const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ');

const str1 = input[0];
const str2 = input[1];

const prefix = str1.slice(0, 2);

const result = prefix + str2.slice(2);

console.log(result);