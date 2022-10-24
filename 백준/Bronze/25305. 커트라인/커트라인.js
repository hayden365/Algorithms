const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filepath)
  .toString()
  .trim()
  .split('\n');

const arr = input[1];
const arrSplit = arr.split(' ');
arrSplit.sort((a, b) => b - a);
const k = input[0];
const kSplit = k.split(' ');
console.log(arrSplit[kSplit[1] - 1]);
