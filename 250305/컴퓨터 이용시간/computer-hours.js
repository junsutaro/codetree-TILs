const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
segments = [];
let idx = 0;
input.slice(1).map(line => {
    const [s, e] = line.split(' ').map(Number);
    idx += 1;
    segments.push([s, 1, idx])
    segments.push([e, -1, idx])
});

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this._heappfyUp();
    }

    pop() {
        if ( this.heap.length === 1 ) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    _heappfyUp() {
        let index = this.heap.length - 1;
        while ( index > 0 ) {
            let parent = Math.floor((index - 1) / 2);
            if ( this.heap[parent] <= this.heap[index] ) break;
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]] 
            index = parent;
        }
    }

    _heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        while ( true ) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if ( left < length && this.heap[smallest] > this.heap[left] ) smallest = left
            if ( right < length && this.heap[smallest] > this.heap[right] ) smallest = right
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }   
    }
}


// Please write your code here.

segments.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
let minHeap = new MinHeap();
for ( let i = n ; i >= 1; i -- ) {
     minHeap.push(i);
}

const ans = Array(n+1).fill(0);
for ( const [time, sign, num] of segments ) {
    if ( sign === 1 ) {
        let temp = minHeap.pop();
        ans[num] = temp;
    } else {
        minHeap.push(ans[num]);
    }
}

console.log(ans.slice(1).join(' '));