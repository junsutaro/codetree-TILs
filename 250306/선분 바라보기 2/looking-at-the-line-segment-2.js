const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = parseInt(input[0].trim());
let segments = input.slice(1, n + 1).map(line => {
    const [y, x1, x2] = line.trim().split(" ").map(Number);
    return { y, x1, x2 };
});

// Please Write your code here.

segments.sort((a, b) => a.y - b.y || a.x1 - b.x1 || a.x2 - b.x2 );
segments.forEach((elem, index) => {
    segments[index] = [elem.x1, elem.x2];
})


const ans = [];
ans.push(segments[0]);

for ( let i = 1 ; i < n ; i++ ) {
    let [x1, x2] = segments[i];
    
    for ( const line of ans ) {
        if ( line[0] < x1 && x1 < line[1] ) { x1 = line[1] }
        if ( line[0] < x2 && x2 < line[1] ) { x2 = line[0] }
    }

    if ( x1 === x2 ) continue;
    ans.push([x1, x2]);
}

let asd = 1;

for ( let i = 2 ; i < ans.length ; i ++ ) {
    if ( ans[i] !== ans[i-1] ) {
        asd += 1;
    }
}
console.log(asd);
