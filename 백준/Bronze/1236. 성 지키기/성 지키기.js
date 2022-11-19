const filepath = process.platform === 'linux' ? '/dev/stdin' : '탐색/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');
const firstRow = input[0].split(' ');
const ROW = Number(firstRow[0]);
const COLUMN = Number(firstRow[1]);
input.shift();

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split('');
}

let row = new Array(ROW).fill(0);
let column = new Array(COLUMN).fill(0);

for (let i = 0; i < ROW; i++) {
  for (let j = 0; j < COLUMN; j++) {
    if (input[i][j] === 'X') {
      row[i] += 1;
      column[j] += 1;
    }
  }
}

let row_count = 0;
for (let i = 0; i < row.length; i++) {
  if (row[i] === 0) {
    row_count += 1;
  }
}

let column_count = 0;
for (let j = 0; j < column.length; j++) {
  if (column[j] === 0) {
    column_count += 1;
  }
}

console.log(Math.max(row_count, column_count));