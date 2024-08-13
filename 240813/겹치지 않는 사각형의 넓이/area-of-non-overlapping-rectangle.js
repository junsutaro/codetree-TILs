const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 직사각형 A, B, M의 좌표를 입력 받음
let [ax1, ay1, ax2, ay2] = input[0].split(' ').map(Number);
let [bx1, by1, bx2, by2] = input[1].split(' ').map(Number);
let [mx1, my1, mx2, my2] = input[2].split(' ').map(Number);

// 각 직사각형의 넓이를 계산
const areaA = (ax2 - ax1) * (ay2 - ay1);
const areaB = (bx2 - bx1) * (by2 - by1);

// 사각형 A와 M이 겹치는 부분의 넓이 계산
const overlapA = Math.max(0, Math.min(ax2, mx2) - Math.max(ax1, mx1)) * 
                 Math.max(0, Math.min(ay2, my2) - Math.max(ay1, my1));

// 사각형 B와 M이 겹치는 부분의 넓이 계산
const overlapB = Math.max(0, Math.min(bx2, mx2) - Math.max(bx1, mx1)) * 
                 Math.max(0, Math.min(by2, my2) - Math.max(by1, my1));

// 덮이지 않은 면적 계산
const remainingArea = (areaA - overlapA) + (areaB - overlapB);

console.log(remainingArea);