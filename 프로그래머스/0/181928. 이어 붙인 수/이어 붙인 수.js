function solution(num_list) {
    let evenSum = 0;
    let oddSum = 0;
    const evenArray = num_list.filter((even) => even % 2 == 0);
    const oddArray = num_list.filter((odd) => odd % 2 !== 0);
    evenArray.forEach((num) => evenSum += num.toString());
    oddArray.forEach((num) => oddSum += num.toString());
    
    return +evenSum + +oddSum;
}