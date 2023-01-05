const filepath = process.platform === 'linux' ? '/dev/stdin' : '그리디 알고리즘/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

const n = input[0];
const len = input[1].split(' ').map(element => BigInt(element));
const cost = input[2].split(' ').map(element => BigInt(element));

let minCost = cost[0];
let answer = 0n;

for (let i = 0; i < n - 1; i++) {
	answer += minCost * len[i];
	if (minCost > cost[i + 1]) {
		minCost = cost[i + 1];
	}
}
console.log(String(answer));
