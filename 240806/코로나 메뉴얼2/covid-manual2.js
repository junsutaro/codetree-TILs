const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [A, B, C, D] = [0, 0, 0, 0];

input.forEach(line => {
    let [symptom, temp] = line.split(' ')
    
    if (Number(temp) >= 37) {
        if ( symptom === 'Y') {
            A += 1;
        }
        else {
            B += 1;
        }
    }
    else {
        if ( symptom === 'Y' ) {
            C += 1
        }
        else {
            D += 1
        }
    }
})

let isEmergency = A >= 2 ? "E" : " "

console.log(`${A} ${B} ${C} ${D} ${isEmergency}`)