function solution(N, stages) {
    var answer = [];
    let s_len = stages.length;
    
    for(let i=1; i <= N+1 ; i++){
        let fail = stages.filter(ele => i === ele).length;
        let failPer = fail / s_len;
        answer.push([i, failPer]);
        s_len -= fail;
    }
    answer.pop();
    answer = answer.sort((a,b) => b[1] - a[1]);
    
    return answer.map(a=>a[0]);
}