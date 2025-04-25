function solution(arr, queries) {
    let answer = arr;
    let num = 0;
    let num2 = 0;
    for (let i = 0; i< queries.length; i++){
        num = queries[i][0];
        num2 = queries[i][1];
        [arr[num], arr[num2]] = [arr[num2], arr[num]]
    }
    return answer;
}