const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

n = Number(input[0]);
const people = input.slice(1).map(Number);

console.log(people)
const MAX_VAL = Number.MAX_SAFE_INTEGER;


let minVal = 0;
for ( let i = 0 ; i < n ; i ++ ) {
    let sumVal = 0;
    for ( let j = 0 ; j < n ; j ++ ) {
        sumVal += ( people[(i + j) % n] * j ); // i가 시작점 ,j는 칸 수
    }
    // console.log(sumVal);
    minVal = Math.min((minVal, sumVal))
}

console.log(minVal);