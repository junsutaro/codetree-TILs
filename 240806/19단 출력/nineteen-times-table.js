const n = 19;
let arr;
for ( let i = 0; i < n; i ++ ) {
    arr = '';
    for ( let j = 0; j < n; j ++ ) {
        arr += `${i+1} * ${j+1} = ${(i+1)*(j+1)}`
        if ( j % 2 === 0 && j !== 18 ) {
            arr += ' / ';
        }
        else if ( j % 2 === 1 ) {
            arr += '\n';
        }
    }

    console.log(arr)
}