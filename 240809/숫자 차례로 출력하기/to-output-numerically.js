const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input);

let arrGlobal = ''

function printN(n) {
    if ( n === 0 ) {
        retrnu
    }

    printN(n-1);
    arrGlobal += n + ' '
}



function printNRev(n) {
    
    if ( n === 0 ) {
        return
    }

    arrGlobal += n + ' '
    printNRev(n-1);
}

printN(n)
arrGlobal += '\n'

printNRev(n)

console.log(arrGlobal)