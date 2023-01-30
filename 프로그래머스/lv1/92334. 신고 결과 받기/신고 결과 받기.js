function solution(id_list, report, k) {
    const answer = new Array(id_list.length).fill(0);
    const reported = {};
    
    id_list.map((id)=>{
        reported[id] = []
    })
    
    report.map((user)=>{
        const [user_id, report_id] = user.split(' ');
        if(!reported[report_id].includes(user_id)){
            reported[report_id].push(user_id);
        }
    })
    
    for(const key in reported) {
        if(reported[key].length >= k){
            reported[key].map((user) => {
                answer[id_list.indexOf(user)] +=1;
            })
        }
    }
    
    return answer;
}