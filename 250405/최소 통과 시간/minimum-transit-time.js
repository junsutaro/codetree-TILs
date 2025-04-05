const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [N, M] = input[0].trim().split(' ').map(Number);
const times = input.slice(1, 1 + M).map(Number);

function isPossible(timeLimit) {
    let count = 0;
    for (let t of times) {
        count += Math.floor(timeLimit / t);
        if (count >= N) return true; // 물건 N개 이상 통과 가능하면 성공
    }
    return false;
}

function findMinTime() {
    let left = 1;
    let right = Math.max(...times) * N;
    let answer = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (isPossible(mid)) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return answer;
}

console.log(findMinTime());
