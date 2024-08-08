const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [s, q] = input[0].split(' ');

q = Number(q);

const queries = input.splice(1);
let str = s.split('');


for ( const query of queries ) {

    const [type, a, b] = query.split(' ');

    if (type === '1') {
        const indexA = Number(a) - 1;
        const indexB = Number(b) - 1;

        [str[indexA], str[indexB]] = [str[indexB], str[indexA]];

    } else if (type === '2') {

        const charA = a;
        const charB = b;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === charA) {
                str[i] = charB;
            }
        }
    }

    console.log(str.join(''));


}