const filepath = process.platform === 'linux' ? '/dev/stdin' : '그래프 순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const TC = +input.shift();
const map = [];
let data = input;
for (let i = 0; i < TC; i++) {
	let [m, n, k] = input.shift().split(' ').map(Number);
	let edge = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
	for (let i = 0; i < k; i++) {
		let [x, y] = [+input[i].split(' ')[0], +input[i].split(' ')[1]];
		edge[y][x] = 1;
	}
	map.push(edge);
	data.splice(0, k);
}

function solution(arr) {
	const visited = {};
	let answer = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[0].length; j++) {
			if (arr[i][j] === 1 && !visited[[i, j]]) {
				bfs(i, j);
			}
		}
	}
	function bfs(x, y) {
		const queue = [[x, y]];
		const result = [];
		visited[[x, y]] = true;

		let dx = [0, 0, -1, 1];
		let dy = [-1, 1, 0, 0];

		while (queue.length) {
			for (let i = 0; i < queue.length; i++) {
				const coords = queue.shift();
				if (!visited[[coords[0], coords[1]]]) continue;
				result.push(coords);
				for (let j = 0; j < 4; j++) {
					let nx = coords[0] + dx[j];
					let ny = coords[1] + dy[j];
					if (nx >= 0 && ny >= 0 && nx < arr.length && ny < arr[0].length && arr[nx][ny] === 1 && !visited[[nx, ny]]) {
						visited[[nx, ny]] = true;
						queue.push([nx, ny]);
					}
				}
			}
		}
		answer++;
	}
	return answer;
}

map.forEach(e => {
	console.log(solution(e));
});