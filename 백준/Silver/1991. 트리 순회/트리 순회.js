const filepath =
  process.platform === 'linux' ? '/dev/stdin' : '트리순회/input.txt';
let input = require('fs').readFileSync(filepath).toString().trim().split('\n');

input.shift();

const tree = {};

for (let i = 0; i < input.length; i++) {
  const [node, left, right] = input[i].split(' ');
  tree[node] = [left, right];
}
let data1 = '';
let data2 = '';
let data3 = '';

const curr = 'A';

function preOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  data1 += node;
  preOrder(left);
  preOrder(right);
  return data1;
}

function inOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  inOrder(left);
  data2 += node;
  inOrder(right);
  return data2;
}

function postOrder(node) {
  if (node === '.') return;
  const [left, right] = tree[node];
  postOrder(left);
  postOrder(right);
  data3 += node;
  return data3;
}
console.log(`${preOrder(curr)}\n${inOrder(curr)}\n${postOrder(curr)}`);
