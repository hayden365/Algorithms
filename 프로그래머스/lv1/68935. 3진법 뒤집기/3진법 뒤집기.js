function solution(n) {
    let answer = 0;
    const third = n.toString(3);
    
    const reverse = third.split('').reverse().join('');
    
    
    
    return Number.parseInt(reverse, 3) ;
}