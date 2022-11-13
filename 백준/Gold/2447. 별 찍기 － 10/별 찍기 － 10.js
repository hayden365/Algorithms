const filepath = process.platform === 'linux' ? '/dev/stdin' : '재귀/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim();

let answer = [];

function answerStar(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      star(i, j, num);
    }
    answer.push('\n');
  }
}

function star(i, j, num) {
  if (i % 3 === 1 && j % 3 === 1) {
    answer.push(' ');
  } else {
    if (num === 1) {
      answer.push('*');
    } else {
      star(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }
  }
}

answerStar(input);
console.log(answer.join(''));