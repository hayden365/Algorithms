import Foundation

func getGCD(_ num1:Int, _ num2:Int) -> Int {
    return num2 == 0 ? num1 : getGCD(num2, num1 % num2)
}

func solution(_ numer1:Int, _ denom1:Int, _ numer2:Int, _ denom2:Int) -> [Int] {
    var numer = (numer1 * denom2) + (numer2 * denom1)
    var denom = denom1 * denom2
    let gcd = getGCD(numer, denom)
    return [numer / gcd, denom / gcd]
}