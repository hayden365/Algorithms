function solution(number) {
    var answer = 0;
    for(let i = 0; i < number.length-2; i++){
        for(let j=i+1; j < number.length-1; j++){
            for(let z=j+1; z < number.length; z++){
                if(number[i]+number[j]+number[z]===0) answer +=1;
            }
        }
    }
    return answer;
}