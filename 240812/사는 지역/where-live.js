class Person  {
    constructor(name, addr, city) {
        this.name = name;
        this.addr = addr;
        this.city = city;
    }

    toString() {
        return `name ${this.name}\naddr ${this.addr}\ncity ${this.city}\n`;
    }
}


const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let people = Array(n).fill(new Person())

for ( let i = 0 ; i < n ; i ++ ) {
    const [name, addr, city] = input[i+1].split(' ');
    people[i] = new Person (name, addr, city);
}

people.sort((a, b) => b.name.localeCompare(a.name));

console.log(people[0].toString())