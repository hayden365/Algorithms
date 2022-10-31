const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input.shift();
input = input.join('').split(' ').map(Number);
const arr = [...new Set(input)].sort((a, b) => a - b);

let map = new Map();
[...new Set(arr)].forEach((key, value) => {
  map.set(key, value);
});
let answer = '';
input.forEach((key, value) => {
  answer += map.get(key) + ' ';
});

console.log(answer);