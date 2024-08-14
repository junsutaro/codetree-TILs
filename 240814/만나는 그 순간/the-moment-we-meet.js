const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);


const moveA = {}; // write dist by time
let indexA = 0; // dist real time
let timeA = 0;

for ( let i = 1 ; i <= N ; i ++ ) {
    // move of A
    const [ dir, dist ] = input[i].split(' ');
    for ( let j = 0 ; j < dist ; j ++ ) {
        timeA += 1
        if ( dir === 'R' ) {
            indexA += 1;
        } else {
            indexA -= 1;
        }
        moveA[timeA] = indexA;
    }
}

const moveB = {}; // write dist by time
let indexB = 0; // dist real time
let timeB = 0;

let firstMeetTime = -1; // find ans with make B's moving array

for ( let i = N + 1 ; i <= N + M ; i ++ ) {
    // move of B
    const [ dir, dist ] = input[i].split(' ');
    for ( let j = 0 ; j < dist ; j ++ ) {
        timeB += 1
        if ( dir === 'R' ) {
            indexB += 1;
        } else {
            indexB -= 1;
        }
        moveB[timeB] = indexB;
        if ( moveA[timeB] === moveB[timeB]) {
            firstMeetTime = timeB;
            break;
        }
        
    }
    
    if (firstMeetTime !== -1) break;


}

console.log(firstMeetTime)