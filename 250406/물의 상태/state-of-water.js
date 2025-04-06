const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const a = Number(input);

if ( a < 1.0 ) { console.log('ice')}
else if ( a >= 100 ) {console.log('vapor')}
else { console.log('water')}