const filepath = process.platform === 'linux' ? '/dev/stdin' : '백트래킹/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split(' ');

const [n, m] = input.map(Number);

const solution = (n, m) => {
	let answer = [];
	let temp = [];
	let ch = new Array(n + 1).fill(0);
	const DFS = (idx, L) => {
		if (L === m) {
			answer.push(temp.slice());
		} else {
			for (let i = idx; i <= n; i++) {
				if (ch[i] === 0) {
					temp.push(i);
					ch[i] = 1;
					DFS(i, L + 1);
					temp.pop();
					ch[i] = 0;
				}
			}
		}
	};
	DFS(1, 0);
	return answer.join('\n').split(',').join(' ');
};

console.log(solution(n, m));