class Student {
    constructor(name, korean, english, math) {
        this.name = name;
        this.korean = parseInt(korean, 10); // 문자열을 정수로 변환
        this.english = parseInt(english, 10); // 문자열을 정수로 변환
        this.math = parseInt(math, 10); // 문자열을 정수로 변환
    }

    toString() {
        return `${this.name} ${this.korean} ${this.english} ${this.math}`;
    }
}

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 첫 번째 줄에서 학생 수를 가져옵니다.
const n = Number(input[0]);

const students = [];

for (let i = 1; i <= n; i++) {
    const [name, korean, english, math] = input[i].split(' ');
    students.push(new Student(name, korean, english, math));
}

// 정렬: 국어 점수 (내림차순), 영어 점수 (내림차순), 수학 점수 (내림차순)
students.sort((a, b) => 
    b.korean - a.korean ||    // 국어 점수 내림차순
    b.english - a.english ||  // 영어 점수 내림차순
    b.math - a.math           // 수학 점수 내림차순
);

// 정렬된 학생 정보를 출력
for (const student of students) {
    console.log(student.toString());
}