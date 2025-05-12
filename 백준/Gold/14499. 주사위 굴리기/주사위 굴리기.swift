import Foundation

let input = readLine()!.split(separator: " ").map { Int($0)! }
let (n, m, xStart, yStart, k) = (input[0], input[1], input[2], input[3], input[4])

var map = [[Int]]()
for _ in 0..<n {
    map.append(readLine()!.split(separator: " ").map { Int($0)! })
}
let commands = readLine()!.split(separator: " ").map { Int($0)! }

let dx = [0, 0, -1, 1]
let dy = [1, -1, 0, 0]

var dice = [0, 0, 0, 0, 0, 0]

var x = xStart
var y = yStart

for dir in commands {
    let nx = x + dx[dir - 1]
    let ny = y + dy[dir - 1]
    
    if nx < 0 || nx >= n || ny < 0 || ny >= m {
        continue
    }
    
    rotateDice(dir)
    
    if map[nx][ny] == 0 {
        map[nx][ny] = dice[5] // 바닥면 -> 지도
    } else {
        dice[5] = map[nx][ny]
        map[nx][ny] = 0
    }
    
    x = nx
    y = ny
    
    print(dice[0])
}

func rotateDice(_ dir: Int) {
    let (top, north, east, west, south, bottom) = (0, 1, 2, 3, 4, 5)
    var temp = dice
    
    switch dir {
    case 1: // 동
        dice[top] = temp[west]
        dice[west] = temp[bottom]
        dice[bottom] = temp[east]
        dice[east] = temp[top]
    case 2: // 서
        dice[top] = temp[east]
        dice[east] = temp[bottom]
        dice[bottom] = temp[west]
        dice[west] = temp[top]
    case 3: // 북
        dice[top] = temp[south]
        dice[south] = temp[bottom]
        dice[bottom] = temp[north]
        dice[north] = temp[top]
    case 4: // 남
        dice[top] = temp[north]
        dice[north] = temp[bottom]
        dice[bottom] = temp[south]
        dice[south] = temp[top]
    default:
        break
    }
}