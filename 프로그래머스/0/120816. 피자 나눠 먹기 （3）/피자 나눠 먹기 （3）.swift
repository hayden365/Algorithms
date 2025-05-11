import Foundation

func solution(_ slice:Int, _ n:Int) -> Int {
    // n / slice를 하고, 몫이 result, 나머지가 있으면, result += 1
    // slice가 사람명수보다 작으면, 여러판을 시켜야됨. 몇판 ? 
    // slice가 n보다 크면, 1판.
    var result = 1
    if slice < n {
        result = (n + slice - 1) / slice
    }
    return result
}