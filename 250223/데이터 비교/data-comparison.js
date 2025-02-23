const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])
const m = Number(input[2])

const arr1 = input[1].split(' ').map(Number)
const arr2 = input[3].split(' ').map(Number)

const set1 = new Set(arr1);

console.log(arr2.map(num => set1.has(num) ? 1 : 0).join(' '));
