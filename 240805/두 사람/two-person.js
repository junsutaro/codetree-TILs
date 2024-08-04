const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = input[0];
const B = input[1];

const [ Aage, Agender ] = A.split(' ')
const [ Bage, Bgender ] = B.split(' ')

if (( Aage >= 19 && Agender == 'M' ) || ( Bage >= 19 && Bgender == 'M' )) {
    console.log(1)
} else {
    console.log(0)
}