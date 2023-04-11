function solution(a, b) {
    let answer = '';
    let daySum = 0
    let day = [31,29,31,30,31,30,31,31,30,31,30,31]
    let DOW = ['THU','FRI','SAT','SUN','MON','TUE','WED']
    if(a > 1) {
    for(let i = 0; i < a-1; i++){
        daySum += day[i]
        }
    }

    
    return DOW[(daySum + b) % 7];
}