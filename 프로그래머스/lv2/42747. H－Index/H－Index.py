def solution(citations):
    answer = 0
    
    for h in range(max(citations)):
        b = []
        for i in citations :
            if i >= h :
                b.append(i)
        if len(b) >= h :
            answer = h
    return answer