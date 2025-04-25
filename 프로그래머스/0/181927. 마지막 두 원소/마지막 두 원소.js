function solution(num_list) {
    let last = num_list.at(-1);
    let second = num_list.at(-2);
    
    if(last > second){
        num_list.push(last - second)
    } else {
        num_list.push(last*2)
    }
    return num_list;
}