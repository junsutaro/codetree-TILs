const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const [ secretCode, meetingPoint, time ] = input;

class Info {
    constructor( secretCode, meetingPoint, time) {
        this.secretCode = secretCode;
        this.meetingPoint = meetingPoint;
        this.time = time;
    }
}

const info = new Info(secretCode, meetingPoint, time);

console.log(`secret code : ${info.secretCode}`);
console.log(`meeting point : ${info.meetingPoint}`);
console.log(`time : ${info.time}`);