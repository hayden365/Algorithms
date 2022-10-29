const filepath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input.shift();
const dicArr = input.sort();
dicArr.sort((a, b) => a.length - b.length);
let unique = [...new Set(dicArr)];
console.log(unique.join('\n'));