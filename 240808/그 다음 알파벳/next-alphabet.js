const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const currentChar = input;
const nextChar = String.fromCharCode((currentChar.charCodeAt(0) - 97 + 1) % 26 + 97);

console.log(nextChar);