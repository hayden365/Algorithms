const filepath = process.platform === 'linux' ? '/dev/stdin' : '그리디 알고리즘/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const coins = input.slice(0).map(Number);

let right = coins.length - 1;
let count = 0;
let sum = 0;
for (let i = right; i >= 0; i--) {
	let z = parseInt((k - sum) / coins[i]);
	sum += coins[i] * z;
	count += z;
	if (parseInt((k - sum) % coins[i]) === 0) break;
}
console.log(count);