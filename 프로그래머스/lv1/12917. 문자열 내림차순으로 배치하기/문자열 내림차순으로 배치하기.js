function solution(s) {
    let answer = '';
    let arr = s.split('')
    answer = arr.sort().reverse().join('')
    return answer;
}