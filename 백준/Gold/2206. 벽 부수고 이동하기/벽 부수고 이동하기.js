const filepath = process.platform === 'linux' ? '/dev/stdin' : '그래프 순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(v => Number(v));
let visited = Array.from(Array(2), () => Array.from(Array(n), () => Array(m).fill(0)));

let graph = [];
for (let i = 1; i < input.length; i++) {
	let temp = input[i].split('').map(v => Number(v));
	graph.push(temp);
}

bfs();
if (visited[0][n - 1][m - 1] === 0 && visited[1][n - 1][m - 1] === 0) console.log(-1);
else if (visited[0][n - 1][m - 1] === 0) console.log(visited[1][n - 1][m - 1]);
else if (visited[1][n - 1][m - 1] === 0) console.log(visited[0][n - 1][m - 1]);
else console.log(Math.min(visited[0][n - 1][m - 1], visited[1][n - 1][m - 1]));

function bfs() {
	const dx = [-1, 0, 1, 0];
	const dy = [0, 1, 0, -1];
	let q = [[0, 0, 1]];
	visited[1][0][0] = 1;
	let idx = 0;
	while (q.length !== idx) {
		let [x, y, c] = q[idx];
		for (let i = 0; i < 4; i++) {
			let nx = x + dx[i];
			let ny = y + dy[i];
			if (0 > nx || nx >= n || 0 > ny || ny >= m) continue;
			if (graph[nx][ny] === 1 && c === 1) {
				visited[0][nx][ny] = visited[c][x][y] + 1;
				q.push([nx, ny, 0]);
			} else if (graph[nx][ny] === 0 && visited[c][nx][ny] === 0) {
				visited[c][nx][ny] = visited[c][x][y] + 1;
				q.push([nx, ny, c]);
			}
		}
		idx++;
	}
}