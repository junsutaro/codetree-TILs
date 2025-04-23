const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let ans = 0;
for (let i = 0; i < input.length; i++) {
    ans += input[i].length;
}
console.log(ans);
