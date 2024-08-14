const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const moves = input.slice(1).map((line) => line.split(' '));

const moveA = {};
const moveB = {};

let timeA = 0;
let positionA = 0;
for ( let i = 0; i < n ; i ++ ) {
    const t = Number(moves[i][0]);
    const dir = moves[i][1];

    for ( let j = 0 ; j < t ; j ++ ) {
        timeA += 1
        if ( dir === 'R') {
            positionA += 1;
        } else {
            positionA -= 1;
        }
        moveA[timeA] = positionA
    }
}

let timeB = 0;
let positionB = 0;

let count = 0;

for ( let i = n; i < n + m ; i ++ ) {
    const t = Number(moves[i][0]);
    const dir = moves[i][1];

    for ( let j = 0 ; j < t ; j ++ ) {
        timeB += 1
        if ( dir === 'R') {
            positionB += 1;
        } else {
            positionB -= 1;
        }
        moveB[timeB] = positionB

        if ( moveA[timeB] === moveB[timeB] ) {
            // console.log(timeB, moveA[timeB], moveB[timeB])
            // console.log(timeB-1, moveA[timeB-1], moveB[timeB-1])
            if (moveA[timeB - 1] !== moveB[timeB - 1]) {
                count += 1
            } 
        }
    }
}


// 로봇 A와 B가 움직임이 끝난 후에도 계속 마지막 위치에 머물러야 한다는 조건
if ( timeA < timeB ) {
    const lastPositionOfA = moveA[timeA]
    for ( let i = timeA + 1 ; i <= timeB ; i ++ ) {
        if ( moveB[i] === lastPositionOfA ) { 
            count += 1
        }
    }
}

if ( timeA > timeB ) {
    const lastPositionOfB = moveB[timeB]
    for ( let i = timeB + 1 ; i <= timeA ; i ++ ) {
        if ( moveA[i] === lastPositionOfB ) { 
            count += 1
        }
    }
}

// console.log(moveA)
// console.log(moveB)
console.log(count)