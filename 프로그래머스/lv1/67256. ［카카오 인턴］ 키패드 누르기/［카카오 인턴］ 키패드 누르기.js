function solution(numbers, hand) {
    var answer = '';
    let L = '*';
    let R = '#';
    
    const findKey = (key) => {
        let keypad = [[1,2,3],[4,5,6],[7,8,9],['*',0,'#']]
        for(let i = 0; i < 4; i++){
            for (let j = 0; j <3; j++){
                if(keypad[i][j] === key){
                    return [i,j]
                }
            }
        }
    }
    
    for(const i of numbers) {
        if (i===1 || i===4 || i===7) {
            answer += 'L';
            L = i;
        } else if (i===3 || i===6 || i===9){
            answer += 'R';
            R = i;
        } else if(i===2 || i===5 || i===8 || i===0){
            let l = findKey(L)
            let r = findKey(R)
            let find = findKey(i)
            let diffL = Math.abs(l[0]-find[0]) + Math.abs(l[1]-find[1])
            let diffR = Math.abs(r[0]-find[0]) + Math.abs(r[1]-find[1])
            if(diffL > diffR){
                answer += 'R';
                R = i;
            } else if (diffR - diffL > 0){
                answer += 'L';
                L = i;
            } else if (diffR - diffL === 0){
                hand === 'right' ? (answer += 'R',R = i) : (answer += 'L', L = i)
            }
        }
    }
    return answer;
}