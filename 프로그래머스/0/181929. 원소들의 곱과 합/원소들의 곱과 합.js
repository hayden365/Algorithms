function solution(num_list) {
    let multiply = 1;
    let sumSquare = 0;
    const iterator = num_list.values();
    for (const value of iterator){
        multiply*=value
        sumSquare+=value    
    }
    sumSquare *= sumSquare
    return multiply < sumSquare ? 1 : 0;
}