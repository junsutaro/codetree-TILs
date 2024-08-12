class Agent {
    constructor(codeName = 'noName', point = 0) {
        this.codeName = codeName;
        this.point = point;
    }
    toString() {
        return `${this.codeName} ${this.point}`
    }
    
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let agents = Array(5).fill(new Agent());

for ( let i = 0 ; i < 5 ; i ++ ) {
    let [codeName, point] = input[i].split(' ');
    agents[i] = new Agent(codeName, point);
}


agents.sort((a, b) => a.point - b.point);

console.log(agents[0].toString());