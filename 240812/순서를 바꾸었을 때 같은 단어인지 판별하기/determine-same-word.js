const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let str1 = input[0];
let str2 = input[1];

let arr1 = [...str1];
let arr2 = [...str2];


if ( arr1.length !== arr2.length ) {
    console.log('No')
} else {

    let isEqual = true;
    arr1.sort();
    arr2.sort();

    for ( let i = 0; i < arr1.length ; i ++ ) {
        if ( arr1[i] !== arr2[i] ) {
            isEqual = false;
            break;
        } 
    }

    console.log( isEqual ? 'Yes' : 'No' )

}



console.log(ans)