const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const flags = input.slice(1);

const people = [];

for ( let elem of flags ) {
    const [pos, flag] = elem.split(' ');

    people.push({pos : Number(pos), flag : flag})

}
people.sort((a, b) => a.pos - b.pos)
// console.log(people)

ans = 0;

for ( let i = 0 ; i < n ; i ++ ) {
    for ( let j = i + 1 ; j < n ; j ++ ) {
        let cntG = 0;
        let cntH = 0;
        for ( let k = i ; k <= j ; k ++ ) {
            if ( people[k].flag === 'G') {
                cntG ++;
            } else {
                cntH ++
            }
        }
        // console.log(cntG, cntH)
        if ((cntG === cntH) || cntG === 0 || cntH === 0 ) {
            const dist = people[j].pos - people[i].pos;
            ans = Math.max(ans, dist);
        }
    }
}

console.log(ans)