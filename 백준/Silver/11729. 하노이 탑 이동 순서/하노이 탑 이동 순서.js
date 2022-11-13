const filepath = process.platform === 'linux' ? '/dev/stdin' : '재귀/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim();

let count = 0;
let answer = [];

function solution(num, from, other, to) {
  if (num === 0) {
    return;
  } else {
    solution(num - 1, from, to, other);
    answer.push([from, to]);
    count++;
    solution(num - 1, other, from, to);
  }
}
solution(input, '1', '2', '3');
console.log(count);
console.log(answer.map((num) => num.join(' ')).join('\n'));
