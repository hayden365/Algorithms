const filepath = process.platform === 'linux' ? '/dev/stdin' : '그래프 순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let [point, line, start] = input.shift().split(' ').map(Number);
const edge = input.slice(0).map(e => e.split(' ').map(Number));

function solution(n, edge) {
	let graph = Array.from(Array(n + 1), () => Array());
	for (let [a, b] of edge) {
		graph[a].push(b);
		graph[b].push(a);
	}
	let answer1 = [];
	let answer2 = [];
	let ch1 = Array(n + 1).fill(0);
	let ch2 = Array(n + 1).fill(0);

	function DFS(v) {
		graph.forEach(v => v.sort((a, b) => a - b));
		ch1[v] = 1;
		answer1.push(v);
		for (let nv of graph[v]) {
			if (ch1[nv] === 0) {
				ch1[nv] = 1;
				DFS(nv);
			}
		}
		return answer1.join(' ') + '\n';
	}

	function BFS(v) {
		graph.forEach(v => v.sort((a, b) => a - b));
		let queue = [];
		queue.push(v);
		answer2.push(v);
		while (queue.length) {
			let node = queue.shift();
			ch2[node] = 1;
			for (let nv of graph[node]) {
				if (ch2[nv] === 0) {
					ch2[nv] = 1;
					queue.push(nv);
					answer2.push(nv);
				}
			}
		}
		return answer2.join(' ');
	}
	return DFS(start) + BFS(start);
}

console.log(solution(point, edge));