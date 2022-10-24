const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filepath)
  .toString()
  .trim()
  .split('\n');

let answer = [];
input.shift();

const toNum = input.map((i) => Number(i));
const avg = toNum.reduce((a, b) => a + b, 0);
answer.push(Math.round(avg / input.length));

const midNum = toNum.sort((a, b) => a - b);
const mid = Math.floor(input.length / 2);
answer.push(midNum[mid]);

let map = {};
let array = [];

let N = Number(input.shift());
for (let num of midNum) {
  if (map[num]) map[num] = map[num] + 1;
  else map[num] = 1;
}
let mostFrequency = Math.max(...Object.values(map));
for (let key in map) {
  if (map[key] === mostFrequency) array.push(key);
}
if (array.length > 1) {
  array = array.sort((a, b) => a - b);
  answer.push(array[1]);
} else answer.push((most = array[0]));

const max = Math.max.apply(null, toNum);
const min = Math.min.apply(null, toNum);
answer.push(max - min);

console.log(answer.join('\n'));
