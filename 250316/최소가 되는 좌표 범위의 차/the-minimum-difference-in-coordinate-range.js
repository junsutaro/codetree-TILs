const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, d] = input[0].split(" ").map(Number);
const points = [];
for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    points.push({ x, y });
}

class Heap {
    constructor(compare = (a, b) => a - b) {
        this.arr = [];
        this.compare = compare;
    }

    top() {
        return this.arr[0];
    }

    size() {
        return this.arr.length;
    }
    
    pop() {
        if ( this.arr.length === 0 ) { return undefined };
        if ( this.arr.length === 1 ) { return this.arr.pop() };
        const top = this.arr[0];
        this.arr[0] = this.arr.pop();
        this.shiftDown();
        return top
    }

    push(val) {
        this.arr.push(val);
        this.shiftUp();
    }

    shiftUp() {
        let idx = this.arr.length - 1;
        while ( idx > 0 ) {
            let parent = Math.floor((idx - 1) / 2);
            if ( this.compare(this.arr[parent], this.arr[idx]) > 0 ) {
                [this.arr[parent], this.arr[idx]] = [this.arr[idx], this.arr[parent]];
                idx = parent;
            } else {
                break;
            }
        }
    }

    shiftDown() {
        let idx = 0;
        while ( true ) {
            let left = idx * 2 + 1
            let right = idx * 2 + 2
            let smallest = idx;

            if ( left < this.arr.length && this.compare(this.arr[smallest], this.arr[left]) > 0 ) {
                smallest = left;
            }
            if ( right < this.arr.length && this.compare(this.arr[smallest], this.arr[right]) > 0 ) {
                smallest = right;
            }
            if ( smallest === idx)  {
                break;
            }
            [this.arr[idx], this.arr[smallest]] = [this.arr[smallest], this.arr[idx]];
            idx = smallest;
        }
    }
}


const counter = new Map();

function add(idx) {
    let key = points[idx].y;
    counter.set(key, (counter.get(key) || 0) + 1)
}

function del(idx) {
    let key = points[idx].y;
    if ( counter.get(key) === 1 ) {
        counter.delete(key)
    } else {
        counter.set(key, counter.get(key) - 1);
    }
}

function getValidTop(heap) {
    while (heap.size() > 0) {
        const val = heap.top();
        if ( counter.has(val) ) {
            return val;
        }
        heap.pop()
    }
}


// Please Write your code here.
points.sort((a, b) => a.x - b.x)
// console.log(points)

let j = 1;
const minHeap = new Heap();
const maxHeap = new Heap((a, b) => b - a);

maxHeap.push(points[0].y)
minHeap.push(points[0].y)
add(0);

let ans = Infinity; 
for ( let i = 0 ; i < n ; i ++ ) {
    while ( j < n && (getValidTop(maxHeap) - getValidTop(minHeap)) < d ) {
        add(j);
        minHeap.push(points[j].y)
        maxHeap.push(points[j].y)
        j += 1
    }
    // console.log(i, j);
    if (j > i + 1 && getValidTop(maxHeap) - getValidTop(minHeap) >= d) {
        ans = Math.min(ans, points[j-1].x - points[i].x)
    }
    del(i)
}

console.log(ans);