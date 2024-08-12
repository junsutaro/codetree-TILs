const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

class User {
    constructor(id, level) {
        this.id = id;
        this.level = parseInt(level);
    }

    toString() {
        return `user ${this.id} lv ${this.level}`;
    }
    
}

const user2 = new User(input[0], input[1]);
const user1 = new User('codetree', 10);

console.log(user1.toString())
console.log(user2.toString())