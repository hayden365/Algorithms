function solution(a, b) {
    var answer = 0;
    if(a === b){
        return a;
    }
    let small = 0;
    let big = 0;
    if(a<b){
        small = a;
        big = b;
    }else {small = b;
          big = a;}
    
    for(let i = small; i <= big; i++){
        answer = answer + i
    }
    return answer;
}