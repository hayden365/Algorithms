const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filepath)
  .toString()
  .trim()
  .split('\n');

let answer = [];
let str = input.join('');
let strsplit = str.split('');
for (let i = 9; i > -1; i--) {
  for (let j of strsplit) {
    if (i == j) {
      answer.push(i);
    }
  }
}
let re = answer.join('');
console.log(re);

