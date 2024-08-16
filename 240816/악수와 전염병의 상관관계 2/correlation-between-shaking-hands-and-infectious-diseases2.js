const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// N 개발자 수, 숙주가 K번 악수 까지만 전염, P첫 숙주, T번 악수
const [n, k, p, t] = input[0].split(' ').map(Number);
// const handShakes = input.slice(1).map((line) => line.trim().split(' ').map(Number));

class Shake {
    constructor(time, person1, person2) {
        this.time = time;
        this.person1 = person1;
        this.person2 = person2;
    }
}
const shakes = [];

for ( let i = 1 ; i <= t ; i ++ ) {
    const [time, person1, person2] = input[i].split(' ').map(Number);
    shakes.push(new Shake(time, person1, person2)) ;
}

const infected = Array(n + 1).fill(false);
const shakeNum = Array(n + 1).fill(0);

infected[p] = true;

shakes.sort((a, b) => a.time - b.time)

// console.log(shakes)

shakes.forEach(shake => {
    const target1 = shake.person1;
    const target2 = shake.person2;

    if ( infected[target1]) {
        shakeNum[target1] += 1
    }
    if ( infected[target2]) {
        shakeNum[target2] += 1
    }

    if (shakeNum[target1] <= k && infected[target1]) {
        infected[target2] = true;
    }
    if (shakeNum[target2] <= k && infected[target2]) {
        infected[target1] = true;
    }
})

let output = "";
for ( let i = 1; i <= n; i ++ ) {
    output += infected[i] ? 1 : 0;
}

console.log(output)