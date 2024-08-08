const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let str = input[0];

const indices = input.slice(1).map(Number);

for (const index of indices) {
    if (str.length <= 1) break;


    if (index >= str.length) {
        str = str.slice(0, -1);
    } else {
        str = str.slice(0, index) + str.slice(index + 1);
    }
    console.log(str);   
}