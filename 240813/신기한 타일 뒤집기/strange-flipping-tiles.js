const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let trace = {};
let index = 0

for ( let i = 1; i <= n ; i ++ ) {
    const [dist, dir] = input[i].split(' ');
    const distance = Number(dist);



    if (dir === 'R') {
        let start = index;
        let end = start + distance;
        index = end - 1;

        for ( let j = start; j < end ; j ++ ) {
            if ( !trace[j] ){
                trace[j] = { white : 0, black : 0, temp : 'black' } 
            }
            trace[j].black += 1
            trace[j].temp = 'black'
        }
    }

    if (dir === 'L') {
        let start = index;
        let end = start - distance;
        index = end + 1; // 움직일 때 자기 위치를 포함해야함

        for ( let j = start; j > end ; j -- ) {
            if ( !trace[j] ){
                trace[j] = { white : 0, black : 0, temp : 'white' } 
            }
            trace[j].white += 1
            trace[j].temp = 'white'
        }
    }
    
    // console.log(trace)
}

let black = 0;
let white = 0;

for (let key in trace) {
    let elem = trace[key];
    if (elem.temp === 'white') {
        white += 1;
    } else {
        black += 1;
    }
}



console.log(white, black)