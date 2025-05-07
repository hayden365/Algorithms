import Foundation

func solution(_ n:Int) -> Int {
    var answer = n / 7
    if 1...7 ~= n % 7 {
        answer += 1
    }
    return answer
}