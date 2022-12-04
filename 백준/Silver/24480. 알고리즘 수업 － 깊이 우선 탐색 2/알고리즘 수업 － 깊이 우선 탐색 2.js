const filepath = process.platform === 'linux' ? '/dev/stdin' : '그래프 순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let [point, line, start] = input.shift().split(' ').map(Number);
const edge = input.slice(0).map(e => e.split(' ').map(Number));

function solution(n, input) {
	let graph = Array.from(Array(n + 1), () => []);
	for (let [a, b] of input) {
		graph[a].push(b);
		graph[b].push(a);
	}
	graph.forEach(e => e.sort((a, b) => b - a));
	let ch = new Array(n + 1).fill(0);
	let answer = new Array(n).fill(0);
	let cnt = 1;
	function DFS(v) {
		ch[v] = 1;
		answer[v - 1] = cnt++;
		for (let nv of graph[v]) {
			if (ch[nv] === 0) {
				DFS(nv);
			}
		}
	}
	DFS(start);
	return answer.join('\n');
}
console.log(solution(+point, edge));