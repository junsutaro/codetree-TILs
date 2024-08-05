function printAlphabetPattern(n) {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let index = 0;

    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 0; j < i; j++) {
            line += alphabet[index];
            index = (index + 1) % 26; // 알파벳 Z 다음에는 A가 나와야 함
        }
        console.log(line);
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();
const n = Number(input);

printAlphabetPattern(n);