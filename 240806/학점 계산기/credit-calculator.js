const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const scores = input[1].split(' ').map(Number);

// const sumVal = scores.reduce((sum, score) => sum + score, 0);
let sumVal = 0;
// for (let elem of scores ) {
//     sumVal += Number(elem);
// }

scores.forEach(score => {
    sumVal += score;
})

const avgVal = (sumVal / n).toFixed(1);

const grade = avgVal >= 4.0 ? 'Perfect' :
              avgVal >= 3.0 ? 'Good' :
              'Poor'


console.log(avgVal);
console.log(grade);