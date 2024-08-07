const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [n, m] = input.split(' ').map(Number);

let arr2d = Array.from({ length: n }, () => Array(m).fill(0));
let temp = 1;

for (let k = 0; k < n + m - 1; k++) {
    let startRow = Math.max(0, k - m + 1);
    let endRow = Math.min(n - 1, k);
    for (let i = startRow; i <= endRow; i++) {
        let j = k - i;
        if (j < m) {
            arr2d[i][j] = temp++;
        }
    }
}

for (let elem of arr2d) {
    console.log(elem.join(' '));
}