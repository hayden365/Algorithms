const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const [M, N, H] = input.shift().split(' ').map(Number)
const tomatos = []
const ripeTomatosArr = []
const totalTomatos = N * M * H
let nRipe = 0
let nUnRipe = 0
let nEmpty = 0
//1. 3차원 배열만들기 접근 순서는 [H][N][M]
let slicer = 0
while (slicer < N * H) {
  tomatos.push(input.slice(slicer, slicer + N).map((str) => str.split(' ').map(Number)))
  slicer += N
}

//2. 익은 토마토 좌표 구하고, 안 익은 토마토 개수 구하기
for (let floor = 0; floor < H; floor++) {
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < M; col++) {
      const tomato = tomatos[floor][row][col]
      if (tomato === 1) {
        nRipe++
        ripeTomatosArr.push({ floor, row, col, day: 0 })
      } else if (tomato === 0) {
        nUnRipe++
      } else {
        nEmpty++
      }
    }
  }
}

const matrixValidator = (h, n, m) => {
  return 0 <= h && h < H && 0 <= n && n < N && 0 <= m && m < M
}

const solution = () => {
  //이미 익어있는 경우
  if (nRipe === totalTomatos) return 0
  //그렇지 않은 경우
  const dFloor = [1, -1, 0, 0, 0, 0]
  const dRow = [0, 0, 1, 0, -1, 0]
  const dCol = [0, 0, 0, 1, 0, -1]
  let pointer = 0
  let answer = 0
  while (pointer < ripeTomatosArr.length) {
    const { floor, row, col, day } = ripeTomatosArr[pointer]
    for (let i = 0; i < 6; i++) {
      const nextFloor = dFloor[i] + floor
      const nextRow = dRow[i] + row
      const nextCol = dCol[i] + col
      const nextDay = day + 1
      if (
        matrixValidator(nextFloor, nextRow, nextCol) &&
        tomatos[nextFloor][nextRow][nextCol] === 0
      ) {
        tomatos[nextFloor][nextRow][nextCol] = 1
        ripeTomatosArr.push({ floor: nextFloor, row: nextRow, col: nextCol, day: nextDay })
        nUnRipe--
        answer = Math.max(answer, nextDay)
      }
    }
    pointer++
  }
  //정답도출
  if (nUnRipe === 0) return answer
  return -1
}

console.log(solution())