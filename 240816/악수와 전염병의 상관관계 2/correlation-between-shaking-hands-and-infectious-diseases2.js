const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// N 개발자 수, 숙주가 K번 악수 까지만 전염, P첫 숙주, T번 악수
const [N, K, P, T] = input[0].split(' ').map(Number);
const handShakes = input.slice(1).map((line) => line.trim().split(' ').map(Number));

// sort by time
function cmp (a, b) {
    return a[0] - b[0];
}
handShakes.sort(cmp)

// Check virus , if virusPoint > K => can't infect
const virusCheck = Array(N+1).fill(0);
virusCheck[P] = 1;

// Count virus infect
count = 0;

function infectFunction(x, y) {
    if ( virusCheck[x] > 0 && virusCheck[y] > 0 ) {
        virusCheck[x] += 1;
        virusCheck[y] += 1
    }

    else if ( (0 < virusCheck[x] && virusCheck[x] < K + 1) && (virusCheck[y] === 0) ) {
        virusCheck[x] += 1;
        virusCheck[y] += 1

    }

    else if ( (virusCheck[x] === 0) && (0 < virusCheck[y] && virusCheck[y] < K + 1) ) {
        virusCheck[x] += 1;
        virusCheck[y] += 1
    }
}

for ( let i = 0 ; i < T ; i ++ ) {
    const [t, x, y] = handShakes[i];
    infectFunction(x, y); // use VirusCheck array
}

const ans = virusCheck.map((value) => (value !== 0 ? 1 : 0 ))

console.log(ans.slice(1).join(''))