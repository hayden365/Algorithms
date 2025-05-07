import Foundation

func solution1(_ n:Int) -> Int {
    var answer = n / 7
    if 1...7 ~= n % 7 {
        answer += 1
    }
    return answer
}

func solution2(_ n: Int) -> Int {
    var answer = n / 7
    if (1...7).contains(n % 7) {
        answer += 1
    }
    return answer
}

func solution(_ n: Int) -> Int {
    return (n + 6) / 7
}