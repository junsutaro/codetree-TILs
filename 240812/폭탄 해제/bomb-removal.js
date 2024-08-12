class BombDefusal {
    constructor(code, color, second) {
        this.code = code;
        this.color = color;
        this.second = second;
    }

    toString() {
        return `code : ${this.code}\ncolor : ${this.color}\nsecond : ${this.second}`;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [code, color, second] = input.split(' ');

const defusal = new BombDefusal(code, color, second);

console.log(defusal.toString());