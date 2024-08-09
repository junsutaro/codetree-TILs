const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const year = Number(input);


function isLunarYear(year) {
    if ( year % 4 !== 0 ) {
        return false
    } 

    if ( year % 100 !== 0) { 
        return true
    }

    if ( year % 400 === 0 ) {
        return true
    }

    return false

}


if ( isLunarYear(year) === true ) {
    console.log("true")
} else {
    console.log("false")
}