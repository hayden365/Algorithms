function solution(n, lost, reserve) {
    //여벌 체육복을 가져온 학생이 도난당한경우, 제외
    let realLost=lost.filter((l)=>!reserve.includes(l));
    let realReserve=reserve.filter((r)=>!lost.includes(r));
    var answer = 0;
    answer = n - realLost.length;
    realLost.sort((a,b) => a-b)
    realReserve.sort((a,b)=>a-b)
    for(let r = 0; r < realReserve.length; r++){
        for(let i = 0; i< realLost.length; i++){
            if(realLost[i] === realReserve[r]-1 || realLost[i] === realReserve[r]+1){
                answer += 1;
                realReserve.shift();
            }
        }
    }
    return answer;
}