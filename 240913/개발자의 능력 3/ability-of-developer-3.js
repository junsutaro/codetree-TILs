const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const abilities = input.split(' ').map(Number);

function getCombinations(arr, selectNumber) {
    const result = [];

    if ( selectNumber === 1 ) { return arr.map((e1) => [e1]) }

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);

        const attached = combinations.map((combination) => [fixed, ...combination]);
        result.push(...attached);
    })

    return result;
}

function getDiff(arr) {
    const totalSum = arr.reduce((acc, cur) => acc + cur, 0);
    let minDiff = Number.MAX_SAFE_INTEGER;

    const combinations = getCombinations(arr, 3);

    combinations.forEach(team1 => {
        const team1Sum = team1.reduce((acc, cur) => acc + cur, 0);
        const team2Sum = totalSum - team1Sum;

        const curDiff = Math.abs(team1Sum - team2Sum);

        minDiff = Math.min(minDiff, curDiff)
    })

    return minDiff;
}



const ans = getDiff(abilities);
console.log(ans)