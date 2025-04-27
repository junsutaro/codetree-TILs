const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

for ( let i = 0 ; i < input.length ; i += 2 ) {
    const str = input[i];

    console.log(str);
}
