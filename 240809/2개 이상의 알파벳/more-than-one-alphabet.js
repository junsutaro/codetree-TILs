const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

function isMultiChar(string) {
    const uniQueChars = new Set(string);
    return uniQueChars.size >= 2;
}

console.log(isMultiChar(input) ? 'Yes' : 'No' )