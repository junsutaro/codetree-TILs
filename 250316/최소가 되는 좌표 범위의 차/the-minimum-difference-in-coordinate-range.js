const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, d] = input[0].split(" ").map(Number);
const points = [];
for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  points.push({ x, y });
}

points.sort((a, b) => a.x - b.x);

class Heap {
  constructor(compare = (a, b) => a - b) {
    this.arr = [];
    this.compare = compare;
  }

  top() {
    return this.arr[0];
  }

  pop() {
    if (this.arr.length === 0) return undefined;
    if (this.arr.length === 1) return this.arr.pop();
    const top = this.arr[0];
    this.arr[0] = this.arr.pop();
    this._heapifyDown();
    return top;
  }

  push(val) {
    this.arr.push(val);
    this._heapifyUp();
  }

  _heapifyUp() {
    let idx = this.arr.length - 1;
    while (idx > 0) {
      let parent = Math.floor((idx - 1) / 2);
      if (this.compare(this.arr[parent], this.arr[idx]) > 0) {
        [this.arr[parent], this.arr[idx]] = [this.arr[idx], this.arr[parent]];
        idx = parent;
      } else {
        break;
      }
    }
  }

  _heapifyDown() {
    let idx = 0;
    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let smallest = idx;
      if (left < this.arr.length && this.compare(this.arr[smallest], this.arr[left]) > 0) {
        smallest = left;
      }
      if (right < this.arr.length && this.compare(this.arr[smallest], this.arr[right]) > 0) {
        smallest = right;
      }
      if (smallest === idx) break;
      [this.arr[idx], this.arr[smallest]] = [this.arr[smallest], this.arr[idx]];
      idx = smallest;
    }
  }
}

const freq = new Map();

function inc(val) {
  freq.set(val, (freq.get(val) || 0) + 1);
}

function dec(val) {
  freq.set(val, freq.get(val) - 1);
  if (freq.get(val) === 0) {
    freq.delete(val);
  }
}

function getValidTop(heap) {
  while (heap.arr.length > 0) {
    const val = heap.top();
    if (freq.has(val) && freq.get(val) > 0) {
      return val;
    }
    heap.pop();
  }
  return undefined;
}

const minHeap = new Heap((a, b) => a - b);     
const maxHeap = new Heap((a, b) => b - a);    

let j = 0;
let ans = Infinity;

for (let i = 0; i < n; i++) {
  while (j < n) {
    const minVal = getValidTop(minHeap);
    const maxVal = getValidTop(maxHeap);

    if (
      minVal !== undefined &&
      maxVal !== undefined &&
      maxVal - minVal >= d
    ) {
      break;
    }

    const y = points[j].y;
    inc(y);
    minHeap.push(y);
    maxHeap.push(y);
    j++;
  }

  const currMin = getValidTop(minHeap);
  const currMax = getValidTop(maxHeap);
  if (
    currMin !== undefined &&
    currMax !== undefined &&
    currMax - currMin >= d
  ) {
    ans = Math.min(ans, points[j - 1].x - points[i].x);
  }

  const removeY = points[i].y;
  dec(removeY);
}

console.log(ans === Infinity ? -1 : ans);
