const filepath = process.platform === 'linux' ? '/dev/stdin' : '백트래킹/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split(' ');

const [n, m] = input.map(Number);
const solution = (n, m) => {
	let answer = [];
	let tmp = [];
	let ch = new Array(n + 1).fill(0);
	function DFS(L) {
		if (L === m) {
			answer.push(tmp.slice());
		} else {
			for (let i = 1; i <= n; i++) {
				if (ch[i] === 0) {
					tmp.push(i);
					ch[i] = 1;
					DFS(L + 1);
					tmp.pop();
					ch[i] = 0;
				}
			}
		}
	}
	DFS(0);
	return answer.join('\n').split(',').join(' ');
};
console.log(solution(n, m));