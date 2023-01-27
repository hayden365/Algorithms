function solution(ingredient) {
    var answer = 0;
    const stack = [];
    for (const i of ingredient){
        stack.push(i)
        if(stack.length >=4 && i===1){
            let bugger = stack.slice(stack.length-4, stack.length).join('')

            if(bugger === '1231'){
                answer +=1;
                stack.splice(stack.length-4, stack.length);
            }
        }
    }
        
    return answer;
}