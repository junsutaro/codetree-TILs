class Student {
    constructor(height, weight, index) {
        this.height = height;
        this.weight = weight;
        this.index = index; // 입력된 순서 (1부터 시작)
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let students = [];

for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    students.push(new Student(height, weight, i));
}

// 정렬: 키 내림차순, 몸무게 내림차순, 입력된 순서 오름차순
students.sort((a, b) => {
    b.height - a.height || 
    b.weight - a.weight || 
    a.index - b.index
});

// 출력
for (let student of students) {
    console.log(`${student.height} ${student.weight} ${student.index}`);
}