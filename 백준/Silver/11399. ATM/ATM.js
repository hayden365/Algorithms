const filepath = process.platform === 'linux' ? '/dev/stdin' : '그리디 알고리즘/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [n, ...arr] = input;
const time = arr
	.join('')
	.split(' ')
	.map(Number)
	.sort((a, b) => {
		return a - b;
	});

let sum = 0;
let answer = 0;
time.forEach(element => {
	sum += element;
	answer += sum;
});
console.log(answer);