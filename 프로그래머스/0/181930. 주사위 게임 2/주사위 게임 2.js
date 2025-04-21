function solution(a, b, c) {
    var answer = a+b+c;
    if(a==b || b==c || a==c){
        answer *= (a*a + b*b + c*c);
        if (a==b && a==c){
            answer *= (a**3 + b**3 + c**3)
        }
    } 
    return answer;
}