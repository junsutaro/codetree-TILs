const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const [n, m] = input.split(' ').map(Number);

let arr2d = Array.from({ length: n }, () => Array(m).fill(0));
let temp = 1;

// Iterate over all possible diagonals
for (let k = 0; k < n + m - 1; k++) {
    if (k < m) {
        for (let i = 0; i <= k && i < n; i++) {
            let j = k - i;
            if (j < m) {
                arr2d[i][j] = temp++;
            }
        }
    } else {
        for (let j = m - 1; j >= k - n + 1; j--) {
            let i = k - j;
            if (i < n) {
                arr2d[i][j] = temp++;
            }
        }
    }
}

// Output the 2D array
for (let row of arr2d) {
    console.log(row.join(' '));
}