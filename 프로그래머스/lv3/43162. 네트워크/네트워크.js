function solution(n, computers) {
    let ch = Array(n).fill(0);
    var answer = 0;
    function DFS(v){
        for(let i=0; i<n; i++){
            if(ch[i] === 0 && computers[v][i]===1){
                ch[i] = 1;
                DFS(i)
            }
        }
    }
    for(let i = 0; i < n; i++){
        if(ch[i] === 0){
            console.log(ch)
            answer += 1;
            ch[i] = 1;
            DFS(i)
        }
    }

    return answer;
}
