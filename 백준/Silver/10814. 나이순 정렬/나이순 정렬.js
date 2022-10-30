const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input.shift();
const arr = input.map((i) => i.split(' '));

let answer = '';
arr.sort((a, b) => {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});
arr.forEach((i) => {
  answer += `${i[0]} ${i[1]}\n`;
});
console.log(answer);
