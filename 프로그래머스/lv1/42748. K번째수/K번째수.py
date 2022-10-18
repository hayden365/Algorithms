def solution(array, commands):
    answer = []
        
    for k in range(len(commands)) :
        li_1 = []
        for z in range(commands[k][0]-1, commands[k][1]):
            li_1.append(array[z])
        li_1.sort()
        answer.append(li_1[commands[k][2]-1])
    return answer