const fs = require('fs');

let input = fs.readFileSync(0).toString().trim().split(":");

let hour = Number(input[0])
let min = Number(input[1])

console.log(`${hour + 1}:${min}`)