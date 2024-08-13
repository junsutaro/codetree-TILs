const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const OFFSET = 1000;

[Ax1, Ay1, Ax2, Ay2] = input[0].split(' ').map(Number);
[Bx1, By1, Bx2, By2] = input[1].split(' ').map(Number);
[Mx1, My1, Mx2, My2] = input[2].split(' ').map(Number);

const Area_A = ( Ax2 - Ax1 ) * ( Ay2 - Ay1 );
const Area_B = ( Bx2 - Bx1 ) * ( By2 - By1 );

const Area_AandB = (Area_A + Area_B);

const Area_OverlapA = Math.max(0, (Math.min(Ax2, Mx2) - Math.max(Ax1, Mx1)) * 
                      Math.max(0, (Math.min(Ay2, My2)) - Math.max(Ay1, My1)))
const Area_OverlapB = Math.max(0, (Math.min(Bx2, Mx2) - Math.max(Bx1, Mx1)) * 
                      Math.max(0, (Math.min(By2, My2)) - Math.max(By1, My1))) 

const answer = Area_AandB - ( Area_OverlapA + Area_OverlapB );

console.log(answer)