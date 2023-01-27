function solution(ingredient) {
    var answer = 0;
    const stack = [];
    for(let i of ingredient){
        stack.push(i)
        if(stack[stack.length-1]==1 &&
           stack[stack.length-2]==3 &&
           stack[stack.length-3]==2 &&
           stack[stack.length-4]==1){
            answer += 1;
            stack.splice(-4);
        }
    }

    return answer;
}