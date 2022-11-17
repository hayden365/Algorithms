const filepath = process.platform === 'linux' ? '/dev/stdin' : '탐색/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let string = input[0];
let findString = input[1];

let index = 0;
let result = 0;

while (string.length - index >= findString.length) {
  if (string.slice(index, index + findString.length) === findString) {
    result++;
    index += findString.length;
  } else index++;
}

console.log(result);
