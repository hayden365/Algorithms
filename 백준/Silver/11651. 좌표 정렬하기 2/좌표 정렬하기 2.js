const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input.shift();
const arr = input.map((i) => i.split(' ').map((nums) => parseInt(nums)));

let answer = '';
arr.sort((a, b) => {
  if (a[1] !== b[1]) {
    return a[1] - b[1];
  }
  return a[0] - b[0];
});
arr.forEach((i) => {
  answer += `${i[0]} ${i[1]}\n`;
});

console.log(answer);