const filepath = process.platform === 'linux' ? '/dev/stdin' : '그리디 알고리즘/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input = input.join('').split('-');

let minus = [];
for (const i of input) {
	let cnt = 0;
	let num = i.split('+');
	for (const j of num) {
		cnt += +j;
	}
	minus.push(cnt);
}

let answer = minus[0];
for (let i = 1; i < minus.length; i++) {
	answer -= minus[i];
}
console.log(answer);