const fs = require('fs');

let a = fs.readFileSync(0).toString().split(" ");

let n = Number(a[0]);
let m = Number(a[1]);


console.log(n*m)