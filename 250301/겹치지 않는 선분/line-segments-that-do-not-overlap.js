const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];

for (let i = 1; i <= n; i++) {
    const [x1, x2] = input[i].split(" ").map(Number);
    segments.push([x1, x2]);
}

const allA = segments.map(seg => seg[0]);
const allB = segments.map(seg => seg[1]);

const uniqueA = Array.from(new Set(allA)).sort((a, b) => a - b);
const mapA = new Map();
uniqueA.forEach((val, idx) => {
    mapA.set(val, idx + 1);
})

const uniqueB = Array.from(new Set(allB)).sort((a, b) => a - b);
const mapB = new Map();
uniqueB.forEach((val, idx) => {
    mapB.set(val, idx + 1);
})

for ( let seg of segments ) {
    seg[0] = mapA.get(seg[0]); 
    seg[1] = mapB.get(seg[1]);
}

segments.sort((a, b) => a[0] - b[0]);

const B = segments.map(seg => seg[1])

const prefixMax = Array(n).fill(0);
prefixMax[0] = B[0];
for ( let i = 1 ; i < n ; i ++ ) {
    prefixMax[i] = Math.max(prefixMax[i-1], B[i]);
}

const suffixMin = new Array(n);
suffixMin[n - 1] = B[n - 1];
for (let i = n - 2; i >= 0; i--) {
    suffixMin[i] = Math.min(suffixMin[i + 1], B[i]);
}

let ans = 0;

for ( let i = 0 ; i < n ; i ++ ) {
    let leftOk = ( i === 0 || prefixMax[i-1] < B[i] );
    let rightOk = ( i === n-1 || suffixMin[i+1] > B[i])
    if ( leftOk && rightOk ) {
        ans += 1;
    }
}

console.log(ans);