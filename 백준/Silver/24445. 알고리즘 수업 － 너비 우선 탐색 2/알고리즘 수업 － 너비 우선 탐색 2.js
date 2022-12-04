const filepath = process.platform === 'linux' ? '/dev/stdin' : '그래프 순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let [point, line, start] = input.shift().split(' ').map(Number);
const edge = input.slice(0).map(e => e.split(' ').map(Number));

function solution(n, edge) {
	let graph = Array.from(Array(n + 1), () => []);
	for (let [a, b] of edge) {
		graph[a].push(b);
		graph[b].push(a);
	}
	graph.forEach(e => e.sort((a, b) => b - a));
	let ch = new Array(n + 1).fill(0);
	let answer = new Array(n).fill(0);
	let cnt = 1;

	function BFS(v) {
		let queue = [];
		queue.push(v);
		ch[v] = cnt++;
		while (queue.length) {
			let node = queue.shift();
			for (let nv of graph[node]) {
				if (!ch[nv]) {
					ch[nv] = cnt++;
					queue.push(nv);
				}
			}
		}
	}
	BFS(start);
	ch.shift();
	return ch.join('\n');
}
console.log(solution(point, edge));