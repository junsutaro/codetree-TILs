const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const a = Number(input);

const ans = (a + 1.5).toFixed(2);
console.log(ans);