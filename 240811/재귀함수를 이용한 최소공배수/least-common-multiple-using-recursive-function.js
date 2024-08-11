const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const numbers = input[1].split(' ').map(Number);

function findAns(list, index = 1, multiple = numbers[0]) {

    if (index === n) {
        return multiple;
    }

    // 최소공배수 구하는 로직
    let a = multiple;
    let b = list[index];

    let tempMultiply = a * b

    while ( b > 0 ) {
        [a, b] = [b, a % b]
    }

    return findAns(list, index + 1, tempMultiply / a)

}

const ans = findAns(numbers)

console.log(ans)