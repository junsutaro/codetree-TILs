const fs = require('fs');
    const input = fs.readFileSync(0).toString().trim().split('\n');

    const n = Number(input[0]);
    const visited = {};

    let index = 0; 
    for (let i = 1; i <= n; i++) {

        const [x, dir] = input[i].split(' ');
        const dist = Number(x);

        const start = index;
        const end = dir === 'R' ? index + dist : index - dist;

        for (let j = Math.min(start, end); j < Math.max(start, end); j++) {
            visited[j] = (visited[j] || 0) + 1;
        }

        index = end;
        
        // console.log(visited)
    }

    let black = 0;
    let white = 0;
    let gray = 0;

    for (let key in visited) {
        if (visited[key] > 3) {
            gray += 1;
        }
        else {
            if ( key === '0' ) {
                if ( input[1].split(' ')[1] === 'R') {
                    if ( visited[key] % 2 === 0 ) {
                        white += 1
                    } else {
                        black += 1;
                    }
                } else {
                    if ( visited[key] % 2 === 0 ) {
                        black += 1
                    } else {
                        white += 1;
                    }                
                }
            } else if ( Number(key) > 0 ) {
                if (visited[key] % 2 === 0) {
                    white += 1;
                } else {
                    black += 1;
                }
            } else {
                if (visited[key] % 2 === 0) {
                    black += 1;
                } else {
                    white += 1;
                }

            }
        }
        // console.log(white, black, gray);

    }

    console.log(white, black, gray);