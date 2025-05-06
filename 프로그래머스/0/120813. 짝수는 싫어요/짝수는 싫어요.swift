import Foundation

func solution1(_ n: Int) -> [Int] {
    var result: [Int] = []
    for i in 1...n {
        if i % 2 == 1 {
            result.append(i)
        }
    }
    return result
}

func solution2(_ n: Int) -> [Int] {
    return (1...n).filter { $0 % 2 == 1 }
}

func solution(_ n:Int) -> [Int] {
    return Array(stride(from:1, through: n, by: 2))
}