const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
const arr1 = input[1].split(' ').map(Number);
const arr2 = input[2].split(' ').map(Number);

function countValidCombinations(N, arr1, arr2) {
    let count = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            for (let k = 1; k <= N; k++) {
                const validForArr1 =
                    Math.min(Math.abs(i - arr1[0]), N - Math.abs(i - arr1[0])) <= 2 &&
                    Math.min(Math.abs(j - arr1[1]), N - Math.abs(j - arr1[1])) <= 2 &&
                    Math.min(Math.abs(k - arr1[2]), N - Math.abs(k - arr1[2])) <= 2;

                const validForArr2 =
                    Math.min(Math.abs(i - arr2[0]), N - Math.abs(i - arr2[0])) <= 2 &&
                    Math.min(Math.abs(j - arr2[1]), N - Math.abs(j - arr2[1])) <= 2 &&
                    Math.min(Math.abs(k - arr2[2]), N - Math.abs(k - arr2[2])) <= 2;

                if (validForArr1 || validForArr2) {
                    count++;
                }
            }
        }
    }

    return count;
}


console.log(countValidCombinations(n, arr1, arr2))