class Student {
    constructor(height, weight, index) {
        this.height = height;
        this.weight = weight;
        this.index = index;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const students = [];

for ( let i = 1 ; i <= n ; i ++ ) {
    [height, weight] = input[i].split(' ').map(Number);
    students.push(new Student(height, weight, i))
}

// console.log(students)

function cmp(a, b) {
    if ( a.height !== b.height ) {
        return a.height - b.height
    }

    return b.weight - a.weight
}

students.sort(cmp);

// console.log(students)

for ( let student of students ) {
    console.log(student.height, student.weight, student.index)
}