const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ]
const DAY_IN_MONTH = [ 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const [ m1, d1, m2, d2 ] = input[0].split(' ').map(Number);
const targetWeek = input[1];

function calculateDates(m1, d1, m2, d2) {
    let firstDay = 0;
    let secondDay = 0;
    for ( let i = 1 ; i < m1 ; i ++ ) {
        firstDay += DAY_IN_MONTH[i]
    }
    firstDay += d1;
    for ( let i = 1 ; i < m2 ; i ++ ) {
        secondDay += DAY_IN_MONTH[i]
    }
    secondDay += d2;
    const elapsedDate = secondDay - firstDay;
    return elapsedDate
}   

const elapsedDate = calculateDates(m1, d1, m2, d2);
let dateCount = Array(7).fill(0);
let targetIndex = WEEK.indexOf(targetWeek);


for ( i = 0 ; i <= elapsedDate ; i ++ ) {
    dateCount[i % 7] += 1
}

console.log(dateCount[targetIndex])