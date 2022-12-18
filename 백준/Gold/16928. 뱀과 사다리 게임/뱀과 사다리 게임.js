const filepath = process.platform === 'linux' ? '/dev/stdin' : '그래프 순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

let board = new Array(101).fill(null).map((_, idx) => idx);
for (let i = 1; i <= n + m; i++) {
	let [from, to] = input[i].split(' ').map(Number);
	board[from] = to;
}

function solution(board) {
	let check = new Array(101).fill(-1);

	let queue = [];
	queue.push(1);
	check[1] = 0;

	while (queue.length !== 0) {
		let cur = queue.shift();

		for (let dice = 1; dice <= 6; dice++) {
			let next = cur + dice;

			if (next > 100) continue;

			next = board[next];
			if (check[next] === -1) {
				check[next] = check[cur] + 1;
				queue.push(next);
			}
		}
	}
	console.log(check[100]);
}

solution(board);