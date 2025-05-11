import Foundation

// 최소 공배수(lcm) 찾기
func solution(_ n:Int) -> Int {
    for i in stride(from: 6, through: 6 * n, by: 6) {
        if i % n == 0 {
            return i / 6
        }
    }
    return n
}