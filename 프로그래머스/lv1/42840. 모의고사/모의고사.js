function solution(answers) {
    const a = [1,2,3,4,5];
    const b = [2,1,2,3,2,4,2,5];
    const c = [3,3,1,1,2,2,4,4,5,5];
    const result = [0,0,0]

    for(let i = 0; i< answers.length;i++){
        if(a[i%5] ===answers[i])result[0]++;
        if(b[i%8]===answers[i])result[1]++;
        if(c[i%10]===answers[i])result[2]++;
    }
    const answer = [];
    const max = Math.max(...result)
    let index = 0;
    for(let i = 0; i<3; i++){
        if(max === result[i]){
            answer[index] = i+1;
            index++;
        }
    }

    return answer;
}