const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();


const [ a, b, c ] = input.split(' ').map(Number);

function calculateMinutes(a, b, c) {
    const MINUTES_IN_A_DAY = 24 * 60; // 하루에 해당하는 총 분

    const startDay = 11;
    const startHour = 11;
    const startMinute = 11;

    if (a < startDay || 
    (a === startDay && b < startHour) || 
    (a === startDay && b === startHour && c < startMinute)) {
        return -1;
    }
    
    const startTotalMinutes = (startDay * MINUTES_IN_A_DAY) + (startHour * 60) + startMinute;
    const endTotalMinutes = (a * MINUTES_IN_A_DAY) + (b * 60) + c;

    const elapsedTime = endTotalMinutes - startTotalMinutes;
    return elapsedTime;
}

const result = calculateMinutes(a, b, c)
console.log(result)