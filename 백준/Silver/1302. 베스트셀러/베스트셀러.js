const filepath = process.platform === 'linux' ? '/dev/stdin' : '탐색/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input.shift();

let books = {};

for (let book of input) {
  books[book] = (books[book] || 0) + 1;
}

const result = Object.entries(books).sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] > b[0] ? 1 : -1;
  }
  return b[1] > a[1] ? 1 : -1;
});
console.log(result[0][0]);