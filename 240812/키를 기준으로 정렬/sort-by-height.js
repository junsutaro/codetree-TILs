class Person {
    constructor(name, height, weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    toString() {
        return `${this.name} ${this.height} ${this.weight}`
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0])

people = [];

for ( let i = 1 ; i <= n ; i ++ ) {
    const [name, height, weight] = input[i].split(' ');
    people.push(new Person(name, height, weight));
}
    
people.sort((a, b) => a.height - b.height );

for ( let elem of people ) {
    console.log(elem.toString());
}