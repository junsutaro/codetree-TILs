const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const [str1, str2] = input.split(' ');

if ( str1.length > str2.length ) {
    console.log(str1, str1.length);
} else if ( str1.length < str2.length ) {
    console.log(str2, str2.length)
} else {
    console.log('same')
}