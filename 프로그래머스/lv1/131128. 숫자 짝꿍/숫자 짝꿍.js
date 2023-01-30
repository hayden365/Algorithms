function solution(X, Y) {
    const number = [];
    const obj = {};
    
    for (const el of X){
        obj[el] = (obj[el]||0)+1;
    }
    for (const el of Y){
        if(obj[el]){
            number.push(el);
            obj[el]--;
        }
    }
    number.sort((a,b)=>b-a);
    
    if(!number.length) return '-1';
    else if (number[0] === "0") return "0";
    
    return number.join("");
}