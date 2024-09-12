const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [string, q] = input[0].trim().split(' ');

let str = string
let length = str.length

for ( let i = 1; i <= Number(q) ; i ++ ) {
    const type = Number(input[i]);

    let new_str = ''

    if ( type === 1 ) {
        for ( let i = 1 ; i < length; i ++ ) {
            new_str += str[i]
        }
        new_str += str[0]

    } else if ( type === 2 ) {
        new_str += str[str.length - 1]
        for ( let i = 0 ; i < length - 1; i ++ ) {
            new_str += str[i]
        }
    } else if ( type === 3 ) {
        
        for ( let i = 1 ; i <= length ; i ++ ) {
            new_str += str[length-i]
        }
    }

    str = new_str

    console.log(str)
}