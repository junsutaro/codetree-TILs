const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let trace = {};
let index = 0

for ( let i = 1; i <= n ; i ++ ) {
    let dist = Number(input[i].split(' ')[0])
    let dir = input[i].split(' ')[1]

    if (dir === 'R') {
        let start = index;
        let end = index + dist - 1;
        index = index + dist - 1;

        for ( let j = start ; j <= end ; j ++ ) {
            if (!trace[j]) {
                trace[j] = { white: 0, black: 0, temp : 'black' }; // trace[j] 초기화
            }
            trace[j].black += 1
            trace[j].temp = 'black'

        }
    } if ( dir === 'L' ) {
        let start = index - dist + 1
        let end = index
        index = index - dist + 1;


        for ( let j = start ; j <= end ; j ++ ) {
            if (!trace[j]) {
                trace[j] = { white: 0, black: 0, temp : 'white' }; // trace[j] 초기화
            }
            trace[j].white += 1
            trace[j].temp = 'white'
        }
        
    }
}

let black = 0;
let white = 0;
let gray = 0; 

for (let key in trace) {
    let elem = trace[key];
    if (elem.white + elem.black >= 4) {
        gray += 1;
    } else {
        if (elem.temp === 'white') {
            white += 1;
        } else {
            black += 1;
        }
    }
}



console.log(white, black, gray)