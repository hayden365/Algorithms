const filepath = process.platform === 'linux' ? '/dev/stdin' : '그래프 순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

function solution(input) {
	const [m, n] = input[0].split(' ').map(Number);
	const box = [];
	const queue = [];
	for (let i = 1; i <= n; i++) {
		const arr = input[i].split(' ').map(Number);
		box.push(arr);
		let idx = -1;
		while (true) {
			idx = arr.indexOf(1, idx + 1);
			if (idx === -1) break;
			queue.push([i - 1, idx]);
		}
	}

	let day = 0;
	function bfs() {
		const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let prevIdx = 0;
    while (true) {
      const curIdx = queue.length;
			let change = 0;
			for (let i = prevIdx; i < curIdx; i++) {
				const [x, y] = queue[i]
				for (let i = 0; i < 4; i++) {
					const [nx, ny] = [x + dx[i], y + dy[i]];
					if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
					if (!box[nx][ny]) {
						change = 1;
						box[nx][ny] = day + 1;
						queue.push([nx, ny]);
					}
				}
			}
			if (!change) break;
      day++;
      prevIdx = curIdx;
		}
	}
	bfs();

	for (let i = 0; i < n; i++) {
		if (box[i].includes(0)) {
			return -1;
		}
	}
	return day;
}

console.log(solution(input));