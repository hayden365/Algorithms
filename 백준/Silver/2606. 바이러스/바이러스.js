const filepath = process.platform === 'linux' ? '/dev/stdin' : '그래프 순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let num = input.shift();
input.shift();
const edge = input.slice(0).map(e => e.split(' ').map(Number));
function solution(n, edge) {
	let answer = -1;
	let graph = Array.from(Array(n + 1), () => Array());
	let ch = Array(n + 1).fill(0);
	for (let [a, b] of edge) {
		graph[a].push(b);
		graph[b].push(a);
	}
	function DFS(v) {
		answer++;
		for (let nv of graph[v]) {
			if (ch[nv] === 0) {
				ch[nv] = 1;
				DFS(nv);
			}
		}
	}
	ch[1] = 1;
	DFS(1);
	return answer;
}
console.log(solution(+num, edge));