const filepath = process.platform === 'linux' ? '/dev/stdin' : '탐색/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let n = Number(input);
let result = 0;
let k = 1;

while (n !== 0) {
  if (k > n) {
    k = 1;
  }
  n -= k;
  k += 1;
  result += 1;
}
console.log(result);
