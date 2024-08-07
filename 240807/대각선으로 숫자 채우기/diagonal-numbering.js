const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [n, m] = input.split(' ').map(Number);

let arr2d = Array.from({ length: n }, () => Array(m).fill(0));
let temp = 1;

for (let k = 0; k < n + m - 1; k++) {
    if (k < n) {
        for (let i = 0; i <= k; i++) {
            let j = k - i;
            if (i < n && j < m) {
                arr2d[i][j] = temp;
                temp += 1;
            }
        }
    } else {
        for (let i = k - m + 1; i < n; i++) {
            let j = k - i;
            if (i < n && j < m) {
                arr2d[i][j] = temp;
                temp += 1;
            }
        }
    }
}

for (let row of arr2d) {
    console.log(row.join(' '));
}