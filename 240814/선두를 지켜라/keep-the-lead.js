const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const moves = input.slice(1).map((line) => line.split(' ').map(Number))


const moveA = {};
const moveB = {};
const diffMoveAandB = {};

let timeA = 0;
let positionA = 0;
for ( let i = 0 ; i < N ; i ++ ) {
    const [v, t] = moves[i];
    for ( let j = 0; j < t ; j ++ ) {
        timeA += 1;
        positionA += v;
        moveA[timeA] = positionA;
    }
}


let timeB = 0;
let positionB = 0;


for ( let i = N ; i < N + M ; i ++ ) {
    const [v, t] = moves[i];
    for ( let j = 0; j < t ; j ++ ) {
        timeB += 1;
        positionB += v;
        moveB[timeB] = positionB;
        
        diffMoveAandB[timeB] = moveA[timeB]-moveB[timeB]
        
    }
}

// console.log(diffMoveAandB)


let count = 0;
let flag = null;

for ( let key in diffMoveAandB ) {
    let currentDiff = diffMoveAandB[key];

    if (flag === null) {
        flag = currentDiff > 0;
    }

    else if ( (currentDiff > 0 && !flag) || (currentDiff < 0 && flag) ) {
        count += 1
        flag = !flag;
    }
}

console.log(count);