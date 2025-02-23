const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('');

const map = new Map();

input.map((val, idx) => {
    map.set(val, (map.get(val) || 0 ) + 1 )
})

for ( const [val, key] of map ) {
    if ( key === 1 ) {
        console.log(val);
        return;
    }
    console.log('None');
}