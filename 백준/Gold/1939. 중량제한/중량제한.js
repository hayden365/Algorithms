function insert() {
  const filepath =
    process.platform === 'linux' ? '/dev/stdin' : '이진 탐색/input.txt';
  let input = require('fs')
    .readFileSync(filepath)
    .toString()
    .trim()
    .split('\n');
  const [n, m] = input[0].split(' ').map((v) => +v);
  let city = new Array(n + 1).fill(null).map((_) => []);
  let max = 0;

  for (let i = 1; i <= m; i++) {
    let [from, to, weight] = input[i].split(' ').map(Number);
    if (weight > max) {
      max = weight;
    }
    city[from].push([to, weight]);
    city[to].push([from, weight]);
  }
  let [start, end] = input[m + 1].split(' ').map(Number);
  binarySearch(n, city, start, end, max);
}
insert();

function BFS(n, city, start, end, mid) {
  let visited = new Array(n + 1).fill(false);
  let q = [];
  q.push(start);
  while (q.length !== 0) {
    let cur = q.shift();
    visited[cur] = true;
    if (cur === end) return true;

    for (let i = 0; i < city[cur].length; i++) {
      let next = city[cur][i][0];
      let nextCost = city[cur][i][1];
      if (!visited[next] && mid <= nextCost) {
        visited[next] = true;
        q.push(next);
      }
    }
  }
  return false;
}
function binarySearch(n, city, start, end, max) {
  let left = 1;
  let right = max;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (BFS(n, city, start, end, mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(right);
}