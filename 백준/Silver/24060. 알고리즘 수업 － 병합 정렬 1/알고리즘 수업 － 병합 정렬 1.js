const filepath = process.platform === 'linux' ? '/dev/stdin' : '재귀/input.txt';
let input = require('fs')
  .readFileSync(filepath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map((v) => +v));

const [[n, k], arrRow] = input;

let count = 0;
let save;

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.ceil(array.length / 2);

  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
  //병합
}

function merge(left, right) {
  let resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
    count++;
    if (count === k) save = resultArray[resultArray.length - 1];
  }
  while (leftIndex < left.length) {
    resultArray.push(left[leftIndex]);
    leftIndex++;
    count++;
    if (count === k) save = resultArray[resultArray.length - 1];
  }
  while (rightIndex < right.length) {
    resultArray.push(right[rightIndex]);
    rightIndex++;
    count++;
    if (count === k) save = resultArray[resultArray.length - 1];
  }
  return resultArray;
}

mergeSort(arrRow);
if (count < k) save = -1;
console.log(save);