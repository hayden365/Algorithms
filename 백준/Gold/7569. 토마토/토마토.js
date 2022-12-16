const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [M, N, H] = input[0].split(' ').map(v => +v);
const boxes = input.slice(1).reduce((acc, v, i) => {
  acc[Math.floor(i / N)].push(v.split(' ').map(v => +v));
  return acc;
}, [...Array(H)].map(() => []));
const offsetX = [-1, 1, 0, 0, 0, 0];
const offsetY = [0, 0, -1, 1, 0, 0];
const offsetZ = [0, 0, 0, 0, -1, 1];

class Node {
  constructor(x, y, z, count) {
    this.prev = null;
    this.next = null;
    this.x = x;
    this.y = y;
    this.z = z;
    this.count = count;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(x, y, z, count) {
    const node = new Node(x, y, z, count);
    if (!this.size) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      node.prev = this.rear;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    const node = this.front;
    if (this.size === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = node.next;
      this.front.prev = null;
    }
    this.size--;
    return node;
  }
}

const queue = new Queue();
let output = 0;
let zeroCount = 0;

for (let z = 0; z < H; z++) {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (boxes[z][y][x] === 1) {
        queue.enqueue(x, y, z, 0);
      } else if (boxes[z][y][x] === 0) {
        zeroCount++;
      }
    }
  }
}

while (queue.size) {
  const { x, y, z, count } = queue.dequeue();
  offsetZ.forEach((dz, i) => {
    const nx = x + offsetX[i];
    const ny = y + offsetY[i];
    const nz = z + dz;
    if (boxes[nz]?.[ny]?.[nx] === 0) {
      boxes[nz][ny][nx] = 1;
      queue.enqueue(nx, ny, nz, count + 1);
      zeroCount--;
      output = Math.max(output, count + 1);
    }
  });
}

if (zeroCount) {
  console.log(-1);
} else {
  console.log(output);
}