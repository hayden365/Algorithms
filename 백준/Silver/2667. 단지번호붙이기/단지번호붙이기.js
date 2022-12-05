const filepath = process.platform === 'linux' ? '/dev/stdin' : '그래프 순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

let n = input.shift();
const edge = input.map(e => e.split('').map(Number));

function solution(n, board) {
	let cnt = 1;
	let answer = [];
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];
	function DFS(x, y) {
		for (let k = 0; k <= 3; k++) {
			let nx = x + dx[k];
			let ny = y + dy[k];
			if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
				cnt += 1;
				board[nx][ny] = 0;
				DFS(nx, ny);
			}
		}
	}
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 1) {
				board[i][j] = 0;
				DFS(i, j);
				answer.push(cnt);
				cnt = 1;
			}
		}
	}
	answer.sort((a, b) => +a - +b);
	console.log(answer.length);
	answer.map(el => console.log(Number(el)));
	return answer;
}
solution(n, edge);