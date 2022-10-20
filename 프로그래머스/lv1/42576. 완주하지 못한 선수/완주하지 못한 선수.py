def solution(participant, completion):
    answer = ''
    
    pa = dict.fromkeys(participant,0)
    for i in participant:
        if i in pa.keys() :
            pa[i]+=1
    for i in completion:
        if i in pa.keys() :
            pa[i]-=1
    k = {v:k for k,v in pa.items()}
    return k.get(1)
            