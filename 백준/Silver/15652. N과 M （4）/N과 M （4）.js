const filepath = process.platform === 'linux' ? '/dev/stdin' : '백트래킹/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split(' ');
const [n, m] = input.map(Number);

const solution = (n, m) => {
	let answer = [];
	let tmp = [];
	const DFS = (idx, L) => {
		if (L === m) {
			answer.push(tmp.slice());
		} else {
			for (let i = idx; i <= n; i++) {
				tmp.push(i);
				DFS(i, L + 1);
				tmp.pop(i);
			}
		}
	};
	DFS(1, 0);
	return answer.join('\n').split(',').join(' ');
};

console.log(solution(n, m));