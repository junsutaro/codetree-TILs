const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const n = Number(input);

function printHello(n) {
    if ( n === 0 ) {
        return
    }

    console.log('HelloWorld')
    printHello(n - 1)

}

printHello(n)