const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filepath)
  .toString()
  .trim()
  .split('\n');

const toNum = (arr) => arr.map(Number);
input.sort((a,b)=>a-b);
const ninput = toNum(input);

const result = ninput.reduce(function add(sum, inputValue) {
  return sum + inputValue;
}, 0);

console.log(result / 5 + '\n' + ninput[2]);
