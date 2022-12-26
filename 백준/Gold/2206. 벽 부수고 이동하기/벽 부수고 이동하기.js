class Node {
  constructor(x, y, wall, time) {
    this.x = x;
    this.y = y;
    this.wall = wall;
    this.time = time;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  push(x, y, wall, time) {
    let node = new Node(x, y, wall, time);
    if (this.size === 0) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.size++;
  }
  shift() {
    let temp = this.head;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return temp;
  }
  length() {
    return this.size;
  }
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arr = input.map((i) => i.trim().split('').map(Number));
const visited = Array.from({ length: N }, () => Array.from({ length: M }, () => Array.from({ length: 2 }, () => false)));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let queue = new Queue();
queue.push(0, 0, true, 1);
let ans = -1;
while (queue.length()) {
  let cur = queue.shift();
  const [x, y, canBreak, time] = [cur.x, cur.y, cur.wall, cur.time];
  if (x === N - 1 && y === M - 1) {
    ans = time;
    break;
  }

  if (visited[x][y][canBreak]) continue;
  visited[x][y][canBreak] = true;

  for (let i = 0; i < 4; i++) {
    let [nx, ny, ntime, nextCanBreak] = [x + dx[i], y + dy[i], time + 1, canBreak];
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    if (arr[nx][ny]) {
      if (nextCanBreak) nextCanBreak = false;
      else continue;
    }
    queue.push(nx, ny, nextCanBreak, ntime);
  }
}
console.log(ans);