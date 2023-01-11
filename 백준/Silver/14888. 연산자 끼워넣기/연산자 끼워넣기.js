const filepath = process.platform === 'linux' ? '/dev/stdin' : '백트래킹/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const N = input[0];
const arr = input[1].split(' ').map(Number);
const operator = input[2].split(' ').map(Number);

const solution = (N, arr, operator) => {
	const operObj = {
		0: (oper1, oper2) => oper1 + oper2,
		1: (oper1, oper2) => oper1 - oper2,
		2: (oper1, oper2) => oper1 * oper2,
		3: (oper1, oper2) => {
			if (oper1 < 0) {
				return -Math.floor(-oper1 / oper2);
			}
			return Math.floor(oper1 / oper2);
		},
	};

	const temp = [];
	let min = Number.MAX_SAFE_INTEGER;
	let max = Number.MIN_SAFE_INTEGER;
	const DFS = L => {
		if (L === N - 1) {
			let oper1 = arr[0];
			for (let i = 0; i < temp.length; i++) {
				let oper2 = arr[i + 1];
				let idx = temp[i];
				oper1 = operObj[idx](oper1, oper2);
			}
			if (oper1 > max) max = oper1;
			if (oper1 < min) min = oper1;
		}

		for (let i = 0; i < 4; i++) {
			if (!operator[i]) continue;
			operator[i] -= 1;
			temp.push(i);
			DFS(L + 1);
			operator[i] += 1;
			temp.pop();
		}
	};
	DFS(0);
	return `${max}\n${min}`;
};
console.log(solution(N, arr, operator));