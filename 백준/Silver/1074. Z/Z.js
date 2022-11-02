const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split(' ');

let N = Number(input[0]);
let r = Number(input[1]);
let c = Number(input[2]);

let res = 0;
const divide = (row, col, size) => {
  if (row === r && col === c) {
    console.log(res);
    return;
  }
  if (r >= row && r < row + size && c >= col && c < col + size) {
    size = parseInt(size / 2);
    divide(row, col, size);
    divide(row, col + size, size);
    divide(row + size, col, size);
    divide(row + size, col + size, size);
  } else res += size * size;
};

divide(0, 0, Math.pow(2, N));