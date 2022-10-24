const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filepath)
  .toString()
  .trim()
  .split('\n');

input.shift();
input.join('').split('\r');
input.sort((a, b) => a - b);
console.log(input.join('\n'));