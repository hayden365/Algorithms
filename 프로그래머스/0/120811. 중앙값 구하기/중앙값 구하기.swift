import Foundation

func solution(_ array:[Int]) -> Int {
    let sortedArray = array.sorted()
    return sortedArray[array.count / 2]
}