class Person  {
    constructor(name, addr, city) {
        this.name = name;
        this.addr = addr;
        this.city = city;
    }

    toString() {
        return `name ${this.name}\naddr ${this.addr}\ncity ${this.city}`;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let people = [];

for ( let i = 0 ; i < n ; i ++ ) {
    const [name, addr, city] = input[i+1].split(' ');
    people.push(new Person (name, addr, city));
}

let targetIdx = 0;
for ( let i = 0 ; i < people.length ; i ++ ) {
    if (people[i].name > people[targetIdx].name) {
        targetIdx = i;
    }   
}


console.log(people[targetIdx].toString())