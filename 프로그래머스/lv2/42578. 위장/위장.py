def solution(clothes):
    answer = 1
    c = {}
    
    for i in clothes:
        if i[1] in c.keys():
            c[i[1]].append(i[0])
        else :
            c[i[1]] = [i[0]]
    print(c)
    
    for value in c.values():
        answer *= len(value) + 1
    
    return answer-1