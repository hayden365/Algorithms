const filepath =
  process.platform === 'linux' ? '/dev/stdin' : '이진 탐색/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const firstRow = input.shift();
const [n, C] = firstRow.split(' ').map((v) => +v);
const inputN = input.map((v) => +v).sort((a, b) => a - b);

let answer = 0;
let left = 1;
let right = inputN[inputN.length - 1] - inputN[0];

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let value = inputN[0];
  let cnt = 1;
  for (let i = 1; i < inputN.length; i++) {
    if (inputN[i] >= mid + value) {
      value = inputN[i];
      cnt += 1;
    }
  }
  if (cnt >= C) {
    left = mid + 1;
    answer = mid;
  } else right = mid - 1;
}
console.log(answer);