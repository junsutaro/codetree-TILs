const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let str1 = input[0];
let str2 = input[1];

let arr1 = [...str1];
let arr2 = [...str2];



let ans = 'Yes';

if ( arr1.length !== arr2.length ) {
    ans = 'No'
} else {
    arr1.sort();
    arr2.sort();

    for ( let i = 0; i < arr1.length ; i ++ ) {
        if ( arr1[i] !== arr2[i] ) {
            ans = 'No';
            break;
        } 
}
}



console.log(ans)