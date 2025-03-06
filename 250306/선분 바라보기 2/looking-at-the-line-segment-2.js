const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = parseInt(input[0].trim());
const segments = [];
for (let i = 1; i <= n; i++) {
  const [y, x1, x2] = input[i].trim().split(" ").map(Number);
  segments.push([y, x1, x2]);
}

const visible = new Array(n).fill(false);
const points = [];
for (let i = 0; i < n; i++) {
  const [y, x1, x2] = segments[i];
  points.push([x1, +1, i, y]);
  points.push([x2, -1, i, y]);
}

points.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0];
  return b[1] - a[1];
});

class SortedSet {
  constructor() {
    this.data = [];
  }
  binarySearch(element) {
    let lo = 0, hi = this.data.length;
    while (lo < hi) {
      let mid = Math.floor((lo + hi) / 2);
      const cmp = SortedSet.compare(this.data[mid], element);
      if (cmp < 0) lo = mid + 1;
      else hi = mid;
    }
    return lo;
  }
  static compare(a, b) {
    if (a[0] !== b[0]) return a[0] - b[0];
    return a[1] - b[1];
  }
  add(element) {
    const idx = this.binarySearch(element);
    if (idx < this.data.length && SortedSet.compare(this.data[idx], element) === 0) return;
    this.data.splice(idx, 0, element);
  }
  remove(element) {
    const idx = this.binarySearch(element);
    if (idx < this.data.length && SortedSet.compare(this.data[idx], element) === 0) {
      this.data.splice(idx, 1);
    }
  }
  first() {
    return this.data[0];
  }
  isEmpty() {
    return this.data.length === 0;
  }
}

const segs = new SortedSet();

for (const [x, type, index, y] of points) {
  if (type === +1) {
    segs.add([y, index]);
  } else {
    segs.remove([y, index]);
  }

  if (!segs.isEmpty()) {
    const [minY, targetIndex] = segs.first();
    visible[targetIndex] = true;
  }
}

let ans = visible.filter(v => v).length;
console.log(ans);
