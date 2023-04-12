function solution(s) {
    let answer = [];
    let arr = s.split(' ');
    for(let i of arr){
        let numberArr = i.split('')
        let piece = '';
        for(let x = 0; x < numberArr.length; x++){
            if(x % 2 === 0){
                piece+=(numberArr[x].toUpperCase())
            }
            else if(x % 2 === 1){
                piece+=(numberArr[x].toLowerCase())
            }
        } answer.push(piece)
    }
    return answer.join(' ');
}