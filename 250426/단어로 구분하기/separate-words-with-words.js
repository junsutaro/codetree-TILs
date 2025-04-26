const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

for ( let i = 0 ; i < input.length ; i ++ ) {
    const str = input[i];

    console.log(str);
}
