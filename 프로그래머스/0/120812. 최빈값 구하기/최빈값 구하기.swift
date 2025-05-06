import Foundation

func solution(_ array: [Int]) -> Int {
	var frequency: [Int: Int] = [:]
    
    for number in array {
        frequency[number, default: 0] += 1
    }
    let maxCount = frequency.values.max() ?? 0
    
    let modes = frequency.filter { $0.value == maxCount }.map { $0.key }
    return modes.count == 1 ? modes[0] : -1
}