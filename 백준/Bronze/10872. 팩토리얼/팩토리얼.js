const filepath = process.platform === 'linux' ? '/dev/stdin' : '7490/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let nums = Number(input);

function solution(n) {
  if (n === 0) {
    return 1;
  }
  return n * solution(n - 1);
}

console.log(solution(nums));