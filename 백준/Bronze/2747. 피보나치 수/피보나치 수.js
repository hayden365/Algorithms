const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filepath).toString().trim();

let fib = [0, 1];

for (let i = 2; i <= input; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}

console.log(fib[input]);
