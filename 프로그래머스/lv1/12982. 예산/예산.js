function solution(d, budget) {
    d.sort((a,b) => a-b);

    let sum = d.reduce((a,b) => a+b);

    if(sum > budget){
        if(d[0] > budget){
            return 0;
        }   
        d.pop();
        solution(d, budget)
        return d.length;
        }
    return d.length;
}